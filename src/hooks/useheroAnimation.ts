// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// export function useHeroAnimation() {
//   useGSAP(() => {

//     gsap.from(".hero-title", {
//       y: 150,
//       opacity: 0,
//       duration: 1.3,
//     });

//     gsap.from(".hero-can", {
//       scale: .7,
//       opacity: 0,
//       duration: 1.6,
//       ease: "back.out(1.7)",
//     });

//     gsap.to(".hero-can", {
//       y: -15,
//       repeat: -1,
//       yoyo: true,
//       duration: 2,
//       ease: "sine.inOut",
//     });
//   });
// }

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

export function useHeroAnimation() {
  useGSAP(() => {
    gsap.from(".hero-title", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(".hero-can", {
      scale: 0.7,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
    });

    gsap.to(".hero-can", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
}
