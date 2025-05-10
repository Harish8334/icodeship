import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export function Icon_slide_right({ icon, begin, finish }) {
  useGSAP(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (!isLargeScreen) return;

    gsap.to(icon, {
      x: 600,
      scrollTrigger: {
        trigger: ".icon_wrapper",
        start: `top ${begin}`,
        end: `top ${finish}`,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });
  });

  return null;
}
