<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <read-excel />
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
