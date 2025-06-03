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

const copyrightYearSpan = document.querySelector("#copyright_year")!
copyrightYearSpan.innerHTML = new Date().getFullYear()