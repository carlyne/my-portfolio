<template>
    <article class="content-box space-out gallery">
        <router-link :to="path" tag="h2">Titre</router-link>
    </article>
</template>

<script>
export default {
	name: "app-card",
	
	data: function() {
        return {
			path: "/",
		}
    }
}
</script>

<style scoped lang="scss" src="./_app-card.scss"></style>