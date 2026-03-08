<template>
    <div class="header-nav d-flex flex-column  justify-content-lg-between flex-lg-row bg-primary">
        <div class="d-flex flex-column flex-lg-row header-secciones ">
            <font-awesome-icon icon="user" class="icono-header" />
            <font-awesome-icon icon="folder" class="icono-header" />
            <font-awesome-icon icon="screwdriver-wrench" class="icono-header" />
            <font-awesome-icon icon="envelope" class="icono-header" />
        </div>

        <div class="d-flex flex-column flex-lg-row header-secciones">
            <font-awesome-icon :icon="['fab', 'github']" class="icono-header " />
            <font-awesome-icon :icon="['fab', 'linkedin']" class="icono-header " />
            <font-awesome-icon icon="file" class="icono-header " />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.header-nav {
    padding: 30px 15px;
    align-items: center;
    justify-content: space-between;
    height: 70vh;
    position: fixed;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    border-radius: 50px;
}

.header-secciones {
    gap: clamp(0.5rem, 2.7vw, 3.5rem);
}

.icono-header {
    font-size: clamp(1.4rem, 2.1vw, 3rem);
}

@media (min-width: 992px) {
    .header-nav {
        top: 1.5rem;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        width: 50%;
        height: auto;
        padding: 15px clamp(20px, 5vw, 100px);
    }
}
</style>