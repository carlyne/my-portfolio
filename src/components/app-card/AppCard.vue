<template>
    <article v-bind:style="styleItem" class="content-box space-out gallery">
        <router-link :to="path + galleryItem.id" tag="h2" :item="galleryItem">{{ galleryItem.title }}</router-link>
    </article>
</template>

<script>
export default {
	name: "app-card",   
	
	data: function() {
        return {
            path: "",
            styleItem: {
                backgroundColor: 'aquamarine',
                backgroundImage: 'url(' + "'" + this.galleryItem.srcImg + "'" + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                flexGrow: Math.floor(Math.random() * (2 - 1 + 1)) + 1
            }
            
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