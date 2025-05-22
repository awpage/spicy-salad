import { animate, hover, inView, stagger } from "motion";

export function animateCard() {
  const cards = document.querySelectorAll(".card")!;

  cards.forEach((card) => {
    const li = card.querySelectorAll("li")!;
    const ul = card.querySelector("ul")!;
    const h3 = card.querySelector("h3")!;
    const span = card.querySelector("span")!;
    const a = card.querySelector("a")!;

    animate(
      span,
      { display: "none", opacity: 0 },
      { duration: 0.3, ease: "circOut" }
    );
    animate(a, { width: "48px" }, { duration: 0.3, ease: "circOut" });

    animate(
      li,
      { opacity: [1, 0], y: [0, 10] },
      { duration: 0.3, delay: stagger(0.03), easing: "easeIn" }
    );

    animate(
      ul,
      {
        display: "none",
      },
      {
        duration: 0.3,
        ease: "easeOut",
      }
    );
    animate(h3, { y: ["0%", "5%"] });

    hover(card, () => {
      animate(a, { width: "auto" }, { duration: 3, ease: "circOut" });
      animate(h3, { y: ["50%", "0%"] }, { duration: 0.3, ease: "circOut" });
      animate(
        ul,
        {
          display: "block",
          opacity: [0, 1],
          y: [10, 0],
        },
        {
          duration: 0.6,
          ease: "easeOut",
        }
      );
      animate(
        li,
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.4, delay: stagger(0.05), easing: "easeOut" }
      );

      animate(
        span,
        { display: "flex", opacity: 1 },
        { duration: 0.4, ease: "circOut" }
      );
      animate(
        a,
        { width: "150px", display: "flex" },
        { duration: 0.3, ease: "circOut" }
      );

      return () => {
        animate(a, { width: "48px" }, { duration: 0.3, ease: "circOut" });
        animate(
          span,
          { display: "none", opacity: 0 },
          { duration: 0.3, ease: "circOut" }
        );

        animate(
          li,
          { opacity: [1, 0], y: [0, 10] },
          { duration: 0.3, delay: stagger(0.03), easing: "easeIn" }
        );

        animate(
          ul,
          {
            display: "none",
            opacity: [1, 0],
            y: [0, 10],
          },
          {
            duration: 0.3,
            ease: "circOut",
          }
        );
        animate(h3, { y: ["0%", "5%"] }, { duration: 0.3, ease: "circOut" });
      };
    });
  });
}

export function animateFeatureCard() {
  const cards = document.querySelectorAll(".card--feature")!;

  cards.forEach((card) => {
    inView(card, () => {
      animate(
        card,
        {
          x: [-50, 0],
          opacity: [.7, 1],
        },
        {
          duration: 0.3,
          delay: stagger(0.03),
          ease: "easeIn",
        }
      );

      return () =>
        animate(
          card,
          {
            x: [0, -50],
            opacity: [.7, 1],
          },
          {
            duration: 0.3,
            delay: stagger(0.03),
            ease: "easeIn",
          }
        );
    });
  });
}
