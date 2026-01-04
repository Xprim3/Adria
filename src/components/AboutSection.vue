<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Main Content Grid - Full Width -->
    <div class="grid md:grid-cols-2">
      <!-- Image Side - Full Width -->
      <div 
        ref="imageRef"
        class="relative h-[400px] md:h-full w-full order-2 md:order-1 overflow-hidden"
      >
        <img
          :src="mainImage"
          alt="Pizzeria Adria Restaurant Innenraum - Authentische italienische Atmosphäre in Trier"
          class="w-full h-full object-cover"
          loading="lazy"
          width="1974"
          height="1316"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <!-- Text Side - Full Width -->
      <div 
        ref="textRef"
        class="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-background-cream order-1 md:order-2 w-full md:h-full"
      >
        <div class="max-w-2xl w-full">
          <!-- Owner's Story -->
          <div>
            <div class="space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg text-primary-dark/75 leading-relaxed font-sans">
              <p v-if="paragraph1" class="font-light">
                {{ paragraph1 }}
              </p>
              <p v-if="paragraph2" class="font-light">
                {{ paragraph2 }}
              </p>
              <p v-if="paragraph3" class="font-light">
                {{ paragraph3 }}
              </p>
              <p v-if="ownerName" class="font-light text-primary-dark/85 mt-6 md:mt-8 text-right text-xl sm:text-2xl md:text-3xl" style="font-family: 'Italianno', cursive; font-weight: 400;">
                — {{ ownerName }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Sections - Full Width Image Cards in One Row -->
    <div ref="featuresContainerRef" class="w-full grid grid-cols-2 md:grid-cols-4">
      <!-- Pasta Section -->
      <div 
        ref="pastaRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('pasta')"
        @mouseleave="handleSectionLeave('pasta')"
      >
        <div class="absolute inset-0">
          <img
            :src="features[0]?.image || 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'"
            alt="Frische handgemachte Pasta - Pizzeria Adria Trier"
            class="w-full h-full object-cover"
            loading="lazy"
            width="2000"
            height="1333"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              {{ features[0]?.name || 'Pasta' }}
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              {{ features[0]?.description || 'Mehl. Eier. Wasser. Handgemacht.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Salads Section -->
      <div 
        ref="saladsRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('salads')"
        @mouseleave="handleSectionLeave('salads')"
      >
        <div class="absolute inset-0">
          <img
            :src="features[1]?.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'"
            alt="Frische Salate - Pizzeria Adria Trier"
            class="w-full h-full object-cover"
            loading="lazy"
            width="2000"
            height="1333"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              {{ features[1]?.name || 'Salate' }}
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              {{ features[1]?.description || 'Frisch, knackig und lebendig.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Pizza Section -->
      <div 
        ref="pizzaRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('pizza')"
        @mouseleave="handleSectionLeave('pizza')"
      >
        <div class="absolute inset-0">
          <img
            :src="features[2]?.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'"
            alt="Holzofen-Pizza - Pizzeria Adria Trier"
            class="w-full h-full object-cover"
            loading="lazy"
            width="2000"
            height="1333"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              {{ features[2]?.name || 'Pizza' }}
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              {{ features[2]?.description || 'Holzofen-Perfektion.' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Antipasti Section -->
      <div 
        ref="antipastiRef"
        class="relative h-[300px] md:h-[350px] w-full overflow-hidden group cursor-pointer"
        @mouseenter="handleSectionHover('antipasti')"
        @mouseleave="handleSectionLeave('antipasti')"
      >
        <div class="absolute inset-0">
          <img
            :src="features[3]?.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'"
            alt="Italienische Antipasti - Pizzeria Adria Trier"
            class="w-full h-full object-cover"
            loading="lazy"
            width="2000"
            height="1333"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50"></div>
        </div>
        
        <div class="relative h-full flex items-center justify-center">
          <div class="text-center px-2 md:px-4">
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-restaurant font-normal text-white mb-2 drop-shadow-2xl">
              {{ features[3]?.name || 'Antipasti' }}
            </h3>
            <p class="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg">
              {{ features[3]?.description || 'Frische Zutaten. Traditionell.' }}
            </p>
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

const imageRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLElement | null>(null)
const featuresContainerRef = ref<HTMLElement | null>(null)
const pastaRef = ref<HTMLElement | null>(null)
const saladsRef = ref<HTMLElement | null>(null)
const pizzaRef = ref<HTMLElement | null>(null)
const antipastiRef = ref<HTMLElement | null>(null)

// Content refs with defaults
const paragraph1 = ref('Meine Leidenschaft für die italienische Küche entdeckte ich in meinen frühen Jahren, als ich in Küchen in ganz Italien arbeitete, wo ich die Kunst der traditionellen Pizzabereitung und Pastenherstellung erlernte. Diese prägenden Jahre lehrten mich, dass authentisches italienisches Kochen nicht nur um Rezepte geht—es geht um Technik, qualitativ hochwertige Zutaten und die Geduld, Aromen natürlich entwickeln zu lassen.')
const paragraph2 = ref('Im Jahr 2003 eröffnete ich die Pizzeria Adria in Trier-Quint mit der Vision, echte italienische Aromen in unsere Gemeinde zu bringen. Im Laufe der Jahre sind wir zu einem beliebten Treffpunkt in der Nachbarschaft geworden, bekannt für unsere Holzofen-Pizzen und handgemachten Pasten. Unser Engagement, nur die besten Zutaten und traditionelle Methoden zu verwenden, hat uns eine treue Stammkundschaft eingebracht, die authentische italienische Küche zu schätzen weiß.')
const paragraph3 = ref('Heute gedeiht die Pizzeria Adria weiterhin als familiengeführtes Unternehmen, in dem jedes Gericht eine Geschichte erzählt. Wir haben unsere Hingabe an traditionelle Techniken beibehalten und gleichzeitig eine warme, einladende Atmosphäre geschaffen, die jeden Gast wie Teil unserer erweiterten Familie fühlen lässt. Das Restaurant ist mehr als ein Geschäft geworden—es ist ein Treffpunkt, an dem Erinnerungen bei gemeinsamen Mahlzeiten und echter Gastfreundschaft entstehen.')
const ownerName = ref('Bashkim Aliu')
const mainImage = ref('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')
const features = ref([
  { name: 'Pasta', title: '', description: 'Mehl. Eier. Wasser. Handgemacht.', image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
  { name: 'Salads', title: '', description: 'Frisch, knackig und lebendig.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
  { name: 'Pizza', title: '', description: 'Holzofen-Perfektion.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80' },
  { name: 'Antipasti', title: '', description: 'Frische Zutaten. Traditionell.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' }
])

// Load content from API
const loadContent = async () => {
  try {
    const response = await fetch(`${API_URL}/content/about`)
    const data = await response.json()
    
    if (data.paragraph1?.value) {
      paragraph1.value = data.paragraph1.value
    }
    if (data.paragraph2?.value) {
      paragraph2.value = data.paragraph2.value
    }
    if (data.paragraph3?.value) {
      paragraph3.value = data.paragraph3.value
    }
    if (data.ownerName?.value) {
      ownerName.value = data.ownerName.value
    }
    if (data.mainImage?.image_url) {
      mainImage.value = data.mainImage.image_url
    }
    if (data.features?.value) {
      try {
        const parsedFeatures = JSON.parse(data.features.value)
        if (Array.isArray(parsedFeatures) && parsedFeatures.length > 0) {
          // Merge with defaults by index to ensure correct sync (allows name changes)
          features.value = features.value.map((defaultFeature, index) => ({
            ...defaultFeature,
            ...(parsedFeatures[index] || {})
          }))
        }
      } catch (e) {
        console.error('Error parsing features:', e)
        // Keep defaults on parse error
      }
    }
  } catch (error) {
    console.error('Error loading about content:', error)
    // Keep default values on error
  }
}

const handleSectionHover = (section: string) => {
  const refs: Record<string, HTMLElement | null> = {
    pasta: pastaRef.value,
    salads: saladsRef.value,
    pizza: pizzaRef.value,
    antipasti: antipastiRef.value
  }
  
  const sectionEl = refs[section]
  if (sectionEl) {
    const img = sectionEl.querySelector('img') as HTMLElement
    if (img) {
      gsap.to(img, {
        scale: 1.15,
        duration: 0.6,
        ease: 'power2.out',
        transformOrigin: 'center center'
      })
    }
  }
}

const handleSectionLeave = (section: string) => {
  const refs: Record<string, HTMLElement | null> = {
    pasta: pastaRef.value,
    salads: saladsRef.value,
    pizza: pizzaRef.value,
    antipasti: antipastiRef.value
  }
  
  const sectionEl = refs[section]
  if (sectionEl) {
    const img = sectionEl.querySelector('img') as HTMLElement
    if (img) {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        transformOrigin: 'center center'
      })
    }
  }
}

onMounted(async () => {
  await loadContent()
  
  // Animate image
  if (imageRef.value) {
    gsap.fromTo(imageRef.value,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Animate text
  if (textRef.value) {
    gsap.fromTo(textRef.value,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.value,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Animate feature sections together when container scrolls into view
  if (featuresContainerRef.value) {
    const sections = [pastaRef.value, saladsRef.value, pizzaRef.value, antipastiRef.value].filter(Boolean) as HTMLElement[]
    
    if (sections.length > 0) {
      // Set initial scale for all images
      sections.forEach(section => {
        const img = section.querySelector('img') as HTMLElement
        if (img) {
          gsap.set(img, { scale: 1, transformOrigin: 'center center' })
        }
      })
      
      gsap.fromTo(sections,
        { 
          opacity: 0, 
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          stagger: {
            amount: 0.6, // Total stagger duration
            from: 'start'
          },
          scrollTrigger: {
            trigger: featuresContainerRef.value,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }
  }
})
</script>

