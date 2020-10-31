<template>
    <listbox v-model="selectedItem"
             v-slot="{ isOpen }"
             class="relative"
             @input="inputChanged"
    >
        <listbox-label class="">
            {{ listLabel }}
        </listbox-label>
        <listbox-button
            class="inline-flex w-full items-center justify-between text-left mt-2 rounded-lg px-3 py-2 border border-gray-700 focus:outline-none">

                <span v-if="selectedItem" class="truncate">
                    {{ selectedItem }}
                </span>
            <span v-else>select value...</span>
            <svg class="h-5 w-5 text-gray-600"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7"/>
            </svg>
        </listbox-button>
        <transition leave-active-class="transition duration-300"
                    leave-class="opacity-100"
                    leave-to-class="opacity-0"
        >
            <listbox-list v-show="isOpen"
                          class="absolute z-10 focus:outline-none shadow rounded-lg mt-2 border border-gray-700 w-full py-2 overflow-y-auto"
                          style="max-height: 12rem;"
            >
                <listbox-option :value="null"
                                v-slot="{ isActive, isSelected }"
                                class="cursor-default select-none"
                >
                    <div class="relative bg-black px-2 pt-2 h-10"
                         :class="{'bg-blue-600 text-white': isActive}"
                    >
                        &nbsp;
                    </div>
                </listbox-option>
                <listbox-option v-for="item in options"
                                :key="item"
                                :value="item"
                                v-slot="{ isActive, isSelected }"
                                class="cursor-default select-none"
                >
                    <div class="relative bg-black px-2 pt-2 h-10 text-align-middle truncate"
                         :class="{'bg-blue-600 text-white': isActive}"
                    >
                        {{ item }}
                        <span class="absolute inset-y-0 right-0 flex items-center ml-2"
                              v-show="isSelected"
                        >
                                <svg class="h-5 w-5"
                                     :class="{'text-gray-600' : !isActive, 'text-white' : isActive}"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </span>
                    </div>
                </listbox-option>
            </listbox-list>
        </transition>
    </listbox>
</template>

<script>
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxList,
    ListboxOption
} from "@tailwindui/vue"

export default {
    props: {
        selected: {
            type: String,
            default: null
        },
        options: {
            required: true,
            type: Array
        },
        listLabel: {
            required: true,
            type: String
        }
    },

    components: {
        Listbox,
        ListboxLabel,
        ListboxButton,
        ListboxList,
        ListboxOption
    },

    data() {
        return {
            selectedItem: null,
            items: null
        }
    },

    methods: {
        inputChanged(value) {
            this.$emit('input', value)
        }
    }
}
</script>