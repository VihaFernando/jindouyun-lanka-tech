import { useEffect } from 'react';

export default function useGreenhouseScrollAnim() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return; // Respect user's motion preference

        const root = document.getElementById('greenhouse');
        if (!root) return;

        // Collect sensible targets without changing markup
        const headerEls = Array.from(root.querySelectorAll('h2, h1, h3'));
        const introParas = Array.from(root.querySelectorAll('p'));
        const cards = Array.from(root.querySelectorAll('.gh-card'));
        const animEnter = Array.from(root.querySelectorAll('.gh-anim-enter'));

        // Merge and dedupe
        const targets = Array.from(new Set([...headerEls, ...introParas, ...cards, ...animEnter]));

        // Set initial state and stagger delays
        targets.forEach((el, i) => {
            el.classList.add('gh-anim');
            el.style.transitionDelay = `${i * 60}ms`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add('gh-inview');
                } else {
                    el.classList.remove('gh-inview');
                }
            });
        }, { root: null, rootMargin: '0px 0px -12% 0px', threshold: [0, 0.12] });

        targets.forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
            targets.forEach(el => {
                el.classList.remove('gh-anim', 'gh-inview');
                el.style.transitionDelay = '';
            });
        };
    }, []);
}
