<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="flex items-center gap-4 sm:gap-6">
        <button class="relative hdr_wishList_btn"  @click="usermenu = !usermenu">
            <i class="mdi mdi-account-outline text-title dark:text-white text-[24px] sm:text-[28px]"></i>
        </button>
        <div v-if="usermenu" class="hdr_profile_menu absolute z-50 top-full right-[50px] sm:right-[80px] min-w-[180px] sm:min-w-[220px] bg-white dark:bg-title py-[10px] sm:py-[20px] px-5 sm:px-[30px] border border-tertiary opacity-0 invisible transition-all transform translate-y-5 mt-[3px] profile-menu-active">
            <ul v-if="user.isAuthenticated" class="text-lg text-title dark:text-white leading-none">
                <li class="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary"><router-link to="/mi-perfil">Mi perfil</router-link></li>
                <li class="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary" @click="logout()">Cerrar sesión</li>
            </ul>
            <ul v-else>
                <li class="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary"><router-link to="/login">Iniciar Sesión</router-link></li>
                <li class="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary"><router-link to="/register">Registrate</router-link></li>
            </ul>
        </div>
        <button class="relative hdr_wishList_btn"  @click="wishlist.togglewishlist">
            <span class="absolute w-[22px] h-[22px] bg-secondary top-[0px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white">{{ wishlist.wishlist.length }}</span>
            <i class="mdi mdi-cards-heart-outline text-title dark:text-white text-[24px] sm:text-[28px]"></i>
        </button>
        <div v-if="wishlist.mostrarWishlist" class="wishlist_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-20 xl:right-11 bg-white dark:bg-title py-5 md:py-[30px] pl-5 md:pl-[30px] pr-[10px] md:pr-[15px] border border-primary">
            <h4 class="font-medium leading-none dark:text-white mb-4 text-xl md:text-2xl">Lista de deseos</h4>
            <div>
                <div class="pr-4 md:pr-5 wishlist-item">
                    <router-link  v-for="item in wishlist.wishlist" v-bind:key="item.idWishList" :to="`/product-details/${item.idProduct}`" class="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk" >
                        <img class="w-[70px] md:w-auto" :src="'http://localhost:8080/' + item.image_url" alt="wishlist" style="width:80px"/>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                <span class="text-[14px] md:text-[15px] leading-none block">$ {{ item.price }}</span>
                            </div>
                            <h6 class="text-base md:text-lg font-semibold leading-none mt-3">{{ item.name }}</h6>
                        </div>
                        <div class="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                            <button @click="deleteWishlist(item.idWishList)">
                                <svg class="fill-current text-title dark:text-white duration-300 group-hover:text-white" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z"/>
                                </svg>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="mt-6 md:mt-10">
                    <router-link to="/wishlist" class="btn btn-outline btn-sm w-full" data-text="View All Wishlist">
                        <span>Ir a mi lista de deseos</span>
                    </router-link>
                </div>
            </div>
        </div>
        <button class="relative hdr_cart_btn" @click="cart.toggleCarrito">
            <span class="absolute w-[22px] h-[22px] bg-secondary top-[0px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white">{{ cart.carrito.length }}</span>
            <span class="mdi mdi-shopping-outline text-title dark:text-white text-[24px] sm:text-[28px]"></span>
        </button>
        <div v-if="cart.mostrarCarrito" class="hdr_cart_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-10 xl:right-0 bg-white dark:bg-title p-5 md:p-[30px] border border-primary">
            <h4 class="font-medium leading-none mb-4 text-xl md:text-2xl">Carrito de compras</h4>
            <div>
                <div class="hdr-cart-item">
                    <div v-for="item in cart.carrito" :key="item.idProduct" class="flex gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group">
                        <router-link :to="`/product-details/${item.idProduct}`" class="block">
                            <img class="w-[70px] md:w-auto h-full" :src="'http://localhost:8080/' + item.image_url" alt="cart" style="width:80px"/>
                        </router-link>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                <span class="text-[14px] md:text-[15px] leading-none block">$ {{ item.price }}</span>
                            </div>
                            <h6 class="text-base md:text-lg font-semibold !leading-none mt-[10px]">
                                <router-link to="/product-details">{{ item.name }}</router-link>
                            </h6>
                        </div>
                        <div class="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                            <button @click="quitarProducto(item.idCart)"><svg class="fill-current" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z"/>
                            </svg></button>
                        </div>
                    </div>
                </div>
               
                <div class="pt-5 md:pt-[30px] mt-5 md:mt-[30px] border-t border-bdr-clr dark:border-bdr-clr-drk">
                    <h4 class="mb-5 md:mb-[30px] font-medium !leading-none text-lg md:text-xl text-right">Subtotal : {{ cart.total }}</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <router-link to="/cart" class="btn btn-outline btn-sm" data-text="Ver Carrito">
                            <span>Ver Carrito</span>
                        </router-link>
                        <router-link to="/checkout" class="btn btn-theme-solid btn-sm" data-text="Finalizar Compra">
                            <span>Finalizar Compra</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <button class="hamburger" :class="toggle ? 'opened' : ''" @click="handleToggle">
            <svg class="stroke-current text-title dark:text-white" width="40" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
        <div class="w-[1px] bg-title/20 dark:bg-white/20 h-7 hidden sm:block"></div>
        <SwitcherS/>
    </div>

</template>

<script setup>
    import { defineProps,defineEmits, ref } from 'vue'
    import SwitcherS from '../switcher-s.vue'
    import { useCartStore } from '@/stores/useCartStore'
    import { useWishlistStore } from '@/stores/useWishlistStore'
    import { useUserStore } from '@/stores/userStore';


    const user = useUserStore()
    const cart = useCartStore();
    const wishlist = useWishlistStore();
    const usermenu = ref(false);

    const props = defineProps({
        toggle: Boolean
    });

    function logout(){
        user.logout()
    }

    function quitarProducto(id) {
        cart.quitar(id)
    }

    function deleteWishlist(id){
        wishlist.quitar(id);
    }

    const emit = defineEmits(['toggle-change']);

    function handleToggle() {
        emit('toggle-change', !props.toggle); // Correctly use `toggle` prop here
    }


</script>
