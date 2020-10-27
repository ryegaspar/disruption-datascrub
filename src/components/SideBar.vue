<template>
    <div>
        <!-- Static sidebar for desktop -->
        <div
            class="flex flex-shrink-0 text-white bg-gray-900 overflow-y-scroll -mr-6 min-h-full overflow-hidden h-full">
            <div class="flex flex-col w-48 text-md">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex flex-col h-0 flex-1">
                    <div class="flex-1 flex flex-col">
                        <side-bar-menus/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBarMenus from '@/components/SideBarMenus'

export default {
    components: {
        SideBarMenus
    }
}
</script>
