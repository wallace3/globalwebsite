<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Method of Shipping</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><router-link to="/">Home</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Shipping Method</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container">
                <div class="max-w-[940px] mx-auto">
                    <div class="max-w-xl mb-8 md:mb-12" data-aos="fade-up">
                        <div>
                            <img :src="about" class="size-16" alt="">
                        </div>
                        <h3 class="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Delivery Option</h3>
                        <p class="mt-3">Delivery Option: Choose your preferred delivery option for seamless convenience. Get your items delivered on your terms, hassle-free. </p>
                    </div>
                    <div class="overflow-x-auto border-b border-dashed border-primary pb-6 md:pb-10" data-aos="fade-up" data-aos-delay="100">
                        <table class="w-full">
                            <thead>
                                <tr class="bg-[#ECF2F5] dark:bg-dark-secondary
                                text-base sm:text-lg font-medium text-title dark:text-white leading-none text-left">
                                    <th class="p-4 sm:p-5 whitespace-nowrap">Delivery Option</th>
                                    <th class="p-4 sm:p-5 whitespace-nowrap">Time</th>
                                    <th class="p-4 sm:p-5 whitespace-nowrap">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td class="p-4 sm:p-5 whitespace-nowrap">Standard Delivery</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">2 Days</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">$5</td>
                                </tr>
                                <tr class="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td class="p-4 sm:p-5 whitespace-nowrap">Quick Delivery</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">1 Days</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">$7.5</td>
                                </tr>
                                <tr class="text-base sm:text-lg text-title dark:text-white leading-none text-left border-b border-bdr-clr dark:border-bdr-clr-drk">
                                    <td class="p-4 sm:p-5 whitespace-nowrap">Regular Working Day</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">3 Days</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">FREE</td>
                                </tr>
                                <tr class="text-base sm:text-lg text-title dark:text-white leading-none text-left">
                                    <td class="p-4 sm:p-5 whitespace-nowrap">Super Fast Delivery</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">12 Hour</td>
                                    <td class="p-4 sm:p-5 whitespace-nowrap">$10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-8 md:mt-12">
                        <h3 class="font-medium leading-none text-2xl md:text-3xl" data-aos="fade-up">Shipping Rule</h3>
                        <p class="text-base sm:text-lg mt-3 md:mt-4" data-aos="fade-up" data-aos-delay="100">Shipping Rule: Discover our transparent shipping rules, ensuring clarity and peace of mind. We prioritize efficient delivery, ensuring your items arrive safely and on time. With clear guidelines in place, you can shop confidently knowing your orders are handled with care. </p>
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
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import about from '@/assets/img/svg/about.svg'
    
    import Aos from 'aos';

    onMounted(()=>{
        Aos.init()
    })
</script>
