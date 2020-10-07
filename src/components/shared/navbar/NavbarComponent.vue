<template>
    <b-navbar class="navbar navbar-expand-lg navbar-dark bg-custom">
            <router-link :to="'/'" class="navbar-brand">
                <img src="../../../assets/img/logo.png" alt="Graficos" title="Graficos">
            </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/barras" class="nav-link active">Barras</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { BNavbar, BNavbarNav, BNavbarToggle  } from 'bootstrap-vue';

export default {
    name: 'NavbarComponent',
    components: {
      BNavbar,
      BNavbarNav,
      BNavbarToggle
    }        
}
</script>