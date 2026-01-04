<template>
  <div class="min-h-screen">
    <!-- Navigation - Transparent overlay -->
    <Navigation />
    
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Story Divider -->
    <StoryDivider />

    <!-- About Us Section -->
    <AboutSection />

    <section id="menu" class="min-h-screen flex items-center justify-center bg-background-cream py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-primary-red mb-8 text-center">
          Speisekarte
        </h2>
        <p class="text-lg text-primary-dark max-w-3xl mx-auto text-center">
          Test section for navigation highlighting
        </p>
      </div>
    </section>

    <section id="gallery" class="min-h-screen flex items-center justify-center bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-primary-red mb-8 text-center">
          Galerie
        </h2>
        <p class="text-lg text-primary-dark max-w-3xl mx-auto text-center">
          Test section for navigation highlighting
        </p>
      </div>
    </section>

    <section id="contact" class="min-h-screen flex items-center justify-center bg-background-cream py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-5xl font-bold text-primary-red mb-8 text-center">
          Kontakt
        </h2>
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h3 class="text-2xl font-semibold mb-4 text-primary-dark">
            Technology Stack Test
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>Vue 3: {{ vueVersion }}</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>TypeScript: Working</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>Vite: Development server running</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>Tailwind CSS: Styled with brand colors</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>GSAP: {{ gsapLoaded ? 'Loaded' : 'Loading...' }}</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span>Hero Slider: Working</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { version } from 'vue'
import gsap from 'gsap'
import Navigation from './components/Navigation.vue'
import HeroSlider from './components/HeroSlider.vue'
import StoryDivider from './components/StoryDivider.vue'
import AboutSection from './components/AboutSection.vue'
import BackToTop from './components/BackToTop.vue'

const vueVersion = ref(version)
const gsapLoaded = ref(false)

onMounted(() => {
  gsapLoaded.value = true
})
</script>
