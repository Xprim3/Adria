<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-primary-dark">Admin Panel</h1>
              <p class="text-xs sm:text-sm text-gray-600">Pizzeria Adria Management</p>
            </div>
          </div>
          <button
            @click="handleLogout"
            class="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <!-- Mobile Menu Overlay -->
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="mobileMenuOpen = false"
      ></div>

      <!-- Sidebar Navigation -->
      <div class="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <!-- Sidebar -->
        <aside
          :class="[
            'lg:w-64 lg:flex-shrink-0 transition-transform duration-300',
            mobileMenuOpen
              ? 'fixed left-0 top-16 bottom-0 z-50 w-64 bg-white shadow-xl'
              : 'hidden lg:block'
          ]"
        >
          <nav class="bg-white rounded-lg shadow p-3 sm:p-4 lg:sticky lg:top-24 h-full lg:h-auto overflow-y-auto">
            <div class="flex items-center justify-between mb-4 lg:hidden">
              <h2 class="font-semibold text-lg">Sections</h2>
              <button
                @click="mobileMenuOpen = false"
                class="p-2 text-gray-600 hover:text-gray-900"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul class="space-y-2">
              <li v-for="section in sections" :key="section.id">
                <button
                  @click="activeSection = section.id; mobileMenuOpen = false"
                  :class="[
                    'w-full text-left px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base',
                    activeSection === section.id
                      ? 'bg-primary-red text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  {{ section.label }}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Content Area -->
        <main class="flex-1 min-w-0">
          <div class="bg-white rounded-lg shadow p-4 sm:p-6">
            <!-- Hero Section -->
            <div v-if="activeSection === 'hero'" class="space-y-4 sm:space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Hero Section</h2>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Slides</label>
                  <div v-for="(slide, index) in heroContent.slides" :key="index" class="border border-gray-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                      <h3 class="font-semibold text-sm sm:text-base">Slide {{ index + 1 }}</h3>
                      <button
                        @click="removeHeroSlide(index)"
                        class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-xs sm:text-sm w-full sm:w-auto"
                      >
                        Remove
                      </button>
                    </div>
                    <div class="space-y-3">
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Title</label>
                        <input
                          v-model="slide.title"
                          type="text"
                          class="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Subtitle</label>
                        <input
                          v-model="slide.subtitle"
                          type="text"
                          class="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Image URL</label>
                        <div class="flex flex-col sm:flex-row gap-2">
                          <input
                            v-model="slide.image"
                            type="text"
                            class="flex-1 px-2 sm:px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                            placeholder="https://..."
                          />
                          <button
                            @click="openImageUpload('hero', `slide${index}`)"
                            class="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-xs sm:text-sm whitespace-nowrap"
                          >
                            Upload
                          </button>
                        </div>
                        <img v-if="slide.image" :src="slide.image" alt="Preview" class="mt-2 w-full h-24 sm:h-32 object-cover rounded" />
                      </div>
                    </div>
                  </div>
                  <button
                    @click="addHeroSlide"
                    class="w-full sm:w-auto px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm"
                  >
                    + Add Slide
                  </button>
                </div>
                <button
                  @click="saveSection('hero')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Hero Section
                </button>
              </div>
            </div>

            <!-- Story Divider -->
            <div v-if="activeSection === 'story-divider'" class="space-y-4 sm:space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Story Divider</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                  <input
                    v-model="storyDividerContent.heading"
                    type="text"
                    class="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    v-model="storyDividerContent.description"
                    rows="3"
                    class="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <button
                  @click="saveSection('story-divider')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save
                </button>
              </div>
            </div>

            <!-- About Section -->
            <div v-if="activeSection === 'about'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">About Us Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Story - Paragraph 1</label>
                  <textarea
                    v-model="aboutContent.paragraph1"
                    rows="4"
                    class="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Story - Paragraph 2</label>
                  <textarea
                    v-model="aboutContent.paragraph2"
                    rows="4"
                    class="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Story - Paragraph 3</label>
                  <textarea
                    v-model="aboutContent.paragraph3"
                    rows="4"
                    class="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Owner Name</label>
                  <input
                    v-model="aboutContent.ownerName"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Main Image URL</label>
                  <div class="flex flex-col sm:flex-row gap-2">
                    <input
                      v-model="aboutContent.imageUrl"
                      type="text"
                      class="flex-1 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                      placeholder="https://..."
                    />
                    <button
                      @click="openImageUpload('about', 'mainImage')"
                      class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm sm:text-base whitespace-nowrap"
                    >
                      Upload
                    </button>
                  </div>
                  <img v-if="aboutContent.imageUrl" :src="aboutContent.imageUrl" alt="Preview" class="mt-2 w-full h-32 sm:h-48 object-cover rounded" />
                </div>
                
                <!-- Feature Cards -->
                <div class="border-t pt-4 mt-4">
                  <h3 class="font-semibold mb-4 text-sm sm:text-base">Feature Cards</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div v-for="(feature, index) in aboutContent.features" :key="index" class="border border-gray-200 rounded-lg p-4">
                      <div class="flex justify-between items-center mb-2">
                        <h4 class="font-medium">Feature {{ index + 1 }}</h4>
                      </div>
                      <div class="space-y-2">
                        <div>
                          <label class="block text-xs text-gray-600 mb-1">Name</label>
                          <input
                            v-model="feature.name"
                            type="text"
                            class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                            placeholder="e.g. Pizza, Antipasti"
                          />
                        </div>
                        <div>
                          <label class="block text-xs text-gray-600 mb-1">Description</label>
                          <input
                            v-model="feature.description"
                            type="text"
                            class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label class="block text-xs text-gray-600 mb-1">Image URL</label>
                          <div class="flex gap-2">
                            <input
                              v-model="feature.image"
                              type="text"
                              class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md"
                            />
                            <button
                              @click="openImageUpload('about', `feature${index}`)"
                              class="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                            >
                              Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  @click="saveSection('about')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save About Section
                </button>
              </div>
            </div>

            <!-- Menu Section -->
            <div v-if="activeSection === 'menu'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Menu Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Menu PDF URL</label>
                  <input
                    v-model="menuContent.pdfUrl"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Quotes</label>
                  <div v-for="(_, index) in menuContent.quotes" :key="index" class="mb-3">
                    <textarea
                      v-model="menuContent.quotes[index]"
                      rows="2"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                      placeholder="Quote text..."
                    ></textarea>
                  </div>
                  <button
                    @click="menuContent.quotes.push('')"
                    class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm"
                  >
                    + Add Quote
                  </button>
                </div>
                <button
                  @click="saveSection('menu')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Menu Section
                </button>
              </div>
            </div>

            <!-- Reservation Section -->
            <div v-if="activeSection === 'reservation'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Reservation Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                  <input
                    v-model="reservationContent.heading"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    v-model="reservationContent.description"
                    rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    v-model="reservationContent.phone"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    v-model="reservationContent.email"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Images (4 images)</label>
                  <div class="grid grid-cols-2 gap-4">
                    <div v-for="(_, index) in reservationContent.images" :key="index">
                      <label class="block text-xs text-gray-600 mb-1">Image {{ index + 1 }}</label>
                      <div class="flex gap-2">
                        <input
                          v-model="reservationContent.images[index]"
                          type="text"
                          class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md"
                        />
                        <button
                          @click="openImageUpload('reservation', `image${index}`)"
                          class="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click="saveSection('reservation')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Reservation Section
                </button>
              </div>
            </div>

            <!-- Delivery Section -->
            <div v-if="activeSection === 'delivery'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Delivery Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                  <input
                    v-model="deliveryContent.heading"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    v-model="deliveryContent.description"
                    rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    v-model="deliveryContent.phone"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Lieferando Link</label>
                  <input
                    v-model="deliveryContent.lieferandoLink"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Images (4 images)</label>
                  <div class="grid grid-cols-2 gap-4">
                    <div v-for="(_, index) in deliveryContent.images" :key="index">
                      <label class="block text-xs text-gray-600 mb-1">Image {{ index + 1 }}</label>
                      <div class="flex gap-2">
                        <input
                          v-model="deliveryContent.images[index]"
                          type="text"
                          class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md"
                        />
                        <button
                          @click="openImageUpload('delivery', `image${index}`)"
                          class="px-2 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click="saveSection('delivery')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Delivery Section
                </button>
              </div>
            </div>

            <!-- Location Section -->
            <div v-if="activeSection === 'location'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Location Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                  <input
                    v-model="locationContent.heading"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    v-model="locationContent.description"
                    rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    v-model="locationContent.address"
                    rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  ></textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    v-model="locationContent.phone"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    v-model="locationContent.email"
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Opening Hours</label>
                  <div class="space-y-2">
                    <div v-for="(hours, index) in locationContent.openingHours" :key="index" class="flex gap-2">
                      <input
                        v-model="hours.days"
                        type="text"
                        placeholder="Days"
                        class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md"
                      />
                      <input
                        v-model="hours.time"
                        type="text"
                        placeholder="Time"
                        class="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                    <button
                      @click="locationContent.openingHours.push({ days: '', time: '' })"
                      class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm"
                    >
                      + Add Hours
                    </button>
                  </div>
                </div>
                <button
                  @click="saveSection('location')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Location Section
                </button>
              </div>
            </div>

            <!-- Testimonials Section -->
            <div v-if="activeSection === 'testimonials'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Testimonials Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Testimonials</label>
                  <div v-for="(testimonial, index) in testimonialsContent.items" :key="index" class="border border-gray-200 rounded-lg p-4 mb-3">
                    <div class="flex justify-between items-center mb-3">
                      <h4 class="font-medium">Testimonial {{ index + 1 }}</h4>
                      <button
                        @click="testimonialsContent.items.splice(index, 1)"
                        class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div class="space-y-2">
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Text</label>
                        <textarea
                          v-model="testimonial.text"
                          rows="3"
                          class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Author</label>
                        <input
                          v-model="testimonial.author"
                          type="text"
                          class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Date</label>
                        <input
                          v-model="testimonial.date"
                          type="date"
                          class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Rating (1-5)</label>
                        <input
                          v-model.number="testimonial.rating"
                          type="number"
                          min="1"
                          max="5"
                          class="w-full px-2 py-1 text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    @click="testimonialsContent.items.push({ text: '', author: '', date: '', rating: 5 })"
                    class="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm"
                  >
                    + Add Testimonial
                  </button>
                </div>
                <button
                  @click="saveSection('testimonials')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Testimonials Section
                </button>
              </div>
            </div>

            <!-- Footer Section -->
            <div v-if="activeSection === 'footer'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Footer Section</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                  <input
                    v-model="footerContent.facebook"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                  <input
                    v-model="footerContent.instagram"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">TripAdvisor URL</label>
                  <input
                    v-model="footerContent.tripadvisor"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
                <button
                  @click="saveSection('footer')"
                  class="w-full sm:w-auto px-6 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 text-sm sm:text-base"
                >
                  Save Footer Section
                </button>
              </div>
            </div>

            <!-- News Section -->
            <div v-if="activeSection === 'news'" class="space-y-6">
              <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">News & Updates</h2>
              <div class="flex justify-between items-center mb-4">
                <p class="text-gray-600">Manage news items, events, and announcements</p>
                <button
                  @click="showNewsForm = true; editingNews = null"
                  class="px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 transition-colors"
                >
                  + Add New
                </button>
              </div>

              <!-- News List -->
              <div class="space-y-4">
                <div
                  v-for="item in newsItems"
                  :key="item.id"
                  class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <span
                          :class="[
                            'px-2 py-1 rounded text-xs font-semibold',
                            getBadgeClass(item.type)
                          ]"
                        >
                          {{ item.type }}
                        </span>
                        <span class="text-sm text-gray-500">{{ formatDate(item.date) }}</span>
                      </div>
                      <h3 class="font-semibold text-lg mb-1">{{ item.title }}</h3>
                      <p class="text-gray-600 text-sm line-clamp-2">{{ item.content }}</p>
                    </div>
                    <div class="flex gap-2 ml-4">
                      <button
                        @click="editNews(item)"
                        class="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors text-sm"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteNews(item.id)"
                        class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- News Form Modal -->
              <div
                v-if="showNewsForm"
                class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
                @click.self="showNewsForm = false"
              >
                <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                  <div class="p-4 sm:p-6">
                    <h3 class="text-xl font-semibold mb-4">
                      {{ editingNews ? 'Edit News Item' : 'New News Item' }}
                    </h3>
                    <form @submit.prevent="saveNews" class="space-y-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Type</label>
                        <select
                          v-model="newsForm.type"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        >
                          <option value="event">Event</option>
                          <option value="news">News</option>
                          <option value="update">Update</option>
                          <option value="announcement">Announcement</option>
                        </select>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                          v-model="newsForm.title"
                          type="text"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <textarea
                          v-model="newsForm.content"
                          rows="6"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        ></textarea>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <input
                          v-model="newsForm.date"
                          type="date"
                          required
                          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red"
                        />
                      </div>
                      <div class="flex gap-3 pt-4">
                        <button
                          type="submit"
                          class="flex-1 px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          @click="showNewsForm = false; editingNews = null"
                          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Image Upload Modal -->
    <div
      v-if="showImageUpload"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
      @click.self="showImageUpload = false"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-4 sm:p-6">
        <h3 class="text-xl font-semibold mb-4">Upload Image</h3>
        <input
          type="file"
          ref="fileInput"
          accept="image/*"
          @change="handleFileSelect"
          class="mb-4"
        />
        <div v-if="uploadPreview" class="mb-4">
          <img :src="uploadPreview" alt="Preview" class="max-w-full h-48 object-cover rounded" />
        </div>
        <div class="flex gap-3">
          <button
            @click="uploadImage"
            :disabled="!selectedFile"
            class="flex-1 px-4 py-2 bg-primary-red text-white rounded-lg hover:bg-primary-red/90 transition-colors disabled:opacity-50"
          >
            Upload
          </button>
          <button
            @click="showImageUpload = false"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const activeSection = ref('hero')
const mobileMenuOpen = ref(false)
const sections = [
  { id: 'hero', label: 'Hero Section' },
  { id: 'story-divider', label: 'Story Divider' },
  { id: 'about', label: 'About Us' },
  { id: 'menu', label: 'Menu' },
  { id: 'reservation', label: 'Reservation' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'location', label: 'Location' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'footer', label: 'Footer' },
  { id: 'news', label: 'News & Updates' },
]

// Content refs
const heroContent = ref({
  slides: [
    { title: '', subtitle: '', image: '' }
  ]
})

const storyDividerContent = ref({
  heading: '',
  description: ''
})

const aboutContent = ref({
  paragraph1: 'Meine Leidenschaft für die italienische Küche entdeckte ich in meinen frühen Jahren, als ich in Küchen in ganz Italien arbeitete, wo ich die Kunst der traditionellen Pizzabereitung und Pastenherstellung erlernte. Diese prägenden Jahre lehrten mich, dass authentisches italienisches Kochen nicht nur um Rezepte geht—es geht um Technik, qualitativ hochwertige Zutaten und die Geduld, Aromen natürlich entwickeln zu lassen.',
  paragraph2: 'Im Jahr 2003 eröffnete ich die Pizzeria Adria in Trier-Quint mit der Vision, echte italienische Aromen in unsere Gemeinde zu bringen. Im Laufe der Jahre sind wir zu einem beliebten Treffpunkt in der Nachbarschaft geworden, bekannt für unsere Holzofen-Pizzen und handgemachten Pasten. Unser Engagement, nur die besten Zutaten und traditionelle Methoden zu verwenden, hat uns eine treue Stammkundschaft eingebracht, die authentische italienische Küche zu schätzen weiß.',
  paragraph3: 'Heute gedeiht die Pizzeria Adria weiterhin als familiengeführtes Unternehmen, in dem jedes Gericht eine Geschichte erzählt. Wir haben unsere Hingabe an traditionelle Techniken beibehalten und gleichzeitig eine warme, einladende Atmosphäre geschaffen, die jeden Gast wie Teil unserer erweiterten Familie fühlen lässt. Das Restaurant ist mehr als ein Geschäft geworden—es ist ein Treffpunkt, an dem Erinnerungen bei gemeinsamen Mahlzeiten und echter Gastfreundschaft entstehen.',
  ownerName: 'Bashkim Aliu',
  imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  features: [
    { name: 'Pasta', title: '', description: 'Mehl. Eier. Wasser. Handgemacht.', image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { name: 'Salads', title: '', description: 'Frisch, knackig und lebendig.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
    { name: 'Pizza', title: '', description: 'Holzofen-Perfektion.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80' },
    { name: 'Antipasti', title: '', description: 'Frische Zutaten. Traditionell.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
  ]
})

const menuContent = ref({
  pdfUrl: '',
  quotes: ['']
})

const reservationContent = ref({
  heading: '',
  description: '',
  phone: '',
  email: '',
  images: ['', '', '', '']
})

const deliveryContent = ref({
  heading: '',
  description: '',
  phone: '',
  lieferandoLink: '',
  images: ['', '', '', '']
})

const locationContent = ref({
  heading: '',
  description: '',
  address: '',
  phone: '',
  email: '',
  openingHours: [
    { days: '', time: '' }
  ]
})

const testimonialsContent = ref({
  items: [
    { text: '', author: '', date: '', rating: 5 }
  ]
})

const footerContent = ref({
  facebook: '',
  instagram: '',
  tripadvisor: ''
})

const newsItems = ref<any[]>([])
const showNewsForm = ref(false)
const editingNews = ref<any>(null)
const newsForm = ref({
  type: 'news',
  title: '',
  content: '',
  date: new Date().toISOString().split('T')[0],
})

const showImageUpload = ref(false)
const selectedFile = ref<File | null>(null)
const uploadPreview = ref<string | null>(null)
const uploadSection = ref('')
const uploadField = ref('')
const fileInput = ref<HTMLInputElement | null>(null)

const getAuthHeaders = () => {
  const token = localStorage.getItem('admin_token')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

// Load all sections
const loadAllSections = async () => {
  await Promise.all([
    loadSection('hero'),
    loadSection('story-divider'),
    loadSection('about'),
    loadSection('menu'),
    loadSection('reservation'),
    loadSection('delivery'),
    loadSection('location'),
    loadSection('testimonials'),
    loadSection('footer'),
    loadNews()
  ])
}

const loadSection = async (section: string) => {
  try {
    const response = await fetch(`${API_URL}/content/${section}`)
    const data = await response.json()
    
    switch(section) {
      case 'hero':
        if (data.slides?.value) {
          try {
            const parsedSlides = JSON.parse(data.slides.value)
            heroContent.value = { slides: Array.isArray(parsedSlides) && parsedSlides.length > 0 ? parsedSlides : [{ title: '', subtitle: '', image: '' }] }
          } catch (e) {
            console.error('Error parsing hero slides:', e)
            heroContent.value = { slides: [{ title: '', subtitle: '', image: '' }] }
          }
        } else {
          // Initialize with default slides if no data exists
          heroContent.value = {
            slides: [
              { title: 'Willkommen bei Pizzeria Adria', subtitle: 'Authentische italienische Küche in Trier-Quint', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
              { title: 'Frische Zutaten, Traditionelle Rezepte', subtitle: 'Jeden Tag frisch zubereitet mit Liebe', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80' },
              { title: 'Genießen Sie den Geschmack Italiens', subtitle: 'Von klassisch bis kreativ - für jeden Geschmack', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2081&q=80' }
            ]
          }
        }
        break
      case 'story-divider':
        storyDividerContent.value = {
          heading: data.heading?.value || '',
          description: data.description?.value || ''
        }
        break
      case 'about':
        aboutContent.value = {
          paragraph1: data.paragraph1?.value || 'Meine Leidenschaft für die italienische Küche entdeckte ich in meinen frühen Jahren, als ich in Küchen in ganz Italien arbeitete, wo ich die Kunst der traditionellen Pizzabereitung und Pastenherstellung erlernte. Diese prägenden Jahre lehrten mich, dass authentisches italienisches Kochen nicht nur um Rezepte geht—es geht um Technik, qualitativ hochwertige Zutaten und die Geduld, Aromen natürlich entwickeln zu lassen.',
          paragraph2: data.paragraph2?.value || 'Im Jahr 2003 eröffnete ich die Pizzeria Adria in Trier-Quint mit der Vision, echte italienische Aromen in unsere Gemeinde zu bringen. Im Laufe der Jahre sind wir zu einem beliebten Treffpunkt in der Nachbarschaft geworden, bekannt für unsere Holzofen-Pizzen und handgemachten Pasten. Unser Engagement, nur die besten Zutaten und traditionelle Methoden zu verwenden, hat uns eine treue Stammkundschaft eingebracht, die authentische italienische Küche zu schätzen weiß.',
          paragraph3: data.paragraph3?.value || 'Heute gedeiht die Pizzeria Adria weiterhin als familiengeführtes Unternehmen, in dem jedes Gericht eine Geschichte erzählt. Wir haben unsere Hingabe an traditionelle Techniken beibehalten und gleichzeitig eine warme, einladende Atmosphäre geschaffen, die jeden Gast wie Teil unserer erweiterten Familie fühlen lässt. Das Restaurant ist mehr als ein Geschäft geworden—es ist ein Treffpunkt, an dem Erinnerungen bei gemeinsamen Mahlzeiten und echter Gastfreundschaft entstehen.',
          ownerName: data.ownerName?.value || 'Bashkim Aliu',
          imageUrl: data.mainImage?.image_url || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
          features: data.features ? (() => {
            try {
              const parsed = JSON.parse(data.features.value || '[]')
              if (Array.isArray(parsed) && parsed.length > 0) {
                // Merge with defaults to ensure all 4 features exist, matching by index
                const defaults = [
                  { name: 'Pasta', title: '', description: 'Mehl. Eier. Wasser. Handgemacht.', image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
                  { name: 'Salads', title: '', description: 'Frisch, knackig und lebendig.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' },
                  { name: 'Pizza', title: '', description: 'Holzofen-Perfektion.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80' },
                  { name: 'Antipasti', title: '', description: 'Frische Zutaten. Traditionell.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80' }
                ]
                return defaults.map((defaultFeature, index) => ({
                  ...defaultFeature,
                  ...(parsed[index] || {})
                }))
              }
            } catch (e) {
              console.error('Error parsing features:', e)
            }
            return aboutContent.value.features
          })() : aboutContent.value.features
        }
        break
      case 'menu':
        menuContent.value = {
          pdfUrl: data.pdfUrl?.value || '',
          quotes: data.quotes ? JSON.parse(data.quotes.value || '[]') : ['']
        }
        break
      case 'reservation':
        reservationContent.value = {
          heading: data.heading?.value || '',
          description: data.description?.value || '',
          phone: data.phone?.value || '',
          email: data.email?.value || '',
          images: data.images ? JSON.parse(data.images.value || '[]') : ['', '', '', '']
        }
        break
      case 'delivery':
        deliveryContent.value = {
          heading: data.heading?.value || '',
          description: data.description?.value || '',
          phone: data.phone?.value || '',
          lieferandoLink: data.lieferandoLink?.value || '',
          images: data.images ? JSON.parse(data.images.value || '[]') : ['', '', '', '']
        }
        break
      case 'location':
        locationContent.value = {
          heading: data.heading?.value || '',
          description: data.description?.value || '',
          address: data.address?.value || '',
          phone: data.phone?.value || '',
          email: data.email?.value || '',
          openingHours: data.openingHours ? JSON.parse(data.openingHours.value || '[]') : [{ days: '', time: '' }]
        }
        break
      case 'testimonials':
        testimonialsContent.value = {
          items: data.items ? JSON.parse(data.items.value || '[]') : [{ text: '', author: '', date: '', rating: 5 }]
        }
        break
      case 'footer':
        footerContent.value = {
          facebook: data.facebook?.value || '',
          instagram: data.instagram?.value || '',
          tripadvisor: data.tripadvisor?.value || ''
        }
        break
    }
  } catch (error) {
    console.error(`Error loading ${section}:`, error)
  }
}

const saveSection = async (section: string) => {
  try {
    let updates: any[] = []
    
    switch(section) {
      case 'hero':
        updates = [
          { field: 'slides', value: JSON.stringify(heroContent.value.slides) }
        ]
        break
      case 'story-divider':
        updates = [
          { field: 'heading', value: storyDividerContent.value.heading },
          { field: 'description', value: storyDividerContent.value.description }
        ]
        break
      case 'about':
        updates = [
          { field: 'paragraph1', value: aboutContent.value.paragraph1 },
          { field: 'paragraph2', value: aboutContent.value.paragraph2 },
          { field: 'paragraph3', value: aboutContent.value.paragraph3 },
          { field: 'ownerName', value: aboutContent.value.ownerName },
          { field: 'mainImage', image_url: aboutContent.value.imageUrl },
          { field: 'features', value: JSON.stringify(aboutContent.value.features) }
        ]
        break
      case 'menu':
        updates = [
          { field: 'pdfUrl', value: menuContent.value.pdfUrl },
          { field: 'quotes', value: JSON.stringify(menuContent.value.quotes) }
        ]
        break
      case 'reservation':
        updates = [
          { field: 'heading', value: reservationContent.value.heading },
          { field: 'description', value: reservationContent.value.description },
          { field: 'phone', value: reservationContent.value.phone },
          { field: 'email', value: reservationContent.value.email },
          { field: 'images', value: JSON.stringify(reservationContent.value.images) }
        ]
        break
      case 'delivery':
        updates = [
          { field: 'heading', value: deliveryContent.value.heading },
          { field: 'description', value: deliveryContent.value.description },
          { field: 'phone', value: deliveryContent.value.phone },
          { field: 'lieferandoLink', value: deliveryContent.value.lieferandoLink },
          { field: 'images', value: JSON.stringify(deliveryContent.value.images) }
        ]
        break
      case 'location':
        updates = [
          { field: 'heading', value: locationContent.value.heading },
          { field: 'description', value: locationContent.value.description },
          { field: 'address', value: locationContent.value.address },
          { field: 'phone', value: locationContent.value.phone },
          { field: 'email', value: locationContent.value.email },
          { field: 'openingHours', value: JSON.stringify(locationContent.value.openingHours) }
        ]
        break
      case 'testimonials':
        updates = [
          { field: 'items', value: JSON.stringify(testimonialsContent.value.items) }
        ]
        break
      case 'footer':
        updates = [
          { field: 'facebook', value: footerContent.value.facebook },
          { field: 'instagram', value: footerContent.value.instagram },
          { field: 'tripadvisor', value: footerContent.value.tripadvisor }
        ]
        break
    }

    for (const update of updates) {
      await fetch(`${API_URL}/content/${section}/${update.field}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(update),
      })
    }

    alert('Content saved successfully!')
  } catch (error) {
    console.error(`Error saving ${section}:`, error)
    alert('Error saving content')
  }
}

const addHeroSlide = () => {
  heroContent.value.slides.push({ title: '', subtitle: '', image: '' })
}

const removeHeroSlide = (index: number) => {
  heroContent.value.slides.splice(index, 1)
}

const loadNews = async () => {
  try {
    const response = await fetch(`${API_URL}/news`)
    newsItems.value = await response.json()
  } catch (error) {
    console.error('Error loading news:', error)
  }
}

const saveNews = async () => {
  try {
    const url = editingNews.value
      ? `${API_URL}/news/${editingNews.value.id}`
      : `${API_URL}/news`
    const method = editingNews.value ? 'PUT' : 'POST'

    await fetch(url, {
      method,
      headers: getAuthHeaders(),
      body: JSON.stringify(newsForm.value),
    })

    showNewsForm.value = false
    editingNews.value = null
    loadNews()
  } catch (error) {
    console.error('Error saving news:', error)
    alert('Error saving news')
  }
}

const editNews = (item: any) => {
  editingNews.value = item
  newsForm.value = {
    type: item.type,
    title: item.title,
    content: item.content,
    date: item.date,
  }
  showNewsForm.value = true
}

const deleteNews = async (id: number) => {
  if (!confirm('Are you sure you want to delete this news item?')) return

  try {
    await fetch(`${API_URL}/news/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    })
    loadNews()
  } catch (error) {
    console.error('Error deleting news:', error)
    alert('Error deleting news item')
  }
}

const openImageUpload = (section: string, field: string) => {
  uploadSection.value = section
  uploadField.value = field
  showImageUpload.value = true
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
    uploadPreview.value = URL.createObjectURL(target.files[0])
  }
}

const uploadImage = async () => {
  if (!selectedFile.value) return

  try {
    const formData = new FormData()
    formData.append('image', selectedFile.value)
    formData.append('section', uploadSection.value)
    formData.append('alt_text', '')

    const token = localStorage.getItem('admin_token')
    const response = await fetch(`${API_URL}/upload/image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      // Update the appropriate content field
      const url = data.url
      if (uploadSection.value === 'about' && uploadField.value === 'mainImage') {
        aboutContent.value.imageUrl = url
      } else if (uploadSection.value === 'hero') {
        const slideIndex = parseInt(uploadField.value.replace('slide', ''))
        if (!isNaN(slideIndex)) {
          heroContent.value.slides[slideIndex].image = url
        }
      } else if (uploadSection.value === 'about' && uploadField.value.startsWith('feature')) {
        const featureIndex = parseInt(uploadField.value.replace('feature', ''))
        if (!isNaN(featureIndex)) {
          aboutContent.value.features[featureIndex].image = url
        }
      } else if (uploadSection.value === 'reservation' && uploadField.value.startsWith('image')) {
        const imageIndex = parseInt(uploadField.value.replace('image', ''))
        if (!isNaN(imageIndex)) {
          reservationContent.value.images[imageIndex] = url
        }
      } else if (uploadSection.value === 'delivery' && uploadField.value.startsWith('image')) {
        const imageIndex = parseInt(uploadField.value.replace('image', ''))
        if (!isNaN(imageIndex)) {
          deliveryContent.value.images[imageIndex] = url
        }
      }
      
      showImageUpload.value = false
      selectedFile.value = null
      uploadPreview.value = null
      if (fileInput.value) fileInput.value.value = ''
    }
  } catch (error) {
    console.error('Error uploading image:', error)
    alert('Error uploading image')
  }
}

const getBadgeClass = (type: string) => {
  const classes: Record<string, string> = {
    event: 'bg-primary-red/10 text-primary-red border border-primary-red/30',
    news: 'bg-blue-100 text-blue-700 border border-blue-300',
    update: 'bg-green-100 text-green-700 border border-green-300',
    announcement: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
  }
  return classes[type] || 'bg-gray-100 text-gray-700 border border-gray-300'
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const handleLogout = () => {
  localStorage.removeItem('admin_token')
  localStorage.removeItem('admin_user')
  window.location.href = '/admin'
}

onMounted(() => {
  loadAllSections()
})
</script>
