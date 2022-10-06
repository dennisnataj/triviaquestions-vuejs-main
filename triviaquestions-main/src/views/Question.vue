<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import QuestionListItem from "../components/QuestionListItem.vue";

const store = useStore();
const questions = computed(() => store.state.questions);

</script>

<template>
  <h1 class="text-3xl flex justify-center mt-10">Question Screen</h1>

  <ul>
    <QuestionListItem v-for="question in questions" :key="question.id" :question="question"/>
  </ul>
  <div class="flex justify-center items-center h-screen">
    <button
      type="submit"
      id="btn-one"
      class="bg-gray-700 text-white p-3 rounded"
    >
      One
    </button>
    <button
      type="submit"
      id="btn-two"
      class="bg-gray-700 text-white p-3 rounded"
    >
      Two
    </button>
    <button
      type="submit"
      id="btn-three"
      class="bg-gray-700 text-white p-3 rounded"
    >
      Three
    </button>
    <button
      type="submit"
      id="btn-four"
      class="bg-gray-700 text-white p-3 rounded"
    >
      Four
    </button>
  </div>
</template>