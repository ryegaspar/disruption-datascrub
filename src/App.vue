<template>
    <div id="app">
        <div class="flex overflow-hidden bg-gray-800">
            <div class="flex flex-col w-0 flex-1 overflow-hidden">
                <div class="flex flex-1 relative bg-black overflow-y-auto focus:outline-none min-h-screen">
                    <side-bar />
                    <main class="flex-1 pr-4 pl-6 pt-6 w-full overflow-auto bg-black">
                        <router-view />
                    </main>
                </div>
            </div>
        </div>
<!--        <div id="nav">-->
<!--            <router-link to="/">Home</router-link>-->
<!--            |-->
<!--            <router-link to="/about">About</router-link>-->
<!--        </div>-->
<!--        <router-view/>-->
    </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
    components: {
        SideBar
    }
}
</script>

<style src="./assets/tailwind.css"></style>
