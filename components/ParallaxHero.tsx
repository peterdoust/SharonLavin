'use client';
import { useEffect } from 'react';

export default function ParallaxHero() {
  useEffect(() => {
    const hero = document.querySelector('.home-hero') as HTMLElement | null;
    if (!hero) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroBg = hero.querySelector('.hero-bg') as HTMLElement | null;
      if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `scale(${1 + scrolled * 0.0003}) translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
