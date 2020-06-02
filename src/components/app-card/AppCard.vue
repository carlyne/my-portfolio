<template>
    <article class="content-box space-out gallery">
        <router-link :to="path + galleryItem.id" tag="h2">{{ galleryItem.title }}</router-link>
    </article>
</template>

<script>
export default {
	name: "app-card",
	
	data: function() {
        return {
			path: "",
		}
    },

    props: ['galleryItem'],

    created() {
        if (this.galleryItem.category == "project") {
            return this.path = "project/";
        } else if (this.galleryItem.category == "illustration"){
            return this.path = "illusration/";
        } else {
            return this.path = "lab/";
        }
    }

}
</script>

<style scoped lang="scss" src="./_app-card.scss"></style>