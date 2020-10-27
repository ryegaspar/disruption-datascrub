<template>
    <div class="home">
        <read-excel />

        <hr class="border-b-2 border-gray-900 mt-6 mb-2">
        <div class="text-gray-600">
            <p class="mb-4">File Info:</p>
            <p>Filename: </p>
            <p>Path: </p>
            <p>Headers: </p>
            <p>Number of Rows: </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ReadExcel from "@/components/ReadExcel";

export default {
    name: 'Home',
    components: {
        ReadExcel,
    }
}
</script>
