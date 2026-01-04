import { ref } from 'vue'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const useAPI = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getAuthHeaders = () => {
    const token = localStorage.getItem('admin_token')
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    }
  }

  const fetchData = async (endpoint: string, options: RequestInit = {}) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
          ...getAuthHeaders(),
          ...options.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (err: any) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchData,
    API_URL,
  }
}

