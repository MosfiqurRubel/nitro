import { useGSAP } from "@gsap/react";

import gsap from "@/lib/gsap";

export function useFlavorAnimation() {
  useGSAP(() => {
    gsap.from(".flavor-card", {
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 70%",
      },

      y: 120,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
    });
  });
}
