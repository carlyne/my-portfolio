<template>
    <main class="container d-grid resp">
      <AppCard></AppCard>
    </main>
</template>

<script>

import AppCard from '../../components/app-card/AppCard.vue'; 

export default {
  name: 'Home',
  components: {
    AppCard
  }
}
</script>
