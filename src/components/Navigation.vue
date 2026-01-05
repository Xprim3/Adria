<template>
  <nav 
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    ]"
  >
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a 
            href="#home" 
            @click.prevent="scrollToSection('home')"
            class="flex items-center gap-3"
          >
            <!-- Decorative divider -->
            <div 
              class="hidden lg:block w-px h-10"
              :class="isScrolled 
                ? 'bg-gradient-to-b from-primary-red via-primary-banner to-transparent opacity-60' 
                : 'bg-gradient-to-b from-white/80 via-white/60 to-transparent opacity-100'
              "
            ></div>
            
            <div class="flex flex-col">
              <h1 
                class="text-2xl lg:text-3xl xl:text-4xl font-restaurant font-normal tracking-wide leading-tight"
                :class="isScrolled 
                  ? 'text-primary-red' 
                  : 'text-white drop-shadow-lg'
                "
              >
                Adria
              </h1>
              <p 
                class="text-xs lg:text-sm xl:text-base font-normal tracking-wide leading-tight mt-0.5"
                style="font-family: 'Italiana', serif;"
                :class="isScrolled 
                  ? 'text-primary-dark/70' 
                  : 'text-white/80 drop-shadow-md'
                "
              >
                Pizzeria And Restaurant
              </p>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation - Clean Color Transitions Only -->
        <ul class="hidden lg:flex items-center gap-3 xl:gap-4" ref="navListRef">
          <li 
            v-for="item in navItems" 
            :key="item.id"
            class="relative"
          >
            <a
              :href="item.href"
              @click.prevent="scrollToSection(item.id)"
              :class="[
                'nav-link px-3 xl:px-4 py-2.5 text-sm xl:text-base font-medium transition-colors duration-300 whitespace-nowrap min-h-[44px] flex items-center',
                isScrolled
                  ? activeSection === item.id
                    ? 'text-primary-red'
                    : 'text-primary-dark/70 hover:text-primary-red'
                  : activeSection === item.id
                    ? 'text-white drop-shadow-md'
                    : 'text-white/80 hover:text-white'
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile/Tablet Menu Button -->
        <button
          @click="toggleMobileMenu"
          ref="mobileButtonRef"
          class="lg:hidden p-1.5 sm:p-2 text-white hover:text-white/80 transition-colors duration-300 focus:outline-none active:outline-none w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center touch-manipulation"
          aria-label="Toggle menu"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 drop-shadow-md"
            :class="isMobileMenuOpen ? 'rotate-90' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isMobileMenuOpen"
            @click="toggleMobileMenu"
            class="lg:hidden fixed inset-0 bg-black/50 z-[9998]"
          ></div>
        </Transition>
      </Teleport>

      <!-- Mobile Menu Sidebar -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-transform duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[9999] overflow-y-auto"
        >
          <!-- Header with Close Button -->
          <div class="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-end z-10">
            <button
              @click="toggleMobileMenu"
              class="p-1.5 text-gray-400 hover:text-primary-red hover:bg-gray-50 rounded-full transition-all duration-200"
              aria-label="Close menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Menu Items -->
          <div class="px-4 py-6">
            <ul class="space-y-1">
              <li 
                v-for="(item, index) in navItems" 
                :key="item.id"
                :ref="el => { if (el) mobileItemRefs[index] = el as HTMLLIElement }"
              >
                <a
                  :href="item.href"
                  @click.prevent="scrollToSection(item.id)"
                  class="flex items-center py-3.5 px-4 rounded-lg text-base font-medium transition-all duration-200 text-primary-dark hover:text-primary-red hover:bg-primary-red/5 active:bg-primary-red/10 min-h-[48px] touch-manipulation"
                >
                  <span class="flex-1">{{ item.label }}</span>
                  <svg class="w-5 h-5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
      </Teleport>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

const emit = defineEmits<{
  (e: 'openNews'): void
}>()

interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'Über Uns', href: '#about' },
  { id: 'news', label: 'Neuigkeiten', href: '#news' },
  { id: 'menu', label: 'Speisekarte', href: '#menu' },
  { id: 'reservations', label: 'Reservierung & Lieferung', href: '#reservations' },
  { id: 'testimonials', label: 'Bewertungen', href: '#testimonials' },
  { id: 'location', label: 'Kontakt', href: '#location' },
]

const navRef = ref<HTMLElement | null>(null)
const navListRef = ref<HTMLElement | null>(null)
const mobileButtonRef = ref<HTMLElement | null>(null)

const mobileItemRefs = ref<(HTMLLIElement | null)[]>([])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')
const isScrollingProgrammatically = ref(false)

const scrollToTop = () => {
  isMobileMenuOpen.value = false
  activeSection.value = 'home'
  isScrollingProgrammatically.value = true
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  
  setTimeout(() => {
    isScrollingProgrammatically.value = false
  }, 1000)
}

const scrollToSection = (sectionId: string) => {
  if (sectionId === 'home') {
    scrollToTop()
    return
  }
  
  if (sectionId === 'news') {
    isMobileMenuOpen.value = false
    emit('openNews')
    return
  }
  
  const element = document.getElementById(sectionId)
  if (element) {
    isMobileMenuOpen.value = false
    
    // Set active section immediately when clicked
    activeSection.value = sectionId
    
    // Prevent scroll detection from interfering
    isScrollingProgrammatically.value = true
    
    const headerHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    // Re-enable scroll detection after scroll completes
    setTimeout(() => {
      isScrollingProgrammatically.value = false
    }, 1000) // Wait for smooth scroll to complete
  }
}

const toggleMobileMenu = async () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  if (isMobileMenuOpen.value) {
    await nextTick()
    const items = mobileItemRefs.value.filter(Boolean) as HTMLElement[]
    if (items.length > 0) {
      gsap.fromTo(items, 
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
      )
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Don't update active section if we're programmatically scrolling
  if (isScrollingProgrammatically.value) {
    return
  }

  // If at the top, set home as active
  if (window.scrollY < 100) {
    activeSection.value = 'home'
    return
  }

  // Determine active section based on scroll position
  const sections = navItems
    .filter(item => item.id !== 'home' && item.id !== 'news') // Exclude home and news from section detection
    .map(item => ({
      id: item.id,
      element: document.getElementById(item.id)
    }))

  const scrollPosition = window.scrollY
  const headerHeight = 150 // Increased threshold

  // Find which section is currently in view - check from bottom to top
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.element) {
      const rect = section.element.getBoundingClientRect()
      const elementTop = rect.top + scrollPosition
      
      // Check if we've scrolled past the top of this section
      if (scrollPosition + headerHeight >= elementTop) {
        activeSection.value = section.id
        break
      }
    }
  }
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  await nextTick()

  // Navigation items entrance animation
  if (navListRef.value) {
    const links = navListRef.value.querySelectorAll('.nav-link')
    if (links.length > 0) {
      gsap.fromTo(Array.from(links),
        { opacity: 0, y: -10 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.5, 
          stagger: 0.1, 
          ease: 'power2.out', 
          delay: 0.3 
        }
      )
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
