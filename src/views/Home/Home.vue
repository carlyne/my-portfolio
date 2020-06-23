<template>
    <main class="container d-grid resp">
      <AppCard v-for="(item, index) in galleryItems" :key="index" :galleryItem="item"></AppCard>
    </main>
</template>

<script>

import AppCard from '../../components/app-card/AppCard.vue'; 

export default {
  name: 'Home',
  components: {
    AppCard
  },

  data() {
    return {
      galleryItems: []
    }
  },

  created() {
    this.galleryItems = this.$store.state.galleryItems;
  }
}
</script>

<style scoped lang="scss">
  main {
     padding: 50px;
  }
</style>