import React from 'react';

interface SkeletonProps {
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
    return (
        <div className={`animate-pulse bg-gray-200 dark:bg-white/10 rounded-md ${className}`}></div>
    );
};

export const CardSkeleton: React.FC = () => {
    return (
        <div className="bg-white/5 dark:bg-black/20 border border-white/10 rounded-[2rem] p-6 overflow-hidden">
            <Skeleton className="h-48 w-full mb-6 rounded-2xl" />
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-6" />
            <div className="flex justify-between items-center">
                <Skeleton className="h-10 w-24 rounded-xl" />
                <Skeleton className="h-6 w-16 rounded-full" />
            </div>
        </div>
    );
};

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
    return (
        <div className="space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton 
                    key={i} 
                    className={`h-4 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} 
                />
            ))}
        </div>
    );
};
