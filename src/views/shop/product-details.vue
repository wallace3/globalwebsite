<template>
    <div>
        <NavbarOne/>

        <div class="bg-[#F8F5F0] dark:bg-dark-secondary py-5 md:py-[30px]">
            <div class="container-fluid">
                <ul class="flex items-center gap-[10px] text-base md:text-lg leading-none font-normal text-title dark:text-white max-w-[1720px] mx-auto flex-wrap">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li><router-link to="/shop-v1">Shop</router-link></li>
                    <li>/</li>
                    <li class="text-primary">{{ product.name }}</li>
                </ul>
            </div>
        </div>

        <div class="s-py-50" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto flex justify-between gap-10 flex-col lg:flex-row">
                    <div class="w-full lg:w-[58%]">
                        <div class="flex gap-4">
                        <!-- Miniaturas -->
                        <div class="flex flex-col gap-2 w-24 overflow-y-auto max-h-[500px] thumb-scroll">
                            <div
                            v-for="(item, index) in images"
                            :key="index"
                            class="cursor-pointer border-2 rounded"
                            :class="activeImage === index ? 'border-blue-500' : 'border-transparent'"
                            @click="activeImage = index"
                            >
                            <img
                                :src="`${apiUrl}/${item.url}`"
                                alt="miniatura"
                                class="w-full h-20 object-cover rounded"
                            />
                            </div>
                        </div>

                        <!-- Imagen principal -->
                        <div class="flex-1">
                            <img
                            v-if="images.length > 0"
                            :src="`${apiUrl}/${images[activeImage].url}`"
                            alt="imagen principal"
                            class="w-full h-auto object-contain rounded shadow-md"
                            />
                        </div>
                        </div>
                    </div>
                    <div class="lg:max-w-[635px] w-full">
                        <div class="pb-4 sm:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <h2 class="font-semibold leading-none">{{ product.name }}</h2>
                            <div class="flex gap-4 items-center mt-[15px]">
                                <span class="text-2xl sm:text-3xl text-primary leading-none block">${{ formatPrice(product.price) }}</span>
                            </div>

                        
                            <p class="sm:text-lg mt-5 md:mt-7">
                                {{ product.description }}
                            </p>
                        </div>
                        <div class="py-4 sm:py-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="200">
                            <div class="flex gap-4 mt-4 sm:mt-6">
                                <button @click="addToCart(product)" class="btn btn-solid" data-text="Agregar al carrito">
                                    <span>Agregar al Carrito</span>
                                </button>
                                <button @click="addToWishlist(product)" class="btn btn-outline" data-text="Add to Wishlist">
                                    <span>Agregar a Lista de deseos</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
/*computed*/
    import { ref,watch,onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useCartStore } from '@/stores/useCartStore'
    import { useUserStore } from '@/stores/userStore'
    import { useWishlistStore } from '@/stores/useWishlistStore';
    import { useRouter } from 'vue-router'
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import Aos from 'aos';

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    onMounted(()=>{
        Aos.init()
        getProduct();
        getImages();
    })

    // VARIABLES 
    
    const product = ref('');
    const images = ref([]);
    const img1 = ref('');
    
    const router = useRouter()
    const user = useUserStore();
    const cart = useCartStore();
    const wishlist = useWishlistStore();

    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    const showToast = (message, options = {}) => {
        toast(message, options)
    } 

    const getProduct = async () => {
        try{
            const result = await fetch(`${apiUrl}/product/${route.params.id}`)
            if(!result.ok){
                throw new Error(`Error HTTP: ${result.status}`);
            }
            const data = await result.json();
            product.value = data;
        }catch (error){
            console.log(error);
        }
    }

    const getImages = async () => {
        try{
            const result = await fetch(`${apiUrl}/images/${route.params.id}`)
            if(!result.ok){
                throw new Error(`Error HTTP: ${result.status}`);
            }
            const data = await result.json();
            const firstImage = Array.isArray(data.data) ? data.data[0] : null;
            img1.value = firstImage;
            images.value = Array.isArray(data.data) ? data.data : [];
        }catch (error){
            console.log(error);
        }
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

    const formatPrice = (value) => {
        return new Intl.NumberFormat('es-MX').format(value);
    };

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

    const activeImage = ref(0)

    const now = ref(new Date().getTime())

    const targetTime = ref(new Date("Sep 13 2025").getTime())

    const difference = ref(0)

    watch(now, () => {
        difference.value = targetTime.value - now.value
    })

    function updateNow() {
        now.value = new Date().getTime()
    }

    updateNow()
    setInterval(updateNow, 1000)

    const route = useRoute()

</script>

<style>
.thumb-scroll::-webkit-scrollbar {
  width: 8px;
}

.thumb-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.thumb-scroll::-webkit-scrollbar-thumb {
  background-color: #f6b841;
  border-radius: 4px;
}
</style>
