<template>
    <div class="d-flex justify-content-center align-items-center flex-nowrap my-5 px-5">
        <div class="linea mx-2"></div>
        <h2 class="mx-5">Proyectos</h2>
    </div>

    <div class="d-flex justify-content-center">
        <proyectosCardGrande />
    </div>

    <div>
        <proyectosCardPequeña />
    </div>
</template>

<script setup>
import proyectosCardGrande from './proyectosCardGrande.vue';
import proyectosCardPequeña from './proyectosCardPequeña.vue';
</script>

<style scoped>
.linea {
    height: 4px;
    flex: 1;
    background-color: black;
}
</style>