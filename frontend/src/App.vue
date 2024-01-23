<template>
  <q-layout view="hhh LpR fff">

    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
};
</script>