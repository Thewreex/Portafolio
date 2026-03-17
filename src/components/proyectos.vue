<template>
    <div class="d-flex justify-content-center align-items-center flex-nowrap my-5 px-5">
        <div class="linea mx-2"></div>
        <h2 class="mx-2 titulo-proyectos">Proyectos</h2>
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center">
        <proyectosCardGrande />
        <proyectosCardGrande />
        <proyectosCardGrande />
        <proyectosCardGrande />
    </div>

    <!-- <div>
        <proyectosCardPequeña />
    </div> -->
</template>

<script setup>
import proyectosCardGrande from './proyectosCardGrande.vue';
import proyectosCardPequeña from './proyectosCardPequeña.vue';
</script>

<style lang="scss" scoped>
@use "@/assets/styles/utils/mixins" as *;
@use "@/assets/styles/utils/variables" as *;

.titulo-proyectos {
    font-size: $texto-grande;
}

.linea {
    @include linea(4px)
}
</style>