<template>
    <div class="card-grande bg-primary px-5 d-flex align-items-center justify-content-between">
        <div class="d-flex flex-column gap-2">
            <div>Proyecto destacado</div>
            <h2>Nombre del proyecto</h2>
            <p class="mb-5">Descripcion del proyecto</p>
            <button>Ver mas</button>
        </div>
        <div>
            <img class="rounded-end" src="https://placehold.co/310x310" alt="">
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.card-grande {
    height: 350px;
    width: 90%;
    border-radius: 50px;
}
</style>