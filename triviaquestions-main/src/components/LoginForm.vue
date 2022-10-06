<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { apiUserRegister } from "../api/users";


const username = ref("");
const displayError = ref("");

const store = useStore()
const emit = defineEmits(["onAuthSuccess"])

const onSuccess = user => {
    store.commit("setUser", user)
    emit("onAuthSuccess")
}

const onLoginClick = async () => {
    const [error, user] = await apiUserRegister(username.value);
    if (error !== null) {
        //If the error is not null, it means that the users exists, display error message
        displayError.value = error;
    } else {
        onSuccess(user)
    }
};
</script>
<template>
    <h1 class="my-3 text-2xl">Login to get started</h1>
    <form>
        <fieldset class="mb-3">
            <label for="username" aria-label="Username" class="block mb-1">Username</label>
            <input
                type="text"
                id="username"
                placeholder=" Type username here"
                class="border border-slate-300 rounded"
                v-model="username"
            />
        </fieldset>
        <div class="grid gap-20 grid-cols-5">
            <button
                @click="onLoginClick"
                type="button"
                class="bg-gray-700 text-white p-3 rounded"
            >Start game</button>
        </div>
    </form>

    <div v-if="displayError" class="bg-red-400 text-white p-3 rounded mt-5 w-60">
        <span class="text-lg block mb-3">Error</span>
        <p>{{ displayError }}</p>
    </div>
</template>