<template>
    <div class="container">
        <div class="max-w-xl mx-auto text-center">
            <div class="flex items-center justify-center" data-aos="fade-up">
                <img :src="letter" alt="" />                       
            </div>
            <h2 class="font-bold leading-none mt-4 dark:text-white" data-aos="fade-up" data-aos-delay="100">Newsletter</h2>
            <p class="mt-4 dark:text-white-light" data-aos="fade-up" data-aos-delay="200">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions delivered straight to your inbox. </p>
            <div class="mt-6 lg:mt-12 sm:flex" data-aos="fade-up" data-aos-delay="300">
                <input class="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-primary border-opacity-10 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0" type="text" placeholder="Enter your email address">
                <button class="w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary">Subscribe</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import letter from '@/assets/img/svg/letter.svg'
</script>
