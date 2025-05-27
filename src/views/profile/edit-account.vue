<template>
    <div>
        <NavbarOne/>

        <div class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" :style="{backgroundImage:'url(' + bg + ')'}">
            <div class="text-center w-full">
                <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">Direcciones</h2>
                <ul class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><router-link to="/">Inicio</router-link></li>
                    <li>/</li>
                    <li class="text-primary">Mis Direcciones</li>
                </ul>
            </div>
        </div>
        <div class="py-16">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto grid lg:grid-cols-4 gap-[30px]">
                    <div v-for="(item, index) in addresses" :key="index" class="group sm:grid sm:grid-cols bg-[#F8F5F0] dark:bg-[#1E2A35]" data-aos="fade-up">
                        <div :class="item.class2">
                            <div class="sm:max-w-[294px]">
                                <h4 class="font-semibold leading-none text-xl md:text-2xl duration-300 transition-all group-hover:text-primary"><router-link to="#">{{item.name}}</router-link></h4>
                                <p class="mt-[15px]"><b>Calle, #Ext:</b> {{item.street}} </p>
                                <p class="mt-[15px]"><b>Colonia:</b> {{item.suburb}}</p>
                                <p class="mt-[15px]"><b>Ciudad/Estado/País:</b> {{item.city}}, {{ item.state }}, {{ item.country }}</p>
                                <p class="mt-[15px]"><b>Código postal:</b> {{item.cp}}</p>
                                <p class="mt-[15px]"><b>Referencias:</b> {{item.reference}}</p>
                            </div>
                        </div>
                        <button v-if="item.defaultAddress == 0" type="button" class="btn btn-solid" data-text="Predeterminada" @click="setDefault(item.idAddress)">Seleccionar como predeterminada</button>
                        <span v-if="item.defaultAddress==1">Dirección Predeterminada</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-py-100" data-aos="fade-up">
            <div class="container-fluid">
                <div class="max-w-[1720px] mx-auto flex items-start gap-8 md:gap-12 2xl:gap-24 flex-col md:flex-row my-profile-navtab">
                    <div class="w-full md:w-[200px] lg:w-[300px] flex-none">
                        <ProfileTab/>
                    </div>
                    <div class="w-full md:w-auto md:flex-1 overflow-auto">
                        <div class="w-full max-w-[951px] bg-[#F8F8F9] dark:bg-dark-secondary p-5 sm:p-8 lg:p-[50px]">
                            <h5>Agregar nueva dirección</h5>
                            <div class="flex items-start flex-col lg:flex-row gap-5 sm:gap-6">
                                <div class="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Nombre referenciador</label>
                                        <input v-model="name" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ejem. Casa Principal">
                                    </div>
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Calle y número exterior</label>
                                        <input v-model="street" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ingresa calle y número">
                                    </div>
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Ciudad</label>
                                        <input v-model="city" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ingresa ciudad">
                                    </div>
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Código postal</label>
                                        <input v-model="cp" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ingresa código postal">
                                    </div>
                                     
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Referencias</label>
                                        <textarea v-model="references" class="w-full h-28 md:h-[168px] bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" name="Message" placeholder="Ingresa referencias"></textarea>
                                    </div>
                                </div>
                                <div class="grid gap-5 sm:gap-6 w-full lg:w-1/2">
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Colonia</label>
                                        <input v-model="suburb" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ingresa tu colonia">
                                    </div>
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">Estado</label>
                                        <input v-model="state" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300 appearance-none" type="text" placeholder="Ingresa tu estado">
                                    </div>
                                    <div>
                                        <label class="text-base md:text-lg text-title dark:text-white leading-none mb-2 sm:mb-3 block">País</label>
                                        <input v-model="country" class="w-full h-12 md:h-14 bg-white dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Ingresa tu país">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-8 md:mt-12">
                                <button class="btn btn-solid" data-text="Agregar Dirección" @click="addAddress">
                                    <span>Guardar</span>
                                </button>
                            </div>
                        </div>
                    </div>
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
    import ProfileTab from '@/components/profile-tab.vue';
    import ScrollToTop from '@/components/scroll-to-top.vue';
    import { useUserStore } from '@/stores/userStore';
    import { toast } from 'vue3-toastify';

    import bg from '@/assets/img/shortcode/breadcumb.jpg'
    import Aos from 'aos';

    import 'vue3-toastify/dist/index.css';

    const user = useUserStore();
    const street = ref('');
    const city = ref('');
    const state = ref('');
    const cp = ref('');
    const references = ref('');
    const country = ref('');
    const suburb = ref('');
    const name = ref('');
    const addresses = ref([]);

    const addAddress = async() => {
        try{
            const response = await fetch('http://localhost:8080/address',{
                method:"POST",
                header:{
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idUser: user.user.user.idUser, name:name.value,  street: street.value, city:city.value, state:state.value, cp:cp.value, reference:references.value, country: country.value, suburb:suburb.value, status:1})
            })
            if(!response.ok){
                throw new Error("Error al guardar dirección");
            }
            setTimeout(() => {
                showToast('Se aregó dirección correctamente.', {
                    type: 'success',
                    autoClose: 2000,
                    position: 'bottom-left',
                    pauseOnHover: true
                })
            }, 300)
            getAddresses();
        }catch(error){
            console.error("Error", error)
        }
    }

    const getAddresses = async() => {
        try{
            const response = await fetch(`http://localhost:8080/addresses/${user.user.user.idUser}`);
            if(!response.ok){
                throw new Error("Error al obtener direcciones");
            }
            const data = await response.json();
            addresses.value = Array.isArray(data) ? data : [];
        }catch(error){
            console.error("Error", error)
        }
    }

    const setDefault = async(id) => {
        try{
            const response = await fetch(`http://localhost:8080/address/default/${id}/${user.user.user.idUser}`,{
                method:"PUT",
                header: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({defaultAddress:1})
            })
            if(!response.ok){
                throw new Error("Error al actualizar default");
            }
             setTimeout(() => {
                showToast('Se aregó dirección predeterminada correctamente.', {
                    type: 'success',
                    autoClose: 2000,
                    position: 'bottom-left',
                    pauseOnHover: true
                })
            }, 300)
            getAddresses();
        }catch(error){
            console.error("Error", error)
        }
    }

    const showToast = (message, options = {}) => {
        toast(message, options)
    } 

    onMounted(()=>{
        Aos.init()
        getAddresses();
    })
</script>
