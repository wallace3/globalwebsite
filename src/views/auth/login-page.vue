<template>
    <div>
        <NavbarOne/>

        <div class="flex">
            <div class="w-1/2 hidden md:block lg:flex-1">
                <img class="h-full object-cover" :src="loginImg" alt="login">
            </div>
            <div class="w-full md:w-1/2 lg:max-w-lg xl:max-w-3xl lg:w-full py-16 px-[20px] sm:px-8 lg:p-16 xl:p-24 relative z-10 flex items-center overflow-hidden">
                <div class="mx-auto md:mx-0 max-w-md">
                    <h2 class="leading-none" data-aos="fade-up">Inicio de sesión</h2>
                    <p class="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="100">Inicia sesión y obtén la posibilidad de adquirir piezas únicas.</p>
                    <div class="mt-7" data-aos="fade-up" data-aos-delay="200">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Correo electrónico</label>
                        <input v-model="email" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Ingresa tu correo">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Password</label>
                        <input v-model="password" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="password" placeholder="* * * * * * * *">
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <button type="button" class="btn btn-theme-solid mt-[15px]" data-text="Entrar" @click="login"><span>Entrar</span></button>
                    </div>
                    <p class="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="600">¿Aún no tienes cuenta? <router-link to="/register" class="text-primary font-medium ml-1 inline-block">Registrate</router-link></p>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </div>
</template>

<script setup>
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import loginImg from '@/assets/img/bg/login.jpg'
    import { useUserStore } from '@/stores/userStore'
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router'
    import Aos from 'aos';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';
    const router = useRouter()


    const email = ref('');
    const password = ref('');
    const userStore = useUserStore()
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    const login = async()=>{
        const response = await fetch(`${apiUrl}/users/login`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:email.value, password:password.value})
        })
  
        const data = await response.json();

        if(!response.ok){
            showToast(data.error, {
                type: 'error',
                position: 'top-right',
                autoClose: 2000
            })      
        }

        showToast(data.message, {
            type: 'success',
            position: 'top-right',
            autoClose: 2000
        })

        userStore.login(data)
        router.push('/')
    }

    const showToast = (message, options = {}) => {
        toast(message, options)
    } 

    onMounted(()=>{
        Aos.init()
    })
</script>
