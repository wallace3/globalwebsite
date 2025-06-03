<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Subastas</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Subastas</li>
                </ul>
            </div>
        </div>

        <div class="py-16 overflow-hidden relative" data-aos="fade-up">
            <swiper
                :modules="[Autoplay,Navigation]" 
                :slides-per-view="3" 
                :space-between="20" 
                :loop="true"  
                :navigation="true" 
                :autoplay="{ delay: 3000}" 
                :breakpoints="{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    576: { slidesPerView: 2, spaceBetween: 15 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }"
                class="owl-carousel portfolio-v1-slider relative mx-auto block" data-carousel-animateout="false" data-carousel-loop="true">
                <SwiperSlide v-for="item in auctions" :key="item.idAuction" data-carousel-animateout="false" data-carousel-loop="true">
                    <router-link :to="`/subasta/productos/${item.idAuction}`">
                        <img class="w-full object-cover" :src="'http://localhost:8080/' + item.image_url" alt="Portfolio"/>
                        <span v-if="item.remaining && !item.isExpired" class="item-name-background end-date">
                            <p>FINALIZA EN: </p>
                            <p> {{ item.remaining.days }}d {{ item.remaining.hours }}h {{ item.remaining.minutes }}m {{ item.remaining.seconds }}s</p>
                        </span>
                        <span v-else class="item-name-background end-date">
                            <p>SUBASTA FINALIZADA </p>
                        </span>
                        <div class="absolute left-7 bottom-7 z-10 duration-300">
                            <span class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md item-name-background">
                                {{item.name}}
                            </span>
                            <span class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4 item-name-background">
                                {{item.description}}
                            </span>
                        </div>
                        <span class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.8941 12.4837C2.6642 12.4837 3.2882 11.8595 3.2882 11.0896V5.14552L12.2671 14.1226C12.5395 14.3947 12.8962 14.5308 13.2529 14.5308C13.6098 14.5308 13.9666 14.3947 14.2388 14.1224C14.7832 13.578 14.7832 12.6952 14.2386 12.151L5.25927 3.1737H11.2046C11.9746 3.1737 12.5988 2.54951 12.5988 1.7796C12.5988 1.00968 11.9748 0.385498 11.2046 0.385498H1.8941C1.124 0.385498 0.5 1.00968 0.5 1.7796V11.0898C0.5 11.8595 1.124 12.4837 1.8941 12.4837Z" fill="white"/>
                                <path d="M39.1075 28.3816C38.3374 28.3816 37.7134 29.0058 37.7134 29.7757V35.7199L28.4581 26.4646C27.9135 25.9202 27.0309 25.9202 26.4865 26.4646C25.942 27.009 25.942 27.8918 26.4865 28.436L35.7416 37.6912H29.7977C29.0276 37.6912 28.4036 38.3154 28.4036 39.0853C28.4036 39.8552 29.0276 40.4794 29.7977 40.4794H39.1077C39.8778 40.4794 40.5018 39.8552 40.5018 39.0853V29.7757C40.5016 29.0058 39.8774 28.3816 39.1075 28.3816Z" fill="white"/>
                                <path d="M12.5426 26.4634L3.2882 35.7186V29.7745C3.2882 29.0046 2.6642 28.3804 1.8941 28.3804C1.124 28.3804 0.5 29.0046 0.5 29.7745V39.0845C0.5 39.8544 1.124 40.4786 1.8941 40.4786H11.2037C11.9736 40.4786 12.5978 39.8544 12.5978 39.0845C12.5978 38.3146 11.9738 37.6904 11.2037 37.6904H5.25965L14.5142 28.4349C15.0587 27.8904 15.0587 27.0077 14.5141 26.4632C13.97 25.919 13.0872 25.919 12.5426 26.4634Z" fill="white"/>
                                <path d="M39.1071 0.385498H29.7972C29.0271 0.385498 28.4031 1.00968 28.4031 1.7796C28.4031 2.54951 29.0271 3.1737 29.7972 3.1737H35.7414L26.7638 12.1519C26.2193 12.6963 26.2193 13.5791 26.764 14.1235C27.0361 14.3957 27.393 14.5317 27.7497 14.5317C28.1064 14.5317 28.4633 14.3955 28.7356 14.1233L37.7132 5.14514V11.0896C37.7132 11.8595 38.3372 12.4837 39.1073 12.4837C39.8774 12.4837 40.5014 11.8595 40.5014 11.0896V1.7796C40.5012 1.0095 39.8771 0.385498 39.1071 0.385498Z" fill="white"/>
                            </svg>
                        </span>
                    </router-link>
                </SwiperSlide>
            </swiper>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    
    </div>
    
</template>

<script setup>
    import { onMounted, ref,reactive, onUnmounted } from 'vue';
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import Aos from 'aos';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay,Navigation } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    const auctions = ref([]);
    const intervals = [];
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    function parseFechaMysql(fechaStr) {
        const fechaISO = fechaStr.replace(' ', 'T');
        const fecha = new Date(fechaISO);
        return isNaN(fecha.getTime()) ? null : fecha;
    }

    function startCountdown(item) {
        const update = () => {
            const now = new Date();
            const diff = item.targetDate - now;
     
            if (diff <= 0) {
                item.remaining = { days: '00', hours: '00', minutes: '00', seconds: '00' };
                item.isExpired = true; // Marca como expirado
                clearInterval(item._intervalId);
                return;
            }

            item.isExpired = false; // Asegúrate de que esté activo si la fecha no ha pasado
            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(diff / 86400000); // 1 día = 86400000 ms
            const hours = Math.floor((totalSeconds / 3600) % 24);
            const minutes = Math.floor((totalSeconds / 60) % 60);
            const seconds = totalSeconds % 60;

            // Actualiza el tiempo restante
            Object.assign(item.remaining, {
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            });
        };

        update(); // Ejecuta inmediatamente
        item._intervalId = setInterval(update, 1000); // Actualiza cada segundo
        intervals.push(item._intervalId);
    }

    const getAuctions = async () => {
        try {
            const result = await fetch(`${apiUrl}/auction/active`);
            if (!result.ok) throw new Error('Error al cargar información');

            const data = await result.json();
            auctions.value = Array.isArray(data)
            ? data.map((auction) => {
                const targetDate = parseFechaMysql(auction.endTime);
                const item = {
                    ...auction,
                    targetDate,
                    remaining: reactive({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                    }),
                    isExpired: false, // Inicialmente no está expirado
                };
                if (targetDate) startCountdown(item); 
                    return item;
                })
            : [];
        } catch (error) {
            console.error(error);
        }
    };

    onMounted(()=>{
        Aos.init()
        getAuctions();
    })

    onUnmounted(() => {
        intervals.forEach(clearInterval);
    })
</script>

<style>
    .item-name-background{
        background-color: black!important;
        color: white!important;
    }

    .end-date{
        top: 0;
        position: absolute;
        right: 0;
    }
</style>
