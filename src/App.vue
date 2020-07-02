<template>
    <div id="app">
        <AppSidebar></AppSidebar>
        <router-view></router-view>
    </div>
</template>

<script>
import AppSidebar from "./components/app-sidebar/AppSidebar.vue";


export default {
    components: {
        AppSidebar
    }
};
</script>

<style lang="scss" src="./style.scss"></style>
