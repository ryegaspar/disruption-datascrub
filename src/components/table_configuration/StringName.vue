<template>
    <div>
        <div :class="{'text-green-400' : valueSelected !== null }">{{ header.toUpperCase() }}</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <label>
                        column value:
                    </label>
                    <multiselect :options="availableValue"
                                 placeholder="select column value"
                                 class="mt-2 -ml-1"
                                 :multiple="true"
                                 :searchable="false"
                                 :value="valueSelected"
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
                                   @toggleStatus="toggleValueIsConcat"
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
                                     :options="formats"
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
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <label>
                        fallback value:
                    </label>
                    <multiselect :options="availableFallback"
                                 placeholder="select column value"
                                 class="mt-2 -ml-1"
                                 :multiple="true"
                                 :searchable="false"
                                 :value="fallbackSelected"
                                 @input="updateFallback"
                    />
                </div>
                <div class="col-span-2">
                    <label>
                        fallback operation:
                    </label>
                    <div class="mt-4">
                        <check-box :label="fallbackIsConcatLabel"
                                   :status="fallbackIsConcat"
                                   @toggleStatus="toggleFallbackIsConcat"
                        />
                    </div>
                </div>
                <div class="col-span-2">
                    <label>
                        fallback format:
                    </label>
                    <div class="mt-2">
                        <multiselect placeholder="select column format"
                                     class="mt-2 -ml-1"
                                     :options="formats"
                                     :allow-empty="false"
                                     :preselect-first="true"
                                     label="description"
                                     track-by="value"
                                     :searchable="false"
                                     deselect-label=""
                                     :disabled="fallbackFormatStatus"
                                     :value="fallbackFormatSelected"
                                     @input="updateFallbackFormat"
                        >
                        </multiselect>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-6">
                    <h4 class="text-gray-300">Note</h4>
                    <p>&bull; primary values disregards values if in the address/address2 format</p>
                    <p>&bull; fallback values will not disregard address/address2 format</p>
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
            formats: [
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
            persistsConfiguration: "table_configurations/updateConfiguration",
            setStringNameHeader: "table_configurations/setStringNameHeader",
            setStringNameValueIsConcat: "table_configurations/setStringNameValueIsConcat",
            setStringNameValueFormat: "table_configurations/setStringNameValueFormat",
            setStringNameFallback: "table_configurations/setStringNameFallback",
            setStringNameFallbackIsConcat: "table_configurations/setStringNameFallbackIsConcat",
            setStringNameFallbackFormat: "table_configurations/setStringNameFallbackFormat"
        }),

        updateHeader(value) {
            this.setStringNameHeader({index: this.header, value})
        },

        updateValueFormat(value) {
            this.setStringNameValueFormat({index: this.header, value: value.value})
        },

        toggleValueIsConcat() {
            if (this.valueSelected && this.valueSelected.length > 1) {
                let value = !this.valueIsConcat

                this.setStringNameValueIsConcat({index: this.header, value})
            }
        },

        updateFallback(value) {
            this.setStringNameFallback({index: this.header, value})
        },

        updateFallbackFormat(value) {
            this.setStringNameFallbackFormat({index: this.header, value: value.value})
        },

        toggleFallbackIsConcat() {
            if (this.fallbackSelected && this.fallbackSelected.length > 1) {
                let value = !this.fallbackIsConcat

                this.setStringNameFallbackIsConcat({index: this.header, value})
            }
        },
    },

    computed: {
        ...mapGetters({
            configurationGetter: "table_configurations/configuration"
        }),

        availableValue() {
            return this.headers.filter(i => {
                if (this.fallbackSelected)
                    return !this.fallbackSelected.includes(i)
                return true
            })
        },

        valueSelected() {
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
            return this.formats.filter(o => o.value === this.valueFormat)
        },

        valueFormatStatus() {
            if (this.valueSelected === null || this.valueSelected.length > 1) {
                this.setStringNameValueFormat({index: this.header, value: 'fn-ln'})
                return true
            }

            return false
        },

        availableFallback() {
            return this.headers.filter(i => {
                if (this.valueSelected !== null)
                    return !this.valueSelected.includes(i)
                return true
            })
        },

        fallbackSelected() {
            return this.configurationGetter(this.header).fallback
        },

        fallbackIsConcatLabel() {
            if (this.fallbackIsConcat)
                return 'concatenate values'
            else
                return 'process columns individually'
        },

        fallbackIsConcat() {
            return this.configurationGetter(this.header).fallbackIsConcat
        },

        fallbackFormat() {
            return this.configurationGetter(this.header).fallbackFormat
        },

        fallbackFormatSelected() {
            return this.formats.filter(o => o.value === this.fallbackFormat)
        },

        fallbackFormatStatus() {
            if (this.fallbackSelected === null || this.fallbackSelected.length > 1) {
                this.setStringNameFallbackFormat({index: this.header, value: 'fn-ln'})
                return true
            }

            return false
        },
    }
}
</script>