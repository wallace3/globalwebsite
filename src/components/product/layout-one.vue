<template>
    <div :class="classList">
        <div v-for="(item, index) in productList" :key="index" class="group">
            <div class="relative overflow-hidden">
                <router-link :to="`/detalles-producto/${item.idProduct}`">
                    <img class="w-full transform group-hover:scale-110 duration-300" :src="`${apiUrl}/` + item.image_url" alt="shop"/>
                </router-link>

                <!--<div v-if="item.tag === 'Hot Sale'" class="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#1CB28E] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                    Hot Sale
                </div>
                <div v-if="item.tag === '10% OFF'" class="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#E13939] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                    10% OFF
                </div>-->
                <div class="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#9739E1] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                    NUEVO
                </div>
               
                <div class="absolute z-10 top-[50%] right-3 transform -translate-y-[40%] opacity-0 duration-300 transition-all group-hover:-translate-y-1/2 group-hover:opacity-100 flex flex-col items-end gap-3">
                    <button @click="addToWishlist(item)" class="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                        <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>   
                        <span class="mt-1">Agregar a Deseados</span>
                    </button>
                    <button @click="addToCart(item)" class="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                        <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i>   
                        <span class="mt-1">Agregar a carrito</span>
                    </button>
                </div>
            </div>
            <div class="md:px-2 lg:px-4 xl:px-6 lg:pt-6 pt-5 flex gap-4 md:gap-5 flex-col">
                <h4 class="font-medium leading-none dark:text-white text-lg">$ {{ formatPrice(item.price)}}</h4>
                <div>
                    <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                        <router-link :to="`/detalles-producto/${item.idProduct}`" class="text-underline">
                            {{item.name}}
                        </router-link>
                    </h5>
                    <!--<ul class="flex items-center gap-2 mt-1">
                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                        <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                        <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                        <li class="dark:text-gray-100">( 1,230 )</li>
                    </ul>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { defineProps } from 'vue';
    import { useCartStore } from '@/stores/useCartStore'
    import { useUserStore } from '@/stores/userStore'
    import { useWishlistStore } from '@/stores/useWishlistStore';
    import { useRouter } from 'vue-router'

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    const router = useRouter()
    const user = useUserStore();
    const cart = useCartStore();
    const wishlist = useWishlistStore();
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    defineProps({
        productList:Array,
        classList:String
    })

    
    const showToast = (message, options = {}) => {
        toast(message, options)
    } 

    function addToCart(producto) {
        if(!user.isAuthenticated){
            setTimeout(() => {
                showToast('Debes iniciar sesión', {
                    type: 'error',
                    autoClose: 5000,
                    position: 'bottom-left',
                    pauseOnHover: true
                })
                }, 300)
            setTimeout(() => {
                router.push('/login')
            }, 5000)
            return
        }
        cart.agregar(producto)
    }

    function addToWishlist(producto){
        if(!user.isAuthenticated){
            setTimeout(() => {
                showToast('Debes iniciar sesión', {
                    type: 'error',
                    autoClose: 5000,
                    position: 'bottom-left',
                    pauseOnHover: true
                })
                }, 300)
            setTimeout(() => {
                router.push('/login')
            }, 5000)
            return
        }
        wishlist.agregar(producto);
    }

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-MX').format(value);
    };

</script>
