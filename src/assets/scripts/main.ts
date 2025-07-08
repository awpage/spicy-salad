import '@/assets/styles/main.css'
import { animateHamburger } from './hamburger'
import { animateHero } from './hero';
import { animateCard, animateFeatureCard } from './card';
import { animateHeading } from './headings';

if (window.innerWidth < 768) animateHamburger()
  ; if (window.innerWidth > 768) animateCard()
  ; animateHero()
  ; animateFeatureCard()
  ; animateHeading()

const scrollTrigger = document.querySelector("#scroll_trigger")
const scrollContent = document.querySelector("#scroll_content")
const copyrightYearSpan = document.querySelector("#copyright_year")!


copyrightYearSpan.innerHTML = new Date().getFullYear().toString()

scrollTrigger?.addEventListener('click', () => {
  scrollContent?.scrollIntoView({ behavior: 'smooth', block: 'center' })
})

if (window.innerWidth > 768) {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href]:not([target="_blank"])');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")!;
        if (href.startsWith("http") || href.startsWith('mailto')) return; // skip external

        e.preventDefault();
        document.body.classList.add("fade-out");

        // Wait for transition to complete before navigating
        setTimeout(() => {
          window.location.href = href as string;
        }, 500); // match CSS transition duration
      });
    });
  });
}