<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url('+ bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" >
            <div class="container">
                <div class="max-w-[1477px] mx-auto flex items-start justify-between gap-8 md:gap-10 flex-col lg:flex-row">
                    <div class="grid gap-[15px] lg:max-w-[300px] w-full sm:grid-cols-2 lg:grid-cols-1" data-aos="fade-up">
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Categoryies</h4>
                            <div class="grid gap-5">
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Chair (6)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Table (12)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Sofa Set (19)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Lamp (08)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Vases (25)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Mirror (14)</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="checkbox" name="categories">
                                    <span class="w-4 h-4 rounded-[5px] border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.05203 7.04122C2.87283 7.04122 2.69433 6.97322 2.5562 6.83864L0.532492 4.8553C0.253409 4.58189 0.249159 4.13351 0.522576 3.85372C0.796701 3.57393 1.24578 3.57039 1.52416 3.84309L3.05203 5.34122L7.61512 0.868804C7.89491 0.595387 8.34328 0.59822 8.6167 0.87872C8.89082 1.1578 8.88657 1.60689 8.60749 1.8803L3.54787 6.83864C3.40974 6.97322 3.23124 7.04122 3.05203 7.04122Z" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Art & Paint (07)</span>
                                </label>
                            </div>
                        </div>
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Item Type</h4>
                            <div class="grid gap-5">
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="radio" name="item-type">
                                    <span class="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="sm:text-lg text-title duration-300 dark:text-white block sm:leading-none transform translate-y-[1px] select-none text">Regular</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="radio" name="item-type">
                                    <span class="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Premium</span>
                                </label>
                                <label class="categoryies-iteem flex items-center gap-[10px]">
                                    <input class="appearance-none hidden" type="radio" name="item-type">
                                    <span class="w-[18px] h-[18px] rounded-full border border-title dark:border-white flex items-center justify-center duration-300">
                                        <svg class="duration-300 opacity-0" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="10" height="10" rx="5" fill="#BB976D"/>
                                        </svg>
                                    </span>
                                    <span class="text-title dark:text-white block sm:leading-none transform translate-y-[1px] duration-300 select-none">Vintage</span>
                                </label>
                            </div>
                        </div>
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Brand</h4>
                            <div class="nice-select select-active select-white" :class="isOpen ? 'open' : ''" @click="toggleDropdown">
                                <span class="current">{{ selectedOption }}</span>
                                <ul class="list">
                                    <li v-for="(item, index) in options" :key="index" data-value="1" class="option" @click="handleSelect(item, $event)">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Price Range</h4>
                            <div class="price-filter">
                                <div style="max-width: 500px; margin: auto">
                                    <MultiRangeSlider
                                    :min="0"
                                    :max="100"
                                    :step="1"
                                    :ruler="false"
                                    :label="false"
                                    :minValue="barMinValue"
                                    :maxValue="barMaxValue"
                                    @input="UpdateValues"
                                /></div>
                                <div class="price-filter-content mt-5">
                                    <div class="flex items-center gap-1">
                                        <span class="text-[15px] leading-none">Price: ${{ barMinValue }} - ${{ barMaxValue }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <router-link to="/shop-v1" class="hidden lg:block">
                            <img class="w-full" :src="card" alt="shop-card">
                        </router-link>
                    </div>
                    <div class="lg:max-w-[1100px] w-full" data-aos="fade-up" data-aos-delay="200">
                        <LayoutOne :classList="'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8'" :productList="productList"/>
                        <div class="mt-10 md:mt-12 flex items-center justify-center gap-[10px]">
                            <router-link to="#" class="text-title dark:text-white text-xl"><span class="lnr lnr-arrow-left"></span></router-link>         
                            <router-link to="#" class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">01</router-link>        
                            <router-link to="#" class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">02</router-link>        
                            <router-link to="#" class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">03</router-link> 
                            <router-link to="#" class="text-title dark:text-white text-3xl sm:text-4xl transform">...</router-link>          
                            <router-link to="#" class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">09</router-link>        
                            <router-link to="#" class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title">10</router-link>        
                            <router-link to="#" class="text-title dark:text-white text-xl"><span class="lnr lnr-arrow-right"></span></router-link>         
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
    import { onMounted,ref } from 'vue';
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import LayoutOne from '@/components/product/layout-one.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import card from '@/assets/img/thumb/shop-card.jpg'

    import { productList } from '@/data/data';

    import Aos from 'aos';

    import MultiRangeSlider from "multi-range-slider-vue";

    onMounted(()=>{
        Aos.init()
    })

    const isOpen = ref(false)
    const selectedOption = ref('Navana Furniture')

    const options = [
        "Navana Furniture",
        "RFL Furniture",
        "Gazi Furniture",
        "Plastic Furniture",
        "Luxury Furniture",
    ];

    const toggleDropdown = () =>{
        isOpen.value = !isOpen.value
    }

    const handleSelect = (option,event) => {
        event.stopPropagation();
        selectedOption.value = option
        isOpen.value = false
    }

     const barMinValue = ref(10)
     const barMaxValue = ref(90)

     const UpdateValues = (e) => {
        barMinValue.value = e.minValue;
        barMaxValue.value = e.maxValue;
     }
</script>
