import { defineStore } from 'pinia'
import { ref } from 'vue'
import Cookies from 'js-cookie'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const login = (usuario) => {
    user.value = usuario
    Cookies.set('usuario', JSON.stringify(usuario), { expires: 7 })
  }

  const logout = () => {
    user.value = null
    Cookies.remove('usuario')
  }

  const isLoggedIn = () => !!user.value

  // al iniciar sesión, cargar desde cookies si existe
  const saved = Cookies.get('usuario')
  if (saved) {
    user.value = JSON.parse(saved)
  }

  return { user, login, logout, isLoggedIn }
})