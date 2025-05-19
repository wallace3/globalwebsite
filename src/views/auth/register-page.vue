<template>
    <div>
        <NavbarOne/>

        <div class="flex">
            <div class="w-1/2 hidden md:block lg:flex-1" >
                <img class="h-full object-cover" :src="register" alt="register">
            </div>
            <div class="w-full md:w-1/2 lg:max-w-lg xl:max-w-3xl lg:w-full py-16 px-[20px] sm:px-8 lg:p-16 xl:p-24 relative z-10 flex items-center overflow-hidden">
                <div class="mx-auto md:mx-0 max-w-md">
                    <h2 class="leading-none" data-aos="fade-up">Crear nueva cuenta</h2>
                    <p class="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="100">Registrate y obten la posibilidad de adquirir piezas únicas</p>
                    <div class="mt-7" data-aos="fade-up" data-aos-delay="200">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Nombre(s)</label>
                        <input v-model="name" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Ingresa tu nombre(s)">
                    </div>
                    <div class="mt-7" data-aos="fade-up" data-aos-delay="200">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Apellido(s)</label>
                        <input v-model="lastName" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Ingresa tu apellido (s)">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Correo electrónico</label>
                        <input v-model="email" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Ingresa Correo eletrónico">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="400">
                        <label class="text-base sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Contraseña</label>
                        <input v-model="password" class="w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="password" placeholder="* * * * * * * *">
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <button type="button" class="btn btn-theme-solid mt-[15px]" data-text="Registrar" @click="createClient()"><span>Regisrate</span></button>
                    </div>
                    <p class="text-lg mt-[15px]" data-aos="fade-up" data-aos-delay="700">¿ Ya tienes cuenta ?<router-link to="/login" class="text-primary font-medium ml-1 inline-block">Inicia sesión</router-link></p>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { useRouter } from 'vue-router'

    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    import register from '@/assets/img/bg/register.jpg'
    import Aos from 'aos';

    const router = useRouter()
    const name = ref('');
    const password = ref('');
    const lastName = ref('');
    const email = ref('');

    const createClient = async()=>{
        try{
            const response = await fetch('http://localhost:8080/users',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name:name.value,  lastName: lastName.value, email:email.value, password:password.value, idType:8, status:1})
            })
            const data = await response.json();
            if(!response.ok){
                showToast(data.error, {
                    type: 'error',
                    position: 'top-right',
                    autoClose: 5000
                })
            }   
                
            showToast(data.message, {
                type: 'success',
                position: 'top-right',
                autoClose: 2000
            })

             setTimeout(() => {
                router.push('/login')
            }, 2000)
        }catch(error){
            console.error('Error', error);
        }
    }

    const showToast = (message, options = {}) => {
        toast(message, options)
    } 

    onMounted(()=>{
        Aos.init()
    })
</script>
