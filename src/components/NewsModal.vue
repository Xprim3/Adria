<template>
  <!-- Modal Overlay -->
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      @click.self="closeModal"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>

      <!-- Clean Modern Modal -->
      <div class="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl">
        <!-- Header with Close Button -->
        <div class="sticky top-0 z-30 bg-gradient-to-r from-primary-red to-primary-banner px-6 md:px-8 py-5 md:py-6 flex items-center justify-between border-b border-primary-red/20">
          <h2 class="text-2xl md:text-3xl font-restaurant font-normal text-white" style="font-family: 'Italianno', cursive;">
            Neuigkeiten & Updates
          </h2>
          <button
            @click="closeModal"
            class="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-primary-red transition-all duration-300 flex items-center justify-center shadow-md"
            aria-label="Close"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 md:p-8 max-h-[calc(90vh-100px)] overflow-y-auto bg-white">

          <!-- News Content -->
          <div class="space-y-6">
            <div
              v-for="(item, index) in newsItems"
              :key="index"
              class="relative pb-6 border-b border-primary-dark/10 last:border-0 last:pb-0"
            >
              <!-- Date and Badge -->
              <div class="flex items-center gap-3 mb-3 flex-wrap">
                <time class="text-sm font-semibold text-primary-dark/70">{{ formatDate(item.date) }}</time>
                <span 
                  class="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                  :class="getBadgeClass(item.type)"
                >
                  {{ item.type }}
                </span>
              </div>
              
              <!-- Title -->
              <h3 class="text-xl md:text-2xl font-semibold text-primary-dark mb-3" style="font-family: 'Playfair Display', serif;">
                {{ item.title }}
              </h3>
              
              <!-- Content -->
              <div class="text-base md:text-lg text-primary-dark/80 leading-relaxed whitespace-pre-line" style="font-family: 'Playfair Display', serif;">
                {{ item.content }}
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="newsItems.length === 0" class="text-center py-12">
              <p class="text-base text-primary-dark/60 italic">Derzeit keine Neuigkeiten oder Updates. Schauen Sie bald wieder vorbei!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

interface NewsItem {
  id?: number
  type: 'event' | 'news' | 'update' | 'announcement'
  title: string
  content: string
  date: string
}

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const API_URL = import.meta.env.VITE_API_URL || '/api'
const newsItems = ref<NewsItem[]>([])
const loading = ref(false)

const loadNews = async () => {
  loading.value = true
  try {
    const response = await fetch(`${API_URL}/news`)
    if (response.ok) {
      newsItems.value = await response.json()
    }
  } catch (error) {
    console.error('Error loading news:', error)
    // Fallback to empty array if API fails
    newsItems.value = []
  } finally {
    loading.value = false
  }
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    loadNews()
  }
})

onMounted(() => {
  loadNews()
})

const closeModal = () => {
  emit('close')
}

const getBadgeClass = (type: string) => {
  const classes = {
    event: 'bg-primary-red/10 text-primary-red border border-primary-red/30',
    news: 'bg-blue-100 text-blue-700 border border-blue-300',
    update: 'bg-green-100 text-green-700 border border-green-300',
    announcement: 'bg-yellow-100 text-yellow-700 border border-yellow-300'
  }
  return classes[type as keyof typeof classes] || 'bg-gray-100 text-gray-700 border border-gray-300'
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  })
}

// Close on Escape key
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
  opacity: 0;
}
</style>

