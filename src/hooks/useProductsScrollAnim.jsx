import { useEffect } from 'react';

export default function useProductsScrollAnim() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return; // Respect user's preference

        const root = document.getElementById('products');
        if (!root) return;

        // Gather elements to animate without modifying markup
        const headerEls = Array.from(root.querySelectorAll('h2'));
        const card = Array.from(root.querySelectorAll('[style*="backdropFilter"], [style*="backdrop-filter"]'))[0] || null;
        const img = card ? card.querySelector('img') : null;
        const title = card ? card.querySelector('h3') : null;
        const desc = card ? card.querySelector('p') : null;
        const listItems = card ? Array.from(card.querySelectorAll('ul li')) : [];
        const actionArea = card ? card.querySelector('div[style*="marginTop: ' + 'auto' + '"]') : null; // approximate selector
        const buttons = root.querySelectorAll('button');

        const targets = [];
        targets.push(...headerEls);
        if (card) targets.push(card);
        if (img) targets.push(img);
        if (title) targets.push(title);
        if (desc) targets.push(desc);
        targets.push(...listItems);
        if (actionArea) targets.push(actionArea);
        // include visible buttons in the section (tabs / arrows) but avoid modal close buttons which aren't in #products
        buttons.forEach(b => { if (root.contains(b)) targets.push(b); });

        // Deduplicate
        const uniqueTargets = Array.from(new Set(targets)).filter(Boolean);

        // Set initial state
        uniqueTargets.forEach((el, i) => {
            el.classList.add('ps-anim');
            // Staggering via inline transitionDelay for subtle layered feel
            el.style.transitionDelay = `${i * 60}ms`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add('ps-inview');
                } else {
                    el.classList.remove('ps-inview');
                }
            });
        }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: [0, 0.12] });

        uniqueTargets.forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
            uniqueTargets.forEach(el => {
                el.classList.remove('ps-anim', 'ps-inview');
                el.style.transitionDelay = '';
            });
        };
    }, []);
}
