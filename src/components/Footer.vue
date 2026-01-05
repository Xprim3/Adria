<template>
  <footer class="relative bg-primary-dark text-white overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10">
      <!-- Main Footer Content -->
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10">
        <div class="max-w-7xl mx-auto">
          <!-- Top Row: Logo, Links, Contact, Social -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6">
            <!-- Logo -->
            <div class="md:col-span-1">
              <h3 class="text-2xl md:text-3xl font-restaurant font-normal mb-2" style="font-family: 'Italianno', cursive;">
                Pizzeria Adria
              </h3>
              <p class="text-xs text-white/60">Seit 2003</p>
            </div>

            <!-- Quick Links -->
            <div>
              <h4 class="text-xs sm:text-sm uppercase tracking-wider text-white/90 mb-3 font-semibold">Schnelllinks</h4>
              <ul class="space-y-2">
                <li>
                  <a href="#about" @click.prevent="scrollToSection('about')" class="text-sm sm:text-base text-white/80 hover:text-primary-red transition-colors duration-300 min-h-[36px] flex items-center touch-manipulation">
                    Über Uns
                  </a>
                </li>
                <li>
                  <a href="#menu" @click.prevent="scrollToSection('menu')" class="text-sm sm:text-base text-white/80 hover:text-primary-red transition-colors duration-300 min-h-[36px] flex items-center touch-manipulation">
                    Speisekarte
                  </a>
                </li>
                <li>
                  <a href="#reservations" @click.prevent="scrollToSection('reservations')" class="text-sm sm:text-base text-white/80 hover:text-primary-red transition-colors duration-300 min-h-[36px] flex items-center touch-manipulation">
                    Reservierungen
                  </a>
                </li>
                <li>
                  <a href="#location" @click.prevent="scrollToSection('location')" class="text-sm sm:text-base text-white/80 hover:text-primary-red transition-colors duration-300 min-h-[36px] flex items-center touch-manipulation">
                    Standort
                  </a>
                </li>
              </ul>
            </div>

            <!-- Contact -->
            <div>
              <h4 class="text-xs sm:text-sm uppercase tracking-wider text-white/90 mb-3 font-semibold">Kontakt</h4>
              <div class="space-y-2 text-sm sm:text-base text-white/80">
                <p class="leading-relaxed">Koblenzer Str. 1F<br>54293 Trier</p>
                <a href="tel:+496519664588" class="hover:text-primary-red transition-colors duration-300 block min-h-[36px] flex items-center touch-manipulation">
                  +49 651 966 45 88
                </a>
                <a href="mailto:info@pizzeriaadria.de" class="hover:text-primary-red transition-colors duration-300 block min-h-[36px] flex items-center touch-manipulation break-all">
                  info@pizzeriaadria.de
                </a>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h4 class="text-xs sm:text-sm uppercase tracking-wider text-white/90 mb-3 font-semibold">Folgen Sie uns</h4>
              <div class="flex items-center gap-3">
                <a
                  v-if="facebookUrl"
                  :href="facebookUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-primary-red flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px]"
                  aria-label="Facebook"
                >
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  v-if="instagramUrl"
                  :href="instagramUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-primary-red flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px]"
                  aria-label="Instagram"
                >
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  v-if="tripadvisorUrl"
                  :href="tripadvisorUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-primary-red flex items-center justify-center transition-all duration-300 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px]"
                  aria-label="TripAdvisor"
                >
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="pt-6 border-t border-white/10">
            <div class="flex flex-col md:flex-row items-center justify-between gap-2">
              <p class="text-xs text-white/60 text-center md:text-left">
                © {{ currentYear }} Pizzeria Adria. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const API_URL = import.meta.env.VITE_API_URL || '/api'

// Default social media URLs (fallback)
const defaultFacebookUrl = 'https://www.facebook.com'
const defaultInstagramUrl = 'https://www.instagram.com'
const defaultTripadvisorUrl = 'https://www.tripadvisor.com'

const facebookUrl = ref(defaultFacebookUrl)
const instagramUrl = ref(defaultInstagramUrl)
const tripadvisorUrl = ref(defaultTripadvisorUrl)

const currentYear = computed(() => new Date().getFullYear())

// Load footer content from API
const loadFooterContent = async () => {
  try {
    const response = await fetch(`${API_URL}/content/footer`)
    const data = await response.json()
    
    // Load Facebook URL
    if (data.facebook?.value) {
      facebookUrl.value = data.facebook.value
    }
    
    // Load Instagram URL
    if (data.instagram?.value) {
      instagramUrl.value = data.instagram.value
    }
    
    // Load TripAdvisor URL
    if (data.tripadvisor?.value) {
      tripadvisorUrl.value = data.tripadvisor.value
    }
  } catch (error) {
    console.error('Error loading footer content:', error)
    // Keep default values on error
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(async () => {
  // Load content from API
  await loadFooterContent()
})
</script>
