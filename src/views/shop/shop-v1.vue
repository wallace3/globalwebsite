<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Productos</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Productos</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100">
            <div class="container-fluid">
                <div class="flex items-start justify-between gap-8 max-w-[1720px] mx-auto flex-col lg:flex-row border-b border-bdr-clr dark:border-bdr-clr-drk pb-8 md:pb-[50px]" >
                    <div>
                        <h4 class="font-medium leading-none text-xl sm:text-2xl mb-5 sm:mb-6">Seleccionar Categoría</h4>
                        <div class="flex flex-wrap gap-[10px] md:gap-[15px]" >
                            <router-link v-for="cat in categories" :key="cat.idCategory" :to="`categorias/${cat.name}`" class="btn btn-theme-outline btn-sm shop1-button"  :data-text="cat.name"><span>{{cat.name}}</span></router-link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <ProductsLayout :classList="'max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-8 md:pt-[50px]'" :productList="products"/>
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
    import ProductsLayout from '@/components/product/products-layout.vue';
    import bg from '@/assets/img/shortcode/breadcumb.jpg'


    import Aos from 'aos';

  
    const products = ref([]);
    const categories = ref([]);

    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

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

    const getCategories = async()=>{
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

    onMounted(()=>{
        Aos.init()
        getProducts();
        getCategories();
    })


</script>
