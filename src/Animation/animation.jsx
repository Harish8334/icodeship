import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

// home page service card scroll animation

export const useScrollAnimation = () => {
  useGSAP(() => {
    const row = document.querySelector(".services_row");
    if (!row) return;

    const cards = gsap.utils.toArray(".service_card");
    const rowWidth = row.scrollWidth;
    const scrollAmount = rowWidth - window.innerWidth;

    const tween = gsap.to(row, {
      x: -scrollAmount,
      ease: "none",
      duration: 4,
    });

    ScrollTrigger.create({
      trigger: row,
      start: "top 20%",
      end: `+=${scrollAmount}`,
      pin: true,
      scrub: 1,
      animation: tween,
    });

    cards.forEach((card) => {
      const icon = card.querySelector(".icon-container");
      if (!icon) return;

      const calcDistance = () => {
        const cardWidth = card.offsetWidth;
        const iconWidth = icon.offsetWidth;
        const windowWidth = window.innerWidth;

        let marginRight;
        if (windowWidth <= 576) marginRight = cardWidth * -0.3;
        else if (windowWidth <= 992) marginRight = cardWidth * -0.4;
        else marginRight = cardWidth * -0.6;

        return cardWidth - iconWidth - marginRight;
      };

      let distance = calcDistance();

      window.addEventListener("resize", () => {
        distance = calcDistance();
        ScrollTrigger.refresh(); // important on resize
      });

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tween,
        start: "left center",
        end: "right center",
        onUpdate: (self) => {
          const xVal = self.progress >= 0.5 ? distance : 0;
          gsap.to(icon, {
            x: xVal,
            duration: 1.5,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });
    });

    // Ensure ScrollTrigger recalculates after all content is loaded
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);
};

// our work animation

export const animateWorkCard = (element) => {
  gsap.fromTo(
    element,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

// About page core Card animation
export const animateCoreCards = (cardsRef) => {
  if (!cardsRef.current) return;

  cardsRef.current.forEach((el, i) => {
    if (el) {
      gsap.fromTo(
        el,
        { y: 150 },
        {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            toggleActions: "play none none none",
          },
          
        }
      );
    }
  });
};

// Animate office card
export const animateOfficeCards = (cardsRef) => {
  if (!cardsRef || !cardsRef.current) return;

  cardsRef.current.forEach((el, i) => {
    if (el) {
      gsap.fromTo(
        el,
        { y: 150, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 0%",
            toggleActions: "play none none none",
          },
          delay: i * 0.3,
        }
      );
    }
  });
};

// Capabilities navigation page
export const useImageSlideInAnimation = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const rows = containerRef.current.querySelectorAll(".capable_service_data");

    rows.forEach((row) => {
      const img = row.querySelector("img.slide-img");
      if (!img) return;

      // Determine direction from row class
      const fromX = row.classList.contains("flex-row-reverse") ? -100 : 100;

      gsap.fromTo(
        img,
        { x: fromX, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [containerRef]);
};
// solution 
export const animateCardsOnScroll = (container) => {
  const cards = container.querySelectorAll(".solution_desk_radius");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { scale: 0.5, y: 10, opacity: 0.2 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
  });
};




