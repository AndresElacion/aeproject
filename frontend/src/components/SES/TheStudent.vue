<template>
<div class="pt-24">    
    <div class="table w-full p-2">
        <h1 class="pb-3 text-2xl">All Student.</h1>
        <h2 class="font-semibold text-slate-800">Total Student <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                  <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                    <div class="flex items-center justify-center">
                        Student Number
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </div>
                  </th>
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
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Contact Number
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Term
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Section
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Status
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
                    <tr v-for="enrollment in enrollments" :key="enrollment.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">{{ enrollment.student_number }}</td>
                        <td class="p-2 border-r">{{ enrollment.name }}</td>
                        <td class="p-2 border-r">{{ enrollment.email }}</td>
                        <td class="p-2 border-r">{{ enrollment.contact_number }}</td>
                        <td class="p-2 border-r">{{ enrollment.term }}</td>
                        <td class="p-2 border-r">{{ enrollment.section }}</td>
                        <td class="p-2 border-r">{{ enrollment.status }}</td>
                        <td>
                            <button @click="openUpdateModal(enrollment)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                            <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                                <div class="w-4/12">
                                    <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                  <div class="mb-6">
                                    <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
                                  </div>
                                  <button @click="showUpdateModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                                  <form @submit.prevent="updateForm">
                                    <div class="-mx-3 md:flex mb-6">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                          Name
                                        </label>
                                        <input v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="first_name" type="text" placeholder="Jane">
                                      </div>
                                      <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                                          Email Address
                                        </label>
                                        <input v-model="form.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="Jane@doe.com">
                                      </div>
                                    </div>
                                    <div class="-mx-3 md:flex mb-6">
                                      <div class="md:w-full px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
                                          Compete Address
                                        </label>
                                        <input v-model="form.address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="address" type="address" placeholder="Complete address">
                                      </div>
                                    </div>
                                    <div class="-mx-3 md:flex mb-6">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="gender">
                                          Gender
                                        </label>
                                        <input v-model="form.gender" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="gender" type="text" placeholder="Male or Female">
                                      </div>
                                      <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="contact_numer">
                                          Contact Number
                                        </label>
                                        <input v-model="form.contact_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="contact_numer" type="text" placeholder="+63 123 456 7890">
                                      </div>
                                      <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="dob">
                                          Date of Birth
                                        </label>
                                        <input v-model="form.dob" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="dob" type="text" placeholder="1/10/2024">
                                      </div>
                                    </div>
                                    <div class="-mx-3 md:flex mb-4">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="term">
                                          Term
                                        </label>
                                        <input v-model="form.term" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="term" type="text" placeholder="kinder to k12">
                                      </div>
                                      <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="section">
                                          Section
                                        </label>
                                        <input v-model="form.section" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="section" type="text" placeholder="Section">
                                      </div>
                                    </div>
                                    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                  </form>  
                                </div>
                                </div>
                            </div>
                            <button @click="deleteEnrollment(enrollment.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEnrollmentStore, type Enrollment } from '@/stores/enrollmentStore';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2'

const enrollmentStore = useEnrollmentStore()
const { enrollments, loading, totalCount } = storeToRefs(enrollmentStore)
const showUpdateModal = ref(false)
const form = ref<Enrollment>({
  id: 0,
  name: '',
  student_number: '',
  gender: '',
  contact_number: '',
  email: '',
  dob: '',
  address: '',
  term: '',
  section: '',
  status: '',
})

enrollmentStore.getEnrollments()

const openUpdateModal = (enrollment: Enrollment) => {
    form.value = { ...enrollment }
    showUpdateModal.value = true
}

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

const updateForm = () => {
    try {
        enrollmentStore.updateEnrollment(form.value.id, form.value).then(() => {
          const Toast = configureSwal()
          Toast.fire({
            icon: 'success',
            title: 'Student updated successfully'
          })
        })
        showUpdateModal.value = false
    } catch (error) {
        console.error('Error updating student', error)
    }
}

const deleteEnrollment = (id: number) => {
    enrollmentStore.deleteEnrollment(id).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Student deleted successfully'
      })
    })
}
</script>