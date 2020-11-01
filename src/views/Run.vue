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
import { mapGetters } from 'vuex'

export default {
    methods: {
        processFile() {
            const fs = require('fs')

            if (!this.filePath) {
                console.log('no file')
                return
            }

            fs.open(this.filePath, 'r+', function (err, wf) {
                if (err && err.code === 'EBUSY') {
                    console.log('file is busy')
                } else if (err && err.code === 'ENOENT') {
                    console.log('file does not exists')
                } else {
                    console.log('file is write ready')
                    fs.close(wf)
                }
            })
        }
    },

    computed: {
        ...mapGetters({
            filePath: 'excel/filePath'
        })
    }
}
</script>