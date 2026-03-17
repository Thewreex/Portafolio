<template>
    <div class="d-flex px-0 ">
        <div class=" contenedor-linea me-4 me-md-5 d-flex flex-column align-items-center">
            <font-awesome-icon icon="suitcase" class="icono" />
            <div class="linea"></div>
        </div>

        <div class="d-flex flex-grow-1  flex-column">
            <div class="contenedor-card p-4">
                <h1 class="titulo-card">Cargo Trabajo</h1>

                <div class="d-flex flex-column flex-md-row gap-3 gap-md-5">
                    <p class="texto-card mb-1 mb-md-3">Empresa Trabajo</p>
                    <p class="texto-card">Fecha Inicio / Fecha Termino</p>
                </div>

                <p class="texto-card mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    reprehenderit,
                    perferendis
                    velit
                    voluptatibus, sapiente numquam atque corporis veniam at, quisquam impedit? Mollitia dolorem at quos
                    laudantium! Dolor, dignissimos! Unde, eum.</p>

                <img src="https://placehold.co/30x30" alt="">
            </div>
            <div class="espaciado">

            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/styles/utils/variables" as *;
@use "@/assets/styles/utils/mixins" as *;

.espaciado {
    height: 10vh;
}


.titulo-card {
    font-size: $texto-grande;
}

.texto-card {
    font-size: $texto-normal;
}

.icono {
    width: 30px;
    height: 30px;
}


.linea {
    width: 5px;
    height: 100%;
    background-color: black;
}

.contenedor-card {
    min-height: 270px;
    width: 100%;
    max-width: 1560px;
    background-color: gray;
    border-radius: 50px;
}
</style>