<template>
    <div class="sticky-top header-nav px-5 gap-5 d-flex align-items-center justify-content-between mx-auto bg-primary">
        <div class="d-flex gap-5">
            <font-awesome-icon icon="user" class="icono-header" />
            <font-awesome-icon icon="folder" class="icono-header" />
            <font-awesome-icon icon="screwdriver-wrench" class="icono-header" />
            <font-awesome-icon icon="envelope" class="icono-header" />
        </div>

        <div class="d-flex gap-5">
            <font-awesome-icon :icon="['fab', 'github']" class="icono-header" />
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icono-header" />
            <font-awesome-icon icon="file" class="icono-header" />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.icono-header {
    height: 35px;
    width: 50px;
}

.header-nav {
    width: 50vw;
    height: 65px;
    border-radius: 100px;
    top: 1.5rem
}
</style>