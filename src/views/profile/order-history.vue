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
        
        <div v-if="invoiceModal" class="modal-backdrop">
            <div class="modal-content">
                <h4>Llena los campos para generar tu factura</h4>
                <div class="w-full md:w-auto md:flex-1 overflow-auto">
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="input-text sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Nombre o Razón Social</label>
                        <input v-model="razon" class=" w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="text" placeholder="">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="input-text sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">RFC</label>
                        <input v-model="rfc" @blur="buscarCfdiUses" id="rfc" class=" w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="text" placeholder="">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="input-text sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">CP Fiscal</label>
                        <input v-model="cp" class=" w-full h-12 md:h-14 bg-white dark:bg-transparent border border-bdr-clr focus:border-primary p-4 outline-none duration-300 placeholder:text-xl placeholder:transform placeholder:translate-y-[10px]" type="text" placeholder="">
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="input-text sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Regimén Fiscal</label>
                        <select v-model="regimen">
                            <option v-for="item in regimenesFiscales" :key="item.value" v-bind:value="item.Value">{{ item.Name }}</option>
                        </select>
                    </div>
                    <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <label class="input-text sm:text-lg font-medium leading-none mb-2.5 block dark:text-white">Uso de la factura</label>
                        <select v-model="cfdi">
                            <option v-for="item in cfdiUses" :key="item.value" v-bind:value="item.Value">{{ item.Name }}</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary-solid details-button" @click="enviarFactura" data-text="Generar">Generar Factura</button>
                <button class="btn btn-primary-solid details-button" @click="closeModal" data-text="Cerrar">Cerrar</button>
            </div>
        </div>

        <FooterOne/>
        
        <ScrollToTop/>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios';

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
    const invoiceModal = ref(false);
    const cfdiUses = ref([]);
    const razon = ref('');
    const regimen = ref('');
    const orderTotal = ref('');
    //nst generateInvoiceModal = ref(false);
    const details = ref([]);
    const cfdi = ref('');
    const rfc = ref('');
    const idOrder = ref('');
    const regimenesFiscales = ref ([]);
    const cp = ref ('');
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
        },
        {
            title:'Factura',
            data: null,
            render: function(data,type,row){
                if(row['paymentStatus'] == 'paid' && row['base64'] == null){
                    return `<button class="btn btn-primary-solid details-button" onclick="openInvoiceModal(${row['idOrder']}, ${row['total']})" data-text="Facturar"><span>Facturar</span></button>`;
                }
                if(row['paymentStatus'] == 'paid' && row['base64']){
                    return `<button class="btn btn-primary-solid details-button" onclick="downloadPDF('${row['base64']}')" data-text="Descargar"><span>Descargar Factura</span></button>`;
                }
                return '';
            }
        }
    ];

    const options = {
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-MX.json'
        }
    };

    const buscarCfdiUses = async () => {
        if (!rfc.value) return;

        try {
            const auth = {
                username: 'globaltrade',  // Cambia por tus credenciales reales
                password: 'PgM57rNK5mtb7T7'
            };
            const [usosResponse, regimenResponse] = await Promise.all([
                axios.get(`https://apisandbox.facturama.mx/Catalogs/CfdiUses`, {
                    auth,
                    params: { keyword: rfc.value }
                }),
                axios.get(`https://apisandbox.facturama.mx/Catalogs/FiscalRegimens`, {
                    auth,
                    params: { rfc: rfc.value }
                })
            ]);

            cfdiUses.value = usosResponse.data;
            regimenesFiscales.value = regimenResponse.data;
        } catch (error) {
            console.error('Error al obtener CfdiUses:', error);
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

    const getCdfiTypes = async () => {
        const response = await fetch(`${apiUrl}/api/factura/types`)
        if(!response.ok){
            throw new Error("Error al obtener información del endpoint");
        }
        const data = await response.json();
        cfdi.value = Array.isArray(data) ? data : [];
        console.log(data);
        
    }

    function closeModal() {
        detailsModal.value = false;
        invoiceModal.value = false;
    }

    window.getDetails = async function (orderId) {
        try {
            const response = await fetch(`${apiUrl}/stripe/orderDetails/${orderId}`);
            if (!response.ok) throw new Error("Error al obtener detalles");
            const data = await response.json();
            details.value = Array.isArray(data) ? data : [];
            detailsModal.value = true;
        } catch (error) {
            console.error("Error:", error);
        }
    };


    window.openInvoiceModal = async function(orderId, total) {
        try {
            const response = await fetch(`${apiUrl}/stripe/orderDetails/${orderId}`);
            if (!response.ok) throw new Error("Error al obtener detalles");
            const data = await response.json();
            orderTotal.value = total;
            idOrder.value = orderId;
            details.value = Array.isArray(data) ? data : [];
            invoiceModal.value = true;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const enviarFactura = async () => {
        const payload = {
            total: orderTotal.value,
            items: details.value,
            regimen: regimen.value,
            cfdi: cfdi.value,
            cp: cp.value,
            razon: razon.value,
            rfc: rfc.value,
            venta_id: idOrder.value // si también lo tienes
        };
        try {
        const response = await fetch(`${apiUrl}/api/factura`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    
        const data = await response.json();
    
        if (data.base64 && data.filename) {
            const blob = base64ToBlob(data.base64, 'application/pdf');
            const url = URL.createObjectURL(blob);
    
            const link = document.createElement('a');
            link.href = url;
            link.download = data.filename;
            document.body.appendChild(link);  // 👈 asegúrate de que el link esté en el DOM
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            getOrders();
        } else {
            console.error('Respuesta inesperada:', data);
            alert('Error: No se pudo generar la factura.');
        }
        } catch (error) {
        console.error('Error al enviar factura:', error);
        alert('Hubo un error al generar la factura.');
        }
    };
  
    // 🔁 Utilidad para convertir base64 a blob
    function base64ToBlob(base64, mime) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mime });
    }


    window.downloadPDF = async function(base64) {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${base64}`;
        link.download = 'factura.pdf';
        link.click();
    }

    onMounted(()=>{
        Aos.init()
        getOrders();
        getCdfiTypes();
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
    
    .input-text{
        color:black!important;
    }
</style>
