<template>
  <section id="menu" class="relative bg-gradient-to-b from-background-cream/30 via-white to-background-cream/30 py-16 md:py-24 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-red/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 w-full">
      <div 
        ref="headerRef"
        class="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6"
      >
        <h2 class="text-2xl sm:text-3xl md:text-[36px] text-primary-dark mb-3 sm:mb-4 font-normal tracking-wide" style="font-family: 'Italianno', cursive; font-weight: 400; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
          Menu
        </h2>
        <div class="divider-line h-[1px] bg-gradient-to-r from-transparent via-primary-red/50 to-transparent w-full max-w-[250px] sm:max-w-[300px] mx-auto mb-4 sm:mb-6"></div>
        <p class="text-sm sm:text-base md:text-[16px] text-primary-dark/80 leading-relaxed max-w-[1280px] mx-auto tracking-wide font-light px-2">
          Discover our authentic Italian cuisine featuring traditional wood-fired pizzas, handcrafted pastas, and classic Italian specialties. Each dish is prepared with the finest ingredients and time-honored techniques.
        </p>
      </div>

      <!-- Menu Book Layout -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <!-- Decorative Frame Container -->
        <div class="relative">
          <!-- Menu Book -->
          <div 
            ref="menuBookRef"
            class="relative grid md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-primary-red/20"
          >
            <!-- Decorative Corner Elements -->
            <div class="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-red/30 rounded-tl-2xl"></div>
            
            <!-- Decorative Center Divider -->
            <div class="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary-red/20 to-transparent"></div>
          <!-- Left Page: Contact Information -->
          <div class="relative bg-gradient-to-br from-background-cream to-white p-10 md:p-12 lg:p-16 border-r border-primary-dark/10">
            <div class="h-full flex flex-col">
              <!-- Restaurant Header -->
              <div class="text-center mb-10 md:mb-12">
                <h3 class="text-4xl md:text-5xl lg:text-6xl font-restaurant font-normal text-primary-dark mb-4" style="font-family: 'Italianno', cursive;">
                  Pizzeria Adria
                </h3>
                <div class="flex items-center justify-center gap-3 my-5">
                  <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
                  <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
                  <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
                </div>
                <p class="text-base md:text-lg text-primary-dark/70 italic tracking-wide">Authentic Italian Cuisine</p>
              </div>

              <!-- Contact Information -->
              <div class="space-y-8 flex-1">
                <div>
                  <h4 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Location</h4>
                  <p class="text-base md:text-lg text-primary-dark leading-relaxed">
                    Quintstraße 123<br>
                    54292 Trier-Quint<br>
                    Germany
                  </p>
                </div>

                <div>
                  <h4 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Contact</h4>
                  <div class="space-y-3">
                    <p class="text-base md:text-lg text-primary-dark">
                      <a href="tel:+496512345678" class="hover:text-primary-red transition-colors">
                        +49 651 123 456 78
                      </a>
                    </p>
                    <p class="text-base md:text-lg text-primary-dark">
                      <a href="mailto:info@pizzeriaadria.de" class="hover:text-primary-red transition-colors">
                        info@pizzeriaadria.de
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Website</h4>
                  <p class="text-base md:text-lg text-primary-dark">
                    <a href="http://www.pizzeriaadria-trier.de" target="_blank" rel="noopener noreferrer" class="hover:text-primary-red transition-colors">
                      www.pizzeriaadria-trier.de
                    </a>
                  </p>
                </div>

                <div>
                  <h4 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Opening Hours</h4>
                  <div class="space-y-2.5 text-base md:text-lg text-primary-dark">
                    <div class="flex justify-between items-center">
                      <span class="font-light">Monday – Thursday</span>
                      <span class="font-medium">11:30 – 22:00</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="font-light">Friday – Saturday</span>
                      <span class="font-medium">11:30 – 23:00</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="font-light">Sunday</span>
                      <span class="font-medium">12:00 – 22:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative Footer -->
              <div class="mt-10 pt-8 border-t border-primary-dark/10">
                <p class="text-xs text-primary-dark/40 text-center tracking-wider uppercase">Established 2003</p>
              </div>
            </div>
          </div>

          <!-- Right Page: Menu Categories List -->
          <div class="bg-white p-10 md:p-12 lg:p-16">
            <div class="h-full flex flex-col">
              <!-- Menu Header -->
              <div class="text-center mb-10 md:mb-12">
                <h3 class="text-4xl md:text-5xl lg:text-6xl font-restaurant font-normal text-primary-dark mb-4" style="font-family: 'Italianno', cursive;">
                  Speisekarte
                </h3>
                <div class="flex items-center justify-center gap-3 my-5">
                  <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
                  <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
                  <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
                </div>
                <p class="text-base md:text-lg text-primary-dark/70">Our Complete Selection</p>
              </div>

              <!-- Clean Menu Categories List -->
              <div class="space-y-1 flex-1 mb-10">
                <div 
                  v-for="(category, index) in menuCategories" 
                  :key="index"
                  class="group flex items-center justify-between py-4 px-2 border-b border-primary-dark/5 hover:bg-background-cream/50 transition-colors duration-200"
                >
                  <div class="flex items-center gap-4 flex-1">
                    <span class="text-sm md:text-base text-primary-dark/40 font-light w-8">{{ String(index + 1).padStart(2, '0') }}</span>
                    <h4 class="text-lg md:text-xl font-restaurant font-normal text-primary-dark flex-1">
                      {{ category.name }}
                    </h4>
                  </div>
                  <div class="flex items-center gap-6">
                    <span class="text-sm md:text-base text-primary-dark/50 font-light">{{ category.count }}</span>
                    <div class="w-1 h-1 rounded-full bg-primary-red/30 group-hover:bg-primary-red transition-colors"></div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <a
                  :href="pdfMenus[0].url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-red to-primary-banner text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
                >
                  <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Full Menu</span>
                </a>
                <a
                  :href="pdfMenus[0].url"
                  download
                  class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-primary-red border-2 border-primary-red/30 hover:border-primary-red hover:bg-primary-red/5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] group"
                >
                  <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
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

const headerRef = ref<HTMLElement | null>(null)
const menuBookRef = ref<HTMLElement | null>(null)

const pdfMenus = [
  { 
    name: 'Full Menu', 
    url: 'http://www.pizzeriaadria-trier.de/flyer/Adria-Speisekarte-Flyer.pdf' 
  },
]

const menuCategories = [
  { name: 'Pizza', count: '20+' },
  { name: 'Pasta', count: '25+' },
  { name: 'Antipasti', count: '15+' },
  { name: 'Risotto', count: '5+' },
  { name: 'Meat Specialties', count: '30+' },
  { name: 'Desserts', count: '8+' },
]

onMounted(() => {
  // Animate header with same style as StoryDivider
  if (headerRef.value) {
    const title = headerRef.value.querySelector('h2')
    const line = headerRef.value.querySelector('.divider-line')
    const text = headerRef.value.querySelector('p')
    
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
            trigger: headerRef.value,
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
            trigger: headerRef.value,
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
            trigger: headerRef.value,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }

  // Animate menu book
  if (menuBookRef.value) {
    gsap.fromTo(menuBookRef.value,
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: menuBookRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }
})
</script>
