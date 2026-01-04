import { onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimation() {
  const animateOnScroll = (selector: string, animation: gsap.TweenVars) => {
    gsap.fromTo(
      selector,
      { opacity: 0, y: 50 },
      {
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })

  return {
    animateOnScroll,
  }
}

