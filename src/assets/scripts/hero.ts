import { animate } from "motion"

export function animateHero() {
  const mainHeading = document.querySelector("#mainHeading")!
  const subText = document.querySelector("#subText")!

  animate(mainHeading,
    { opacity: [0, 1], y: [20, 0] },
    { duration: 0.6, easing: "easeOut", delay: 0.2 }
  )

  animate(subText,
    { opacity: [0, 1], y: [10, 0] },
    { duration: 0.5, easing: "easeOut", delay: 0.5 }
  );
}