<template>
  <div>
    <AdminLogin v-if="!isAuthenticated" @login="handleLogin" />
    <AdminPanel v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AdminLogin from '../components/AdminLogin.vue'
import AdminPanel from '../components/AdminPanel.vue'

const isAuthenticated = ref(false)

const API_URL = import.meta.env.VITE_API_URL || '/api'

const checkAuth = async () => {
  const token = localStorage.getItem('admin_token')
  if (!token) {
    isAuthenticated.value = false
    return
  }

  try {
    const response = await fetch(`${API_URL}/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    if (response.ok) {
      isAuthenticated.value = true
    } else {
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_user')
      isAuthenticated.value = false
    }
  } catch (error) {
    console.error('Auth check error:', error)
    isAuthenticated.value = false
  }
}

const handleLogin = (_token: string, _user: any) => {
  isAuthenticated.value = true
}

onMounted(() => {
  checkAuth()
})
</script>

