<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Main Content Grid - Full Width -->
    <div class="grid md:grid-cols-2 md:h-[650px]">
      <!-- Image Side - Full Width -->
      <div 
        ref="imageRef"
        class="relative h-[400px] md:h-full w-full order-2 md:order-1 overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Pizzeria Adria Interior"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <!-- Text Side - Full Width -->
      <div 
        ref="textRef"
        class="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background-cream order-1 md:order-2 w-full md:h-full overflow-y-auto"
      >
        <div class="max-w-2xl w-full">
          <!-- Owner's Story -->
          <div>
            <div class="space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed font-sans">
              <p class="font-light">
                I discovered my passion for Italian cuisine during my early years working in kitchens across Italy, where I learned the art of traditional pizza making and pasta craftsmanship. Those formative years taught me that authentic Italian cooking isn't just about recipes—it's about technique, quality ingredients, and the patience to let flavors develop naturally.
              </p>
              <p class="font-light">
                In 2003, I opened Pizzeria Adria in Trier-Quint with a vision to bring genuine Italian flavors to our community. Over the years, we've become a beloved neighborhood destination, known for our wood-fired pizzas and handcrafted pastas. Our commitment to using only the finest ingredients and traditional methods has earned us a loyal following of regulars who appreciate authentic Italian cuisine.
              </p>
              <p class="font-light">
                Today, Pizzeria Adria continues to thrive as a family-run establishment where every dish tells a story. We've maintained our dedication to traditional techniques while creating a warm, welcoming atmosphere that makes every guest feel like part of our extended family. The restaurant has become more than a business—it's a gathering place where memories are made over shared meals and genuine hospitality.
              </p>
              <p class="font-light text-primary-dark/85 mt-6 md:mt-8 text-right text-xl sm:text-2xl md:text-3xl" style="font-family: 'Italianno', cursive; font-weight: 400;">
                — Bashkim Aliu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Sections - Full Width Image Cards in One Row -->
    <div ref="featuresContainerRef" class="w-full grid grid-cols-2 md:grid-cols-4">
      <!-- Pasta Section -->
      <div 
        ref="pastaRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('pasta')"
        @mouseleave="handleSectionLeave('pasta')"
      >
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Fresh Pasta"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              Pasta
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              Flour. Eggs. Water. Hand crafted.
            </p>
          </div>
        </div>
      </div>

      <!-- Salads Section -->
      <div 
        ref="saladsRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('salads')"
        @mouseleave="handleSectionLeave('salads')"
      >
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Fresh Salads"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              Salads
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              Fresh, crisp, and vibrant.
            </p>
          </div>
        </div>
      </div>

      <!-- Pizza Section -->
      <div 
        ref="pizzaRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('pizza')"
        @mouseleave="handleSectionLeave('pizza')"
      >
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Wood-Fired Pizza"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              Pizza
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              Wood-fired perfection.
            </p>
          </div>
        </div>
      </div>

      <!-- Antipasti Section -->
      <div 
        ref="antipastiRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('antipasti')"
        @mouseleave="handleSectionLeave('antipasti')"
      >
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Italian Antipasti"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              Antipasti
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              Fresh ingredients. Traditional.
            </p>
          </div>
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

const imageRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const featuresContainerRef = ref<HTMLElement | null>(null)
const pastaRef = ref<HTMLElement | null>(null)
const saladsRef = ref<HTMLElement | null>(null)
const pizzaRef = ref<HTMLElement | null>(null)
const antipastiRef = ref<HTMLElement | null>(null)

const handleSectionHover = (section: string) => {
  const refs: Record<string, HTMLElement | null> = {
    pasta: pastaRef.value,
    salads: saladsRef.value,
    pizza: pizzaRef.value,
    antipasti: antipastiRef.value
  }
  
  const sectionEl = refs[section]
  if (sectionEl) {
    const img = sectionEl.querySelector('img') as HTMLElement
    if (img) {
      gsap.to(img, {
        scale: 1.15,
        duration: 0.6,
        ease: 'power2.out',
        transformOrigin: 'center center'
      })
    }
  }
}

const handleSectionLeave = (section: string) => {
  const refs: Record<string, HTMLElement | null> = {
    pasta: pastaRef.value,
    salads: saladsRef.value,
    pizza: pizzaRef.value,
    antipasti: antipastiRef.value
  }
  
  const sectionEl = refs[section]
  if (sectionEl) {
    const img = sectionEl.querySelector('img') as HTMLElement
    if (img) {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        transformOrigin: 'center center'
      })
    }
  }
}

onMounted(() => {
  // Animate image
  if (imageRef.value) {
    gsap.fromTo(imageRef.value,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Animate text
  if (textRef.value) {
    gsap.fromTo(textRef.value,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Animate feature sections together when container scrolls into view
  if (featuresContainerRef.value) {
    const sections = [pastaRef.value, saladsRef.value, pizzaRef.value, antipastiRef.value].filter(Boolean) as HTMLElement[]
    
    if (sections.length > 0) {
      // Set initial scale for all images
      sections.forEach(section => {
        const img = section.querySelector('img') as HTMLElement
        if (img) {
          gsap.set(img, { scale: 1, transformOrigin: 'center center' })
        }
      })
      
      gsap.fromTo(sections,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          stagger: {
            amount: 0.6, // Total stagger duration
            from: 'start'
          },
          scrollTrigger: {
            trigger: featuresContainerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }
})
</script>

