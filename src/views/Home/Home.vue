<template>
    <main class="container d-grid resp">
        <AppCard v-for="(item, index) in diplayGalleryItem" :key="index" :galleryItem="item"></AppCard>
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

  methods: {
    getItems() {
     return this.galleryItems = this.$store.state.galleryItems;
    },

    getFilteredItems() {
     return this.galleryItems = this.$store.state.filteredItems;
    }
  },

  computed: {
    diplayGalleryItem() {
      if(this.$store.state.filteredItems.length) {
        return this.getFilteredItems();
      }

      return this.getItems()
      
    }
  },

  created() {
    this.getItems()
  }
}
</script>

<style scoped lang="scss" src="./home.scss"></style>