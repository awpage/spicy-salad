import { animate, inView } from "motion"

export function animateHeading() {
  const pageHeadings = document.querySelectorAll("h2")!
  const pageParagraphs = document.querySelectorAll("p")!
  const componentHeaders = document.querySelectorAll("h3")!

  pageHeadings.forEach((heading) => {
    inView(heading, () => {
      animate(heading,
        { opacity: [0, 1], y: [20, 0] },
        {duration: 0.6, easing: "easeOut", delay: 0.2 } as any
      )

      return () =>
        animate(heading, { opacity: [1, 0], y: [0, 20] }, {
          duration: 0.6,
          easing: "easeOut",
          delay: 0.2,
        } as any);
    })
  })

  pageParagraphs.forEach((paragraph) => {
    inView(paragraph, () => {
      animate(paragraph, { opacity: [0, 1], y: [-10, 0] }, {
        duration: 0.6,
        easing: "easeOut",
        delay: 0.2,
      } as any);

      return () =>
        animate(paragraph, { opacity: [1, 0], y: [0, -10] }, {
          duration: 0.6,
          easing: "easeOut",
          delay: 0.2,
        } as any);
    });
  });

  componentHeaders.forEach((heading) => {
    inView(heading, () => {
      animate(heading, { opacity: [0, 1], y: [20, 0] }, {
        duration: 0.6,
        easing: "easeOut",
        delay: 0.2,
      } as any);

      return () =>
        animate(heading, { opacity: [1, 0], y: [0, 20] }, {
          duration: 0.6,
          easing: "easeOut",
          delay: 0.2,
        } as any);
    });
  });
}