<template>
    <ul class="divide-y dark:divide-paragraph text-title dark:text-white text-base sm:text-lg lg:text-xl flex flex-col justify-center leading-none">
        <li class="py-3 lg:py-6 pl-6 lg:pl-12" :class="{'active text-primary' : current === '/mi-cuenta'}">
            <router-link class="duration-300 hover:text-primary" to="/mi-cuenta">Mi cuenta</router-link>
        </li>
        <li class="py-3 lg:py-6 pl-6 lg:pl-12" :class="{'active text-primary' : current === '/direcciones'}">
            <router-link class="duration-300 hover:text-primary" to="/direcciones">Mis Direcciones</router-link>
        </li>
        <li class="py-3 lg:py-6 pl-6 lg:pl-12" :class="{'active text-primary' : current === '/ordenes'}">
            <router-link class="duration-300 hover:text-primary" to="/ordenes">Mis Compras</router-link>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';


const router = useRoute();
const current = ref(router.path);

</script>
