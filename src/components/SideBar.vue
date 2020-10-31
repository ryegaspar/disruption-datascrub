<template>
    <div class="flex flex-shrink-0 text-white bg-gray-900 overflow-y-scroll -mr-6 min-h-full overflow-hidden h-full">
        <div class="flex flex-col w-48 text-md">
            <div class="flex flex-col h-0 flex-1">
                <div class="flex-1 flex flex-col">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
