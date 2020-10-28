<template>
    <div class="home">
        <div class="flex items-center bg-grey-lighter">
            <label class="text-gray-800 w-32 flex flex-col items-center py-2 bg-indigo-400 rounded-lg shadow-lg border border-gray-900 cursor-pointer hover:bg-indigo-600">
                <span class="text-base leading-normal">select a file</span>
                <input type='file' class="hidden" @change="readXlsx"/>
            </label>
        </div>

        <hr class="border-b-2 border-gray-900 mt-6 mb-2">
        <div class="text-gray-600">
            <p class="mb-4">File Info</p>
            <p>Filename: <span class="text-gray-300">{{ filename }}</span></p>
            <p>Path: </p>
            <p>Headers: </p>
            <p>Number of Rows: </p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    methods: {
        ...mapActions({
            readExcel: 'file_info/readFile'
        }),

        readXlsx(obj) {
            if (!obj.target.files) {
                return
            }

            this.readExcel(obj.target.files[0])
        },
    },

    computed: {
        ...mapGetters({
            filename: 'file_info/filename'
        })
    }
}
</script>
