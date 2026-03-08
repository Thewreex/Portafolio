<template>
    <h1 class="text-center my-5">Contactame</h1>

    <div class="d-flex justify-content-between px-5">
        <div class="bg-primary p-5 contenedor-redes align-self-start">
            <div class="mb-5"><font-awesome-icon :icon="['fab', 'github']"
                    class="icono-header" /><span>Juanpablodiaz2518@gmail.com</span></div>
            <div class="mb-5"> <font-awesome-icon icon="envelope" class="icono-header" /><span>JuanPablo2518</span>
            </div>
            <div><font-awesome-icon :icon="['fab', 'linkedin']" class="icono-header" /><span>JuanPablo2518</span></div>
        </div>
        <div class="d-flex flex-column">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Correo">
            <input class="input-mensaje" type="text" placeholder="Mensaje">
            <button>Enviar</button>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.contenedor-redes {
    font-size: 25px;
    font-weight: bold;
    width: 38%;
    border-radius: 10px;
}

.input-mensaje {
    height: 300px;
}

input {
    width: 500px;
    margin-bottom: 25px;
}
</style>