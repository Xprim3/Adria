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

      <!-- Wooden Menu Board Modal -->
      <div class="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div class="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 rounded-lg shadow-2xl border-4 border-amber-700/80 relative overflow-hidden">
          <!-- Wood Grain Texture -->
          <div class="absolute inset-0 opacity-20" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 69, 19, 0.3) 2px, rgba(139, 69, 19, 0.3) 4px);"></div>
          
          <!-- Decorative Border -->
          <div class="absolute inset-2 border-2 border-amber-600/40 rounded"></div>
          
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-primary-red hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg border border-white/30"
            aria-label="Close"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Menu Board Content -->
          <div class="p-8 md:p-10 max-h-[90vh] overflow-y-auto relative z-10">
            <!-- Header -->
            <div class="text-center mb-8 pb-6 border-b-2 border-white/20">
              <h2 class="text-3xl md:text-4xl font-restaurant font-normal text-white mb-3 drop-shadow-lg" style="font-family: 'Italianno', cursive;">
                Information
              </h2>
              <div class="w-24 h-px bg-white/40 mx-auto"></div>
            </div>

            <!-- Information Content -->
            <div class="space-y-6">
              <div
                v-for="(info, index) in information"
                :key="index"
                class="relative min-h-[50px]"
              >
                <!-- Title -->
                <h3 class="text-lg md:text-xl font-semibold text-white mb-3 drop-shadow-md" style="font-family: 'Playfair Display', serif;">
                  {{ info.title }}
                </h3>
                
                <!-- Content -->
                <div class="text-sm md:text-base text-white/95 leading-relaxed whitespace-pre-line drop-shadow-sm" style="font-family: 'Playfair Display', serif;">
                  {{ info.content }}
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="information.length === 0" class="text-center py-12">
                <p class="text-sm text-white/60 italic">Add your information here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Information {
  title: string
  content: string
}

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const information = ref<Information[]>([
  {
    title: 'Opening Hours',
    content: `Monday – Thursday: 11:30 AM – 10:00 PM
Friday – Saturday: 11:30 AM – 11:00 PM
Sunday: 12:00 PM – 10:00 PM`
  },
  {
    title: 'Contact Information',
    content: `Phone: +49 651 966 45 88
Email: info@pizzeriaadria.de
Address: Koblenzer Str. 1F, 54293 Trier, Germany`
  },
  {
    title: 'Reservations',
    content: `We welcome reservations for parties of all sizes. Please call us during our opening hours or send us an email with your preferred date and time.`
  },
  {
    title: 'Delivery & Takeout',
    content: `We offer delivery and takeout services. You can order directly by phone or through our partner Lieferando. Minimum order may apply.`
  }
])

const closeModal = () => {
  emit('close')
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

