<template>
  <q-layout view="hhh LpR fff">

    <q-header elevated height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Projeto Copybase
        </q-toolbar-title>

        <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'brightness_3' : 'brightness_5'" />

      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/about" label="Sobre" />
        <q-route-tab to="/upload" label="Enviar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="row items-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          &nbspFim
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>