<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Main Content Grid -->
    <div class="grid md:grid-cols-2">
      <!-- Left Side: Google Maps -->
      <!-- 
        To get the exact embed URL:
        1. Open your Google Maps link: https://maps.app.goo.gl/HLMABPcUAv37hV1H7
        2. Click "Share" or the three dots menu
        3. Select "Embed a map"
        4. Copy the src URL from the iframe code and replace the src below
      -->
      <div 
        ref="mapRef"
        class="relative h-[400px] md:h-full w-full order-2 md:order-1 overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d754.9471666166667!2d6.7032471!3d49.8231709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47957df446438395%3A0xc477328cdb45524c!2sPizzeria%20Adria!5e1!3m2!1sde!2sde!4v1767531167302!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-full"
        ></iframe>
      </div>

      <!-- Right Side: Location Information -->
      <div 
        ref="contentRef"
        class="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background-cream order-1 md:order-2 w-full"
      >
        <div class="max-w-2xl w-full">
          <!-- Section Header -->
          <div class="mb-6 md:mb-8">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-restaurant font-normal text-primary-dark mb-4 md:mb-5" style="font-family: 'Italianno', cursive;">
              Finden Sie uns
            </h2>
            <div class="flex items-center gap-3 my-4 md:my-5">
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
              <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
            </div>
            <p class="text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed">
              Besuchen Sie uns in unserem Restaurant in Trier. Wir sind günstig gelegen und leicht mit dem Auto oder öffentlichen Verkehrsmitteln erreichbar.
            </p>
          </div>

          <!-- Location Information -->
          <div class="space-y-5 md:space-y-6">
            <!-- Address -->
            <div>
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Adresse</h3>
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                  <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm sm:text-base md:text-lg text-primary-dark font-medium mb-2">
                    Koblenzer Str. 1F<br>
                    54293 Trier<br>
                    Germany
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/HLMABPcUAv37hV1H7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium"
                  >
                    <span>Route anzeigen</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Kontakt</h3>
              <div class="space-y-4">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-1">Telefon</p>
                    <a href="tel:+496519664588" class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium">
                      +49 651 966 45 88
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
                    <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-1">E-Mail</p>
                    <a href="mailto:info@pizzeriaadria.de" class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium">
                      info@pizzeriaadria.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Opening Hours -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs uppercase tracking-widest text-primary-red mb-4 font-semibold">Öffnungszeiten</h3>
              <div class="bg-white p-4 rounded-lg border border-primary-dark/10">
                <div class="space-y-2 text-sm md:text-base text-primary-dark">
                  <div class="flex justify-between items-center">
                    <span class="font-light">Montag – Donnerstag</span>
                    <span class="font-medium">11:30 – 22:00 Uhr</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="font-light">Freitag – Samstag</span>
                    <span class="font-medium">11:30 – 23:00 Uhr</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="font-light">Sonntag</span>
                    <span class="font-medium">12:00 – 22:00 Uhr</span>
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
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const contentRef = ref<HTMLElement | null>(null)
const mapRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animate map
  if (mapRef.value) {
    gsap.fromTo(mapRef.value,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mapRef.value,
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

