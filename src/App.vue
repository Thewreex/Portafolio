<template>
  <appHeader id="appHeader" />
  <heroSection id="heroSection" />
  <carrusel />
  <sobreMi />
  <proyectos />
  <tecnologias />
</template>

<script setup>
import appHeader from './components/appHeader.vue';
import heroSection from './components/heroSection.vue';
import carrusel from './components/carrusel.vue';
import sobreMi from './components/sobreMi.vue';
import proyectos from './components/proyectos.vue';
import tecnologias from './components/tecnologias.vue';
</script>


<style scoped lang="scss">
#heroSection,
#appHeader {
  // border: 2px solid red;
}
</style>
