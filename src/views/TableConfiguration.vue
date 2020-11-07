<template>
    <div class="home">
        <div class="flex">
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'tin' , 'bg-indigo-400': selected !== 'tin'}"
                @click.prevent="selected='tin'"
            >
                TIN
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'npi' , 'bg-indigo-400': selected !== 'npi'}"
                @click.prevent="selected='npi'"
            >
                NPI
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'facility' , 'bg-indigo-400': selected !== 'facility'}"
                @click.prevent="selected='facility'"
            >
                Facility
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'name' , 'bg-indigo-400': selected !== 'name'}"
                @click.prevent="selected='name'"
            >
                Name
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'add1' , 'bg-indigo-400': selected !== 'add1'}"
                @click.prevent="selected='add1'"
            >
                Add 1
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'add2' , 'bg-indigo-400': selected !== 'add2'}"
                @click.prevent="selected='add2'"
            >
                Add 2
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'city' , 'bg-indigo-400': selected !== 'city'}"
                @click.prevent="selected='city'"
            >
                City
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'state' , 'bg-indigo-400': selected !== 'state'}"
                @click.prevent="selected='state'"
            >
                State
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'zip' , 'bg-indigo-400': selected !== 'zip'}"
                @click.prevent="selected='zip'"
            >
                ZIP
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'claims' , 'bg-indigo-400': selected !== 'claims'}"
                @click.prevent="selected='claims'"
            >
                Claims
            </button>
        </div>
        <div class="flex mt-3">
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'claimants' , 'bg-indigo-400': selected !== 'claimants'}"
                @click.prevent="selected='claimants'"
            >
                Claimants
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'procedures' , 'bg-indigo-400': selected !== 'procedures'}"
                @click.prevent="selected='procedures'"
            >
                Procedures
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'billed' , 'bg-indigo-400': selected !== 'billed'}"
                @click.prevent="selected='billed'"
            >
                Billed
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'ada_code' , 'bg-indigo-400': selected !== 'ada_code'}"
                @click.prevent="selected='ada_code'"
            >
                ADA Code
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'network1' , 'bg-indigo-400': selected !== 'network1'}"
                @click.prevent="selected='network1'"
            >
                Network 1
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'network2' , 'bg-indigo-400': selected !== 'network2'}"
                @click.prevent="selected='network2'"
            >
                Network 2
            </button>
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 hover:bg-green-400 mr-2 whitespace-no-wrap focus:outline-none"
                :class="{'bg-green-400': selected === 'network3' , 'bg-indigo-400': selected !== 'network3'}"
                @click.prevent="selected='network3'"
            >
                Network 3
            </button>
        </div>

        <hr class="border-b-2 border-gray-900 mt-6 mb-2">

        <div class="text-gray-600">
            <div>
                <span class="text-gray-400">Columns with values: </span>
                <span>{{ columnWithValues.join(' | ') | toUpper }}</span>
            </div>
            <div>
                <span class="text-gray-400"># of columns with values: </span>
                <span>{{ columnWithValues.length }}</span>
            </div>

        </div>

        <hr class="border-b-2 border-gray-900 mt-2 mb-2">

        <div class="text-gray-600">
            <div v-show="selected === 'tin'">
                <string-padded-numbers :headers="headers"
                                       header="tin"
                                       :number-of-characters=9

                />
            </div>
            <div v-show="selected === 'npi'">
                <string-padded-numbers :headers="headers"
                                       header="npi"
                                       :number-of-characters=10
                />
            </div>
            <div v-show="selected === 'facility'">
                <string-name :headers="headers"
                             header="facility"
                />
            </div>
            <div v-show="selected === 'name'">
                <string-name :headers="headers"
                             header="name"
                />
            </div>
            <div v-show="selected === 'add1'">
                <string-address :headers="headers"
                                header="add1"
                />
            </div>
            <div v-show="selected === 'add2'">
                <string-address :headers="headers"
                                header="add2"
                />
            </div>
            <div v-show="selected === 'city'">
                <simple-select :headers="headers"
                               header="city"
                />
            </div>
            <div v-show="selected === 'state'">
                <simple-select :headers="headers"
                               header="state"
                />
            </div>
            <div v-show="selected === 'zip'">
                <string-padded-numbers :headers="headers"
                                       header="zip"
                                       :number-of-characters=5
                />
            </div>
            <div v-show="selected === 'claims'">
                <simple-select :headers="headers"
                               header="claims"
                />
            </div>
            <div v-show="selected === 'claimants'">
                <simple-select :headers="headers"
                               header="claimants"
                />
            </div>
            <div v-show="selected === 'procedures'">
                <simple-select :headers="headers"
                               header="procedures"
                />
            </div>
            <div v-show="selected === 'billed'">
                <simple-select :headers="headers"
                               header="billed"
                />
            </div>
            <div v-show="selected === 'ada_code'">
                <ada-code :headers="headers"
                          header="ada_code"
                />
            </div>
            <div v-show="selected === 'network1'">
                <network :headers="headers"
                          header="network1"
                />
            </div>
            <div v-show="selected === 'network2'">
                <network :headers="headers"
                          header="network2"
                />
            </div>
            <div v-show="selected === 'network3'">
                <network :headers="headers"
                          header="network3"
                />
            </div>
        </div>
    </div>
</template>
<script>
import StringPaddedNumbers from '@/components/table_configuration/StringPaddedNumbers'
import StringName from "@/components/table_configuration/StringName"
import StringAddress from "@/components/table_configuration/StringAddress"
import SimpleSelect from "@/components/table_configuration/SimpleSelect"
import AdaCode from "@/components/table_configuration/AdaCode"
import Network from "@/components/table_configuration/Network"

import {mapGetters} from 'vuex'

export default {
    components: {
        StringPaddedNumbers,
        StringName,
        StringAddress,
        SimpleSelect,
        AdaCode,
        Network
    },

    data() {
        return {
            selected: 'tin'
        }
    },

    computed: {
        ...mapGetters({
            headers: 'excel/headers',
            columnWithValues: 'table_configurations/getHeadersWithValues'
        }),
    },
}
</script>
