<template>
    <div>
        <NavbarOne/>

        <div class="s-pt-100" data-aos="fade-up">
            <div class="container">
                <div class="max-w-[1360px] mx-auto ">
                    <ul class="flex items-center gap-[10px] flex-wrap">
                        <li class="text-[15px] leading-none dark:text-white">5th May, 2025</li>
                        <li><router-link to="/blog-tag" class="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum">Interior</router-link></li>
                    </ul>
                    <h1 class="text-2xl leading-snug sm:text-3xl sm:leading-snug md:text-[40px] mt-4 md:mt-6 md:leading-snug max-w-[940px]">Furniture Trends for Modern Homes </h1>
                    <div class="mt-4 sm:mt-5 flex items-center gap-3">
                        <div class="w-12 h-12 rounded-full overflow-hidden">
                            <img class="w-full h-full" :src="user" alt="author">
                        </div>
                        <p>Jon Doue</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div class="container">
                <div class="max-w-[1360px] mx-auto flex items-start justify-between gap-10 flex-col-reverse lg:flex-row relative">
                    <div class="max-w-[940px] w-full">
                        <div class="pb-7 md:pb-12">
                            <img class="w-full" :src="blog1" alt="blog-details" data-aos="fade-up" data-aos-delay="100">
                            <article class="prose prose-h3:!text-3xl prose-h4:!text-2xl sm:prose-lg dark:prose-p:text-white-light dark:prose-li:text-white-light dark:prose-blockquote:text-white max-w-full prose-blockquote:bg-primary prose-blockquote:bg-opacity-10 prose-blockquote:p-5 sm:prose-blockquote:p-7 md:prose-blockquote:text-2xl prose-blockquote:border-none prose-blockquote:not-italic prose-blockquote:before:content-[url('../img/icon/qute.svg')] prose-blockquote:flex prose-blockquote:gap-[10px] prose-blockquote:items-start prose-blockquote:text-xl prose-blockquote:flex-col sm:prose-blockquote:flex-row prose-li:list-none prose-li:before:relative prose-li:before:content-[url('../img/icon/check.svg')] prose-ol:!pl-0 sm:prose-ol:!pl-0 prose-ul:pl-0 sm:prose-ul:pl-0 prose-li:flex prose-li:items-start prose-li:gap-2 mt-8 md:mt-10">
                                <p>In the realm of home decor, where style meets functionality, Furnixar stands as a beacon of innovation and elegance. With a commitment to quality craftsmanship and a keen eye for design, Furnixar products have the power to transform any living space into a sanctuary of comfort and beauty.
        
                                    From cozy living rooms to serene bedrooms, Furnixar offers a diverse range of home decor solutions that cater to every taste and lifestyle. Let's delve into some of the key elements that make Furnixar a frontrunner in the world of home decor:</p>
                                <h3>Main features of our product</h3>
                                <ul>
                                    <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.</li>
                                    <li>Adipiscing lobortis interdum fringilla euismod odio of this furniture.</li>
                                    <li>Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.</li>
                                </ul>
                                <p>Furnixar transcends the ordinary, offering home decor solutions that inspire and delight. With their dedication to craftsmanship, timeless design, and sustainability, Furnixar invites you to elevate your home and create a space that truly reflects your lifestyle and personality.Furnixar transcends the ordinary, offering home decor solutions that inspire and delight. </p>
                                <blockquote>
                                    Nibh purus integer elementum in tellus vulputate habitasse of this is vulputate posuere habitant vel tempor varius.    
                                </blockquote>
        
                                <h4>Main features of our product</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, beatae dolore! Facere, neque perspiciatis laudantium adipisci fugit sequi nemo illum!</p>
                                <ol>
                                    <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.</li>
                                    <li>Adipiscing lobortis interdum fringilla euismod odio of this furniture.</li>
                                    <li>Nibh purus integer elementum in tellus vulputate habitasse lorem ipsum vulputate.</li>
                                </ol>
        
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut vulputate posuere habitant vel tempor varius.  </p>
                            </article>
                            <div class="mt-5 sm:mt-7 lg:mt-10 py-5 sm:py-7 lg:py-10 border-y border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up">
                                <div class="flex items-center justify-between flex-wrap gap-6">
                                    <div class="flex items-center justify-center gap-4">
                                        <h6 class="font-normal whitespace-nowrap">Tags :</h6>
                                        <div class="flex flex-wrap gap-[10px]">
                                            <router-link v-for="(item, index) in blogTag" :key="index" class="btn btn-theme-outline btn-xs border-bdr-clr dark:!border-bdr-clr-drk !border-opacity-[15%] !text-base !font-normal" to="/blog-tag" :data-text="item"><span>{{item}}</span></router-link>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-6">
                                        <h6 class="font-normal">Share : </h6>
                                        <div class="flex items-center gap-6">
                                            <router-link to="#" class="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </router-link>
                                            <router-link to="#" class="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                                <i class="fa-brands fa-twitter"></i>
                                            </router-link>
                                            <router-link to="#" class="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                                <i class="fa-brands fa-instagram"></i>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="s-py-50 flex justify-between flex-col md:flex-row gap-8 md:gap-6" data-aos="fade-up">
                            <div v-for="(item, index) in recentPost" :key="index" class="md:max-w-[390px] w-full">
                                <h6 class="tracking-[0.5em] font-semibold mb-5 md:mb-6">{{item.name}}</h6>
                                <div class="group flex sm:items-center gap-[15px]">
                                    <router-link to="/blog-details-v2" class="max-w-[80px] h-auto sm:max-w-[114px] w-full flex-none block">
                                        <img class="w-full h-full object-cover" :src="item.image" alt="post">
                                    </router-link>
                                    <div class="flex-1">
                                        <ul class="flex items-center gap-[10px] flex-wrap">
                                            <li class="text-[15px] leading-none dark:text-white">{{item.date}}</li>
                                            <li><router-link to="/blog-tag" class="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum group-hover:bg-primary group-hover:text-white duration-300">{{item.tag}}</router-link></li>
                                        </ul>
                                        <h5 class="mt-3 font-medium dark:text-white leading-[1.5]"><router-link to="/blog-details-v2" class="text-underline">{{item.title}}</router-link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="s-py-50" data-aos="fade-up">
                            <h4 class="font-semibold leading-none mb-5 md:mb-6">Comment ( 13 )</h4>
                            <div class="p-5 sm:p-[30px] bg-[#F8F5F0] dark:bg-dark-secondary">
                                <div v-for="(item, index) in comments" :key="index" class="flex flex-col sm:flex-row items-start gap-5 first:pt-0  pt-5 md:pt-[30px] last:pb-0 pb-4 relative last:border-0 border-b border-bdr-clr dark:border-[#3c434a]">
                                    <div class="w-[72px] h-[72px] rounded-full flex-none overflow-hidden">
                                        <img class="w-full object-cover" :src="item.image" alt="comment">
                                    </div>
                                    <div class="max-w-[532px] w-full">
                                        <h6 class="font-medium leading-none">{{item.name}}</h6>
                                        <p class="mt-2 sm:mt-3">{{item.decs}}</p>
                                    </div>
                                    <router-link to="*" class="absolute top-5 right-0 text-title leading-none dark:text-white">
                                        Reply
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="pt-3 s-pb-50 max-w-[500px] mx-auto" data-aos="fade-up">
                            <h4 class="leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Leave  a Comment</h4>
                            <div class="grid gap-[15px]">
                                <div>
                                    <input class="w-full h-12 md:h-14 border border-[#3C474E] text-title bg-transparent placeholder:text-paragraph dark:text-white focus:border-primary dark:focus:border-primary dark:border-white-light dark:placeholder:text-white-light p-4 outline-none duration-300" type="text" placeholder="Full Name">
                                </div>
                                <div>
                                    <input class="w-full h-12 md:h-14 border border-[#3C474E] text-title bg-transparent placeholder:text-paragraph dark:text-white focus:border-primary dark:focus:border-primary dark:border-white-light dark:placeholder:text-white-light p-4 outline-none duration-300" type="email" placeholder="Email Address">
                                </div>
                                <div>
                                    <textarea class="w-full h-28 md:h-[170px] border border-[#3C474E] text-title bg-transparent placeholder:text-paragraph dark:text-white focus:border-primary dark:focus:border-primary dark:border-white-light dark:placeholder:text-white-light p-4 outline-none duration-300" name="Message" placeholder="Type your message here . . . "></textarea>
                                </div>
                            </div>
                            <div class="mt-4 md:mt-6">
                                <router-link to="#" class="btn btn-theme-solid" data-text="Post Comment">
                                    <span>Post Comment</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-80 flex-none grid gap-[15px] sm:grid-cols-2 lg:grid-cols-1 lg:sticky top-5">
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Categoryies</h4>
                            <ul class="grid gap-3 sm:gap-[15px] text-base sm:text-lg text-title dark:text-white list-disc pl-5">
                                <li v-for="(item, index) in blogCategory" :key="index" class="group duration-100 hover:text-primary"><router-link class="text-underline-primary" to="#">{{item}}</router-link></li>
                            </ul>
                        </div>

                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Recent Posts</h4>
                            <div class="grid gap-[10px]">
                                <h6 v-for="(item, index) in recentPostTwo" :key="index" class="font-medium group text-base sm:text-lg pb-[10px] border-b border-bdr-clr dark:border-[#172430]"><router-link class="text-underline" to="/blog-details-v1">{{item}} </router-link></h6>
                            </div>
                        </div>
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-[30px]">
                            <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Popular Tags</h4>
                            <div class="flex flex-wrap gap-[10px] md:gap-[15px] mt-5 md:mt-6">
                                <router-link  v-for="(item, index) in popularTag" :key="index" class="btn btn-outline btn-xs" to="#" :data-text="item"><span>{{item}}</span></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container-fluid">
                <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
                    <div>
                        <img :src="about" class="size-16 mx-auto" alt="">
                    </div>
                    <h3 class="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Related Posts</h3>
                    <p class="mt-3">Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends and informed on topics you love. </p>
                </div>
                <BlogOne/>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>

    </div>
</template>

<script setup>
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import user from '@/assets/img/testimonial/tmnl-02.jpg'
    import blog1 from '@/assets/img/thumb/blog-details.jpg'
    import about from '@/assets/img/svg/about.svg'

    import { onMounted } from 'vue';
    import Aos from 'aos';
    import { blogCategory, blogTag, comments, popularTag, recentPost, recentPostTwo } from '@/data/blog';
import BlogOne from '@/components/blog/blog-one.vue';
import FooterOne from '@/components/footer/footer-one.vue';
import ScrollToTop from '@/components/scroll-to-top.vue';

    onMounted(()=>{
        Aos.init()
    })
</script>
