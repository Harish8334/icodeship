// hooks/useLenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // longer duration = smoother
      easing: (t) => t, // linear easing to avoid jerks with pinned elements
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional: reset scroll position on route change if needed
    // lenis.scrollTo(0);

    return () => {
      lenis.destroy();
    };
  }, []);
};
