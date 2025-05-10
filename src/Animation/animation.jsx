  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";
  import { Icon_slide_right } from "./icon_animation.jsx";
  import Service_Data from "../Data/Service_Data.jsx"

  gsap.registerPlugin(ScrollTrigger);

  export const useScrollAnimation = () => {
    useGSAP(() => {
      const row = document.querySelector(".services_row");
      if (!row) return;

      const rowWidth = row.scrollWidth;
      const scrollAmount = rowWidth - window.innerWidth;

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
    });
    Icon_slide_right({ icon: ".lap_icon", begin: "18%", finish: "18%" });
    Icon_slide_right({ icon: ".app_icon", begin: "-88%", finish: "-88%" });
    Icon_slide_right({ icon: ".ui_icon", begin: "-194%", finish: "-194%" });
    Icon_slide_right({ icon: ".amc_icon", begin: "-300%", finish: "-300%" });
    Icon_slide_right({ icon: ".servers_icon", begin: "-330%", finish: "-330%" });
    Icon_slide_right({ icon: ".digital_icon", begin: "-360%", finish: "-360%" });
  };

