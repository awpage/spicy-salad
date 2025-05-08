import '@/assets/styles/main.css'
import { animateHamburger } from './hamburger'
import { animateHero } from './hero';
import { animateCard } from './card';

if (window.innerWidth < 768) animateHamburger()
  ; if (window.innerWidth > 768) animateCard()
  ; animateHero()