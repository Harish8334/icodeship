import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStackCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card");

    // Create timeline to sequence cards animation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (cards.length * window.innerHeight),
        scrub: 1,
        pin: true,
        snap: 1 / (cards.length - 1), // Snap to each card section
      },
    });

    cards.forEach((card, i) => {
      // Set initial styles for all cards
      gsap.set(card, { scale: 0.5, y: 100, opacity: 0.5, zIndex: cards.length - i });

      // Animate card pop & grow + bring to center
      tl.to(
        card,
        {
          scale: 1.25,
          y: 0,
          opacity: 1,
          zIndex: cards.length,
          duration: 1,
          ease: "power3.out",
        },
        i // sequence start time based on card index
      );

      // Push previous cards behind and smaller when next card animates
      if (i > 0) {
        tl.to(
          cards[i - 1],
          {
            scale: 0.7,
            y: -50 * i,
            opacity: 0.5,
            zIndex: cards.length - i,
            duration: 1,
            ease: "power3.out",
          },
          i
        );
      }
    });
  }, []);

  return (
    <div className="mt-5 pt-5"
      ref={containerRef}
      style={{
  position: "relative",
  height: "500px",   // keep fixed height as you want
  maxWidth: "900px",
  margin: "auto",
  overflow: "visible",
  display: "flex",
  alignItems: "center",      // vertical center
  justifyContent: "center",
  flexDirection: "column",
  paddingTop:"100px",
}}
    >
      {/* Replace with your actual card content */}
      <div className="card" style={cardStyle("#f28b82")}>
        <h3>Card 1</h3>
        <p>First card content</p>
      </div>
      <div className="card" style={cardStyle("#fbbc04")}>
        <h3>Card 2</h3>
        <p>Second card content</p>
      </div>
      <div className="card" style={cardStyle("#34a853")}>
        <h3>Card 3</h3>
        <p>Third card content</p>
      </div>
      <div className="card" style={cardStyle("#4285f4")}>
        <h3>Card 4</h3>
        <p>Fourth card content</p>
      </div>
    </div>
  );
}

const cardStyle = (bg) => ({
  backgroundColor: bg,
  borderRadius: "16px",
  padding: "40px",
  color: "white",
  position: "absolute",
  width: "100%",
  left: 0,
  top: "50%",
  transform: "translateY(-80%)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  transformOrigin: "center",
});
