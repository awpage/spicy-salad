import { animate, inView } from "motion";

function swapText(textBox: HTMLElement, newText: string) {
  animate(textBox, { opacity: [1,0], y: [0, 10] } as any, {
    duration: 0.2,
    easing: "easeOut",
    delay: 0.2,
    onComplete: () => {
      textBox.textContent = newText;

      // Fade back in
      animate(
        textBox,
        { opacity: [0, 1], y: [-10, 0] } as any,
        { duration: 0.2, easing: "easeOut" } as any
      );
    },
  });
}

export function animateHero() {
  const mainHeading = document.querySelector("h1")!;
  const subText = document.querySelector("#subText")!;

  if (mainHeading) {

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
  }

  if (subText) {

    animate(
      subText,
      { opacity: [0, 1], y: [10, 0] } as any,
      { duration: 0.5, easing: "easeOut", delay: 0.5 } as any
    );
  }

  const swappedTextElements = document.querySelectorAll(".swapText");

  if (swappedTextElements) {
    swappedTextElements.forEach((element) => {
      const texts = element.dataset.texts?.split(",") || [];

      if (texts.length === 0) return;

      let index = 0;

      // Start looping this individual element
      setInterval(() => {
        index = (index + 1) % texts.length;
        swapText(element as any, texts[index]);
      }, 5000);
    });
  }
}
