<template>
    <div :class="classList">
        <div v-for="(item, index) in props.productList" :key="index" class="group">
            <div class="relative overflow-hidden">
                <router-link :to="`/detalles-producto/${item.idProduct}`">
                    <img class="w-full transform group-hover:scale-110 duration-300" :src="`${apiUrl}/` + item.image_url" alt="shop"/>
                </router-link>               
            </div>
            <div class="md:px-2 lg:px-4 xl:px-6 lg:pt-6 pt-5 flex gap-4 md:gap-5 flex-col">
                <div>
                    <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                        <router-link :to="`/detalles-producto/${item.idProduct}`" class="text-underline">
                            {{item.name}}
                        </router-link>
                    </h5>
                    <h4 class="font-medium leading-none dark:text-white text-lg">Precio Inicial: <b>${{item.price}}</b></h4>
                    <h4 v-if="item.bid" class="font-medium leading-none dark:text-white text-lg">Oferta actual: <b>${{item.bid}}</b></h4>
                    <h4 v-else class="font-medium leading-none dark:text-white text-lg">Oferta actual: <b>No hay oferta</b></h4>
                    <h4 class="font-medium leading-none dark:text-white text-lg">Secuencia de Oferta: Multiplos de <b>${{ props.amount }}</b></h4>
                    <div>
                         <input
                            type="text"
                            v-model="localOffers[item.idProduct]"
                            @input="updateOffer(item.idProduct)"
                            class="form-control input-style"
                            placeholder="Deja tu puja"
                        />
                    </div>
                     <button @click="triggerBid(item.idProduct,item.bid,item.price)" class="btn btn-outline btn-sm offer-button" data-text="Oferta">
                        <span>Ofertar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


const localOffers = ref({});
const userStore = useUserStore();
const route = useRouter();

const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

const props = defineProps({
    productList:Object,
    classList:String,
    amount:Number
})

const emit = defineEmits(['update:offer', 'offerBid']);

onMounted(()=>{
    props.productList.forEach(item => {
        if (!(item.idProduct in localOffers.value)) {
            localOffers.value[item.idProduct] = item.offer || '';
        }
    });
     console.log("localoffers", localOffers)
})

const showToast = (message, options = {}) => {
    toast(message, options)
} 

const updateOffer = (id) => {
    emit('update:offer', {
        id,
        offer: localOffers.value[id]
    });
};

const triggerBid = (id, bid, price) => {
     if(!userStore.isAuthenticated){
        setTimeout(() => {
            showToast('Debes iniciar sesión para participar', {
                type: 'error',
                autoClose: 3000,
                position: 'bottom-left',
                pauseOnHover: true
            })
            }, 300)
        setTimeout(() => {
            route.push('/login')
        }, 3000)
        return
    }
    if(bid){
        if(parseInt(localOffers.value[id])<=parseInt(bid)){
            showToast('No puede ser menor o igual a la oferta actual', {
                type: 'error',
                autoClose: 5000,
                position: 'bottom-left',
                pauseOnHover: true
            })
            return
        }
        if ((parseInt(localOffers.value[id]) - (parseInt(bid))) % props.amount !== 0) {
             showToast(`La ofertaba debe ser un múltiplo de ${props.amount}`, {
                type: 'error',
                autoClose: 5000,
                position: 'bottom-left',
                pauseOnHover: true
            })
            return;
        }
    }else{
        if(parseInt(localOffers.value[id])<=parseInt(price)){
            showToast('No puede ser menor o igual al precio inicial', {
                type: 'error',
                autoClose: 5000,
                position: 'bottom-left',
                pauseOnHover: true
            })
            return
        }
        if ((parseInt(localOffers.value[id]) - (parseInt(price))) % props.amount !== 0) {
            showToast(`La ofertaba debe ser un múltiplo de ${props.amount}`, {
                type: 'error',
                autoClose: 5000,
                position: 'bottom-left',
                pauseOnHover: true
            })
            return;
        }
    }
    emit('offerBid', id);
};
</script>

<style>
    .input-style{
        border-width:2px!important;
    }
    .offer-button{
        margin-top:5px;
    }
</style>
