import { animate } from "motion";

const faqHeaders = document.querySelectorAll(".faq__header");

faqHeaders.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".faq__header").forEach((h) => {
      const content = h.nextElementSibling!

      if (!content?.classList.contains('hidden')) {
        content.classList.add('hidden')
      }
    });

    const faqItem = el.nextElementSibling!;

    faqItem?.classList.toggle("hidden");
    animate(
      faqItem,
      { opacity: [0, 1], y: [-10, 0] } as any,
      { duration: 0.2, easing: "easeOut" } as any
    );
  });
});
