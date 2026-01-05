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
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Medium Image (Top Right) -->
          <div class="relative overflow-hidden group">
            <img
              :src="images[1].src"
              :alt="images[1].alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <!-- Medium Image (Bottom Right) -->
          <div class="relative overflow-hidden group">
            <img
              :src="images[2].src"
              :alt="images[2].alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
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
            loading="lazy"
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
            <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-restaurant font-normal text-primary-dark mb-4 md:mb-5 leading-tight" style="font-family: 'Italianno', cursive;">
              {{ heading || 'Reservierungen' }}
            </h2>
            <div class="flex items-center gap-3 my-4 md:my-5">
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary-red/40"></div>
              <div class="w-2 h-2 rounded-full bg-primary-red/60"></div>
              <div class="w-12 md:w-16 h-px bg-gradient-to-r from-primary-red/40 to-transparent"></div>
            </div>
            <p class="text-sm sm:text-base md:text-lg text-primary-dark/80 leading-relaxed">
              {{ description || 'Wir nehmen gerne Reservierungen für Gruppen jeder Größe entgegen. Ob Sie ein romantisches Dinner zu zweit oder eine Feier mit Familie und Freunden planen, wir sind hier, um Ihr kulinarisches Erlebnis besonders zu gestalten.' }}
            </p>
          </div>

          <!-- Reservation Information -->
          <div class="space-y-5 md:space-y-6">
            <!-- How to Reserve -->
            <div>
              <h3 class="text-xs sm:text-sm uppercase tracking-widest text-primary-red mb-3 md:mb-4 font-semibold">Wie Sie eine Reservierung vornehmen</h3>
              <div class="space-y-4 sm:space-y-5">
                <!-- Phone -->
                <div class="flex items-start gap-3 sm:gap-4">
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-base sm:text-lg md:text-xl font-semibold text-primary-dark mb-2">{{ phoneTitle }}</h4>
                    <p class="text-sm sm:text-base text-primary-dark/75 mb-3 leading-relaxed">
                      {{ phoneDescription }}
                    </p>
                    <a :href="`tel:${phone || '+496519664588'}`" class="inline-block text-base sm:text-lg md:text-xl text-primary-red hover:text-primary-banner transition-colors font-medium min-h-[44px] flex items-center touch-manipulation">
                      {{ phone || '+49 651 966 45 88' }}
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-3 sm:gap-4">
                  <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-red/10 flex items-center justify-center">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-base sm:text-lg md:text-xl font-semibold text-primary-dark mb-2">{{ emailTitle }}</h4>
                    <p class="text-sm sm:text-base text-primary-dark/75 mb-3 leading-relaxed">
                      {{ emailDescription }}
                    </p>
                    <a :href="`mailto:${email || 'reservations@pizzeriaadria.de'}`" class="inline-block text-base sm:text-lg md:text-xl text-primary-red hover:text-primary-banner transition-colors font-medium min-h-[44px] flex items-center touch-manipulation break-all">
                      {{ email || 'reservations@pizzeriaadria.de' }}
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
                  <h4 class="text-sm sm:text-base md:text-lg font-semibold text-primary-dark mb-1.5">{{ locationTitle }}</h4>
                  <p class="text-xs sm:text-sm md:text-base text-primary-dark/70 mb-2">
                    {{ locationAddress }}
                  </p>
                  <a 
                    :href="locationMapsLink || 'https://maps.app.goo.gl/HLMABPcUAv37hV1H7'" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-sm sm:text-base md:text-lg text-primary-red hover:text-primary-banner transition-colors font-medium"
                  >
                    Route anzeigen
                  </a>
                </div>
              </div>
            </div>

            <!-- Reservation Details -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs sm:text-sm uppercase tracking-widest text-primary-red mb-4 font-semibold">{{ reservationDetailsTitle }}</h3>
              <div class="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed">
                <div 
                  v-for="(item, index) in reservationDetailsItems" 
                  :key="index" 
                  class="flex items-start gap-3"
                >
                  <span class="text-primary-red font-semibold text-lg flex-shrink-0 mt-0.5">•</span>
                  <p>{{ item }}</p>
                </div>
              </div>
            </div>

            <!-- Opening Hours Reminder -->
            <div class="pt-6 border-t border-primary-dark/10">
              <h3 class="text-xs sm:text-sm uppercase tracking-widest text-primary-red mb-4 font-semibold">{{ bestCallTimesTitle }}</h3>
              <div class="bg-white p-4 sm:p-5 rounded-lg border border-primary-dark/10">
                <p class="text-sm sm:text-base md:text-lg text-primary-dark/75 mb-4 leading-relaxed">
                  {{ bestCallTimesDescription }}
                </p>
                <div class="space-y-3 text-sm sm:text-base md:text-lg text-primary-dark">
                  <div 
                    v-for="(timeSlot, index) in bestCallTimes" 
                    :key="index" 
                    class="flex justify-between items-center py-1"
                  >
                    <span class="font-light">{{ timeSlot.days }}</span>
                    <span class="font-medium">{{ timeSlot.time }}</span>
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

const API_URL = import.meta.env.VITE_API_URL || '/api'

const imagesRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

// Default values (fallback)
const defaultImages = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Pizzeria Adria Restaurant Innenraum - Reservierungen in Trier'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Gedeckter Tisch in Pizzeria Adria Trier - Reservierung für romantisches Dinner'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Gemütliche Restaurant-Atmosphäre in Pizzeria Adria Trier'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Italienische Küche in Pizzeria Adria Trier - Authentische Gerichte'
  }
]

const heading = ref('Reservierungen')
const description = ref('Wir nehmen gerne Reservierungen für Gruppen jeder Größe entgegen. Ob Sie ein romantisches Dinner zu zweit oder eine Feier mit Familie und Freunden planen, wir sind hier, um Ihr kulinarisches Erlebnis besonders zu gestalten.')
const phone = ref('+49 651 966 45 88')
const email = ref('reservations@pizzeriaadria.de')
const phoneTitle = ref('Per Telefon')
const phoneDescription = ref('Rufen Sie uns direkt während unserer Öffnungszeiten an')
const emailTitle = ref('Per E-Mail')
const emailDescription = ref('Senden Sie uns eine E-Mail mit Ihrem bevorzugten Datum und Ihrer Uhrzeit')
const locationTitle = ref('Standort')
const locationAddress = ref('Koblenzer Str. 1F, 54293 Trier, Deutschland')
const locationMapsLink = ref('https://maps.app.goo.gl/HLMABPcUAv37hV1H7')
const reservationDetailsTitle = ref('Reservierungsdetails')
const reservationDetailsItems = ref([
  'Reservierungen werden empfohlen, insbesondere für Wochenenden und besondere Anlässe',
  'Bitte informieren Sie uns bei der Buchung über diätetische Einschränkungen oder besondere Wünsche',
  'Reservierungen für größere Gruppen (8+ Gäste) sollten mindestens 48 Stunden im Voraus vorgenommen werden',
  'Wir richten private Veranstaltungen und Feiern aus - kontaktieren Sie uns für spezielle Arrangements'
])
const bestCallTimesTitle = ref('Beste Anrufzeiten')
const bestCallTimesDescription = ref('Für die beste Verfügbarkeit empfehlen wir, während unserer ruhigeren Stunden anzurufen:')
const bestCallTimes = ref([
  { days: 'Montag – Donnerstag', time: '14:00 – 17:00 Uhr' },
  { days: 'Freitag – Sonntag', time: '14:00 – 16:00 Uhr' }
])
const images = ref(defaultImages)

// Load reservation content from API
const loadReservationContent = async () => {
  try {
    const response = await fetch(`${API_URL}/content/reservation`)
    const data = await response.json()
    
    // Load heading
    if (data.heading?.value) {
      heading.value = data.heading.value
    }
    
    // Load description
    if (data.description?.value) {
      description.value = data.description.value
    }
    
    // Load phone
    if (data.phone?.value) {
      phone.value = data.phone.value
    }
    
    // Load email
    if (data.email?.value) {
      email.value = data.email.value
    }
    
    // Load phone order info
    if (data.phoneTitle?.value) {
      phoneTitle.value = data.phoneTitle.value
    }
    if (data.phoneDescription?.value) {
      phoneDescription.value = data.phoneDescription.value
    }
    
    // Load email order info
    if (data.emailTitle?.value) {
      emailTitle.value = data.emailTitle.value
    }
    if (data.emailDescription?.value) {
      emailDescription.value = data.emailDescription.value
    }
    
    // Load location info
    if (data.locationTitle?.value) {
      locationTitle.value = data.locationTitle.value
    }
    if (data.locationAddress?.value) {
      locationAddress.value = data.locationAddress.value
    }
    if (data.locationMapsLink?.value) {
      locationMapsLink.value = data.locationMapsLink.value
    }
    
    // Load reservation details
    if (data.reservationDetailsTitle?.value) {
      reservationDetailsTitle.value = data.reservationDetailsTitle.value
    }
    if (data.reservationDetailsItems?.value) {
      try {
        const parsed = JSON.parse(data.reservationDetailsItems.value)
        if (Array.isArray(parsed) && parsed.length > 0) {
          reservationDetailsItems.value = parsed
        }
      } catch (e) {
        console.error('Error parsing reservation details items:', e)
      }
    }
    
    // Load best call times
    if (data.bestCallTimesTitle?.value) {
      bestCallTimesTitle.value = data.bestCallTimesTitle.value
    }
    if (data.bestCallTimesDescription?.value) {
      bestCallTimesDescription.value = data.bestCallTimesDescription.value
    }
    if (data.bestCallTimes?.value) {
      try {
        const parsed = JSON.parse(data.bestCallTimes.value)
        if (Array.isArray(parsed) && parsed.length > 0) {
          bestCallTimes.value = parsed
        }
      } catch (e) {
        console.error('Error parsing best call times:', e)
      }
    }
    
    // Load images
    if (data.images?.value) {
      try {
        const parsedImages = JSON.parse(data.images.value)
        if (Array.isArray(parsedImages) && parsedImages.length >= 4) {
          // Map image URLs to image objects with alt text
          images.value = parsedImages.map((url: string, index: number) => ({
            src: url || defaultImages[index].src,
            alt: defaultImages[index].alt
          }))
        }
      } catch (e) {
        console.error('Error parsing images:', e)
      }
    }
  } catch (error) {
    console.error('Error loading reservation content:', error)
    // Keep default values on error
  }
}

onMounted(async () => {
  // Load content from API
  await loadReservationContent()
  
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

