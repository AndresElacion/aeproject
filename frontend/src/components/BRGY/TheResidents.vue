<template>
    <div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="mb-6">
        <h1 class="text-2xl">Fill up the form to add new Residents.</h1>
      </div>
      <form @submit.prevent="submitForm">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
              Name
            </label>
            <input v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Jane Doe">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="unit">
              Unit
            </label>
            <input v-model="form.unit" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="unit" type="text" placeholder="Unit Number">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="block_and_lot">
              Block and Lot
            </label>
            <input v-model="form.block_and_lot" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="block_and_lot" type="block_and_lot" placeholder="Block and Lot">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="barangay">
              Barangay
            </label>
            <input v-model="form.barangay" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="barangay" type="text" placeholder="Barangay">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
              City
            </label>
            <input v-model="form.city" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="city" type="text" placeholder="City">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
                Province
              </label>
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="province">
            </label>
            <input v-model="form.province" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="province" type="text" placeholder="Province">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-4">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="zip_code">
              Zip Code
            </label>
            <input v-model="form.zip_code" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="zip_code" type="text" placeholder="Zip Code">
          </div>
        </div>
        <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">Submit</button>
      </form>  
    </div>
    
    <hr />
    <div class="pt-2">    
        <div class="table w-full p-2">
            <h1 class="pb-3 text-2xl">All Residents.</h1>
            <h2 class="font-semibold text-slate-800">Total Resident <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-50 border-b">
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Name
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
    
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                          <div class="flex items-center justify-center">
                              Unit / Block and Lot
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                              </svg>
                          </div>
                      </th>

                      <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Province
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
    
                      <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Barangay
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
    
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div class="flex items-center justify-center">
                          City
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>
                      </div>
                  </th>

                  <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div class="flex items-center justify-center">
                        Zip Code
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </div>
                </th>
                        
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Action
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <div v-if="loading">
                  <div class="flex items-center justify-center">
                    <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                  </div>
                </div>
                <tbody v-else>
                    <tr v-for="resident in residents" :key="resident.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">{{ resident.name }}</td>
                        <td class="p-2 border-r">{{ resident.unit }} - {{ resident.block_and_lot }}</td>
                        <td class="p-2 border-r">{{ resident.province }}</td>
                        <td class="p-2 border-r">{{ resident.barangay }}</td>
                        <td class="p-2 border-r">{{ resident.city }}</td>
                        <td class="p-2 border-r">{{ resident.zip_code }}</td>
                        <td>
                          <button @click="openUpdateModal(resident)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                          <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                              <div class="w-4/12">
                                  <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                <div class="mb-6">
                                  <h1 class="text-2xl">Fill up the form to enroll resident.</h1>
                                </div>
                                <button @click="showUpdateModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                                <form @submit.prevent="updateForm">
                                  <div class="-mx-3 md:flex mb-2">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                        Name
                                      </label>
                                      <input v-model="formUpdate.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Jane">
                                    </div>
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="unit">
                                        Unit
                                      </label>
                                      <input v-model="formUpdate.unit" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="unit" type="text" placeholder="Unit">
                                    </div>
                                  </div> 
    
                                  <div class="-mx-3 md:flex mb-2">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="block_and_lot">
                                        Block and Lot
                                      </label>
                                      <input v-model="formUpdate.block_and_lot" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="block_and_lot" type="text" placeholder="Block and Lot">
                                    </div>
    
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="barangay">
                                        Barangay
                                      </label>
                                      <input v-model="formUpdate.barangay" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="barangay" type="text" placeholder="Barangay">
                                    </div>
                                  </div>
    
                                  <div class="-mx-3 md:flex mb-2">
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
                                        City
                                      </label>
                                      <input v-model="formUpdate.city" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="city" type="text" placeholder="City">
                                    </div>
    
                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="province">
                                        Province
                                      </label>
                                      <input v-model="formUpdate.province" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="province" type="text" placeholder="Province">
                                    </div>

                                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="zip_code">
                                          Zip Code
                                        </label>
                                        <input v-model="formUpdate.zip_code" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="zip_code" type="text" placeholder="Zip Code">
                                      </div>
                                  </div>
                                  <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                </form>  
                              </div>
                              </div>
                          </div>
                          <button @click="deleteResident(resident.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useResidentStore, type Resident } from '@/stores/residentStore'
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'

const residentStore = useResidentStore()
const { residents, loading, totalCount } = storeToRefs(residentStore)
const showUpdateModal = ref(false)
const form = ref<Resident>({
    id: 0,
    name: '',
    unit: '',
    block_and_lot: '',
    barangay: '',
    city: '',
    province: '',
    zip_code: '',
})

const formUpdate = ref<Resident>({
    id: 0,
    name: '',
    unit: '',
    block_and_lot: '',
    barangay: '',
    city: '',
    province: '',
    zip_code: '',
})

const resetForm = () => {
    form.value.name = '';
    form.value.unit = '';
    form.value.block_and_lot = '';
    form.value.barangay = '';
    form.value.city = '';
    form.value.province = '';
    form.value.zip_code = '';
}

residentStore.getResidents()

const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast: { onmouseenter: any; onmouseleave: any; }) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
};

const submitForm = () => {
    if (form.value.name.length > 0) {
        residentStore.addResident(form.value).then(() => {
            const Toast = configureSwal()
            Toast.fire({
                icon: 'success',
                title: 'Resident created successfully'
            })
        })
        resetForm()
    }
}

const openUpdateModal = (resident: Resident) => {
    formUpdate.value = { ...resident }
    showUpdateModal.value = true
}

const updateForm = () => {
    try {
        residentStore.updateResident(formUpdate.value.id, formUpdate.value).then(() => {
            const Toast = configureSwal()
            Toast.fire({
                icon: 'success',
                title: 'Resident updated successfully'
            })
        })
        showUpdateModal.value = false
    } catch (error) {
        console.error('Error updating resident', error)
    }
}

const deleteResident = (id: number) => {
    try {
        residentStore.deleteResident(id).then(() => {
            const Toast = configureSwal()
            Toast.fire({
                icon: 'success',
                title: 'Resident deleted successfully'
            })
        })
    } catch (error) {
        console.error('Error deleting resident', error)
    }
}
</script>

