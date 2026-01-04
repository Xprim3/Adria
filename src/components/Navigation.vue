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
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a 
            href="#home" 
            @click.prevent="scrollToSection('home')"
            class="flex items-center gap-3"
          >
            <!-- Decorative divider -->
            <div 
              class="hidden md:block w-px h-10"
              :class="isScrolled 
                ? 'bg-gradient-to-b from-primary-red via-primary-banner to-transparent opacity-60' 
                : 'bg-gradient-to-b from-white/80 via-white/60 to-transparent opacity-100'
              "
            ></div>
            
            <h1 
              class="text-xl md:text-2xl lg:text-3xl font-restaurant font-normal tracking-wide"
              :class="isScrolled 
                ? 'text-primary-red' 
                : 'text-white drop-shadow-lg'
              "
            >
              Pizzeria Adria
            </h1>
          </a>
        </div>

        <!-- Desktop Navigation - Clean Color Transitions Only -->
        <ul class="hidden md:flex items-center gap-2 lg:gap-4" ref="navListRef">
          <li 
            v-for="(item, index) in navItems" 
            :key="item.id"
            class="relative"
          >
            <a
              :href="item.href"
              @click.prevent="scrollToSection(item.id)"
              :class="[
                'nav-link px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium transition-colors duration-300',
                isScrolled
                  ? activeSection === item.id
                    ? 'text-primary-red'
                    : 'text-primary-dark/60 hover:text-primary-red'
                  : activeSection === item.id
                    ? 'text-white drop-shadow-md'
                    : 'text-white/70 hover:text-white'
              ]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          ref="mobileButtonRef"
          class="md:hidden p-2 transition-colors duration-300"
          :class="isScrolled ? 'text-primary-red hover:text-primary-banner' : 'text-white hover:text-primary-red'"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6 transition-transform duration-300 drop-shadow-md"
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

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden mt-2 pt-4 pb-2 rounded-lg backdrop-blur-md"
          :class="isScrolled ? 'bg-white/95 border-t border-primary-red/20' : 'bg-black/30 border-t border-white/20'"
        >
          <ul class="space-y-1">
            <li 
              v-for="(item, index) in navItems" 
              :key="item.id"
              :ref="el => { if (el) mobileItemRefs[index] = el as HTMLLIElement }"
            >
              <a
                :href="item.href"
                @click.prevent="scrollToSection(item.id)"
                :class="[
                  'block py-3 px-4 rounded-md text-base font-medium transition-all duration-200',
                  isScrolled
                    ? activeSection === item.id
                      ? 'text-primary-red bg-background-cream font-semibold'
                      : 'text-primary-dark hover:text-primary-red hover:bg-background-cream'
                    : activeSection === item.id
                      ? 'text-white bg-white/20 font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                ]"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'

interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'menu', label: 'Menu', href: '#menu' },
  { id: 'reservations', label: 'Reservation & Delivery', href: '#reservations' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'location', label: 'Location & Contact us', href: '#location' },
]

const navRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)
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
    .filter(item => item.id !== 'home') // Exclude home from section detection
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
