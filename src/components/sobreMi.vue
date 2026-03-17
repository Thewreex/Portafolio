<template>
    <div class="container-fluid px-3 px-md-5 mb-5">
        <div class="d-flex justify-content-center align-items-center flex-nowrap px-5 my-5">
            <h2 class="text-nowrap">Sobre mi</h2>
            <div class="linea mx-2"></div>
        </div>

        <div class="row align-items-center justify-content-between px-3 px-md-5 mb-5">
            <div class="col-12 col-md-6 texto">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas deserunt
                incidunt
                sunt
                accusantium
                cum beatae, officiis quia, laborum ipsa nam modi minima! Voluptatibus natus, facilis corrupti
                accusantium ipsum corporis? Dignissimos?</div>
            <div class="col-12 col-md-4 d-flex justify-content-center">
                <img class="img-fluid" src="https://placehold.co/400x400" alt="">
            </div>
        </div>
        <div class="px-3 px-md-5">
            <timeline />
            <timeline />
            <timeline />
            <timeline />
        </div>
    </div>
</template>

<script setup>
import timeline from './timeline.vue';
</script>

<style lang="scss" scoped>
@use "@/assets/styles/utils/mixins" as *;
@use "@/assets/styles/utils/variables" as *;

.linea {
    @include linea(4px)
}

.texto {
    font-size: $texto-normal;
}
</style>