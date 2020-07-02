<template>
    <header class="app-sidebar navbar col sm-w fixed top left d-around-s d-center-m">
        <router-link to="/" tag="h1">[ KRLY [</router-link>

        <div class="shape">
            <svg viewBox="0 0 750 550">
                <path
                    class="polymorph"
                    d="M373.341,111.359C435.011,111.359 518.402,180.195 549.394,236.47C598.984,326.515 505.369,338.949 454.848,374.317C402.092,411.25 217.027,433.137 225.305,246.658C228.04,185.049 311.67,111.359 373.341,111.359Z"
                />
            </svg>
        </div>
        
        <nav>
            <ul class="navbar-menu">
                <li @click="getCategory('none')">
                    <router-link to="/">Tout</router-link>
                </li>
                <li @click="getCategory('project')">Projets</li>
                <li @click="getCategory('lab')">Experimentations</li>
                <li @click="getCategory('illustration')">Illustrations</li>
                <router-link to="/about" tag="li">A propos</router-link>
            </ul>
        </nav>
        <footer class="d-none-m">carlyne.lapierre@gmail.com</footer>
    </header>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
    name: "app-sidebar",

    methods: {
        getCategory(category) {
            return this.$store.dispatch("filterGalleryItem", category);
        },

        animateShape() {
            anime({
                targets: ".polymorph",
                d: [
                    {
                        value:
                            "M363.152,113.269C424.823,113.269 441.142,206.638 474.891,261.304C507.288,313.78 413.673,337.675 363.152,373.043C310.397,409.977 272.427,322.975 272.427,261.304C272.427,199.634 301.482,113.269 363.152,113.269Z"
                    },
                    {
                        value:
                            "M378.435,271.19C440.105,271.19 515.645,181.804 549.394,236.47C581.791,288.946 413.673,337.675 363.152,373.043C310.397,409.977 225.305,308.329 225.305,246.658C225.305,184.988 316.764,271.19 378.435,271.19Z"
                    },
                    {
                        value:
                            "M373.341,111.359C435.011,111.359 518.402,180.195 549.394,236.47C598.984,326.515 505.369,338.949 454.848,374.317C402.092,411.25 217.027,433.137 225.305,246.658C228.04,185.049 311.67,111.359 373.341,111.359Z"
                    }
                ],
                easing: "easeInOutExpo",
                duration: 9000,
                loop: true
            });
        }
    },

    mounted() {
        this.animateShape();
    }
};
</script>

<style scoped lang="scss" src="./app-sidebar.scss"></style>