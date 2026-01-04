<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-red to-primary-banner p-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-primary-dark mb-2">Admin Panel</h1>
        <p class="text-primary-dark/70">Pizzeria Adria Management</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-primary-dark mb-2">
            Username
          </label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            class="w-full px-4 py-3 border border-primary-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-primary-dark mb-2">
            Password
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 border border-primary-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
            placeholder="Enter password"
          />
        </div>

        <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {{ error }}
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-primary-red to-primary-banner text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!loading">Sign In</span>
          <span v-else>Loading...</span>
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-primary-dark/60">
        <p>Default Credentials:</p>
        <p class="font-mono text-xs mt-1">Username: admin</p>
        <p class="font-mono text-xs">Password: admin123</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'login', token: string, user: any): void
}>()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const API_URL = import.meta.env.VITE_API_URL || '/api'

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Login failed')
    }

    // Store token
    localStorage.setItem('admin_token', data.token)
    localStorage.setItem('admin_user', JSON.stringify(data.user))

    emit('login', data.token, data.user)
  } catch (err: any) {
    error.value = err.message || 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

