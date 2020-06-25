<template>
    <figure class="illustration-view d-grid content-around align-center container resp space-in">
        <img :src="projectItem.srcImg"  class="content-box" alt="illustration">
        <h1 class="content-box" >{{ projectItem.title }}</h1>
    </figure>
</template>

<script>
export default {
    name: 'illustration',
    
    data() {
        return {
            projectItemContent: {},
            projectItem: {}
        };
    },

    mounted() {
    fetch("http://localhost:8080/projet-content.json")
      .then(response => response.json())
      .then(data => {
        return (this.projectItemContent = data.filter(
          d => d.id == this.$route.params.id
        )[0]);
      });

    let itemStore = this.$store.state.galleryItems;
    this.projectItem = itemStore.filter(i => i.id == this.$route.params.id)[0];
  }
}
</script>

<style scoped lang="scss">

figure {
    width: 100%;
    height: 100vh;
    margin: 0;
}

img {
    object-fit: cover;
}
</style>