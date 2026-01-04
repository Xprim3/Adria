<template>
  <section 
    id="reservations"
    ref="dividerRef"
    class="relative py-10 md:py-14 bg-white overflow-hidden"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-4 md:mb-5 font-normal tracking-wide" style="font-family: 'Italianno', cursive; font-weight: 400; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
          Reservierung & Lieferung
        </h2>
        <div class="divider-line h-[1px] bg-gradient-to-r from-transparent via-primary-red/50 to-transparent w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-5 md:mb-6"></div>
        <p class="text-sm sm:text-base md:text-lg text-primary-dark/80 leading-relaxed max-w-3xl mx-auto tracking-wide font-light px-2">
          Reservieren Sie Ihren Tisch für ein unvergessliches kulinarisches Erlebnis oder genießen Sie unsere authentische italienische Küche direkt an Ihrer Haustür. Wir bringen Ihnen den Geschmack Italiens, ob Sie bei uns speisen oder in den eigenen vier Wänden.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const dividerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (dividerRef.value) {
    const title = dividerRef.value.querySelector('h2')
    const line = dividerRef.value.querySelector('.divider-line')
    const text = dividerRef.value.querySelector('p')
    
    if (title && line && text) {
      // Title slides in from left
      gsap.fromTo(title,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: dividerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      
      // Line expands from center
      gsap.fromTo(line,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: dividerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
      
      // Text slides in from right
      gsap.fromTo(text,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: dividerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }
})
</script>

