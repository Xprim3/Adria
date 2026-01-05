<template>
  <section id="home" class="relative h-screen w-full overflow-hidden">
    <!-- Slider Container -->
    <div ref="sliderRef" class="relative h-full w-full">
      <!-- Slide Items -->
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}-${slide.image}`"
        :ref="el => { if (el) slideRefs[index] = el as HTMLElement }"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      >
        <!-- Background Image -->
        <div 
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          :class="currentSlide === index ? 'scale-100' : 'scale-110'"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <!-- Slide Content -->
        <div class="relative z-10 h-full flex items-center justify-center">
          <div class="container mx-auto px-4 text-center">
            <div 
              ref="el => { if (el && currentSlide === index) contentRefs[index] = el as HTMLElement }"
              class="max-w-4xl mx-auto"
            >
              <h1 
                class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl leading-tight px-2"
              >
                {{ slide.title }}
              </h1>
              <p 
                class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 drop-shadow-lg leading-relaxed px-2"
              >
                {{ slide.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div class="flex justify-center items-center">
        <svg
          class="w-6 h-6 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'

interface Slide {
  image: string
  title: string
  subtitle: string
}

const API_URL = import.meta.env.VITE_API_URL || '/api'

// Default fallback slides
const defaultSlides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Willkommen bei Pizzeria Adria',
    subtitle: 'Authentische italienische Küche in Trier-Quint'
  },
  {
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    title: 'Frische Zutaten, Traditionelle Rezepte',
    subtitle: 'Jeden Tag frisch zubereitet mit Liebe'
  },
  {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
    title: 'Genießen Sie den Geschmack Italiens',
    subtitle: 'Von klassisch bis kreativ - für jeden Geschmack'
  }
]

const slides = ref<Slide[]>(defaultSlides)
const sliderRef = ref<HTMLElement | null>(null)
const slideRefs = ref<(HTMLElement | null)[]>([])
const contentRefs = ref<(HTMLElement | null)[]>([])
const currentSlide = ref(0)
let slideInterval: number | null = null

// Load hero slides from API
const loadHeroSlides = async () => {
  try {
    const response = await fetch(`${API_URL}/content/hero`)
    const data = await response.json()
    
    if (data.slides?.value) {
      const parsedSlides = JSON.parse(data.slides.value)
      // Filter out empty slides and validate
      const validSlides = parsedSlides.filter((slide: Slide) => 
        slide.image && slide.title && slide.subtitle
      )
      
      if (validSlides.length > 0) {
        slides.value = validSlides
      }
    }
  } catch (error) {
    console.error('Error loading hero slides:', error)
    // Keep default slides on error
  }
}

const goToSlide = (index: number) => {
  if (index === currentSlide.value) return
  
  const prevIndex = currentSlide.value
  currentSlide.value = index

  // Animate content
  const prevContent = contentRefs.value[prevIndex]
  const newContent = contentRefs.value[index]

  if (prevContent) {
    gsap.to(prevContent, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    })
  }

  if (newContent) {
    gsap.fromTo(newContent,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.3
      }
    )
  }

  // Reset interval
  if (slideInterval) {
    clearInterval(slideInterval)
  }
  startSlideShow()
}

const startSlideShow = () => {
  if (slides.value.length === 0) return
  
  if (slideInterval) {
    clearInterval(slideInterval)
  }
  
  slideInterval = window.setInterval(() => {
    if (slides.value.length > 0) {
      const nextSlide = (currentSlide.value + 1) % slides.value.length
      goToSlide(nextSlide)
    }
  }, 5000) // Change slide every 5 seconds
}

// Watch for slides changes and restart slideshow
watch(() => slides.value.length, () => {
  if (slides.value.length > 0 && currentSlide.value >= slides.value.length) {
    currentSlide.value = 0
  }
  startSlideShow()
})

onMounted(async () => {
  // Load slides from API
  await loadHeroSlides()
  
  // Animate first slide content
  if (slides.value.length > 0 && contentRefs.value[0]) {
    gsap.fromTo(contentRefs.value[0],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      }
    )
  }

  startSlideShow()
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

