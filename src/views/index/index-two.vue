<template>
    <div>
        <NavbarTwo/>

        <div class="pt-36 sm:pt-52 lg:pt-[250px] pb-12 sm:pb-16 lg:pb-36 2xl:py-[360px] bg-[#f5f5f5] dark:bg-dark-secondary relative z-[1] overflow-hidden">
            <div class="absolute -z-[1] top-0 left-0 w-[60%] 2xl:w-[955px]">
            <svg class="fill-current text-[#BB976D] dark:text-title w-[100%]" viewBox="0 0 955 780" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M830.97 723.759C971.43 620.07 992.216 359.628 893.195 163.09C862.083 101.856 819.328 46.7521 768.467 0H0V470.225C59.4825 536.72 135.112 598.064 218.046 647.736C429.653 775.193 690.606 828.224 830.97 723.759Z"/>
            </svg>              
            </div>
            <div class="absolute bottom-0 left-0 -z-[1] hidden 2xl:block">
                <img :src="shape1" alt="banner-shape">
                <div class="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 right-0 top-[35%]">
                    <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 class="font-normal leading-none"><sup>$</sup>20</h4>
                    </div>
                </div>
            </div>
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -z-[1] w-[17%] hidden lg:block">
                <img :src="shape2" alt="banner-shape">
                <div class="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 -left-[10%] bottom-0">
                    <div class="w-16 md:w-20 h-16 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 class="font-normal leading-none"><sup>$</sup>20</h4>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 z-[1] w-[40%] md:w-40 lg:w-64 2xl:w-auto">
                <img :src="shape3" alt="banner-shape">
                <div class="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 right-6 top-[60%]">
                    <div class="w-12 md:w-20 h-12 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                        <h4 class="font-normal leading-none"><sup>$</sup>12</h4>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="max-w-1366 mx-auto flex flex-col gap-10">
                    <div>
                        <h4 class="leading-none font-medium dark:text-white" data-aos="fade-up">All products in Store</h4>
                        <h2 class="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white" data-aos="fade-up" data-aos-delay="100">Get <span class="text-primary">25%</span> Off</h2>
                        <p class="mt-4 md:mt-5 dark:text-white-light md:max-w-[350px] lg:max-w-xl" data-aos="fade-up" data-aos-delay="200">Unlock unbeatable savings on every purchase. Introducing our new collection of stylish and comfortable sofas, designed to elevate your living space with modern elegance. </p>
                        <div class="button" data-aos="fade-up" data-aos-delay="300">
                            <router-link class="btn btn-outline mt-6" to="/shop-v2" data-text="Let's Shop Now"><span>Let's Shop Now</span></router-link>
                        </div>
                    </div>
                    <div class="relative md:absolute bottom-0 right-0 2xl:right-24 w-full md:max-w-[400px] lg:max-w-[40%] 2xl:w-auto">
                        <img :src="shape4" alt="thumb">
                        <div class="absolute flex items-center justify-center bg-primary bg-opacity-20 rounded-full p-3 top-5 left-[10%] lg:left-[25%]">
                            <div class="w-12 md:w-20 h-12 md:h-20 bg-white dark:bg-title rounded-full flex items-center justify-center">
                                <h4 class="font-normal leading-none"><sup>$</sup>55</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="" class="w-7 lg:w-9 h-12 lg:h-[60px] rounded-[69px] border-[1.5px] border-title dark:border-white text-title dark:text-white flex items-center justify-center absolute bottom-7 md:bottom-12 left-1/2 transform -translate-x-1/2" id="scroll-button">
                <svg class="fill-current scroll-down-icon" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46967 21.0603C5.76256 21.3532 6.23744 21.3532 6.53033 21.0603L11.3033 16.2874C11.5962 15.9945 11.5962 15.5196 11.3033 15.2267C11.0104 14.9338 10.5355 14.9338 10.2426 15.2267L6 19.4693L1.75736 15.2267C1.46447 14.9338 0.989593 14.9338 0.6967 15.2267C0.403806 15.5196 0.403806 15.9945 0.6967 16.2874L5.46967 21.0603ZM5.25 0.832031L5.25 20.53L6.75 20.53L6.75 0.832031L5.25 0.832031Z"/>
                </svg>
            </router-link>
        </div>

        <div class="s-py-100-50" id="sec-2">
            <div class="container">
                <div class="max-w-[1365px] mx-auto flex 2xl:items-center gap-[30px] md:gap-10 justify-between flex-col 2xl:flex-row">
                    <div class="2xl:max-w-[360px] w-full flex justify-between 2xl:justify-start flex-wrap items-end 2xl:items-start gap-5 2xl:gap-0 flex-row 2xl:flex-col" data-aos="fade-up">
                        <div>
                            <img :src="chair" alt="" class="size-16"/>
                            <h2 class="mt-[15px] leading-none">Popular Collection</h2>
                            <p class="mt-[10px] md:mt-[15px]">Explore our curated popular collection product categories featuring high-quality furniture. </p>
                        </div>
                        <router-link class="btn btn-outline 2xl:mt-6" to="/shop-v2" data-text="See all Productss"><span>See all Productss</span></router-link>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg::gap-8 2xl:max-w-[903px] w-full" data-aos="fade-up" data-aos-delay="100">
                        <div v-for="(item, index) in productList.slice(0,3)" :key="index" class="group" data-aos="fade-up" data-aos-delay="100">
                            <div class="relative overflow-hidden">
                                <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                <div class="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">

                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                        <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                        </span>
                                    </button>

                                    <router-link to="'/cart'" class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                        <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i> 
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                        </span>
                                    </router-link>

                                    <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                        <i class="mdi mdi-eye-outline dark:text-white text-[24px]"></i>
                                        <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                            <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="lg:pt-7 pt-5 flex gap-3 md:gap-4 flex-col">
                                <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                                <div>
                                    <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                                        <router-link to="/product-details" class="text-underline">
                                            {{item.name}}
                                        </router-link>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="s-py-50 overflow-hidden" data-aos="fade-up">
            <Swiper
                :modules="[Autoplay]" 
                :slides-per-view="4" 
                :space-between="0" 
                :loop="true"  
                :autoplay="{ delay: 3000}" 
                :breakpoints="{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    576: { slidesPerView: 2, spaceBetween: 0 },
                    1024: { slidesPerView: 4, spaceBetween: 0 },
                }"
             class="owl-carousel blog-v1-wrapper block cursor-pointer">
                <SwiperSlide v-for="(item, index) in productSlider" :key="index" class="relative">
                    <img class="w-full object-cover" :src="item.image" alt="product"/>
                    <div class="absolute bottom-7 left-0 px-5 transform w-full flex justify-center">
                        <div class="min-w-[250px] bg-white bg-opacity-80 dark:bg-title dark:bg-opacity-80 p-5 z-10">
                            <h4 class="leading-[1.5] font-semibold">{{item.name}}</h4>
                            <p class="leading-none mt-[10px]">{{item.product}}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div class="s-py-50-100">
            <div class="container max-w-[1365px] mx-auto">
                <div class="max-w-[547px] mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <img :src="bed" alt="" class="mx-auto w-14 sm:w-[70px]"/>
                        
                    <h2 class="mt-[15px] leading-none">New Arrival</h2>
                    <p class="mt-[10px] md:mt-[15px]">Discover the latest must-have arrivals! Elevate your style with our newest collection of trendsetting items. </p>
                </div>
                <div class="grid lg:grid-cols-2 gap-[30px]" data-aos="fade-up" data-aos-delay="100">
                    <div class="grid gap-[30px]">
                        <div class="grid sm:grid-cols-2 gap-[30px]">
                            <div v-for="(item, index) in productList.slice(4,6)" :key="index" class="group flex flex-col" data-aos="fade-up" data-aos-delay="100">
                                <div class="relative overflow-hidden">
                                    <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                    <div class="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">

                                        <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                            <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </button>

                                        <router-link to="'/cart'" class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                            <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i> 
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </router-link>

                                        <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                            <i class="mdi mdi-eye-outline dark:text-white text-[24px]"></i>
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="lg:pt-7 pt-5 flex gap-3 md:gap-4 flex-col">
                                    <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                                    <div>
                                        <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                                            <router-link to="/product-details" class="text-underline">
                                                {{item.name}}
                                            </router-link>
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
                            </div>
                        </div>
                        <div class="relative">
                            <img class="w-full object-cover" :src="arrival1" alt="arrival">
                            <div class="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                                <h2 class="text-5xl sm:text-7xl leading-none italic">30% <sup class="text-lg sm:text-2xl leading-none">OFF</sup></h2>
                                <h6 class="sm:mt-[10px]">All new Arival Sofa</h6>
                                <router-link class="btn btn-outline mt-4 md:mt-6" to="/shop-v2" data-text="See all Productss"><span>See all Productss</span></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col-reverse lg:grid gap-[30px]">
                        <div class="relative">
                            <img class="w-full object-cover" :src="arrival2" alt="arrival">
                            <div class="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                                <h2 class="text-5xl sm:text-7xl leading-none italic">45%<sup class="text-lg sm:text-2xl leading-none ">OFF</sup></h2>
                                <h6 class="sm:mt-[10px]">All new Flower Vase</h6>
                                <router-link class="btn btn-outline mt-4 md:mt-6" to="/shop-v2" data-text="See all Products"><span>See all Products</span></router-link>
                            </div>
                        </div>
                        <div class="grid sm:grid-cols-2 gap-[30px]">
                            <div v-for="(item, index) in productList.slice(7,9)" :key="index" class="group flex flex-col" data-aos="fade-up" data-aos-delay="100">
                                <div class="relative overflow-hidden">
                                    <img class="w-full transform duration-300 group-hover:scale-110" :src="item.image" alt="product-card">

                                    <div class="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">

                                        <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                            <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to wishlist
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </button>

                                        <router-link to="'/cart'" class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative tooltip-icon rounded-full">
                                            <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i> 
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Add to Cart
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </router-link>

                                        <button class="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center translate-y-8 opacity-0 transition-all group-hover:duration-700 group-hover:opacity-100 group-hover:translate-y-0 quick-view tooltip-icon rounded-full">
                                            <i class="mdi mdi-eye-outline dark:text-white text-[24px]"></i>
                                            <span class="p-2 bg-white dark:bg-title text-xs text-title dark:text-white absolute -top-[60px] left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-[4px] opacity-0 invisible duration-300">Quick Preview
                                                <span class="w-3 h-3 bg-white dark:bg-title absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 rotate-45"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="lg:pt-7 pt-5 flex gap-3 md:gap-4 flex-col">
                                    <h4 class="font-medium leading-none dark:text-white text-lg">{{item.price}}</h4>
                                    <div>
                                        <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                                            <router-link to="/product-details" class="text-underline">
                                                {{item.name}}
                                            </router-link>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-7 md:mt-12">
                    <router-link to="/shop-v1" class="btn btn-outline" data-text="Go to shop">
                        <span>Go to shop</span>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="bg-[#f5f5f5] dark:bg-dark-secondary s-py-100">
            <div class="container max-w-[1365px] mx-auto">
                <div class="text-center mb-8 md:mb-12 max-w-[548px] mx-auto" data-aos="fade-up">
                    <img :src="like" alt="" class="mx-auto size-16"/>
                    <h2 class="dark:text-white font-bold leading-none mt-4">Testimonial</h2>
                    <p class="mt-3 md:mt-4">Discover what our customers are saying about us. Real stories, real experiences – find out why they choose us. </p>
                </div>
                <ClientOne/>
            </div>
        </div>

        <div class="s-py-100-50 overflow-hidden">
            <div class="container" data-aos="fade-up">
                <div class="max-w-[547px] mx-auto mb-8 md:mb-12 text-center">
                    <img :src="comment2" alt="" class="mx-auto size-16"/>
                    <h2 class="mt-[15px] leading-none">Latest Blog</h2>
                    <p class="mt-[10px] md:mt-[15px]">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love..</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <BlogTwo/>
            </div>
        </div>

        <div class="s-py-50-100">
            <NewsLetterOne/>
        </div>

        <div class="bg-primary-light px-5 py-7 md:py-12 dark:bg-tertiary dark:bg-opacity-20" data-aos="fade-up">
            <div class="container">
                <PartnerOne/>
            </div>
        </div>

        <FooterTwo/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    import shape1 from '@/assets/img/home-v2/banner-shape-01.png'
    import shape2 from '@/assets/img/home-v2/banner-shape-02.png'
    import shape3 from '@/assets/img/home-v2/banner-shape-03.png'
    import shape4 from '@/assets/img/home-v2/banner-shape-04.png'
    import arrival1 from '@/assets/img/home-v2/arrival-01.jpg'
    import arrival2 from '@/assets/img/home-v2/arrival-02.jpg'
    import comment2 from '@/assets/img/svg/comment-2.svg'
    import bed from '@/assets/img/svg/bed.svg'
    import like from '@/assets/img/svg/like.svg'
    import chair from '@/assets/img/svg/chair.svg'
    
    import NavbarTwo from '@/components/navbar/navbar-two.vue';
    import ClientOne from '@/components/client-one.vue';
    import BlogTwo from '@/components/blog/blog-two.vue';
    import NewsLetterOne from '@/components/news/news-letter-one.vue';
    import PartnerOne from '@/components/partner/partner-one.vue';
    import FooterTwo from '@/components/footer/footer-two.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    
    import Aos from 'aos';
    import { productList,productSlider } from '@/data/data';


    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper/modules';
    import 'swiper/swiper-bundle.css';

    onMounted(()=>{
        Aos.init()
    })
</script>
