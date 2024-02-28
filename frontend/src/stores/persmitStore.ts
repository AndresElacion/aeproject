import { defineStore } from 'pinia'
import axios from 'axios'

export interface Permit {
    id: number;
    business_name: string;
    business_address: string;
    type_of_business: string;
}

export const usePermitStore = defineStore('permitStore', {
    state: () => ({
        permits: <Permit[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.permits.length
        }
    },
    actions: {
        async getPermits() {
            this.loading = true

            try {
                const response = await axios.get('/api/BRGY/permit')
                this.permits = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting permits', error)
            }
        }, // end of getPermits

        async addPermit(permit: Permit) {
            try {
                const response = await axios.post('/api/BRGY/permit', {
                    business_name: permit.business_name,
                    business_address: permit.business_address,
                    type_of_business: permit.type_of_business,
                })
                this.permits.push(response.data)
                console.log('Permit added successfully', response.data)
            } catch (error) {
                console.error('Error adding permit', error)
            }
        }, // end of addPermit

        async updatePermit(id: number, updateData: Permit) {
            const existingPermit = this.permits.find(permit => permit.id === id)
            if(!existingPermit) {
                console.error('No permit found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/BRGY/permit/${id}`, updateData)

                const updatedIndex = this.permits.findIndex(permit => permit.id === id)
                this.getPermits()

                if(updatedIndex !== 1) {
                    this.permits.splice(updatedIndex, 1, response.data)
                    console.log('Permit updated successfully', response.data)
                } else {
                    console.error('Not permit found with ID', id)
                }
            } catch (error) {
                console.error('Error updating permit', error)
                throw error
            }
        }, // end of updatePermit

        async deletePermit(id: number) {
            try {
                const response = await axios.delete(`/api/BRGY/permit/${id}`)
                console.log('Permit deleted successfully', response.data)
                this.getPermits()
            } catch (error) {
                console.error('Error deleting permit', error)
            }
        }
    }
})