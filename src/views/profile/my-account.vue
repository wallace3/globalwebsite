<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Mi cuenta</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Mi cuenta</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div class="w-full md:w-[200px] lg:w-[300px] flex-none">
                        <ProfileTab/>
                    </div>
                    <div class="w-full md:w-auto md:flex-1 overflow-auto">
                        <div class="w-full max-w-[951px] bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px]">
                            <div>
                                <span class="leading-none mt-3">Mi cuenta</span>
                            </div>
                        </div>
                        <div class="w-full max-w-[951px] bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px]">
                            <div class="flex items-start flex-col lg:flex-row gap-5 sm:gap-6">
                                <div class="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Nombre (S)</label>
                                        <input v-model="user.user.user.name" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your full name">
                                    </div>
                                    
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Coreo electrónico</label>
                                        <input v-model="user.user.user.email" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your designation">
                                    </div>
                                </div>
                                <div class="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Apellido (S)</label>
                                        <input v-model="user.user.user.lastName" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your full name">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-8 md:mt-12">
                                <button class="btn btn-solid" data-text="Actualizar">
                                    <span>Guardar Cambios</span>
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
    import { onMounted } from 'vue';
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import ProfileTab from '@/components/profile-tab.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { useUserStore } from '@/stores/userStore';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'

    import Aos from 'aos';

    const user = useUserStore();

    onMounted(()=>{
        Aos.init()
    })
</script>
