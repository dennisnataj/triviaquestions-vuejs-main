<script setup>import { ref } from 'vue';
import { useStore } from 'vuex';
import { apiFetchQuestions } from '../api/gamesettings';

const store = useStore()
const emit = defineEmits(["onAuthSuccess"])
const amountOfQuestions = ref("")
const difficulty = ref("")
const category = ref("")

const onGameSettingsClick = async () => {
    const arrayWithFetchedQUestions = await apiFetchQuestions(amountOfQuestions.value, difficulty.value, category.value)
    store.commit("setQuestions", arrayWithFetchedQUestions)
    emit("onAuthSuccess")
};

</script>


<template>
    <main>
        <h1 class="text-3xl flex justify-center mt-10">Choose Your Game Settings!</h1>
        <div class="flex justify-center items-center v-screen mt-40">
            <span>Amount of questions</span>
            <select v-model="amountOfQuestions" class="border border-slate-300 rounded">
                <option disabled hidden value>Please select one</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <span>Difficulty</span>
            <select v-model="difficulty" class="border border-slate-300 rounded">
                <option disabled value>Please select one</option>
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
            </select>

            <span>Category</span>
            <select v-model="category" class="border border-slate-300 rounded">
                <option disabled value>Please select one</option>
                <option>Sports</option>
                <option>Geography</option>
                <option>History</option>
            </select>
            <button
                @click="onGameSettingsClick"
                type="button"
                class="bg-gray-700 text-white p-3 rounded items-center"
            >Submit</button>
        </div>
    </main>
</template>