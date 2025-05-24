import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

// home page service card scroll animation
export const useScrollAnimation = () => {
  useGSAP(() => {
    const row = document.querySelector(".services_row");
    if (!row) return;

    const cards = gsap.utils.toArray(".service_card");
    const rowWidth = row.scrollWidth;
    const scrollAmount = rowWidth - window.innerWidth;

    // Horizontal scroll tween for the whole row
    const tween = gsap.to(row, {
      x: -scrollAmount,
      ease: "none",
      duration: 4,
    });

    ScrollTrigger.create({
      trigger: ".services_row",
      start: "top 20%",
      end: `+=${scrollAmount}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      animation: tween,
    });

    // Animate icon position on each card based on scroll position
    cards.forEach((card) => {
      const icon = card.querySelector(".icon-container");
      if (!icon) return;

      // Calculate distance icon needs to move to reach right end of card
      // const calcDistance = () => {
      //   const cardWidth = card.offsetWidth;
      //   const iconWidth = icon.offsetWidth;
      //   // Some margin from right edge, adjust 20 if needed
      //   return cardWidth - iconWidth + 500;
      // };
const calcDistance = () => {
  const cardWidth = card.offsetWidth;
  const iconWidth = icon.offsetWidth;

  const windowWidth = window.innerWidth;

  let marginRight;

  if (windowWidth <= 576) {
    // small devices (mobile)
    marginRight = cardWidth * -0.3; // 10% margin
  } else if (windowWidth <= 992) {
    // medium devices (tablet)
    marginRight = cardWidth * -0.4; // 10% margin
  } else {
    // large devices (desktop)
    marginRight = cardWidth * -0.6; // 10% margin
  }

  // Distance = card width - icon width - marginRight
  return cardWidth - iconWidth - marginRight;
};


      let distance = calcDistance();

      // Update distance on resize
      window.addEventListener("resize", () => {
        distance = calcDistance();
      });

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tween,
        start: () => `left center`,
        end: () => `right center`,
        onUpdate: (self) => {
          // self.progress goes 0->1 between start and end
          // When progress > 0.5, move icon to right
          if (self.progress >= 0.5) {
            gsap.to(icon, {
              x: distance,
              duration: 1.5, // slower, smoother
              ease: "power3.out", // smooth easing
              overwrite: "auto",
            });
          } else {
            // Scroll back before 50%, move icon back left
            gsap.to(icon, {
              x: 0,
              duration: 1.5,
              ease: "power3.out",
              overwrite: "auto",
            });
          }
        },
      });
    });
  });
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

// About page code Card animation
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
          delay: i * 0.2, // stagger effect
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
        { y: 350, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 50%",
            toggleActions: "play none none none",
          },
          delay: i * 0.5,
        }
      );
    }
  });
};

// Capabilities navigation page 
