<template>
    <div class="home">
        <div class="flex">
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='tin'"
            >
                TIN
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='npi'"
            >
                NPI
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='facility'"
            >
                Facility
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='name'"
            >
                Name
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 whitespace-no-wrap focus:outline-none"
                @click.prevent="selected='add1'"
            >
                Add 1
            </button>
            <button
                class="text-gray-800 flex px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 whitespace-no-wrap focus:outline-none"
                @click.prevent="selected='add2'"
            >
                Add 2
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='city'"
            >
                City
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='state'"
            >
                State
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='zip'"
            >
                ZIP
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='claims'"
            >
                Claims
            </button>
        </div>
        <div class="flex mt-3">
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='claimants'"
            >
                Claimants
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='procedures'"
            >
                Procedures
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='billed'"
            >
                Billed
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='adacode'"
            >
                ADA Code
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='network1'"
            >
                Network 1
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='network2'"
            >
                Network 2
            </button>
            <button
                class="text-gray-800 px-4 py-1 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="selected='network3'"
            >
                Network 3
            </button>
        </div>

        <hr class="border-b-2 border-gray-900 mt-6 mb-2">
        <div class="text-gray-600">
            <div v-if="selected === 'tin'">
                <tin />
            </div>
            <div v-if="selected === 'npi'">
                <npi />
            </div>
            <div v-if="selected === 'facility'">
                <facility />
            </div>
            <div v-if="selected === 'name'">
                <name />
            </div>
            <div v-if="selected === 'network3'">
                <network3 />
            </div>
        </div>
    </div>
</template>
<script>
import Tin from '@/components/table_configuration/Tin'
import Npi from '@/components/table_configuration/Npi'
import Facility from '@/components/table_configuration/Facility'
import Name from '@/components/table_configuration/Name'
import Network3 from "@/components/table_configuration/Network3";

export default {
    components: {
        Tin,
        Npi,
        Facility,
        Name,
        Network3
    },
    data() {
        return {
            selected: 'tin'
        }
    },
}
</script>
