<template>
    <div class="header-area default-header relative z-50 bg-white dark:bg-title" :class="scroll ? 'sticky-header' : ''">
        <div class="container-fluid">
            <div class="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[10px] sm:py-4 lg:py-0">
                <router-link class="cursor-pointer block" to="/" aria-label="Furnixar">
                    <img :src="logoDark" alt="" class='dark:hidden w-[120px] sm:w-[200px]'/> 
                    <img :src="logoLight" alt="" class='dark:block hidden w-[120px] sm:w-[200px]'/>
                </router-link>

                <div class="main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0" :class="toggle ? 'active' : ''">
                    <ul class="text-lg leading-none text-title dark:text-white lg:flex lg:gap-[30px]">
                        <li :class="current === '/' ? 'active' : ''"><router-link to="/">Inicio</router-link></li>
                        <li class="relative" :class="['/blog-v1','/blog-v2','/blog-details-v1','/blog-details-v2','/blog-details-v3','/blog-tag'].includes(current) ? 'active' : ''">
                            <router-link to="#">Tienda<span></span></router-link>
                            <ul class="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li :class="current === '/productos' ? 'active' : ''"><router-link to="/productos">Productos</router-link></li>
                                <li :class="current === '/subastas' ? 'active' : ''"><router-link to="/subastas">Subastas</router-link></li>
                            </ul>
                        </li>
                        <li :class="current === '/contact' ? 'active' : ''"><router-link to="/contact">Contacto</router-link></li>
                        <li :class="current === '/login' ? 'active' : ''" class="lg:hidden"><router-link to="/login">Inicio Sesión</router-link></li>
                    </ul>
                </div>
               

                <NavMenuOne :toggle="toggle" @toggle-change="toggle = $event"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue';

import logoDark from '@/assets/img/logo.png'
import logoLight from '@/assets/img/logo.png'

import NavMenuOne from './nav-menu-one.vue';

import { useRoute } from 'vue-router';


const toggle = ref(false);

const router = useRoute();
const current = ref(router.path);

const scroll = ref(false)

const handleScroll = () => {
    if (window.scrollY >= 50) {
        scroll.value = true
    } else {
        scroll.value = false
    }
}



onMounted(()=>{
    window.scrollTo(0,0)
    window.addEventListener('scroll', handleScroll)
})

</script>
