<template>
<div class="min-h-screen flex flex-row bg-gray-100">
  <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div class="flex items-center justify-center h-20 shadow-md">
      <h1 class="text-3xl text-center uppercase text-indigo-500">School Enrollment</h1>
    </div>
    <ul class="flex flex-col py-4">
        <router-link to="/dashboard" custom v-slot="{ href, navigate }">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Dashobard</span>
            </a>
          </li>
        </router-link>
        <router-link to="/enrollment" custom v-slot="{ href, navigate }">
            <li>
              <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
                <span class="text-sm font-medium">Enrollment</span>
              </a>
            </li>
        </router-link>
        <router-link to="/section" custom v-slot="{ href, navigate }">
            <li>
              <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
                <span class="text-sm font-medium">Section</span>
              </a>
            </li>
        </router-link>
        <router-link to="/term" custom v-slot="{ href, navigate}">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Term</span>
            </a>
          </li>
        </router-link>
        <router-link to="/subject" custom v-slot="{ href, navigate }">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Subjects</span>
            </a>
          </li>
        </router-link>
        <router-link to="/faculty" custom v-slot="{ href, navigate }">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Facuty</span>
            </a>
          </li>
        </router-link>
        <router-link to="/student" custom v-slot="{ href, navigate }">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Students</span>
            </a>
          </li>
        </router-link>
        <router-link to="/payment" custom v-slot="{ href, navigate }">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-chevron-right'></i></span>
              <span class="text-sm font-medium">Payments</span>
            </a>
          </li>
        </router-link>
        <router-link to="/" custom v-slot="{ href, navigate }" @click="signOut">
          <li>
            <a :href="href" @click="navigate" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-red-500">
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class='bx bx-log-out'></i></span>
              <span class="text-sm font-medium">Logout</span>
            </a>
          </li>
        </router-link>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import axios from 'axios'

const signOut = async () => {
  try {
    await axios.post('logout', null, {
      withCredentials: true,
    })
  } catch (error) {
    console.error(error)
  }
}

</script>