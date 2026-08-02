import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface PracticeSubmission {
    id: number;
    email: string;
    problemSlug: string;
    language: string;
    code: string;
    success: boolean;
    timestamp: string;
}

interface ContributionGraphProps {
    submissions: PracticeSubmission[];
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ submissions }) => {
    // Generate the last 365 days of data
    const weeksToShow = 52;
    const daysInWeek = 7;
    
    const { calendarData, monthLabels, maxCount } = useMemo(() => {
        // Group submissions by YYYY-MM-DD
        const countsByDate: Record<string, number> = {};
        submissions.forEach(sub => {
            if (!sub.timestamp) return;
            const d = new Date(sub.timestamp);
            if (isNaN(d.getTime())) return;
            // Get local YYYY-MM-DD
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            countsByDate[dateStr] = (countsByDate[dateStr] || 0) + 1;
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Find the start date: (weeksToShow - 1) weeks ago, starting on Sunday
        const currentDayOfWeek = today.getDay(); // 0 is Sunday, 6 is Saturday
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - currentDayOfWeek - (weeksToShow - 1) * 7);

        const calendar = [];
        const mLabels = [];
        let maxC = 0;
        
        let lastMonth = -1;

        for (let week = 0; week < weeksToShow; week++) {
            const weekDays = [];
            for (let day = 0; day < daysInWeek; day++) {
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + (week * daysInWeek + day));
                
                // Track month changes for labels (only add label on the first week a month appears)
                if (day === 0) {
                    const currentMonth = currentDate.getMonth();
                    if (currentMonth !== lastMonth) {
                        mLabels.push({ label: currentDate.toLocaleString('default', { month: 'short' }), weekIndex: week });
                        lastMonth = currentMonth;
                    }
                }

                const y = currentDate.getFullYear();
                const m = String(currentDate.getMonth() + 1).padStart(2, '0');
                const d = String(currentDate.getDate()).padStart(2, '0');
                const dateStr = `${y}-${m}-${d}`;
                
                // We only show days up to today
                const isFuture = currentDate > today;
                
                const count = isFuture ? 0 : (countsByDate[dateStr] || 0);
                if (count > maxC) maxC = count;

                weekDays.push({
                    date: dateStr,
                    count,
                    isFuture,
                    displayDate: currentDate.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                });
            }
            calendar.push(weekDays);
        }

        return { calendarData: calendar, monthLabels: mLabels, maxCount: maxC };
    }, [submissions]);

    // Color intensity mapper based on Red/Orange theme
    const getColorClass = (count: number) => {
        if (count === 0) return 'bg-gray-200 dark:bg-white/5 border border-black/5 dark:border-white/5';
        if (count <= 2) return 'bg-orange-300 dark:bg-orange-500/40 border border-orange-400 dark:border-orange-500/30';
        if (count <= 5) return 'bg-orange-500 dark:bg-orange-500/80 border border-orange-600 dark:border-orange-500/50';
        if (count <= 9) return 'bg-red-500 dark:bg-red-500/90 border border-red-600 dark:border-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.4)]';
        return 'bg-red-600 dark:bg-red-600 border border-red-700 dark:border-red-600/50 shadow-[0_0_12px_rgba(220,38,38,0.6)]';
    };

    return (
        <div className="w-full bg-white dark:bg-[#0c1222] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                        <span>🔥</span> Submission Activity
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mt-1">
                        {submissions.length} submissions in the past year
                    </p>
                </div>
            </div>

            <div className="relative overflow-x-auto no-scrollbar pb-4 pt-12 -mt-12">
                <div className="min-w-max">
                    {/* Months Axis */}
                    <div className="flex text-[10px] font-bold text-gray-400 mb-2 ml-8 relative h-4">
                        {monthLabels.map((m, i) => (
                            <span 
                                key={i} 
                                className="absolute top-0 left-0" 
                                style={{ transform: `translateX(${m.weekIndex * 15}px)` }}
                            >
                                {m.label}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        {/* Days Axis */}
                        <div className="flex flex-col gap-[3px] text-[9px] font-bold text-gray-400 pr-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                                <span key={i} className="h-3 flex items-center">{day}</span>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[3px]">
                            {calendarData.map((week, wIdx) => (
                                <div key={wIdx} className="flex flex-col gap-[3px]">
                                    {week.map((day, dIdx) => (
                                        <div 
                                            key={`${wIdx}-${dIdx}`} 
                                            className="relative group"
                                        >
                                            <div 
                                                className={`w-3 h-3 rounded-[2px] transition-all duration-300 ${
                                                    day.isFuture 
                                                        ? 'bg-transparent border border-transparent' 
                                                        : getColorClass(day.count)
                                                } ${!day.isFuture ? 'hover:ring-1 ring-gray-400 dark:ring-white cursor-pointer hover:scale-110 z-10' : ''}`}
                                            />
                                            
                                            {/* Tooltip */}
                                            {!day.isFuture && (
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 text-white text-[10px] font-bold py-1.5 px-2.5 rounded-lg shadow-xl pointer-events-none whitespace-nowrap z-50 flex flex-col items-center">
                                                    <span className="text-gray-300 text-[9px] mb-0.5">{day.displayDate}</span>
                                                    <span>{day.count === 0 ? 'No submissions' : `${day.count} submissions`}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer & Legend */}
            <div className="flex items-center justify-between mt-4 border-t border-gray-100 dark:border-white/5 pt-4">
                <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-red-500 transition-colors">
                    Learn how we count contributions
                </a>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className={`w-2.5 h-2.5 rounded-[2px] ${getColorClass(0)}`} />
                        <div className={`w-2.5 h-2.5 rounded-[2px] ${getColorClass(1)}`} />
                        <div className={`w-2.5 h-2.5 rounded-[2px] ${getColorClass(4)}`} />
                        <div className={`w-2.5 h-2.5 rounded-[2px] ${getColorClass(7)}`} />
                        <div className={`w-2.5 h-2.5 rounded-[2px] ${getColorClass(10)}`} />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default ContributionGraph;
