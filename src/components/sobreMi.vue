<template>
    <div class="container px-5 mb-5">
        <div class="d-flex justify-content-center align-items-center flex-nowrap my-5">
            <h2 class="ml-5">Sobre mi</h2>
            <div class="linea mx-2"></div>
        </div>

        <div class="d-flex justify-content-between">
            <div class="w-50 texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deserunt incidunt
                sunt
                accusantium
                cum beatae, officiis quia, laborum ipsa nam modi minima! Voluptatibus natus, facilis corrupti
                accusantium ipsum corporis? Dignissimos?</div>
            <img src="https://placehold.co/400x400" alt="">
        </div>
    </div>

    <timeline />
    <timeline />
    <timeline />
    <timeline />

</template>

<script setup>
import timeline from './timeline.vue';
</script>

<style scoped>
.linea {
    height: 4px;
    flex: 1;
    background-color: black;
}

.texto {
    font-size: 28px;
}
</style>