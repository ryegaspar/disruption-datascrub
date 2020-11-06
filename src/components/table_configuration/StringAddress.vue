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
                                     :multiple="true"
                                     @input="updateConfiguration"
                        />
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

    methods: {
        ...mapActions({
            persistsConfiguration: "table_configurations/updateConfiguration"
        }),

        updateConfiguration(value) {
            value = value.length > 0 ? value : null
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
    }
}
</script>