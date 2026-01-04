<template>
  <div class="min-h-screen">
    <!-- Navigation - Transparent overlay -->
    <Navigation @open-news="isNewsOpen = true" />
    
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Story Divider -->
    <StoryDivider />

    <!-- About Us Section -->
    <AboutSection />

    <!-- Menu Divider -->
    <MenuDivider />

    <!-- Menu Section -->
    <MenuSection />

    <!-- Section Divider -->
    <SectionDivider />

    <!-- Reservation Section -->
    <ReservationSection />

    <!-- Delivery Section -->
    <DeliverySection />

    <!-- Testimonials Divider -->
    <TestimonialsDivider />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Location Divider -->
    <LocationDivider />

    <!-- Location Section -->
    <LocationSection />

    <!-- Thank You Divider -->
    <ThankYouDivider />

    <!-- Footer -->
    <Footer />

    <!-- Back to Top Button -->
    <BackToTop />

    <!-- News Modal -->
    <NewsModal :is-open="isNewsOpen" @close="isNewsOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import HeroSlider from '../components/HeroSlider.vue'
import StoryDivider from '../components/StoryDivider.vue'
import AboutSection from '../components/AboutSection.vue'
import MenuDivider from '../components/MenuDivider.vue'
import MenuSection from '../components/MenuSection.vue'
import SectionDivider from '../components/SectionDivider.vue'
import ReservationSection from '../components/ReservationSection.vue'
import DeliverySection from '../components/DeliverySection.vue'
import TestimonialsDivider from '../components/TestimonialsDivider.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import LocationDivider from '../components/LocationDivider.vue'
import LocationSection from '../components/LocationSection.vue'
import ThankYouDivider from '../components/ThankYouDivider.vue'
import Footer from '../components/Footer.vue'
import BackToTop from '../components/BackToTop.vue'
import NewsModal from '../components/NewsModal.vue'

const isNewsOpen = ref(false)

onMounted(() => {
  // Component mounted
})
</script>

