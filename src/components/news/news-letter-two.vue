<template>
    <div class="container">
        <div class="bg-title bg-opacity-10 dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-12 xl:px-24 xl:pb-24 sm:pt-0 max-w-1366 mx-auto">
            <div class="max-w-[990px] flex justify-between items-end gap-7">
                <div class=" sm:max-w-md w-full xl:pt-20">
                    <h2 class="font-bold leading-none dark:text-white" data-aos="fade-up">Newsletter</h2>
                    <p class="mt-3 md:mt-5 dark:text-white-light" data-aos="fade-up" data-aos-delay="100">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions. </p>
                    <div class="mt-4 lg:mt-6 sm:flex" data-aos="fade-up" data-aos-delay="200">
                        <input class="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-title dark:focus:border-primary border-opacity-10 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0 duration-300" type="text" placeholder="Enter your email address">
                        <button class="w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white">Subscribe</button>
                    </div>
                </div>
                <div class="hidden sm:block" data-aos="fade-down">
                    <img :src="image1" alt="Newsletter">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import image1 from '@/assets/img/shortcode/newsletter-2.png'
</script>
