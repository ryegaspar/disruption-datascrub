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

            try {
                // const wf = fs.openSync(this.filePath, 'w')
                // fs.writeSync(wf,"")
                // if (!wf) {
                //     throw 'file is currently being used'
                // }
                // console.log('file exists and is writable')
                // fs.close(wf)
                fs.accessSync(this.filePath,fs.constants.F_OK | fs.constants.W_OK)
            } catch(e) {
                if (e.code === "ENOENT") {
                    console.log("file does not exists")
                    return
                }
                console.log("file is readonly")
            }
        }
    },

    computed: {
        ...mapGetters({
            filePath: 'excel/filePath'
        })
    }
}
</script>