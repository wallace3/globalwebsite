// stores/useCartStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'

export const useWishlistStore = defineStore('wishlist', () => {
const wishlist = ref([])
const mostrarWishlist = ref(false) 
const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

const cargarDelServidor = async () => {
  const userStore = useUserStore();
  if (!userStore.isAuthenticated || !userStore.user.user.idUser) return
  const res = await axios.get(`${apiUrl}/wishlist/get/${userStore.user.user.idUser}`)
  wishlist.value = res.data
}

cargarDelServidor();

const agregar = async (producto) => {
    const userStore = useUserStore();
    if (!wishlist.value.some(p => p.idProduct === producto.idProduct)) {
      wishlist.value.push(producto)
        await axios.post(`${apiUrl}/wishlist`, {
          idUser: userStore.user.user.idUser,
          idProduct: producto.idProduct
    })
  }
}

const quitar = async (id) => {
  wishlist.value = wishlist.value.filter(p => p.idWishList !== id)
  await axios.delete(`${apiUrl}/wishlist/${id}`)
}

function togglewishlist() {
  mostrarWishlist.value = !mostrarWishlist.value
}

function vaciarWishlist(){
    wishlist.value = [];
  }


const total = computed(() =>
  wishlist.value.reduce((acc, p) => acc + parseFloat(p.price), 0)
)

  return {
    wishlist,
    agregar,
    quitar,
    total,
    mostrarWishlist,
    togglewishlist,
    cargarDelServidor,
    vaciarWishlist
  }
})
