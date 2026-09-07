import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation
 *
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the CSS class
 * `visible` is added — pairing with .reveal / .reveal-left /
 * .reveal-right / .reveal-scale from animations.css.
 *
 * @param {object} options
 * @param {number}  options.threshold  - 0–1, fraction visible before trigger (default 0.15)
 * @param {string}  options.rootMargin - rootMargin string (default '0px')
 * @param {boolean} options.once       - only trigger once (default true)
 */
const useScrollAnimation = ({
  threshold  = 0.15,
  rootMargin = '0px',
  once       = true,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
};

/**
 * useScrollAnimationAll
 *
 * Same as above but observes ALL elements matching `selector`
 * inside the container returned by `containerRef`.
 * Useful for staggered lists (skill badges, project cards…).
 *
 * @param {string}  selector - CSS selector for children (e.g. '.card')
 * @param {object}  options  - same as useScrollAnimation
 */
export const useScrollAnimationAll = (selector = '[data-animate]', {
  threshold  = 0.1,
  rootMargin = '0px',
  once       = true,
} = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, rootMargin, once]);

  return containerRef;
};

export default useScrollAnimation;
