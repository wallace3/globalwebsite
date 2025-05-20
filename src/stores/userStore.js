import { defineStore } from 'pinia'
import { useCartStore } from './useCartStore'
import { useWishlistStore } from './useWishlistStore'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isAuthenticated: !!localStorage.getItem('user')
  }),
  actions: {
    async login(userData) {
      this.user = userData
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(userData))

      // ✅ Cargar carrito del servidor
      const cartStore = useCartStore()
      await cartStore.cargarDelServidor()

      const wishlistStore = useWishlistStore()
      await wishlistStore.cargarDelServidor()

    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
      window.location.reload()
    }
  }
})