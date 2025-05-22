import { animate, inView } from "motion";

export function animateHero() {
  const mainHeading = document.querySelector("h1")!;
  const subText = document.querySelector("#subText")!;

  inView(mainHeading, () => {
    animate(
      mainHeading,
      { opacity: [0, 1], y: [20, 0] } as any,
      { duration: 0.6, easing: "easeOut", delay: 0.2 } as any
    );

    return () =>
      animate(
        mainHeading,
        { opacity: [1, 0], y: [0, 20] } as any,
        { duration: 0.6, easing: "easeOut", delay: 0.2 } as any
      );
  });

  animate(
    subText,
    { opacity: [0, 1], y: [10, 0] } as any,
    { duration: 0.5, easing: "easeOut", delay: 0.5 } as any
  );
}
