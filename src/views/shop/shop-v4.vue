<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Shop</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Shop</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="flex items-start justify-between gap-8 max-w-[1720px] mx-auto flex-col-reverse lg:flex-row pb-8 md:pb-[50px]">
                    <!-- Choose Category -->
                    <div>
                        <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Category</h4>
                        <div class="shop-button flex gap-[15px] flex-wrap">
                            <button class="btn btn-sm btn-theme-outline" :class="activeFilter === '*' ? 'active' : ''" @click="tabChange('*')" data-text="Sofa & Chair">
                                <span>Sofa & Chair</span>
                            </button>
                            <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Interior' ? 'active' : ''" @click="tabChange('Interior')" data-text="Full Interior">
                                <span>Full Interior</span>
                            </button>
                            <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Vase' ? 'active' : ''" @click="tabChange('Vase')" data-text="Lamp & Vase">
                                <span>Lamp & Vase</span>
                            </button>
                            <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Table' ? 'active' : ''" @click="tabChange('Table')" data-text="Table">
                                <span>Table</span>
                            </button>
                            <button class="btn btn-sm btn-theme-outline" :class="activeFilter === 'Design' ? 'active' : ''" @click="tabChange('Design')" data-text="Art Design">
                                <span>Art Design</span>
                            </button>
                        </div>
                    </div>
                    <div class="max-w-[562px] w-full grid sm:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Price Range</h4>
                            <div class="grid grid-cols-2 gap-[15px]">
                                <div class="py-[10px] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span class="text-title dark:text-white font-medium leading-none">Min:</span>
                                    <div class="relative">
                                        <span class="text-title dark:text-white font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                        <input class="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white placeholder  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="0" value="0">
                                    </div>
                                </div>
                                <div class="py-[10] px-5 border border-title dark:border-white-light flex items-center justify-center gap-[5px]">
                                    <span class="text-title dark:text-white font-medium leading-none">Max:</span>
                                    <div class="relative">
                                        <span class="text-title dark:text-white  font-medium leading-none absolute left-0 top-1/2 block transform -translate-y-1/2">$</span>
                                        <input class="pl-[10px] w-full appearance-none bg-transparent text-title dark:text-white font-medium leading-none placeholder:text-title dark:placeholder:text-white  placeholder:font-medium placeholder:leading-none outline-none " type="number" placeholder="100" value="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Choose Brand</h4>
                            <div class="nice-select bg-white dark:bg-dark outline-select small-select" :class="isOpen ? 'open' : ''" @click="toggleDropdown">
                                <span class="current">{{ selectedOption }}</span>
                                <ul class="list">
                                    <li v-for="(item, index) in options" :key="index" data-value="1" class="option" @click="handleSelect(item, $event)">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="shop-isotope max-w-[1722px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <div v-for="(item, index) in filterItem" :key="index" class="">
                            <div class="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-title before:opacity-0 before:duration-300 hover:before:opacity-70 group overflow-hidden">
                                <img :src="item.image" class="w-full h-full object-cover"  alt="shop">
                                <div v-if="item.offer" class="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#E13939] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                                    15% OFF
                                </div>
                                <div class="absolute z-10 top-0 left-0 w-full h-full items-start justify-end flex flex-col p-7">
                                    <div>
                                        <h4 class="text-lg font-medium leading-none text-white transition-all group-hover:duration-100 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{{item.price}}</h4>
                                        <h6 class="text-xl md:text-2xl font-normal mt-3 md:mt-4 text-white transition-all group-hover:duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"><router-link to="/product-details">Classic Table Lamp</router-link></h6>
                                        <ul class="flex items-center gap-2 mt-3 md:mt-4 transition-all group-hover:duration-500 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-[#EE9818] text-[14px]"></i></li>
                                            <li><i class="fa-solid fa-star text-slate-300 text-[14px]"></i></li>
                                            <li class="text-gray-100">( 123 )</li>
                                        </ul>
                                    </div>  
                                </div>
                                <div class="absolute z-10 top-[50%] right-7 transform -translate-y-[40%] opacity-0 duration-300 transition-all group-hover:-translate-y-1/2 group-hover:opacity-100 flex flex-col items-end gap-3">
                                    <router-link to="#" class="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                        <i class="mdi mdi-cards-heart-outline dark:text-white text-[24px]"></i>                                                                    
                                        <span class="mt-1">Add to wishlist</span>
                                    </router-link>
                                    <router-link to="#" class="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                                        <i class="mdi mdi-shopping-outline dark:text-white text-[24px]"></i>     
                                        <span class="mt-1">Add to Cart</span>
                                    </router-link>
                                    <button class="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon quick-view">
                                        <i class="mdi mdi-eye-outline dark:text-white text-[24px]"></i>                                        
                                        <span class="mt-1">Quick View</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-7 md:mt-12">
                    <router-link to="/shop-v1" class="btn btn-outline" data-text="Load More">
                        <span>Load More</span>
                    </router-link>
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

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import Aos from 'aos';

    import { productListTwo } from '@/data/data';

    onMounted(()=>{
        Aos.init()
        updateFilteredItems();
    })

    const activeFilter = ref('*')

    const filterItem = ref()

    const tabChange = (item) =>{
        activeFilter.value = item
        updateFilteredItems();
    }

    const updateFilteredItems = () => {
        filterItem.value = activeFilter.value === "*"
        ? productListTwo : productListTwo.filter((item) => item.category?.includes(activeFilter.value));
    }

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

</script>
