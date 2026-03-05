<template>
    <div class="container d-flex justify-content-between p-5 contenedor-hero mt-5">
        <div>
            <img src="https://placehold.co/375x375" alt="">
        </div>
        <div class="contenedor-texto">
            <div class="d-flex align-items-center flex-nowrap">
                <p class="mb-0 text-nowrap">Hola, Soy Juan Pablo</p>
                <div class="linea mx-2"></div>
            </div>

            <div class="d-flex mt-2 align-items-end gap-3 flex-column">
                <div class="d-flex gap-3">
                    <h1 class="texto-titulo">Desarrollador <span class="texto-titulo">FullStack</span>
                    </h1>
                </div>
                <p class="text-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate
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
.circulo {
    width: 20px;
    height: 20px;
}

.texto-titulo {
    font-size: 60px;
}

.contenedor-texto {
    width: 650px;
}


.contenedor-hero {
    height: 75vh;
}

.linea {
    height: 1px;
    flex: 1;
    background-color: black;
}
</style>