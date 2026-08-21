export default async function handler(req, res) {
  const { username, badge: badgeParam } = req.query;
  
  if (!username) {
    return res.redirect(302, '/');
  }

  const backendUrl = process.env.VITE_API_URL || 'https://adv-full-stack-backend.onrender.com';
  
  let userData = {
    username,
    avatar: 'https://www.advindiancoder.com/assets/og-image.png',
    bio: `${username}'s developer portfolio and coding profile on ADV Indian Coder.`,
    streak: 0,
    codingHours: 0,
    totalCompiles: 0
  };

  try {
    const response = await fetch(`${backendUrl}/api/public/profile/${encodeURIComponent(username)}`);
    if (response.ok) {
      const data = await response.json();
      userData = {
        username: data.username || username,
        avatar: data.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=ef4444&color=fff`,
        bio: data.bio && data.bio.trim().length > 0 ? data.bio.trim() : `Developer portfolio, skills, and coding journey on ADV Indian Coder.`,
        streak: data.streak || 0,
        codingHours: data.codingHours || 0,
        totalCompiles: data.totalCompiles || 0
      };
    }
  } catch (e) {
    console.error('Error fetching profile for OG:', e);
  }

  // Format badge title if badge parameter is present
  const badgeMap = {
    'day-1-pioneer': 'Day 1 Pioneer',
    '10-day-code-warrior': '10-Day Code Warrior',
    '20-day-dedicated': '20-Day Dedicated Coder',
    '30-day-mastermind': '30-Day Mastermind',
    '40-day-champion': '40-Day Code Champion',
    '50-day-legend': '50-Day Code Legend',
    '100-day-centurion': '100-Day Centurion Coder',
    '150-day-titan': '150-Day Coding Titan',
    '175-day-unstoppable': '175-Day Unstoppable',
    '365-day-grandmaster': '365-Day Immortal Grandmaster'
  };

  const badgeName = badgeParam && badgeMap[badgeParam] ? badgeMap[badgeParam] : null;

  let title = `${userData.username} - Overview | ADV Indian Coder`;
  let description = '';

  if (badgeName) {
    title = `🏆 ${userData.username} earned "${badgeName}" Badge on ADV Indian Coder`;
    description = `🎉 Official Milestone Achievement! ${userData.username} unlocked the ${badgeName} badge with a ${userData.streak}-Day Coding Streak and ${userData.totalCompiles} problems solved on ADV Indian Coder.`;
  } else {
    let descParts = [];
    if (userData.bio) descParts.push(userData.bio);
    if (userData.streak > 0) descParts.push(`🔥 ${userData.streak} Day Streak`);
    if (userData.codingHours > 0) descParts.push(`💻 ${userData.codingHours}h Coding`);
    if (userData.totalCompiles > 0) descParts.push(`🚀 ${userData.totalCompiles} Compiles`);
    description = descParts.join(' | ') || `${userData.username}'s developer profile on ADV Indian Coder`;
  }

  const profileUrl = badgeParam 
    ? `https://www.advindiancoder.com/u/${encodeURIComponent(userData.username)}?badge=${encodeURIComponent(badgeParam)}`
    : `https://www.advindiancoder.com/u/${encodeURIComponent(userData.username)}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta name="description" content="${description}" />
  
  <!-- Open Graph / WhatsApp / Facebook / LinkedIn Preview -->
  <meta property="og:type" content="profile" />
  <meta property="og:site_name" content="ADV Indian Coder" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${userData.avatar}" />
  <meta property="og:image:secure_url" content="${userData.avatar}" />
  <meta property="og:image:width" content="600" />
  <meta property="og:image:height" content="600" />
  <meta property="og:url" content="${profileUrl}" />

  <!-- Twitter / X Preview -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@advindiancoder" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${userData.avatar}" />

  <!-- Instant Browser Redirect for human users -->
  <meta http-equiv="refresh" content="0;url=/u/${encodeURIComponent(userData.username)}" />
  <script>window.location.replace("/u/${encodeURIComponent(userData.username)}");</script>
</head>
<body style="font-family: system-ui, sans-serif; background: #0c1222; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
  <div style="text-align: center; max-width: 500px; padding: 24px;">
    <img src="${userData.avatar}" alt="${userData.username}" style="width: 96px; height: 96px; border-radius: 50%; border: 3px solid #ef4444; margin-bottom: 16px; object-fit: cover;" />
    <h2>${userData.username}</h2>
    ${badgeName ? `<p style="color: #fbbf24; font-weight: bold;">🏆 ${badgeName} Badge</p>` : ''}
    <p style="color: #94a3b8; font-size: 14px;">${description}</p>
    <p style="color: #64748b; font-size: 12px; margin-top: 16px;">Redirecting to verified developer profile...</p>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).send(html);
}