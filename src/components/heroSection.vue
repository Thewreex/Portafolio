<template>
    <div class="d-flex flex-column flex-md-row justify-content-around align-items-center p-5 contenedor-hero mt-5">
        <div class="me-md-5 mb-5 mb-md-0">
            <img class="img-fluid" src="https://placehold.co/375x375" alt="">
        </div>

        <div class="contenedor-texto">
            <div class="d-flex align-items-center flex-nowrap mb-3">
                <p class="mb-0 text-nowrap">Hola, Soy Juan Pablo</p>
                <div class="linea mx-2"></div>
            </div>

            <div class="d-flex mt-2 align-items-center align-items-md-end gap-3 flex-column">
                <div class="d-flex gap-3">
                    <h1 class="texto-titulo">Desarrollador <span class="texto-titulo">FullStack</span>
                    </h1>
                </div>
                <p class="text-center text-md-end cuerpo-header">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sint
                    voluptate
                    exercitationem esse facilis
                    praesentium eum nemo officiis dolor eius, eveniet aut tempora id laudantium animi voluptates,
                    perspiciatis tenetur quo odit.</p>

                <div class="d-flex gap-3 align-items-center border border-3 rounded-5 p-2">
                    Abierto a nuevas oportunidades
                    <div class="circulo rounded-circle bg-success"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@use "@/assets/styles/utils/variables" as *;
@use "@/assets/styles/utils/mixins" as *;

.circulo {
    width: 20px;
    height: 20px;
}

.cuerpo-header {
    font-size: $texto-normal;
}

.texto-titulo {
    font-size: $texto-grande;
}

.contenedor-texto {
    max-width: 800px;
}


.contenedor-hero {
    min-height: 75vh;
}

.linea {
    @include linea(1px)
}
</style>