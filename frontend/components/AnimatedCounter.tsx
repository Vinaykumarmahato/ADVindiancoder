import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
    value: number | string;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const finalValue = parseInt(value.toString().replace(/,/g, ''), 10);

    useEffect(() => {
        let start = 0;
        const end = finalValue;
        if (start === end) return;

        const incrementTime = (duration * 1000) / end;
        const timer = setInterval(() => {
            start += Math.ceil(end / 200);
            if (start > end) start = end;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime > 1 ? incrementTime : 1);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
