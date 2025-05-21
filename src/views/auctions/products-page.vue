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
                <div data-aos="fade-up" data-aos-delay="200">
                    <ProductsLayout :classList="'max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pt-8 md:pt-[50px]'" 
                    :productList="auctionProducts"  
                    :amount = "amount"
                    @update:offer="updateOffer"
                    @offerBid="offerBid"/>
                </div>

                <!--<div class="text-center mt-7 md:mt-12">
                    <router-link to="/shop-v1" class="btn btn-outline" data-text="Load More">
                        <span>Load More</span>
                    </router-link>
                </div>-->
            </div>
        </div>

        <FooterOne/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import ProductsLayout from '@/components/product/auction-layout.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { useRoute } from 'vue-router';
    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import { useUserStore } from '@/stores/userStore'
    import Aos from 'aos';

    onMounted(()=>{
        Aos.init()
        getAuctionProducts();
        getAuctionAmount();
    })

    const route = useRoute();
    const auctionProducts = ref([]);
    const amount = ref(null);
    const user = useUserStore();

    const getAuctionProducts = async () => {
        try{
            const response = await fetch(`http://localhost:8080/auction/details/products/${route.params.id}`)
            if(!response.ok){
                throw new Error("Error al obtener información");
            }
            const data = await response.json();
            auctionProducts.value = Array.isArray(data)
            ? data.map(product => ({ ...product, offer: '' }))
            : [];

        }catch(error){
            console.log(error);
        }
    }

    const updateOffer = ({ id, offer }) => {
        const product = auctionProducts.value.find(p => p.idProduct === id);
        if (product) product.offer = offer;
    };

    const offerBid = async(id) => {
        console.log(user);
        const product = auctionProducts.value.find(p => p.idProduct === id);
        if (product) {
            console.log(`Enviando puja de $${product.offer} para el producto ${product.name}`);
            try{
                const result = await fetch('http://localhost:8080/bids',{
                    method:"POST",
                    header:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ idProduct: product.idProduct, idUser: user.user.user.idUser, amount:product.offer, idAuction: route.params.id, status:1})
                });
                if(!result.ok){
                    throw new Error("Error al guardar info");
                }
                getAuctionProducts();
            }catch(error){
                console.error("Error", error)
            }
        }
    };

    const getAuctionAmount = async()=>{
        try{
            const response = await fetch(`http://localhost:8080/auction/amount/${route.params.id}`);
            if(!response.ok){
                throw new Error("Error al obtener información");
            }
            const data = await response.json();
            amount.value = parseInt(data[0]['amount']);
        }catch(error){
            console.error('Error', error)
        }
    }   

</script>
