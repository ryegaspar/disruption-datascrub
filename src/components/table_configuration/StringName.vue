<template>
    <div>
        <div :class="{'text-green-400' : headerComputed !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <label>
                        column value:
                    </label>
                    <multiselect :options="headers"
                                 placeholder="select column value"
                                 class="mt-2 -ml-1"
                                 :multiple="true"
                                 :searchable="false"
                                 :value="headerComputed"
                                 @input="updateHeader"
                    />
                </div>
                <div class="col-span-2">
                    <label>
                        value operation:
                    </label>
                    <div class="mt-4">
                        <check-box :label="valueIsConcatLabel"
                                   :status="valueIsConcat"
                                   @toggleStatus="toggleIsConcat"
                        />
                    </div>
                </div>
                <div class="col-span-2">
                    <label>
                        value format:
                    </label>
                    <div class="mt-2">
                        <multiselect placeholder="select column format"
                                     class="mt-2 -ml-1"
                                     :options="valueFormats"
                                     :allow-empty="false"
                                     :preselect-first="true"
                                     label="description"
                                     track-by="value"
                                     :searchable="false"
                                     deselect-label=""
                                     :disabled="valueFormatStatus"
                                     :value="valueFormatSelected"
                                     @input="updateValueFormat"
                        >
                        </multiselect>
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

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CheckBox from "@/components/forms/CheckBox";

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

    components: {
        CheckBox
    },

    data() {
        return {
            valueFormats: [
                {
                    description: 'standard (firstname lastname)',
                    value: 'fn-ln'
                },
                {
                    description: 'lastname, firstname',
                    value: 'ln-fn'
                }
            ],
        }
    },

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration"
        }),

        updateHeader(value) {
            if (value.length === 0)
                value = null

            this.persistsConfiguration({column: this.header, index: 'header', value})

            if (this.headerComputed && this.headerComputed.length < 2)
                this.$store.commit("table_configurations/SET_CONFIGURATION", {
                    column: this.header,
                    index: 'valueIsConcat',
                    value: false
                })
        },

        updateValueFormat(value) {
            this.$store.commit("table_configurations/SET_CONFIGURATION", {
                column: this.header,
                index: 'valueFormat',
                value: value.value
            })
        },

        toggleIsConcat() {
            if (this.headerComputed && this.headerComputed.length > 1) {
                let value = !this.valueIsConcat
                this.$store.commit("table_configurations/SET_CONFIGURATION", {
                    column: this.header,
                    index: 'valueIsConcat',
                    value
                })
            }
        }
    },

    computed: {
        ...mapGetters({
            configurationGetter: "table_configurations/configuration"
        }),

        headerComputed() {
            return this.configurationGetter(this.header).header
        },

        valueIsConcatLabel() {
            if (this.valueIsConcat)
                return 'concatenate values'
            else
                return 'process columns individually'
        },

        valueIsConcat() {
            return this.configurationGetter(this.header).valueIsConcat
        },

        valueFormat() {
            return this.configurationGetter(this.header).valueFormat
        },

        valueFormatSelected() {
            return this.valueFormats.filter(o => o.value === this.valueFormat)
        },

        valueFormatStatus() {
            if (this.headerComputed === null || this.headerComputed.length > 1) {
                this.$store.commit("table_configurations/SET_CONFIGURATION", {
                    column: this.header,
                    index: 'valueFormat',
                    value: 'fn-ln'
                })
                return true
            }

            return false
        }

        // direction: {
        //     get() {
        //         return this.configurationGetter(this.header).direction
        //     },
        //     set(value) {
        //         this.$store.commit("table_configurations/SET_CONFIGURATION", {column: this.header, index: 'direction', value})
        //     }
        // }
    }
    ,
}
</script>