<template>
  <SpeedInsights />
  <q-layout view="hhh LpR fff">

    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>