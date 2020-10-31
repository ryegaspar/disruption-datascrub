<template>
    <div>
        <div>TIN</div>
        <div class="mt-4">
            <div class="grid gap-y-6 gap-x-4 grid-cols-6">
                <div class="col-span-2">
                    <label>
                        column value:
                    </label>
                    <multiselect v-model="mselected"
                                 :options="moptions"
                                 placeholder="select column value"
                                 class="mt-2 -ml-1"
                    />
                </div>
            </div>
        </div>
        <div class="mt-4">
            <legend class="">
                action:
            </legend>
            <div class="mt-2">
                <div class="flex items-center">
                    <input type="radio"
                           value="text-right"
                           class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                    <label for="push_everything" class="ml-3">
                        <span class="block text-sm leading-5 font-medium text-gray-700">Default (Text, Right, 9)</span>
                    </label>
                </div>
                <div class="mt-2 flex items-center">
                    <input type="radio"
                           value="text-left"
                           class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                    <label for="push_email" class="ml-3">
                        <span class="block text-sm leading-5 font-medium text-gray-700">Text, Left, 9</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
    components: {
        Multiselect
    },

    data() {
        return {
            selected: null,
            options: [
                "starcraft 2",
                "warcraft 3",
                "prisoner of azkabhan",
                "some random",
                "hello",
                "ryan",
                "jane",
                "john",
                "ibrahim",
                "kadaffi",
                "serral",
                "reynor",
                "clem",
                "trap",
                "the quick brown fox jumps over"
            ],
            mselected: null,
            moptions: [
                "starcraft 2",
                "warcraft 3",
                "prisoner of azkabhan",
                "some random",
                "hello",
                "ryan",
                "jane",
                "john",
                "ibrahim",
                "kadaffi",
                "serral",
                "reynor",
                "clem",
                "trap",
                "the quick brown fox jumps over"
            ]
        }
    },

    methods: {
        updateSelected(value) {
            this.selected = value
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tag {
    @apply bg-indigo-400 text-gray-800
}

.multiselect__input {
    @apply bg-black text-gray-400
}

.multiselect__tags {
    @apply bg-black border-gray-700
}

.multiselect__single {
    @apply bg-black text-gray-400
}

.multiselect__content-wrapper {
    @apply bg-black border-gray-700
}

.multiselect__option--selected {
    @apply bg-indigo-400 text-gray-800
}
</style>