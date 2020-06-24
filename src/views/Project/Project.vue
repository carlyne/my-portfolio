<template>
  <div class="project-view container space-in">
    <header :style="{backgroundImage : 'url( ' + projectItem.srcImg + ')' }" class="container"></header>
    <h1>{{ projectItem.title }}</h1>

    <section v-for="(item, index) in projectItemContent['text-blocs']" :key="index" class="d-grid resp">
      <div class="content-box">
        <h2>{{item.title}}</h2>
        <p>{{item.content}}</p>
      </div>

      <div v-if="item.srcImg" class="content-box space-out">
        <img :src="item.srcImg" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "project",

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
};
</script>

<style scoped lang="scss" src="./project-view.scss"></style>