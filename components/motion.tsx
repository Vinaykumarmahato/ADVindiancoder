import { motion } from 'framer-motion';
import type { ComponentType, PropsWithChildren } from 'react';

type MotionProps = {
    className?: string;
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    layout?: boolean;
    layoutId?: string;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    style?: React.CSSProperties;
    key?: string | number;
    href?: string;
};

export const MotionDiv = motion.div as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionSection = motion.section as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionA = motion.a as ComponentType<PropsWithChildren<MotionProps & { href?: string }>>;
export const MotionP = motion.p as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH1 = motion.h1 as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH2 = motion.h2 as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH3 = motion.h3 as ComponentType<PropsWithChildren<MotionProps>>;;