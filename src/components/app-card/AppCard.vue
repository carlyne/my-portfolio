<template>
    <transition appear appear-active-class="blur-enter-active" leave-active-class="blur-leave-active">
        <article v-bind:style="styleItem" class="content-box space-out gallery">
            <router-link :to="path + galleryItem.id" tag="h2" :item="galleryItem">{{ galleryItem.title }}</router-link>
        </article>
    </transition>
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
                backgroundPosition: '50% 10%',
                backgroundRepeat: 'no-repeat'
            }
            
		}
    },

    props: ['galleryItem'],

    created() {
        if (this.galleryItem.category == "project") {
            return this.path = "project/";
        } else if (this.galleryItem.category == "illustration"){
            return this.path = "illustration/";
        } else {
            return this.path = "lab/";
        }
    }

}
</script>

<style scoped lang="scss" src="./app-card.scss"></style>