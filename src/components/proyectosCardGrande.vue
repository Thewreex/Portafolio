<template>
    <div
        class="card-grande bg-primary p-5 d-flex flex-column flex-md-row gap-5 align-items-md-center justify-content-between mb-5">
        <div class="d-flex flex-column gap-2">
            <div class="texto-normal">Proyecto destacado</div>
            <h2 class="texto-titulo">Nombre del proyecto</h2>
            <p class="mb-5 texto-normal">Descripcion del proyecto</p>
            <button class="boton-proyectos">Ver mas</button>
        </div>
        <div class="d-flex justify-content-center">
            <img class="rounded-end img-fluid" src="https://placehold.co/310x310" alt="">
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/styles/utils/mixins" as *;
@use "@/assets/styles/utils/variables" as *;

.card-grande {
    height: auto;
    width: 90%;
    border-radius: 50px;
}

.texto-normal {
    font-size: $texto-normal;
}

.texto-titulo {
    font-size: $texto-grande;
}

.boton-proyectos {
    font-size: $texto-normal;
}
</style>