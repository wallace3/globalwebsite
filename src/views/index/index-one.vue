<template>
    <div>
        <NavbarOne />
    
        <swiper 
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1" 
            :loop="true" 
            :pagination="{ clickable: true }" 
            :autoplay="{ delay: 3000}" class="carousel-slider-four owl-carousel block">
            <swiper-slide class="relative pt-12 md:pt-20 xl:pt-[100px] pb-12 sm:pb-24 px-[15px] sm:px-12 bg-[#F5F5F5] dark:bg-title swiper-slider-main">
                <div class="absolute top-5 right-[30%] z-10 hidden lg:block shape-01">
                    <svg class="w-[300px] xl:w-[500px] h-[250px] xl:h-[409px]" viewBox="0 0 501 410" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93.5685 350.941C17.9186 286.326 -22.6142 169.412 13.177 95.6561C48.7857 21.5837 161.217 -9.19765 268.179 2.36595C374.958 13.6135 477.265 67.4732 497.265 147.363C516.948 227.436 454.823 333.672 367.72 380.59C280.8 427.824 169.535 415.374 93.5685 350.941Z" fill="#627952" fill-opacity="0.1"/>
                    </svg>
                    <div class="absolute top-1/4 left-[10%] xl:left-[20%] z-30">
                        <h4 class="leading-none text-[#627952] dark:text-[#627952] font-semibold text-banner">$ 5,000</h4>
                        <h3 class="leading-none mt-4 text-banner">MARILYN MONROE.</h3>
                        <div class="group mt-[10px]">
                            <router-link to="/detalles-producto/15" class="text-lg leading-none text-title font-medium  text-underline dark:text-white">Comprar ahora</router-link>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-8 flex-col sm:flex-row">
                    <div class="relative z-10 sm:max-w-[632px] w-full slider-content">
                        <h2 class="mt-[10px] font-normal text-3xl sm:text-4xl xl:text-5xl !leading-[1.3] dark:text-white text-banner">Global trade, una experiencia increible!</h2>
                        <p class="dark:text-white-light mt-3 md:mt-4 sm:max-w-[450px] xl:max-w-full">Descubre tesoros a precios únicos, que formarán parte de tu vida. </p>
                        <div class="button mt-4 md:mt-6">
                            <router-link class="btn btn-outline" to="/productos" data-text="Ir a tienda"><span>Comprar ahora</span></router-link>
                        </div>
                    </div>
                    <div class="sm:max-w-[750px] w-full">
                        <img class="slider-img" :src="banner1" alt="banner-slider">
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <div class="s-py-100-50 overflow-hidden">
            <div class="container-fluid">
                <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <div>
                        <img :src="chair" alt="" class="mx-auto w-14 sm:w-24"/>                                               
                    </div>
                    <h3 class="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Categorías</h3>
                    <p class="mt-3">Explora las categorías que Global ofrece, donde encontrarás tesoros a precio accesible. </p>
                </div>
                <div class="max-w-[1720px] mx-auto relative group" data-aos="fade-up" data-aos-delay="100">
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
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }"
                        class="owl-carousel hv1-pdct-ctgry-slider block"> 
                        <swiper-slide v-for="(item, index) in categories" :key="index" class="relative block">
                            <router-link :to="`categorias/${item.name}`">
                                <img class="w-full object-cover" :src="`${apiUrl}/` + item.url" alt="product"/>
                                <div class="absolute bottom-7 left-0 px-5 transform w-full flex justify-start">
                                    <div class="p-[15px] bg-white dark:bg-title w-auto">
                                        <span class="md:text-xl text-primary font-medium leading-none">{{item.total_productos}} productos</span>
                                        <h4 class="text-xl md:text-2xl mt-[10px] font-semibold leading-[1.5]">{{item.name}}</h4>
                                    </div>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>

        <div class="s-py-50-100">
            <div class="container-fluid">
                <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>  
                        <img :src="sofa" alt="" class="mx-auto w-14 sm:w-24"/>                                             
                    </div>
                    <h3 class="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Nuevos Productos</h3>
                    <p class="mt-3">Explora nuestros productos recién añadidos al inventario y sé el primero en tener la posibilidad de adquirirlos. </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <LayoutOne :productList="products.slice(0,4)" :classList="'max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8'"  @agregar="agregarAlCarrito"/>
                </div>
                <div class="text-center mt-7 md:mt-12">
                    <router-link to="/productos" class="btn btn-outline" data-text="Todos los productos">
                        <span>Todos los productos</span>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="s-py-100 bg-overlay dark:before:bg-title dark:before:bg-opacity-80" :style="{ backgroundImage: 'url(' + bg + ')' }">
            <img class="absolute top-0 right-0 w-[20%] z-[-1]" :src="shape1" alt="shape">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto">
                    <div class="max-w-[1186px] ml-auto">
                        <div class="max-w-xl mb-8 md:mb-12" data-aos="fade-up">
                            <div> 
                                <img :src="like" class="w-14 sm:w-24" alt="" />                                                       
                            </div>
                            <h3 class="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">¿Por qué adquirir productos en Global?</h3>
                            <p class="mt-3">Global cuenta con un equipo especializado en piezas de todo tipo, se garantiza que, todo producto que se venda en el sitio, ha sido estudiado.</p>
                        </div>
                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
                            <div v-for="(item, index) in featureOne.slice(0,3)" :key="index" class="why-choose-card p-6 rounded-[10px]" data-aos="fade-up" :ata-aos-delay="item.delay">
                                <img :src="item.image" class='size-12' alt="">
                                <h4 class="font-semibold leading-none mt-5 sm:mt-7 text-xl md:text-2xl">{{item.title}}</h4>
                                <p class="mt-[15px]">{{item.desc}}</p>
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
    import { onMounted, ref } from 'vue';

    import banner1 from '@/assets/img/home-v1/prueba1.png'
    import shape1 from '@/assets/img/home-v1/shape-01.png'
    import bg from '@/assets/img/home-v1/choose-us-bg.jpg'
    import chair from '@/assets/img/svg/chair.svg'
    import sofa from '@/assets/img/svg/sofa.svg'
    import like from "@/assets/img/svg/like.svg"
    //import banner3 from '@/assets/img/shortcode/carousel/Summer.png'
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import LayoutOne from '@/components/product/layout-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    


    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination,Navigation } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    import { featureOne } from '@/data/data';
    import { useCartStore } from '@/stores/useCartStore'

    // Store del carrito
    const cart = useCartStore()
   
    import Aos from 'aos';
    import 'aos/dist/aos.css';

    const banners = ref([]);
    const categories = ref([]);
    const products = ref([]);
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    onMounted(() => {
        Aos.init()
        getBanners();
        getCategories();
        getProducts();
    });

    const getBanners = async () => {
        try{
            const result = await fetch(`${apiUrl}/banners`);
            if (!result.ok) {
                throw new Error(`Error HTTP: ${result.status}`);
            }
            const data = await result.json();
            banners.value = Array.isArray(data) ? data : [];
        }catch (error){
            console.log(error);
        }
    } 

    const getCategories = async () => {
        try{
            const result = await fetch(`${apiUrl}/categories/active`);
            if (!result.ok) {
                throw new Error(`Error HTTP: ${result.status}`);
            }
            const data = await result.json();
            categories.value = Array.isArray(data) ? data : [];
        }catch (error){
            console.log(error);
        }
    }
    
    const getProducts = async () => {
        try{
            const result = await fetch(`${apiUrl}/products/categories`);
            if(!result.ok){
                throw new Error(`Error HTTP: ${result.status}`);
            }
            const data = await result.json();
            products.value = Array.isArray(data) ? data : [];
        }catch (error){
            console.log(error);
        }
    }

    function agregarAlCarrito(producto) {
        cart.agregar(producto)
    }

</script>

<style>
.swiper-slider-main{
    background:#f6b841!important;
}

.text-banner{
    color:white!important;
}
</style>