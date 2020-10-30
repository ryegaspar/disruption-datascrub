<template>
    <div>
        <div>Network 3</div>
        <div>
            <div>
                <div class="mt-4">
                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div class="sm:col-span-2">
                            <label for="country" class="block text-sm font-medium leading-5 text-gray-700">
                                Country / Region
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <select id="country"
                                        class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div class="sm:col-span-6">
                            <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">
                                Street address
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input id="street_address"
                                       class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="city" class="block text-sm font-medium leading-5 text-gray-700">
                                City
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input id="city"
                                       class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="state" class="block text-sm font-medium leading-5 text-gray-700">
                                State / Province
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input id="state"
                                       class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="zip" class="block text-sm font-medium leading-5 text-gray-700">
                                ZIP / Postal
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input id="zip"
                                       class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-200 pt-8">
                    <div class="mt-6">
                        <fieldset class="mt-6">
                            <legend class="text-base font-medium text-gray-900">
                                Push Notifications
                            </legend>
                            <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile
                                phone.</p>
                            <div class="mt-4">
                                <div class="flex items-center">
                                    <input id="push_everything" name="push_notifications" type="radio"
                                           class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                    <label for="push_everything" class="ml-3">
                                            <span
                                                class="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                                    </label>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <input id="push_email" name="push_notifications" type="radio"
                                           class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                    <label for="push_email" class="ml-3">
                                        <span
                                            class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                    </label>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <input id="push_nothing" name="push_notifications" type="radio"
                                           class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                    <label for="push_nothing" class="ml-3">
                                        <span class="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-5">
                <div class="flex justify-end">
      <span class="inline-flex rounded-md shadow-sm">
        <button type="button"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
          Cancel
        </button>
      </span>
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
        <button type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          Save
        </button>
      </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>