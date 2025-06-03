<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Finalizar Compra</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Finalizar Compra</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container">
                <div class="max-w-[1220px] mx-auto grid lg:grid-cols-2 gap-[30px] lg:gap-[70px]">
                    <div data-aos="fade-up" data-aos-delay={200}>
                        <div class="bg-[#FAFAFA] dark:bg-dark-secondary pt-[30px] md:pt-[40px] lg:pt-[50px] px-[30px] md:px-[40px] lg:px-[50px] pb-[30px] border border-[#17243026] border-opacity-15 rounded-xl">   
                            <h4 class="font-semibold leading-none text-xl md:text-2xl mb-6 md:mb-10">
                               Información de Producto
                            </h4>
                            <div class="grid gap-5 mg:gap-6">
                                <div v-for="item in cart.carrito" v-bind:key="item.idCart" class="flex items-center justify-between gap-5" >
                                    <div class="flex items-center gap-3 md:gap-4 lg:gap-6 cart-product flex-wrap">
                                        <div class="w-16 sm:w-[70px] flex-none">
                                            <img :src="`${apiUrl}/` + item.image_url" alt="product">
                                        </div>
                                        <div class="flex-1">
                                            <h6 class="leading-none font-medium">{{ item.name }}</h6>
                                            <h5 class="font-semibold leading-none mt-2">
                                                <router-link to="#">{{ item.description }}</router-link>
                                            </h5>
                                        </div>
                                    </div>
                                
                                    <h6 class="leading-none">$ {{ item.price }}</h6>
                                </div>
                            </div>
                            <div class="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk text-right flex justify-end flex-col w-full ml-auto mr-0">
                                <div class="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium">
                                    <span>Sub Total:</span>
                                    <span>{{ cart.total }}</span>
                                </div>
                            </div>
                            <div class="mt-6 pt-6 border-t border-bdr-clr dark:border-bdr-clr-drk">
                                <div class="flex justify-between flex-wrap font-semibold leading-none text-2xl md:text-3xl">
                                    <span>Total:</span>
                                    <span>&nbsp;$ {{ cart.total }}</span>
                                </div>
                            </div>
                        </div> 
                        <div class="mt-7 md:mt-12">
                            <h4 class="font-semibold leading-none text-xl md:text-2xl mb-6 md:mb-10">Pago</h4>
                            <div class="mt-6 sm:mt-8 md:mt-10">
                                <label class="flex items-center gap-2 iam-agree">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-6 h-6 rounded-[5px] border-2 border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg  class="duration-300 opacity-0 text-title dark:text-white fill-current" width="15" height="12" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3819 0.742676L6.10461 11.8998L2.25731 8.06381L0.763672 9.55745L6.20645 15.0002L20 2.32686L18.3819 0.742676Z"/>
                                        </svg>
                                    </span>
                                    <span class="text-base sm:text-lg text-title dark:text-white leading-none sm:leading-none select-none inline-block transform translate-y-[3px]">Acepto terminos y condiciones</span> 
                                </label>
                            </div>
                            <div class="mt-4 md:mt-6 flex flex-wrap gap-3">
                                <router-link to="cart" class="btn btn-outline" data-text="Regresar al carrito"><span>Regresar</span></router-link>
                                <button type="button" class="btn btn-theme-solid" data-text="Ir al pago" @click="checkout"><span>Pagar</span></button>
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
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { loadStripe } from '@stripe/stripe-js';
    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import { storeToRefs } from 'pinia'
    import { useCartStore } from '@/stores/useCartStore';
    import { useUserStore } from '@/stores/userStore';
    import { onMounted} from 'vue';
    
    import Aos from 'aos';

    const user = useUserStore();
    const stripePublicKey = process.env.VUE_APP_STRIPE_PUBLIC_KEY;
    const stripePromise = loadStripe(stripePublicKey);
    const cart = useCartStore();
    const { carrito } = storeToRefs(cart) // tu 
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'
    
    const checkout = async () => {
        const itemsToSend = carrito.value.map(item => ({
            id: item.idProduct, // ID interno
            name: item.name,
            description: item.description,
            price: parseFloat(item.price),
            user_id: parseInt(user.user.user.idUser),
            quantity: 1 // o item.quantity si manejas cantidad
        }))
        
        try {
            const response = await fetch(`${apiUrl}/stripe/createCheckoutSession`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemsToSend)
            })
            const data = await response.json()
            const stripe = await stripePromise
            const result = await stripe.redirectToCheckout({
                sessionId: data.id
            })

            if (result.error) {
                console.error('Error en Stripe:', result.error.message)
            }
        } catch (error) {
            console.error('Error al crear la sesión de pago:', error)
        }
    };

    onMounted(()=>{
        Aos.init()
    })
</script>
