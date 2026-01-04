<template>
  <section id="delivery" class="relative bg-background-cream overflow-hidden">
    <!-- Main Content Grid -->
    <div class="grid md:grid-cols-2 md:items-stretch">
      <!-- Left Side: Delivery Information -->
      <div 
        ref="contentRef"
        class="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background-cream order-1 md:order-1 w-full"
      >
        <div class="max-w-2xl w-full">
          <!-- Section Header -->
          <div class="mb-6 md:mb-8">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-restaurant font-normal text-primary-dark mb-4 md:mb-5" style="font-family: 'Italianno', cursive;">
              Delivery
            </h2>
            <div class="flex items-center gap-3 my-4 md:my-5">
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
              <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
            </div>
            <p class="text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed">
              Enjoy our authentic Italian cuisine in the comfort of your home. We partner with Lieferando to bring our delicious pizzas, pastas, and specialties directly to your door.
            </p>
          </div>

          <!-- Delivery Information -->
          <div class="space-y-5 md:space-y-6">
            <!-- How to Order -->
            <div>
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">How to Order</h3>
              <div class="space-y-4">
                <!-- Order by Phone -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">Order by Phone</h4>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                      Call us directly to place your order for delivery or pickup
                    </p>
                    <a href="tel:+496512345678" class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium">
                      +49 651 123 456 78
                    </a>
                  </div>
                </div>

                <!-- Our Delivery Service -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">Our Delivery Service</h4>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                      Fast and reliable delivery directly from our kitchen to your door
                    </p>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70">
                      We deliver fresh, hot meals prepared with care and delivered with speed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Delivery Details -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Delivery Information</h3>
              <div class="space-y-3 text-sm md:text-base text-primary-dark/70">
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>We deliver directly from our restaurant to your door</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>We primarily serve the region close to our restaurant - please call us to confirm if we deliver to your address</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>Multiple payment options: cash on delivery, card, or online payment</p>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-primary-red font-semibold">•</span>
                  <p>Minimum order value may apply - delivery times vary based on distance and order volume</p>
                </div>
              </div>
            </div>

            <!-- Alternative: Lieferando -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Alternative Ordering Option</h3>
              <div class="bg-white p-4 rounded-lg border border-primary-dark/10">
                <p class="text-sm md:text-base text-primary-dark/70 mb-3">
                  You can also order through our partner <strong class="text-primary-dark">Lieferando</strong> for online ordering convenience.
                </p>
                <a 
                  href="https://www.lieferando.de/en/menu/ristorante-pizzeria-adria-trier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm md:text-base text-primary-red hover:text-primary-banner transition-colors font-medium"
                >
                  <span>Order on Lieferando</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Delivery Images -->
      <div 
        ref="imagesRef"
        class="relative h-[400px] md:h-full w-full order-2 md:order-2 overflow-hidden"
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
      { opacity: 0, x: 50 },
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
      { opacity: 0, x: -50 },
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

