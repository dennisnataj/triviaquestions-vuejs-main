<script setup>
defineProps({
  question: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li>
      <span>{{question.question}}</span>
  </li>
</template>