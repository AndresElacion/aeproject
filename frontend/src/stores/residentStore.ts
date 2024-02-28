import { defineStore } from 'pinia'
import axios from 'axios'

export interface Resident {
    id: number;
    name: string;
    unit: string;
    block_and_lot: string;
    barangay: string;
    city: string;
    province: string;
    zip_code: string;
}

export interface ResidentStore {
    getResidents: any;
    residents: Resident[];
    totalCount: number;
    addResident(resident: Resident): void;
    deleteResident(id: number, resident: Resident): void;
    updateResident(id: number, resident: Resident): Promise<void>;
}

export const useResidentStore = defineStore('residentStore', {
    state: () => ({
        residents: <Resident[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.residents.length
        }
    },
    actions: {
        async getResidents() {
            this.loading = true

            try {
                const response = await axios.get('/api/BRGY/resident')
                this.residents = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting residents', error)
            }
        }, // end of getResidents

        async addResident(resident: Resident) {
            try {
                const response = await axios.post('/api/BRGY/resident', {
                    name: resident.name,
                    unit: resident.unit,
                    block_and_lot: resident.block_and_lot,
                    barangay: resident.barangay,
                    city: resident.city,
                    province: resident.province,
                    zip_code: resident.zip_code,
                })
                this.residents.push(response.data)
                console.log('Resident added successfully')
            } catch (error) {
                console.error('Error adding resident', error)
            }
        }, // end of addResident

        async updateResident(id: number, updateData: Resident) {
            const existingResident = this.residents.find(resident => resident.id === id)
            if(!existingResident) {
                console.error('Resident not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/BRGY/resident/${id}`, updateData)

                const updatedIndex = this.residents.findIndex(resident => resident.id === id)
                this.getResidents()
                if(updatedIndex !== 1) {
                    this.residents.splice(updatedIndex, 1, response.data)
                    console.log('Resident updated successfully', response.data)
                } else {
                    console.error('Resident not found with ID', id)
                }
            } catch (error) {
                console.error('Error Updating resident', error)
                throw error
            }
        }, // end of updateResident

        async deleteResident(id: number) {
            try {
                const response = await axios.delete(`/api/BRGY/resident/${id}`)
                console.log('Resident deleted succesfully', response.data)
                this.getResidents()
            } catch (error) {
                console.error('Error deleting Resident', error)
            }
        }, // end of deleteResident   
    }
})