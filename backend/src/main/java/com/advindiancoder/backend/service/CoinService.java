package com.advindiancoder.backend.service;

import com.advindiancoder.backend.entity.User;
import com.advindiancoder.backend.repository.RewardOrderRepository;
import com.advindiancoder.backend.repository.UserCheckinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Single source of truth for ADV coin balance calculations.
 * All logic lives here — never on the frontend.
 */
@Service
public class CoinService {

    @Autowired
    private UserCheckinRepository userCheckinRepository;

    @Autowired
    private RewardOrderRepository rewardOrderRepository;

    public static class CoinBalance {
        public final int totalCoinsEarned;
        public final int spentCoins;
        public final int availableCoins;
        public final int badgesCount;
        public final boolean allTenCompleted;

        public CoinBalance(int totalCoinsEarned, int spentCoins, int badgesCount, boolean allTenCompleted) {
            this.totalCoinsEarned = totalCoinsEarned;
            this.spentCoins = spentCoins;
            this.availableCoins = Math.max(0, totalCoinsEarned - spentCoins);
            this.badgesCount = badgesCount;
            this.allTenCompleted = allTenCompleted;
        }
    }

    /**
     * Calculates the full authoritative coin balance for a user.
     * Mirrors the same logic as the frontend calculateUserCoins() but runs server-side.
     */
    public CoinBalance calculateBalance(User user) {
        int streak = user.getStreak();
        int successfulCompiles = user.getSuccessfulCompiles();
        int potdSolves = user.getPotdSolves();

        // Fetch DB-persisted check-in coins (daily + secret box)
        int dailyCheckinCoins = userCheckinRepository.sumCoinsByEmailAndType(user.getEmail(), "DAILY");
        int secretBoxCoins    = userCheckinRepository.sumCoinsByEmailAndType(user.getEmail(), "SECRET_BOX");

        // Fetch total coins spent on orders
        int spentCoins = rewardOrderRepository.findByUserEmailOrderByCreatedAtDesc(user.getEmail())
                .stream().mapToInt(o -> o.getCoinCost()).sum();

        int coins = 0;
        int unlockedBadges = 0;

        // 1. Day-1 Pioneer Unlock
        if (streak >= 1 || successfulCompiles >= 1) {
            coins += 50;
            unlockedBadges += 1;
        }

        // 2. Daily Login Check-ins (1 coin/day) — from DB
        coins += dailyCheckinCoins;

        // 3. Secret Box — from DB
        coins += secretBoxCoins;

        // 4. Problem of the Day (10 coins per POTD solve)
        coins += potdSolves * 10;
        if (streak >= 25) coins += 25;
        if (streak >= 30) coins += 30;
        if (streak >= 30) coins += 50; // grand bonus

        // 5. Daily Streak Multiplier (+2 coins/day)
        if (streak > 0) coins += streak * 2;

        // 6. Milestone Badges
        int[][] milestones = {
            {10, 25}, {20, 50}, {30, 50}, {40, 50},
            {50, 75}, {100, 100}, {150, 150}, {175, 200}, {365, 500}
        };
        for (int[] m : milestones) {
            if (streak >= m[0]) {
                coins += m[1];
                unlockedBadges += 1;
            }
        }

        // 7. General Solved Problems (+2 coins per non-POTD compile)
        int nonPotdSolves = Math.max(0, successfulCompiles - potdSolves);
        coins += nonPotdSolves * 2;

        // 8. Grand All-10 Badges Bonus
        boolean allTenCompleted = unlockedBadges >= 10;
        if (allTenCompleted) coins += 500;

        return new CoinBalance(coins, spentCoins, unlockedBadges, allTenCompleted);
    }
}
