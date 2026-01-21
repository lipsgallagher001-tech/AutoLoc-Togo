import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${!isVisible ? 'opacity-0' : ''} ${isVisible ? animationClass : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
