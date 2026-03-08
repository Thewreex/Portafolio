<template>

    <div class="container mt-5">
        <div class="row gap-5">
            <div class="card-pequena col-4 d-flex flex-column justify-content-end gap-3 p-4">
                <div class="d-flex flex-wrap-reverse gap-2">
                    <div class="card-etiqueta border border-3 border-success px-3">Texto 1</div>
                    <div class="card-etiqueta border border-3 border-success px-3">Texto 2</div>
                    <div class="card-etiqueta border border-3 border-success px-3">Texto mas largo</div>
                    <div class="card-etiqueta border border-3 border-success px-3">Texto mas largo</div>
                    <div class="card-etiqueta border border-3 border-success px-3">Texto mas largo</div>
                </div>
                <div class="d-flex align-items-center  gap-3">
                    <h2>Titulo Proyecto</h2>
                    <font-awesome-icon icon="arrow-up" class="icono-flecha" />
                </div>
            </div>
            <div class="card-pequena col-4"></div>
            <div class="card-pequena col-4"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card-pequena {
    height: 400px;
    border-radius: 50px;
    width: 400px;
    background-image: url("https://placehold.co/110x110");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.icono-flecha {
    transform: rotate(45deg);
    width: 30px;
    height: 30px;
}

.card-etiqueta {
    border-radius: 50px;
}
</style>