<template>
    <div id="app">
        <div class="flex overflow-hidden bg-gray-800">
            <div class="flex flex-col w-0 flex-1 overflow-hidden">
                <div class="flex flex-1 relative bg-black overflow-y-auto focus:outline-none min-h-screen">
                    <side-bar/>
                    <main class="flex-1 pr-4 pl-6 pt-6 w-full overflow-auto bg-black">
                        <keep-alive>
                            <router-view/>
                        </keep-alive>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar"

export default {
    components: {
        SideBar,
    }
}
</script>

<style src="@sweetalert2/theme-dark/dark.css"></style>
<style src="./assets/tailwind.css"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
    @apply bg-indigo-400 text-gray-800
}

.multiselect__input {
    @apply bg-black text-gray-300
}

.multiselect__element {
    @apply text-gray-600
}

.multiselect__tags {
    @apply bg-black border-gray-700
}

.multiselect__single {
    @apply bg-black text-gray-300
}

.multiselect__content-wrapper {
    @apply bg-black border-gray-700
}

.multiselect__option--selected {
    @apply bg-indigo-400 text-gray-800
}

.multiselect--disabled {
    @apply opacity-50 rounded-lg
}

.multiselect--disabled .multiselect__select {
    @apply bg-black
}

.swal2-popup {
    width: 26em;
    border-radius: 1.5em;
}

.swal2-icon {
    margin-top: .5em;
    margin-bottom: 1.5em;
}

.swal2-title {
    font-size: 1.6em;
}

.swal2-styled {
    margin: .25em;
    padding: .5em 2em;
}
</style>
