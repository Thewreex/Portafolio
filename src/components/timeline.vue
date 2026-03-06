<template>
    <div class="d-flex px-5 contenedor-linea">
        <div class="contenedor-linea d-flex flex-column align-items-center">
            <font-awesome-icon icon="suitcase" class="icono" />
            <div class="linea"></div>
        </div>

        <div class="contenedor-card p-4">
            <h1>Cargo Trabajo</h1>

            <div class="d-flex gap-5">
                <p>Empresa Trabajo</p>
                <p>Fecha Inicio / Fecha Termino</p>
            </div>

            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit, perferendis
                velit
                voluptatibus, sapiente numquam atque corporis veniam at, quisquam impedit? Mollitia dolorem at quos
                laudantium! Dolor, dignissimos! Unde, eum.</p>

            <img src="https://placehold.co/30x30" alt="">
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.icono {
    width: 30px;
    height: 30px;
}

.contenedor-linea {
    margin-left: 40px;
}

.linea {
    width: 5px;
    height: 270px;
    background-color: black;
}

.contenedor-card {
    height: 270px;
    width: 1200px;
    background-color: gray;
    border-radius: 50px;
    margin-left: 40px;
}
</style>