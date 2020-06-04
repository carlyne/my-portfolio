<template>
    <div class="project-view container space-in">
        <header class="container">
            {{ projectItem.srcImg }}
        </header>
        <h1> {{ projectItem.title }} </h1>

        <section>
            <h2>{{projectItemContent['text-blocs'][0].title}}</h2>
        </section>
    </div>
</template>

<script>
export default {
    name: 'project',

    data() {
        return {
            projectItemContent: {},
            projectItem: {}
        }
    },
    
    created() {
        fetch("http://localhost:8080/projet-content.json")
        .then(response => response.json())
        .then((data) => {
            return this.projectItemContent = (data.filter(d => d.id == this.$route.params.id))[0];
        });

        let itemStore = this.$store.state.galleryItems;
        this.projectItem = (itemStore.filter(i => i.id == this.$route.params.id))[0];
    }
}
</script>

<style scoped lang="scss" src="./_project-view.scss"></style>