<template>
    <div>
        <div :class="{'text-green-400' : headerComputed !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <label>
                        column value:
                    </label>
                    <multiselect :value="headerComputed"
                                 :options="headers"
                                 placeholder="select column value"
                                 class="mt-2 -ml-1"
                                 :multiple="true"
                                 @input="updateConfiguration"
                    />
                </div>
                <div class="col-span-2">
                    <label>
                        operation:
                    </label>
                    <div class="mt-2">
                        <div class="flex items-center">
                            <input type="radio"
                                   value="right"
                                   class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                   id="right"
                            >
                            <label for="right" class="ml-3">
                                <span class="block text-sm leading-5 font-medium text-gray-700">Concatenate</span>
                            </label>
                        </div>
                        <div class="mt-2 flex items-center">
                            <input type="radio"
                                   value="left"
                                   class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                   id="left"
                            >
                            <label for="left" class="ml-3">
                                <span
                                    class="block text-sm leading-5 font-medium text-gray-700">Process Individually</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div>
                <div class="mt-4">
                    <legend class="">
                        format:
                    </legend>
                    <div class="mt-2">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    props: {
        headers: {
            required: true,
            type: Array
        },
        header: {
            required: true,
            type: String
        },
    },

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration"
        }),

        updateConfiguration(value) {
            if (value.length === 0)
                value = null
            this.persistsConfiguration({column: this.header, index: 'header', value})
        },
    },

    computed: {
        ...mapGetters({
            configurationGetter: "table_configurations/configuration"
        }),

        headerComputed() {
            return this.configurationGetter(this.header).header
        },

        // direction: {
        //     get() {
        //         return this.configurationGetter(this.header).direction
        //     },
        //     set(value) {
        //         this.$store.commit("table_configurations/SET_CONFIGURATION", {column: this.header, index: 'direction', value})
        //     }
        // }
    }
}
</script>