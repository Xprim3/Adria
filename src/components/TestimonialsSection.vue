<template>
  <section id="testimonials" class="relative bg-gradient-to-b from-white via-background-cream/30 to-white py-12 md:py-16 lg:py-20 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary-red/5 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative z-10 w-full">
      <!-- Compact Carousel Container -->
      <div class="relative overflow-hidden max-w-6xl mx-auto">
        <div 
          ref="carouselTrackRef"
          class="flex transition-transform duration-1000 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Review Groups (responsive: 1 mobile, 2 tablet, 3 desktop) -->
          <div
            v-for="(group, groupIndex) in reviewGroups"
            :key="groupIndex"
            class="w-full flex-shrink-0 flex"
          >
            <!-- Individual Reviews in Group -->
            <div
              v-for="(review, reviewIndex) in group"
              :key="reviewIndex"
              class="w-full sm:w-1/2 md:w-1/3 px-3 sm:px-4 md:px-6"
            >
            <div class="h-full flex flex-col items-center text-center">
              <!-- Star Rating -->
              <div class="flex items-center justify-center gap-1 mb-3">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-4 h-4 md:w-5 md:h-5"
                  :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <!-- Quote Icon -->
              <div class="flex justify-center mb-4">
                <svg class="w-8 h-8 md:w-10 md:h-10 text-primary-red/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <!-- Review Text -->
              <p class="text-sm sm:text-base md:text-lg lg:text-xl text-primary-dark/90 leading-relaxed mb-4 flex-1 px-2" style="font-family: 'Playfair Display', serif;">
                "{{ review.text }}"
              </p>

              <!-- Reviewer Info -->
              <div class="pt-4 border-t border-primary-dark/10 w-full">
                <p class="text-sm sm:text-base font-semibold text-primary-dark mb-1">{{ review.author }}</p>
                <p class="text-xs sm:text-sm text-primary-dark/70">{{ formatDate(review.date) }}</p>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Review {
  rating: number
  text: string
  author: string
  date: string
}

const carouselTrackRef = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const itemsPerSlide = ref(3) // Will be updated based on screen size
let autoScrollInterval: number | null = null

// Default reviews (fallback)
const defaultReviews: Review[] = [
  {
    rating: 5,
    text: 'Absolutely fantastic pizza! The wood-fired crust was perfect and the ingredients were fresh. The service was excellent and the atmosphere was warm and welcoming. Highly recommend!',
    author: 'Michael Schmidt',
    date: '2024-01-15'
  },
  {
    rating: 5,
    text: 'Best Italian restaurant in Trier-Quint! The pasta was homemade and delicious, and the staff was very friendly. We will definitely be back soon.',
    author: 'Sarah Müller',
    date: '2024-01-10'
  },
  {
    rating: 5,
    text: 'Authentic Italian flavors that remind me of my trip to Italy. The Margherita pizza was outstanding, and the tiramisu was the perfect ending to our meal.',
    author: 'Thomas Weber',
    date: '2024-01-08'
  },
  {
    rating: 5,
    text: 'Great food, great service, great prices! The restaurant has a cozy atmosphere and the owner was very welcoming. The pizza selection is impressive.',
    author: 'Anna Fischer',
    date: '2024-01-05'
  },
  {
    rating: 5,
    text: 'We ordered delivery and the food arrived hot and fresh. The packaging was excellent and everything tasted amazing. Will order again!',
    author: 'David Klein',
    date: '2024-01-03'
  },
  {
    rating: 5,
    text: 'Perfect place for a family dinner. The kids loved the pizza and we adults enjoyed the wine selection. The staff accommodated all our requests.',
    author: 'Julia Hoffmann',
    date: '2023-12-28'
  },
  {
    rating: 5,
    text: 'The ambiance is perfect for a romantic dinner. The food quality is exceptional and the wine pairing suggestions were spot on. We had an amazing evening!',
    author: 'Robert Wagner',
    date: '2024-01-12'
  },
  {
    rating: 5,
    text: 'Outstanding service from start to finish. The staff made us feel like family and the authentic Italian dishes brought back memories of our trip to Rome.',
    author: 'Maria Schneider',
    date: '2024-01-14'
  },
  {
    rating: 5,
    text: 'Best pizza in the region! The ingredients are always fresh and the flavors are authentic. We come here regularly and are never disappointed.',
    author: 'Peter Hoffmann',
    date: '2024-01-16'
  }
]

const reviews = ref<Review[]>(defaultReviews)

const API_URL = import.meta.env.VITE_API_URL || '/api'

// Load testimonials from API
const loadTestimonials = async () => {
  try {
    const response = await fetch(`${API_URL}/content/testimonials`)
    const data = await response.json()
    
    if (data.items?.value) {
      try {
        const parsed = JSON.parse(data.items.value)
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter out incomplete testimonials and ensure all required fields
          const validTestimonials = parsed.filter((item: any) => 
            item.text && item.text.trim() && 
            item.author && item.author.trim() && 
            item.date && 
            item.rating >= 1 && item.rating <= 5
          )
          if (validTestimonials.length > 0) {
            reviews.value = validTestimonials
          }
        }
      } catch (e) {
        console.error('Error parsing testimonials:', e)
      }
    }
  } catch (error) {
    console.error('Error loading testimonials:', error)
    // Keep default values on error
  }
}

// Group reviews based on screen size
const reviewGroups = computed(() => {
  const groups: Review[][] = []
  const perSlide = itemsPerSlide.value
  
  for (let i = 0; i < reviews.value.length; i += perSlide) {
    groups.push(reviews.value.slice(i, i + perSlide))
  }
  return groups
})

// Update items per slide based on screen size
const updateItemsPerSlide = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 640) { // Mobile
      itemsPerSlide.value = 1
    } else if (width < 768) { // Small tablet
      itemsPerSlide.value = 2
    } else { // Desktop
      itemsPerSlide.value = 3
    }
    // Reset to first slide when changing breakpoint
    currentIndex.value = 0
  }
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % reviewGroups.value.length
}

const startAutoScroll = () => {
  autoScrollInterval = window.setInterval(() => {
    nextSlide()
  }, 8000) // Slower: 8 seconds instead of 5
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
    autoScrollInterval = null
  }
}

const resetAutoScroll = () => {
  stopAutoScroll()
  startAutoScroll()
}

onMounted(async () => {
  // Load testimonials from API
  await loadTestimonials()
  
  // Set initial items per slide
  updateItemsPerSlide()
  
  // Listen for window resize
  window.addEventListener('resize', updateItemsPerSlide)
  
  // Start auto-scroll
  startAutoScroll()
  
  // Pause on hover
  if (carouselTrackRef.value) {
    const container = carouselTrackRef.value.closest('section')
    if (container) {
      container.addEventListener('mouseenter', stopAutoScroll)
      container.addEventListener('mouseleave', startAutoScroll)
    }
  }
})

onUnmounted(() => {
  stopAutoScroll()
  window.removeEventListener('resize', updateItemsPerSlide)
  if (carouselTrackRef.value) {
    const container = carouselTrackRef.value.closest('section')
    if (container) {
      container.removeEventListener('mouseenter', stopAutoScroll)
      container.removeEventListener('mouseleave', startAutoScroll)
    }
  }
})
</script>
