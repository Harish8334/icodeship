import gsap from "gsap";
import { useEffect , useRef , useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLocation } from 'react-router-dom'
import "./animation.css"

gsap.registerPlugin(ScrollTrigger);




// service card scroll animation

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


// Project 
export const useProjectCardHover = (cardRef, overlayRef, titleRef, onPauseAutoplay, onResumeAutoplay) => {
  useEffect(() => {
    if (!cardRef?.current || !overlayRef?.current || !titleRef?.current) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "<"
    );

    const cardEl = cardRef.current;

    const onMouseEnter = () => {
      if (window.innerWidth >= 768) {
        tl.play();
        if (typeof onPauseAutoplay === "function") onPauseAutoplay();
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth >= 768) {
        tl.reverse();
        if (typeof onResumeAutoplay === "function") onResumeAutoplay();
      }
    };

    cardEl.addEventListener("mouseenter", onMouseEnter);
    cardEl.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cardEl.removeEventListener("mouseenter", onMouseEnter);
      cardEl.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [cardRef, overlayRef, titleRef, onPauseAutoplay, onResumeAutoplay]);
};





// Brands
export const highlightCenterLogo = (trackRef) => {
  if (!trackRef?.current) return;

  const slides = trackRef.current.querySelectorAll(".brand-slide");

  const updateActiveSlide = () => {
    let centerX = window.innerWidth / 2;
    let closestSlide = null;
    let minDistance = Infinity;

    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(slideCenter - centerX);

      if (distance < minDistance) {
        minDistance = distance;
        closestSlide = slide;
      }
    });

    slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (!img) return;
      if (slide === closestSlide) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  };

  // Update on every animation frame (or use requestAnimationFrame with scroll left detection)
  const intervalId = setInterval(updateActiveSlide, 1000);

  // Clean up
  return () => clearInterval(intervalId);
};


export const useVerticalToHorizontalScroll = () => {
  useEffect(() => {
    const row = document.querySelector(".mobile_services_row");
    if (!row) return;

    const cards = gsap.utils.toArray(".mobile_service_card");
    const rowWidth = row.scrollWidth;
    const scrollAmount = rowWidth - window.innerWidth;

    if (scrollAmount <= 0) return;

    const tween = gsap.to(row, {
      x: -scrollAmount,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: row.parentElement,
      start: "top top",
      end: `+=${rowWidth}`,
      pin: true,
      scrub: 1,
      animation: tween,
      anticipatePin: 1,
    });

    cards.forEach((card) => {
      const icon = card.querySelector(".mobile_icon_container");
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

      const resizeHandler = () => {
        distance = calcDistance();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", resizeHandler);

      ScrollTrigger.create({
        trigger: card,
        containerAnimation: tween,
        start: "left center",
        end: "right center",
        onUpdate: (self) => {
          const targetX = self.progress >= 0.5 ? distance : 0;

          gsap.to(icon, {
            x: targetX,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(row);
      window.removeEventListener("resize", () => {});
    };
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
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    }
  );
};

// About page core Card animation

// About page counter
export const animateCountUp = (el) => {
  const finalValue = parseInt(el.dataset.count, 10);
  const counter = { val: 0 };

  gsap.to(counter, {
    val: finalValue,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => {
      el.innerText = `${Math.floor(counter.val).toLocaleString()} ${el.dataset.symbol || ""}`;
    },
  });
};
// Core card
export const useCoreCardAnimations = (cardRefs) => {
  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none", // 👈 disables reverse
          },
        }
      );
    });

    // Clean-up to kill triggers if component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [cardRefs]);

};

// Count
export const countUpOnScroll = (elements) => {
  elements.forEach((el) => {
    // Animate on scroll
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        animateCountUp(el);
      },
    });

    // Animate on hover
    el.addEventListener("mouseenter", () => {
      animateCountUp(el);
    });
  });
};
// office
export const scrollPopup = () => {
  const targets = document.querySelectorAll(".animate-from-bottom");

  if (!targets.length) return;

  targets.forEach((target) => {
    gsap.set(target, { opacity: 0, y: 50, scale: 0.1 });

    ScrollTrigger.create({
      trigger: target,
      start: "top 98%",
      onEnter: () => {
        gsap.to(target, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      },
      once: true,
    });
  });

  // 🔁 Refresh triggers after full DOM update (fixes slow re-entry)
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 10); // small delay to wait for layout
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

  cards.forEach((card, index) => {
    // Assign decreasing z-index so each next card stacks on top
    card.style.zIndex = cards.length - index;

    gsap.fromTo(
      card,
      { 
        scale: 0.5,
        y: 100,
        opacity: 0.2
      },
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
        },
      }
    );
  });
};


// Contact Splash
const COLORS = ["#ff3f8b", "#04c2c9", "#2e55c1", "#f5a623", "#7b2ff7"];

export const BallSplash = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const balls = [];
    const numBalls = 100;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement("div");
      ball.style.position = "absolute";
      ball.style.width = "20px";
      ball.style.height = "20px";
      ball.style.borderRadius = "50%";
      ball.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      ball.style.left = `${centerX}px`;
      ball.style.top = `${centerY}px`;
      ball.style.pointerEvents = "none";
      container.appendChild(ball);
      balls.push(ball);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        balls.forEach((ball) => {
          container.removeChild(ball);
        });
        onComplete();
      },
    });

    balls.forEach((ball) => {
      const angle = Math.random() * Math.PI * 5;
      const distance = 100 + Math.random() * 1000;
      const splashDuration = 0.7 + Math.random() * 0.3;
      const dropDuration = 1.3 + Math.random() * 0.5;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      // Splash outwards
      tl.to(
        ball,
        {
          x,
          y,
          ease: "power2.out",
          duration: splashDuration,
        },
        0
      );

      // Fall downward
      tl.to(
        ball,
        {
          y: `+=${300 + Math.random() * 200}`,
          x: `+=${(Math.random() - 0.5) * 80}`,
          opacity: 0,
          scale: 0.5,
          ease: "power1.in",
          duration: dropDuration,
        },
        splashDuration
      );
    });

    return () => {
      balls.forEach((ball) => {
        if (container.contains(ball)) container.removeChild(ball);
      });
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 9999,
      }}
    />
  );
};

// path
export const animateZigzagPath = () => {
  const path = document.querySelector("#zigzag-path");
  const section = document.querySelector(".software_container_section");

  if (!path || !section) return;

  const pathLength = path.getTotalLength();

  path.setAttribute("stroke", "#504CA0");
  path.setAttribute("stroke-width", "6");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-dasharray", "20  20");

  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: () => `+=${window.innerHeight * 1.5}`,  // fixed scroll distance
      scrub: 1,  // smooth scrub easing
      onLeaveBack: () => {
        gsap.to(path, {
          strokeDashoffset: pathLength,
          duration: 1,
          ease: "power2.inOut",
        });
      },
      invalidateOnRefresh: true,  // recalc end on resize
    },
  });
};

// Map in solution
export const initImageRevealAnimation = (greyImgRef, colorImgRef, sectionRef) => {
  if (!greyImgRef.current || !colorImgRef.current || !sectionRef.current) return;

  const ctx = gsap.context(() => {
    // Looping timeline for the color pop animation
  const loop = gsap.timeline({
  repeat: -1,
  yoyo: true,
  paused: true,
});

// REVEAL from center
loop.to(colorImgRef.current, {
  clipPath: "circle(150% at 50% 50%)", // full reveal
  duration: 3, // 
  ease: "power2.inOut",
});

// RETURN to center
loop.to(colorImgRef.current, {
  clipPath: "circle(0% at 50% 50%)", // collapse
  duration: 3, // 
  ease: "power2.inOut",
});


    loop.to(colorImgRef.current, {
      clipPath: "circle(150% at 50% 50%)", // full reveal from center
    });

    gsap.set(colorImgRef.current, {
      clipPath: "circle(0% at 50% 50%)",
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => loop.play(),
      onLeave: () => loop.pause(),
      onEnterBack: () => loop.play(),
      onLeaveBack: () => loop.pause(),
    });

    return () => {
      loop.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, sectionRef);

  return () => ctx.revert();
};


export const openModalAnimation = (modalRef) => {
  if (!modalRef.current) return;

  gsap.fromTo(
    modalRef.current,
    { scale: 0.8, opacity: 0, y: -60 },
    { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
  );
};

export const closeModalAnimation = (modalRef, onComplete) => {
  if (!modalRef.current) return;

  gsap.to(modalRef.current, {
    scale: 0.8,
    opacity: 0,
    y: -60,
    duration: 0.4,
    ease: "power3.in",
    onComplete,
  });
};

// Smooth scrolling for all page 
const SmoothScrollProvider = ({ children }) => {
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => t * (2 - t),
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.body.style.transform ? 'transform' : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => lenis.raf(performance.now()));
  ScrollTrigger.refresh();

  return () => {
    lenis.destroy();
    ScrollTrigger.kill();
  };
}, []);


  return <>{children}</>;
};

export default SmoothScrollProvider;
export const initParallaxScroll = (containerSelector, panelSelector) => {
  const container = document.querySelector(containerSelector);
  const panels = gsap.utils.toArray(panelSelector);

  if (!container || panels.length === 0) return;

  gsap.to(panels, {
    yPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => '+=' + container.offsetHeight * (panels.length - 1),
      scrub: true,
      pin: true,
    }
  });
};