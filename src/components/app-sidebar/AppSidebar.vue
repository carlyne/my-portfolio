<template>
    <header class="app-sidebar navbar col sm-w fixed top left d-around-s d-center-m">
        <router-link to="/" tag="h1">[ KRLY [</router-link>
        <nav>
            <ul class="navbar-menu">
                <li @click="getCategory('none')"><router-link to="/">Tout</router-link></li>
                <li @click="getCategory('project')">Projets</li>
                <li @click="getCategory('lab')">Experimentations</li>
                <li @click="getCategory('illustration')">Illustrations</li>
                <router-link to="/about" tag="li">A propos</router-link>
            </ul>
        </nav>
        <footer class="d-none-m">
            carlyne.lapierre@gmail.com
        </footer>
    </header>
</template>

<script>
export default {
    name: 'app-sidebar',
    
    methods: {
        getCategory(category) {
            return this.$store.dispatch('filterGalleryItem', category)
        }
    }
}
</script>

<style scoped lang="scss" src="./app-sidebar.scss"></style>