<template>
    <div>
        <div :class="{'text-green-400' : headerComputed !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <div>
                        <label>
                            column value:
                        </label>
                        <multiselect :value="headerComputed"
                                     :options="headers"
                                     placeholder="select column value"
                                     class="mt-2 -ml-1"
                                     @input="updateConfiguration"
                        />
                    </div>
                    <div class="mt-4">
                        <legend class="">
                            format:
                        </legend>
                        <div class="mt-2">
                            <div class="flex items-center">
                                <input type="radio"
                                       value="text-right"
                                       class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                       id="text-right"
                                       v-model="format"
                                >
                                <label for="text-right" class="ml-3">
                                    <span class="block text-sm leading-5 font-medium text-gray-700">Right-{{ numberOfCharacters }}</span>
                                </label>
                            </div>
                            <div class="mt-2 flex items-center">
                                <input type="radio"
                                       value="text-left"
                                       class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                       id="text-left"
                                       v-model="format"
                                >
                                <label for="text-left" class="ml-3">
                                    <span class="block text-sm leading-5 font-medium text-gray-700">Left-{{ numberOfCharacters }}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
        numberOfCharacters: {
            required: true,
            type: Number
        }
    },

    data() {
        return {
        }
    },

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration"
        }),

        updateConfiguration(value) {
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

        format: {
            get() {
                return this.configurationGetter(this.header).format
            },
            set(value) {
                this.$store.commit("table_configurations/SET_CONFIGURATION", {column: this.header, index: 'format', value})
            }
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
    @apply bg-indigo-400 text-gray-800
}

.multiselect__input {
    @apply bg-black text-gray-400
}

.multiselect__tags {
    @apply bg-black border-gray-700
}

.multiselect__single {
    @apply bg-black text-gray-400
}

.multiselect__content-wrapper {
    @apply bg-black border-gray-700
}

.multiselect__option--selected {
    @apply bg-indigo-400 text-gray-800
}
</style>