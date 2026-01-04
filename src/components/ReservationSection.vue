<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Main Content Grid -->
    <div class="grid md:grid-cols-2">
      <!-- Left Side: Modern Image Grid -->
      <div 
        ref="imagesRef"
        class="relative h-[400px] md:h-full w-full order-2 md:order-1 overflow-hidden"
      >
        <!-- Asymmetric Grid Layout -->
        <div class="grid grid-cols-2 grid-rows-2 h-full gap-2 md:gap-3 p-2 md:p-3">
          <!-- Large Image (Top Left) -->
          <div class="relative overflow-hidden group row-span-2">
            <img
              :src="images[0].src"
              :alt="images[0].alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Medium Image (Top Right) -->
          <div class="relative overflow-hidden group">
            <img
              :src="images[1].src"
              :alt="images[1].alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Medium Image (Bottom Right) -->
          <div class="relative overflow-hidden group">
            <img
              :src="images[2].src"
              :alt="images[2].alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Optional: Small overlay image in corner -->
        <div class="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-xl border-4 border-white group hidden md:block">
          <img
            :src="images[3].src"
            :alt="images[3].alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      <!-- Right Side: Reservation Information -->
      <div 
        ref="contentRef"
        class="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background-cream order-1 md:order-2 w-full"
      >
        <div class="max-w-2xl w-full">
          <!-- Section Header -->
          <div class="mb-6 md:mb-8">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-restaurant font-normal text-primary-dark mb-4 md:mb-5" style="font-family: 'Italianno', cursive;">
              Reservations
            </h2>
            <div class="flex items-center gap-3 my-4 md:my-5">
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
              <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
            </div>
            <p class="text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed">
              We welcome reservations for parties of all sizes. Whether you're planning a romantic dinner for two or a celebration with family and friends, we're here to make your dining experience special.
            </p>
          </div>

          <!-- Reservation Information -->
          <div class="space-y-5 md:space-y-6">
            <!-- How to Reserve -->
            <div>
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-3 md:mb-4 font-semibold">How to Make a Reservation</h3>
              <div class="space-y-3 md:space-y-4">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">By Phone</h4>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                      Call us directly during our opening hours
                    </p>
                    <a href="tel:+496512345678" class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium">
                      +49 651 123 456 78
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">By Email</h4>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                      Send us an email with your preferred date and time
                    </p>
                    <a href="mailto:reservations@pizzeriaadria.de" class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium">
                      reservations@pizzeriaadria.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Location -->
            <div class="pt-6 border-t border-primary-dark/10">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">Location</h4>
                  <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                    Quintstraße 123, 54292 Trier-Quint, Germany
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Quintstraße+123,+54292+Trier-Quint,+Germany" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <!-- Reservation Details -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Reservation Details</h3>
              <div class="space-y-3 text-sm md:text-base text-primary-dark/70">
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>Reservations are recommended, especially for weekends and special occasions</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>Please inform us of any dietary restrictions or special requests when booking</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>Large party reservations (8+ guests) should be made at least 48 hours in advance</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>We accommodate private events and celebrations - contact us for special arrangements</p>
                </div>
              </div>
            </div>

            <!-- Opening Hours Reminder -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Best Times to Call</h3>
              <div class="bg-white p-4 rounded-lg border border-primary-dark/10">
                <p class="text-sm md:text-base text-primary-dark/70 mb-3">
                  For the best availability, we recommend calling during our quieter hours:
                </p>
                <div class="space-y-2 text-sm md:text-base text-primary-dark">
                  <div class="flex justify-between items-center">
                    <span class="font-light">Monday – Thursday</span>
                    <span class="font-medium">2:00 PM – 5:00 PM</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="font-light">Friday – Sunday</span>
                    <span class="font-medium">2:00 PM – 4:00 PM</span>
                  </div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const imagesRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

const images = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Restaurant Interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Dining Table'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Restaurant Ambiance'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Italian Cuisine'
  }
]

onMounted(() => {
  // Animate images container
  if (imagesRef.value) {
    gsap.fromTo(imagesRef.value,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imagesRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Animate content
  if (contentRef.value) {
    gsap.fromTo(contentRef.value,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

})
</script>

