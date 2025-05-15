<template>
    <div :class="classList">
        <div v-for="(item, index) in props.productList" :key="index" class="group">
            <div class="relative overflow-hidden">
                <router-link :to="`/product-details/${item.idProduct}`">
                    <img class="w-full transform group-hover:scale-110 duration-300" :src="'http://localhost:8080/' + item.image_url" alt="shop"/>
                </router-link>               
            </div>
            <div class="md:px-2 lg:px-4 xl:px-6 lg:pt-6 pt-5 flex gap-4 md:gap-5 flex-col">
                <div>
                    <h5 class="font-normal dark:text-white text-xl leading-[1.5]">
                        <router-link :to="`/product-details/${item.idProduct}`" class="text-underline">
                            {{item.name}}
                        </router-link>
                    </h5>
                    <h4 class="font-medium leading-none dark:text-white text-lg">Precio Inicial: <b>${{item.price}}</b></h4>
                    <h4 v-if="item.bid" class="font-medium leading-none dark:text-white text-lg">Oferta actual: <b>${{item.bid}}</b></h4>
                    <h4 v-else class="font-medium leading-none dark:text-white text-lg">Oferta actual: <b>No hay oferta</b></h4>
                    <div>
                         <input
                    type="text"
                    v-model="localOffers[item.idProduct]"
                    @input="updateOffer(item.idProduct)"
                    class="form-control input-style"
                    placeholder="Deja tu puja"
                />
                 <button @click="triggerBid(item.idProduct)">
                    <!-- ícono SVG -->
                    Enviar
                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps,  defineEmits, ref, watch} from 'vue';

    const props = defineProps({
        productList:Object,
        classList:String
    })

    const emit = defineEmits(['update:offer', 'offerBid']);

    const localOffers = ref({});

    watch(() => props.productList, (newList) => {
  if (!newList) return;
  newList.forEach(item => {
    if (!(item.idProduct in localOffers)) {
      localOffers[item.idProduct] = item.offer || '';
    }
  });
}, { immediate: true });

// Emitimos update cada vez que cambie localOffers por producto
watch(localOffers, (newOffers) => {
  Object.entries(newOffers).forEach(([id, offer]) => {
    emit('update:offer', { id, offer });
  });
}, { deep: true });

    console.log(localOffers.value);
    
    
    props.productList.forEach(item => {
        if (!(item.idProduct in localOffers.value)) {
            localOffers.value[item.idProduct] = item.offer || '';
        }
    });


    const updateOffer = (id) => {
        console.log(id);
        console.log( localOffers.value[id]);
        
        
    emit('update:offer', {
        id,
        offer: localOffers.value[id]
    });
};

const triggerBid = (id) => {
    emit('offerBid', id);
};

</script>

<style>
    .input-style{
        border-width:2px!important;
    }
</style>
