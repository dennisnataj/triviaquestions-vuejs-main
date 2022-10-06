<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

const router = useRouter()

const handleAuthSuccess = () => {
  console.log("user is available")
  router.push('/gamesettings')
}

</script>

<template>
  <main class="container mx-auto px-4">
    <LoginForm @onAuthSuccess="handleAuthSuccess"/>
  </main>
</template>