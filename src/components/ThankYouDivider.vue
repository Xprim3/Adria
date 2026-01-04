<template>
  <section 
    ref="dividerRef"
    class="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-background-cream/50 to-background-cream overflow-hidden"
  >
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-10 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-10 w-80 h-80 bg-primary-red/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-6 md:mb-8">
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
          <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-restaurant font-normal text-primary-dark mb-5 md:mb-6" style="font-family: 'Italianno', cursive; font-weight: 400; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
          Grazie Mille
        </h2>
        
        <p class="text-base sm:text-lg md:text-xl text-primary-dark/80 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
          Vielen Dank, dass Sie Teil unserer Reise sind. Ihre Unterstützung und Ihre Schirmherrschaft bedeuten uns die Welt. Wir freuen uns darauf, Sie in der Pizzeria Adria willkommen zu heißen und die authentischen Aromen Italiens mit Ihnen und Ihren Liebsten zu teilen.
        </p>
        
        <p class="text-sm sm:text-base md:text-lg text-primary-dark/70 leading-relaxed max-w-xl mx-auto italic" style="font-family: 'Playfair Display', serif;">
          "Essen ist unser gemeinsamer Nenner, eine universelle Erfahrung."
        </p>
        
        <div class="flex items-center justify-center gap-3 mt-6 md:mt-8">
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
          <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
        </div>
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
    const paragraphs = dividerRef.value.querySelectorAll('p')
    const dividers = dividerRef.value.querySelectorAll('.flex.items-center')
    
    if (title) {
      gsap.fromTo(title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: dividerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
    
    if (paragraphs.length > 0) {
      gsap.fromTo(paragraphs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: dividerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
    
    if (dividers.length > 0) {
      gsap.fromTo(dividers,
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
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

