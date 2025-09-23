import { useState, useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: number;
  disabled?: boolean;
}

export const useParallax = <T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0, disabled = false } = options;
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<T>(null);
  const [elementTop, setElementTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (disabled) return;
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (elementRef.current) {
        setElementTop(elementRef.current.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial calculation
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [disabled]);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsVisible(rect.top < windowHeight && rect.bottom > 0);
    }
  }, [scrollY]);

  const transform = isVisible 
    ? `translateY(${(scrollY - elementTop + offset) * speed}px)` 
    : 'translateY(0px)';

  return { ref: elementRef, transform, isVisible };
};

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref: elementRef, isVisible };
};