import { animate, hover, stagger } from "motion"

export function animateCard() {
  const cards = document.querySelectorAll(".card")!

  cards.forEach((card) => {
    const li = card.querySelectorAll("li")!
    const ul = card.querySelector("ul")!
    const h3 = card.querySelector("h3")!
    const span = card.querySelector("span")!
    const a = card.querySelector("a")!

    animate(span, { display: "none", opacity: 0 }, { duration: .3, ease: 'circOut' })

    animate(
      li,
      { opacity: [1, 0], y: [0, 10] },
      { duration: 0.3, delay: stagger(0.03), easing: "easeIn" }
    );

    animate(ul, {
      display: 'none',
    },
      {
        duration: .3,
        ease: 'easeOut'
      })
    animate(h3, { y: ["0%", "5%"] })

    hover(card, (el) => {
      animate(a, { width: "auto" }, { duration: 3, ease: 'circIn' })
      animate(h3, { y: ["50%", "0%"] })
      animate(ul, {
        display: 'block',
      },
        {
          duration: .6,
          ease: 'easeOut'
        })
      animate(
        li,
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.4, delay: stagger(0.05), easing: "easeOut" }
      );

      animate(span, { display: "flex", opacity: 1 }, { duration: .4, ease: 'circOut' })

      return () => {
        animate(span, { display: "none", opacity: 0 }, { duration: .3, ease: 'circOut' })

        animate(
          li,
          { opacity: [1, 0], y: [0, 10] },
          { duration: 0.3, delay: stagger(0.03), easing: "easeIn" }
        );

        animate(ul, {
          display: 'none',
        },
          {
            duration: .3,
            ease: 'easeOut'
          })
        animate(h3, { y: ["0%", "5%"] })
      }
    })
  })
}