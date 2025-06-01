import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Helper function to get the initial position based on direction
const getInitialPosition = (direction) => {
 switch (direction) {
  case "topLeft":
    return { x: -50, y: -50, opacity: 0 };  // From top-left
  case "topRight":
    return { x: 50, y: -50, opacity: 0 };   // From top-right
  case "bottomLeft":
    return { x: -10, y: 50, opacity: 0 };   // From bottom-left
  case "bottomRight":
    return { x: 50, y: 50, opacity: 0 };    // From bottom-right
  case "topToBottom":
    return { x: 0, y: -50, opacity: 0 };    // From top
  case "bottomToTop":
    return { x: 0, y: 50, opacity: 0 };     // From bottom
  case "leftToRight":
    return { x: -50, y: 0, opacity: 0 };    // From left
  case "rightToLeft":
    return { x: 50, y: 0, opacity: 0 };     // From right
  default:
    return { x: 0, y: 0, opacity: 0 };      // Default (no movement)
}
};

const Animation = ({ imgSrc, altText = "Tech Logo", animationDirection = "topLeft" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,  // Trigger when 30% of the element is in view
    triggerOnce: false, // Allow the animation to trigger again if scrolled back
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1.3, ease: "easeOut" }, // Smooth animation
      });
    } else {
      controls.start({
        ...getInitialPosition(animationDirection),  // Apply initial position based on direction
        transition: { duration: 0.8, ease: "easeInOut" }, // Reset animation
      });
    }
  }, [inView, controls, animationDirection]);

  return (
<>

<motion.div
      ref={ref}
      className="  bg-white  tech_box d-flex justify-content-center align-items-center"
      initial={getInitialPosition(animationDirection)} // Set initial position dynamically
      animate={controls}
      style={{ willChange: "transform, opacity" }} // Helps browser optimize
    >
      <img
        src={imgSrc}
        alt={altText}
        className="img-fluid p-1"
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
    </>
    
  );
};

export default Animation;
