<template>
    <nav class="flex-1 px-2 py-4 bg-gray-900 space-y-2 font-medium text-sm text-gray-500">
        <router-link to="/"
                     class="group flex items-center px-2 py-1 leading-normal rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-300 hover:bg-gray-700 mr-6">
            Read Excel
        </router-link>
        <router-link to="/table-configuration"
                     class="group flex items-center px-2 py-1 leading-normal rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-300 hover:bg-gray-700 mr-6">
            Table Configuration
        </router-link>
    </nav>
</template>