import { motion } from 'framer-motion';
import type { ComponentType, HTMLProps, PropsWithChildren, ButtonHTMLAttributes } from 'react';

interface MotionProps extends HTMLProps<HTMLElement> {
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
}

export const MotionDiv = motion.div as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionSection = motion.section as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionA = motion.a as ComponentType<PropsWithChildren<MotionProps & { href?: string }>>;
export const MotionP = motion.p as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH1 = motion.h1 as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH2 = motion.h2 as ComponentType<PropsWithChildren<MotionProps>>;
export const MotionH3 = motion.h3 as ComponentType<PropsWithChildren<MotionProps>>;;
export const MotionButton = motion.button as ComponentType<PropsWithChildren<MotionProps & ButtonHTMLAttributes<HTMLButtonElement>>>;