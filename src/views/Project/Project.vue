<template>
    <div class="project-view container space-in">
        <header class="container">
            
        </header>
        <h1> {{ $route.params.id}} </h1>
    </div>
</template>

<script>
export default {
    name: 'project',

    data() {
        return {
            projectItem: {}
        }
    },
    
    created() {
        fetch("http://localhost:8080/projet-content.json")
        .then(response => response.json())
        .then((data) => {
            return this.projectItem = data.filter(d => d.id == this.$route.params.id);
        });
    }
}
</script>

<style scoped lang="scss" src="./_project-view.scss"></style>