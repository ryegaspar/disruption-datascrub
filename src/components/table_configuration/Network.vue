<template>
    <div>
        <div :class="{'text-green-400' : headerComputed !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-3">
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
                <div class="col-span-2">
                    <label></label>
                    <button
                        class="text-gray-800 items-center mt-8 px-4 py-2 border border-gray-700 rounded-lg bg-indigo-400 hover:bg-green-400 focus:outline-none"
                        @click.prevent="getUniqueValues"
                        v-show="headerComputed"
                    >
                        Get Values
                    </button>
                </div>
            </div>
            <div class="grid gap-y-6 gap-x-4 grid-cols-6 mt-4">
                <div class="col-span-3"
                     v-if="yesValueOptions.length"
                >
                    <label>
                        yes values:
                    </label>
                    <div class="mt-2">
                        <multiselect placeholder="select column format"
                                     class="mt-2 -ml-1"
                                     :options="yesValueOptions"
                                     :allow-empty="true"
                                     :searchable="false"
                                     deselect-label=""
                                     :value="yesValuesSelected"
                                     @input="updateYesValues"
                                     :multiple="true"
                        >
                        </multiselect>
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

    data() {
        return {
            yesValueOptions: []
        }
    },

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration"
        }),

        updateConfiguration(value) {
            this.yesValueOptions = []
            this.persistsConfiguration({column: this.header, index: 'yesValues', value : []})
            this.persistsConfiguration({column: this.header, index: 'header', value})
        },

        getUniqueValues() {
            this.yesValueOptions = []
            this.headerComputed && this.tableData.forEach(i => {
                let t = i[this.headerComputed].trim().toLowerCase()
                if (!this.yesValueOptions.includes(t)) {
                    this.yesValueOptions.push(t)
                }
            })
        },

        updateYesValues(value) {
            this.persistsConfiguration({column: this.header, index: 'yesValues', value})
        },
    },

    computed: {
        ...mapGetters({
            configurationGetter: "table_configurations/configuration",
            tableData: 'excel/data'
        }),

        headerComputed() {
            return this.configurationGetter(this.header).header
        },

        yesValuesSelected() {
            return this.configurationGetter(this.header).yesValues
        },
    }
}
</script>