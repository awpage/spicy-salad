import { animate, stagger } from "motion";

export function animateHamburger() {
  const checkbox = document.querySelector("#hamburger")
  const navigation = document.querySelector("#navbar")!
  const links = navigation.querySelectorAll("li")!;

  animate(navigation, {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    bottom: 0,
    x: -10000,
  })

  checkbox?.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      document.body.classList.add('overflow-hidden');
      
      animate(navigation, { x: ["-100%", "0%"], left: 0, right: 0 }, { duration: .3, ease: 'easeOut' })
      animate(links, {
        y: [-20, 0],
        opacity: [0, 1]
      },
        {
          delay: stagger(0.1, { startDelay: 0.3, }),
          duration: .6,
          ease: 'easeOut'
        })
    } else {
      document.body.classList.remove('overflow-hidden');
      
      animate(links, {
        y: [0, -20],
        opacity: [1, 0]
      },
        {
          delay: stagger(-0.1, { startDelay: 0.3, }),
          duration: .3,
          ease: 'easeOut'
        }).finished.then(() => {

          animate(navigation, {
            x: ["0%", "-100%"],
          }, {
            duration: .4,
            ease: 'easeOut'
          })
        })
    }
  })
}