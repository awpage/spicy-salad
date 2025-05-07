import '@/assets/styles/main.css'
import { animateHamburger } from './hamburger'
import { animateHero } from './hero';

if (window.innerWidth < 768) animateHamburger()
;animateHero()