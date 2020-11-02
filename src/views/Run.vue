<template>
    <div>
        <div class="flex items-center bg-grey-lighter">
            <button
                class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 bg-indigo-400 hover:bg-indigo-600 mr-2 focus:outline-none"
                @click.prevent="processFile"
            >
                Run
            </button>
        </div>

        <hr class="border-b-2 border-gray-900 mt-20 mb-2">
        <div class="text-gray-600" v-if="statusText.length > 0">

            <p class="mb-4">Status</p>
            <p class="text-gray-300" v-for="s in statusText">{{ s }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import fs from 'fs'
import ColumnFactory from "@/datascrub/columnFactory";

export default {
    data() {
        return {
            newData: [],
            isBusy: false,
            statusText: []
        }
    },

    methods: {
        processFile() {
            if (!this.filePath) {
                Swal.fire({
                    title: 'Error',
                    text: 'No file defined',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
                return
            }

            const pfile = this

            fs.open(this.filePath, 'r+', function (err, wf) {
                if (err && err.code === 'EBUSY') {
                    Swal.fire({
                        title: 'Error',
                        text: 'The file is currently being used by another application',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                } else if (err && err.code === 'ENOENT') {
                    Swal.fire({
                        title: 'Error',
                        text: 'File not found',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                } else {
                    fs.close(wf)
                    pfile.generateData()
                }
            })
        },

        generateData() {
            this.statusText = []
            this.isBusy = true

            let message = 'generating data...'
            this.statusText.push(message)

            this.newData = this.tableData.map((item, index) => {
                let n = new Object()
                n['id'] = index + 1

                this.headersWithValues.forEach((h) => {
                    return n[h] = (ColumnFactory.createInstance(h, item[this.configurations(h).header])).getFormattedValue()
                })

                return n
            })

            this.statusText[this.statusText.length - 1] = 'generating data....done'
            this.isBusy = false
        }
    },

    computed: {
        ...mapGetters({
            filePath: 'excel/filePath',
            tableData: 'excel/data',
            headersWithValues: 'table_configurations/getHeadersWithValues',
            configurations: 'table_configurations/configuration'
        })
    }
}
</script>