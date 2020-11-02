<template>
    <div class="text-gray-400">
        <button
            class="text-gray-800 px-4 py-1 rounded-lg shadow-lg border border-gray-900 bg-indigo-400 hover:bg-indigo-600 mr-2 focus:outline-none"
            @click.prevent="processFile"
        >
            Run
        </button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import fs from 'fs'
import ColumnFactory from "@/datascrub/columnFactory";

export default {
    data() {
        return {
            newData: []
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
            this.newData = this.tableData.map((item, index) => {
                let n = new Object()
                n['id'] = index + 1

                this.headersWithValues.forEach((h) => {
                    return n[h] = (ColumnFactory.createInstance(h, item[this.configurations(h).header])).getFormattedValue()
                })

                return n
            })
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