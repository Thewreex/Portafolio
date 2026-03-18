<template>
    <div class="d-flex justify-content-center align-items-center flex-nowrap px-5 my-5">
        <h2 class="text-nowrap">Sobre mi</h2>
        <div class="linea mx-2"></div>
    </div>
    <div class="d-flex flex-column flex-md-row mt-5 gap-4 gap-md-5">
        <div class="w-100 d-flex flex-column  align-items-center">
            <h2 class="mb-3">
                < Front<span>End /></span>
            </h2>

            <div class="contenedor-tec bg-primary d-flex align-items-start p-3">
                <div class="row justify-content-center p-4 text-center gy-4">
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                </div>
            </div>
        </div>
        <div class="w-100 d-flex flex-column align-items-center">
            <h2 class="mb-3">
                < Back<span>End /></span>
            </h2>

            <div class="contenedor-tec bg-primary d-flex align-items-start p-3">
                <div class="row justify-content-center p-4 text-center gy-4">
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                </div>
            </div>
        </div>
        <div class="w-100 d-flex flex-column align-items-center">
            <h2 class="mb-3">
                < Otros<span> /></span>
            </h2>

            <div class="contenedor-tec bg-primary d-flex align-items-start p-3">
                <div class="row justify-content-center p-4 text-center">
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                    <div class="col-6 col-md-4"><img src="https://placehold.co/100x100" class="img-fluid" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/styles/utils/variables" as *;
@use "@/assets/styles/utils/mixins" as *;

.contenedor-tec {
    max-width: 350px;
    width: 100%;
    min-height: 550px;
    border-radius: 50px;
}

.linea {
    @include linea(4px)
}
</style>
