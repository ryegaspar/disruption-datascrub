<template>
    <div class="flex items-center space-x-3">
        <span role="checkbox"
              tabindex="0"
              :disabled="true"
              :aria-checked="status"
              class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-gray-800 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
              @click="$emit('toggleStatus')"
              :class="status ? 'bg-green-400' : ''"
        >
            <span :aria-hidden="!status"
                  :class="status ? 'translate-x-5' : 'translate-x-0'"
                  class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
            >
                <span class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                      :class="status ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'"
                >
                    <svg class="h-3 w-3 text-gray-400"
                         fill="none"
                         viewBox="0 0 12 12"
                         v-show="showIcon"
                    >
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </span>
                <span
                    class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                    :class="status ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
                >
                    <svg class="h-3 w-3 text-indigo-600"
                         fill="currentColor"
                         viewBox="0 0 12 12"
                         v-show="showIcon"
                    >
                        <path
                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
                    </svg>
                </span>
            </span>
        </span>
        <span>
            <span class="text-sm leading-5 font-medium">{{ label }}</span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            required: true,
            type: Boolean
        },
        label: {
            required: true,
            type: String
        },
        showIcon: {
            required: false,
            type: Boolean,
            default: false
        }
    },
}
</script>