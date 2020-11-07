<template>
    <div>
        <div :class="{'text-green-400' : headerComputed !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-3">
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
                </div>
                <div class="col-span-3">
                    <label>
                        format:
                    </label>
                    <div class="mt-2">
                        <multiselect placeholder="select format"
                                     class="mt-2 -ml-1"
                                     :options="isNumberFormats"
                                     :allow-empty="true"
                                     label="description"
                                     track-by="value"
                                     :searchable="false"
                                     :value="isNumberSelected"
                                     @input="updateIsNumber"
                        >
                        </multiselect>
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
    },

    data() {
        return {
            isNumberFormats: [
                {
                    description: 'number format (####)',
                    value: true
                },
                {
                    description: `text format ('D####')`,
                    value: false
                }
            ],
        }
    },

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration",
            setAdaCodeIsNumber: "table_configurations/setAdaCodeIsNumber"
        }),

        updateConfiguration(value) {
            this.persistsConfiguration({column: this.header, index: 'header', value})
        },

        updateIsNumber(value) {
            this.setAdaCodeIsNumber({column: this.header, value: value.value})
        },
    },

    computed: {
        ...mapGetters({
            configurationGetter: "table_configurations/configuration"
        }),

        headerComputed() {
            return this.configurationGetter(this.header).header
        },

        isNumber() {
            return this.configurationGetter(this.header).isNumber
        },

        isNumberSelected() {
            return this.isNumberFormats.filter(o => o.value === this.isNumber)
        },

    }
}
</script>