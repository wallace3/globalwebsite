<template>
    <div>
        <NavbarThree/>

        <Swiper
            :modules="[Autoplay, Pagination]"
            :loop="true" 
            :pagination="{ clickable: true }" 
            :autoplay="{ delay: 3000}"
            :speed="2000"
            class="my-swiper home-v3-banner-slider owl-carousel pb-12 lg:pb-0 block">
            <SwiperSlide class="lg:flex items-center gap-8 xl:gap-16 2xl:gap-24">
                <div class="lg:w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb max-h-[500px] lg:max-h-full before:hidden lg:before:block">
                    <img class="w-full" :src="bg1" alt="banner-slider"/>
                </div>
                <div class="lg:w-[45%] lg:pr-5">
                    <div class="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                        <h4 class="leading-none font-medium dark:text-white">Discover Comfort and Style for Every Room</h4>
                        <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">25%</span> Off</h2>
                        <p class="mt-4 md:mt-5 dark:text-white-light">Create a home that reflects your unique style with our premium furniture collection. Each piece is thoughtfully designed for elegance, functionality, and lasting comfort, making your space truly unforgettable.</p>
                        <div class="button">
                            <router-link class="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="lg:flex items-center gap-8 xl:gap-16 2xl:gap-24">
                <div class="lg:w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb max-h-[500px] lg:max-h-full before:hidden lg:before:block">
                    <img class="w-full" :src="bg2" alt="banner-slider"/>
                </div>
                <div class="lg:w-[45%] lg:pr-5">
                    <div class="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                        <h4 class="leading-none font-medium dark:text-white">Elegant Furniture for Modern Living</h4>
                        <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">35%</span> Off</h2>
                        <p class="mt-4 md:mt-5 dark:text-white-light">Discover sleek and modern designs that redefine sophistication and functionality. From minimalist styles to bold statement pieces, our collection is crafted to elevate your living space effortlessly.</p>
                        <div class="button">
                            <router-link class="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="lg:flex items-center gap-8 xl:gap-16 2xl:gap-24">
                <div class="lg:w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb max-h-[500px] lg:max-h-full before:hidden lg:before:block">
                    <img class="w-full" :src="bg3" alt="banner-slider"/>
                </div>
                <div class="lg:w-[45%] lg:pr-5">
                    <div class="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                        <h4 class="leading-none font-medium dark:text-white">Discover Comfort and Style for Every Room</h4>
                        <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span class="text-primary">55%</span> Off</h2>
                        <p class="mt-4 md:mt-5 dark:text-white-light">  From cozy sofas and luxurious beds to chic dining sets, our furniture blends unmatched comfort with sophisticated design. Transform every corner of your home into a haven of style and relaxation.</p>
                        <div class="button">
                            <router-link class="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        <div class="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary relative z-10 overflow-hidden">
            <div class="absolute -z-[1] right-0 bottom-0 hidden 2xl:block w-[28%]" data-aos="fade-left">
                <img class="w-full" :src="service" alt="service">
            </div>
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class="max-w-[1326px] grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] xl:gap-12">
                    <div v-for="(item, index) in servicesData" :key="index" class="text-center sm:text-left group" data-aos="fade-up">
                        <div class="w-14 sm:w-[70px] h-14 sm:h-[70px] p-[10px] mx-auto sm:mx-0 flex items-center justify-center border border-primary rounded-[10px]">
                            <img :src="item.image" alt="" />             
                        </div>
                        <h4 class="mt-6 font-semibold leading-none text-xl lg:text-2xl"><router-link to="/product-category" class="text-underline">{{item.title}}</router-link></h4>
                        <span class="block leading-none mt-[10px]">{{item.product}}</span>
                        <p class="mt-[15px]">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100-50">
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class="flex justify-center items-center mb-[40px] md:mb-12" data-aos="fade-up">
                    <div>
                        <span class="text-primary font-normal text-6xl sm:text-7xl font-secondary block -ml-5 -mb-3 sm:-mb-[30px] leading-normal sm:leading-normal">New</span>
                        <h6 class="font-normal leading-none tracking-[.5em] sm:tracking-[1em] uppercase">PRODUCTS</h6>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
                    <div v-for="(item, index) in productList.slice(0,4)" :key="index" class="relative overflow-hidden group">
                        <router-link to="/product-details">
                            <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card"/>
                        </router-link>
                        
                        <div class="flex flex-col items-start gap-3 md:gap-4 absolute z-20 w-11/12 bottom-3 xl:bottom-5 left-1/2 transform -translate-x-1/2 p-4 xl:p-5 bg-white dark:bg-title bg-opacity-[85%] dark:bg-opacity-[85%] group-hover:-translate-y-1/2 duration-500 group-hover:opacity-0 group-hover:invisible">
                            <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                            <div>
                                <h5 class="font-normal dark:text-white text-paragraph leading-[1.5]">
                                    <router-link to="/product-details">{{item.name}}</router-link>
                                </h5>
                                <ul class="flex items-center gap-2 mt-1">
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                    <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                    <li class="dark:text-gray-100">( 1,230 )</li>
                                </ul>
                            </div>
                        </div>

                        <div class="absolute z-10 flex gap-2 justify-center bottom-5 md:bottom-7 w-full transform translate-y-5 opacity-0 duration-500 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">

                            <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative tooltip-icon rounded-full">
                                <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>
                                <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                    <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                </span>
                            </button>

                            <router-link to="/cart" class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative tooltip-icon rounded-full">
                                <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i>
                                <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                    <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                </span>
                            </router-link>

                            <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center relative quick-view tooltip-icon rounded-full">
                                <i class="mdi mdi-eye-outline dark:text-white text-[24px]"></i>
                                <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                    <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
                <div class="text-center mt-7 md:mt-12" data-aos="fade-up" data-aos-delay="200">
                    <router-link to="/shop-v1" class="btn btn-outline" data-text="See all Product">
                        <span>See all Product</span>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="s-py-50" data-aos="fade-up">
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="relative">
                        <img class="w-full object-cover" :src="product1" alt="product">
                        <div class="absolute w-[90%] h-[90%] flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div class="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-8 xl:p-12 flex items-start flex-col">
                                <h4 class="font-normal leading-none">Up to <span class="text-primary">20% off</span> all furniture on store</h4>
                                <h2 class="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Home & Office</h2>
                                <router-link to="/shop-v2" class="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                    <span>Shop Now</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img class="w-full object-cover" :src="product2" alt="product">
                        <div class="absolute w-[90%] h-[90%] flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div class="bg-white dark:bg-title bg-opacity-90 dark:bg-opacity-90 p-5 sm:p-8 xl:p-12 flex items-start flex-col">
                                <h4 class="font-normal leading-none">Up to <span class="text-primary">35% off</span> all Interior Items</h4>
                                <h2 class="text-3xl md:text-4xl xl:text-5xl leading-none mt-[15px]">Interior Setup</h2>
                                <router-link to="/shop-v1" class="btn btn-outline btn-sm mt-4 sm:mt-6" data-text="Shop Now">
                                    <span>Shop Now</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-50-100">
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class="flex justify-center items-center mb-[40px] md:mb-12" data-aos="fade-up">
                    <div>
                        <span class="text-primary font-normal text-6xl sm:text-7xl font-secondary block -ml-5 leading-normal sm:leading-normal">Blog</span>
                        <h6 class="font-normal leading-none tracking-[.5em] sm:tracking-[1em] uppercase">LATEST BLOG</h6>
                    </div>
                </div>
                <BlogThree/>
            </div>
        </div>

        <div class="bg-title dark:bg-dark-secondary py-9 md:py-12">
            <div class="container-fluid max-w-[1720px] mx-auto">
                <div class="2xl:flex items-center gap-10">
                    <div class="max-w-[273px] w-full hidden 2xl:block">
                        <h4 class="text-white leading-none text-xl md:text-2xl">Top Brands</h4>
                        <p class="text-white mt-[10px]">Discover the finest collections from top furniture brands. </p> 
                    </div>
                    <div class="w-[2px] h-12 bg-primary relative hidden 2xl:block"></div>
                    <div class="2xl:max-w-[1340px] w-full relative">
                        <PartnerTwo/>
                        <div class="md:absolute md:top-2/4 md:right-0 transform md:-translate-y-2/4 mt-6 md:mt-0 hidden">
                            <div class="flex gap-4">
                                <button class="icon ptnrSlider01_prev w-9 h-9 border border-white flex items-center justify-center text-white">
                                    <span class="lnr lnr-arrow-left"></span>
                                </button>
                                <button class="icon ptnrSlider01_next w-9 h-9 border border-white flex items-center justify-center text-white">
                                    <span class="lnr lnr-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterThree/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    import bg1 from '@/assets/img/shortcode/carousel/carousel-04.jpg'
    import bg2 from '@/assets/img/shortcode/carousel/carousel-05.jpg'
    import bg3 from '@/assets/img/shortcode/carousel/carousel-06.jpg'
    import service from '@/assets/img/home-v3/service.png'
    import product1 from '@/assets/img/home-v3/pdct-01.jpg'
    import product2 from '@/assets/img/home-v3/pdct-02.jpg'

    import NavbarThree from '@/components/navbar/navbar-three.vue';
    import BlogThree from '@/components/blog/blog-three.vue';
    import PartnerTwo from '@/components/partner/partner-two.vue';
    import FooterThree from '@/components/footer/footer-three.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    import Aos from 'aos';

    import { servicesData } from '@/data/index-three';
    import { productList } from '@/data/data';

    onMounted(()=>{
        Aos.init()
    })

</script>

