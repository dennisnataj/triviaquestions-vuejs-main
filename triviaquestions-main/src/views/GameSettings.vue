<script setup>
import { useRouter } from 'vue-router';
import GameSettingsForm from '../components/GameSettingsForm.vue';

const router = useRouter()

const handleAuthSuccess = () => {
  router.push('/question')
}

</script>

<template>
  <GameSettingsForm @onAuthSuccess="handleAuthSuccess" />
</template>