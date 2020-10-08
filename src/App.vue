<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
        <HeaderComponent class="container"></HeaderComponent>
        <router-view class="container"></router-view>
     <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// Componentes comunes
import HeaderComponent from './components/shared/header/HeaderComponent.vue';
import NavbarComponent from './components/shared/navbar/NavbarComponent.vue';
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  }
}
</script>
