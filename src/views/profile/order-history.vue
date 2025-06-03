<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' +  bg  + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Ordenes</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Historial de ordenes</li>
                </ul>
            </div>
        </div>

        <div class="s-py-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div class="w-full md:w-[200px] lg:w-[300px] flex-none">
                        <ProfileTab/>
                    </div>
                    <div class="w-full md:w-auto md:flex-1 overflow-auto">
                        <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px] order-history-table">
                            <DataTable :data="orders" :columns="columns" class="display" :options="options" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="detailsModal" class="modal-backdrop">
            <div class="modal-content">
                <h4>Detalles de la orden</h4>
                <div class="w-full md:w-auto md:flex-1 overflow-auto">
                    <div class="bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px] order-history-table">
                        <ul class="order-history">
                            <li class="title flex items-center justify-between gap-5 pb-[10px] sm:pb-5 border-b border-bdr-clr dark:border-bdr-clr-drk">
                                <span class="cart-product-title text-lg md:text-xl font-semibold leading-none text-title dark:text-white block w-[270px] sm:w-[310px] xl:w-[330px]">Producto</span>
                                <span class="text-lg md:text-xl font-semibold leading-none text-title dark:text-white w-[100px]">Precio</span>
                            </li>
                            <li v-for="det in details" :key="det.idOrder" class="flex items-center justify-between gap-5 py-[15px] sm:py-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk">
                                <div class="flex items-center gap-3 md:gap-4 lg:gap-6 ordered-product w-[270px] sm:w-[310px] xl:w-[330px]">
                                    <div class="w-16 sm:w-[90px] flex-none">
                                        <img :src="`${apiUrl}/` + det.image_url" alt="product">
                                    </div>
                                    <div class="flex-1">
                                        <span class="text-[15px] font-medium leading-none">{{det.name}}</span>
                                        <h5 class="font-semibold leading-none mt-2 md:mt-4">{{det.description}}</h5>
                                    </div>
                                </div>
                                <span class="text-base md:text-lg leading-none text-title dark:text-white font-semibold text-left w-[60px]">{{det.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-primary-solid details-button" @click="closeModal" data-text="Cerrar">Cerrar</button>
            </div>
        </div>

        <FooterOne/>
        
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import NavbarOne from '@/components/navbar/navbar-one.vue';
    import ProfileTab from '@/components/profile-tab.vue';
    import FooterOne from '@/components/footer/footer-one.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';

    import bg from '@/assets/img/shortcode/breadcumb.jpg';

    import { useUserStore } from '@/stores/userStore';
    import { DataTable } from 'datatables.net-vue3';
    import DataTablesLib from 'datatables.net';
    DataTable.use(DataTablesLib);

    import Aos from 'aos';

    const orders = ref([]);
    const user = useUserStore();
    const detailsModal = ref(false);
    const details = ref([]);
    const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:8080'

    const columns = [
        { title: 'ID Orden', data: 'idOrder' },
        { title: 'Fecha de orden', data: 'orderDate' },
        { 
            title: 'Total', 
            data: 'total',
            render: function(data) {
                return '<span>$' + data  + '</span>';
            } 
        },
        {
            title: 'Estado',
            data: 'paymentStatus',
            render: function (data) {
                if (data === 'paid'){
                    return '<span class="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">✔ Completado</span>';
                }
                if (data === 'unpaid'){
                    return '<span class="inline-block px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">✘ Cancelado</span>';
                }
                return data;
            },
        },
        {
            title: 'Detalle',
            data: 'idOrder',
            render: function (data) {
                return `<button class="btn btn-primary-solid details-button" onclick="getDetails(${data})" data-text="Detalles"><span>Detalles</span></button>`;
            },
        }
    ];

    const options = {
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-MX.json'
        }
    };

    const getOrders = async() => {
        const response = await fetch(`${apiUrl}/stripe/history/${user.user.user.idUser}`)
        if(!response.ok){
            throw new Error("Error al obtener información del endpoint");
        }
        const data = await response.json();
        orders.value = Array.isArray(data) ? data : [];
    }

    function closeModal() {
        detailsModal.value = false;
    }

    window.getDetails = async function (orderId) {
        try {
            const response = await fetch(`${apiUrl}/stripe/orderDetails/${orderId}`);
            if (!response.ok) throw new Error("Error al obtener detalles");
            const data = await response.json();
            console.log(data);
            
            details.value = Array.isArray(data) ? data : [];
            detailsModal.value = true;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    onMounted(()=>{
        Aos.init()
        getOrders();
    })
</script>

<style>
    @import 'datatables.net-dt';
    table.dataTable tbody tr:hover {
        background-color: #f9fafb;
    }

    table.dataTable thead{
        background-color:beige;
    }

    .details-button{
        padding-bottom:5px!important;
        padding-top:5px!important;
        padding-right:15px!important;
        padding-right:15px!important;
        margin-top:10px;
    }
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index:9999;
    }

    .modal-content {
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
        background: white;
        padding: 20px;
        border-radius: 8px;
    }
</style>
