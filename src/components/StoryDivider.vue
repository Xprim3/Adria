<template>
  <section 
    ref="dividerRef"
    class="relative py-12 md:py-16 bg-white overflow-hidden"
  >
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-[36px] text-primary-dark mb-4 font-normal tracking-wide" style="font-family: 'Italianno', cursive; font-weight: 400; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
          Our Story
        </h2>
        <div class="divider-line h-[1px] bg-gradient-to-r from-transparent via-primary-red/50 to-transparent w-full max-w-[300px] mx-auto mb-6"></div>
        <p class="text-base md:text-[16px] text-primary-dark/80 leading-relaxed max-w-[1280px] mx-auto tracking-wide font-light">
          Pizzeria Adria brings the best of Italy to Trier-Quint where wood-fired pizzas, hand crafted pastas, classic Italian dishes and warm hospitality come together to create an authentic dining experience.
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

