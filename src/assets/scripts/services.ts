const networkScrollTrigger = document.querySelector("#network_scroll_trigger")
const itScrollTrigger = document.querySelector("#it_scroll_trigger");

const networkContent = document.querySelector("#network_content");
const itContent = document.querySelector("#it_content");

networkScrollTrigger?.addEventListener('click', () => {
  networkContent?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

itScrollTrigger?.addEventListener('click', () => {
  itContent?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

function hashNavigation() {
  const hash = window.location.hash

  if (hash) {
    const path = hash.substring(1)

    if (path === 'networks') {
      networkContent?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (hash === 'it') {
      itContent?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    history.replaceState(null, ' ', ' ')
  }
}

window.addEventListener("hashchange", hashNavigation, false);
window.addEventListener("DOMContentLoaded", hashNavigation, false);