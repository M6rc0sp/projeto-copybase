<template>
  <q-layout view="hhh LpR fff">

    <q-header elevated height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="row items-center justify-between">
          <div class="col-auto">
            <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'brightness_3' : 'brightness_5'" />
          </div>
          <div class="col text-center">
            Projeto
          </div>
          <div class="col-auto">
            <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'brightness_3' : 'brightness_5'" />
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/upload" label="Enviar" />
        <q-route-tab to="/about" label="Sobre" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white text-center">
      <q-toolbar>
        <q-space />
        <div class="text-subtitle2 q-my-md">
          Sou Marcos Paulo Barbosa, desenvolvedor full stack com 6 anos de experiência.
        </div>
        <div class="text-h6 q-my-md">
          Entre em Contato
        </div>
        <div class="row justify-center q-gutter-md">
          <q-btn round dense icon="fas fa-envelope" @click="window.location.href = 'mailto:seuemail@exemplo.com'" />
          <q-btn round dense icon="fab fa-github" @click="window.location.href = 'https://github.com/seuusuario'" />
          <q-btn round dense icon="fab fa-linkedin" @click="window.location.href = 'https://linkedin.com/in/seuusuario'" />
          <q-btn round dense icon="fas fa-file-alt" @click="window.location.href = 'https://linkparaoseuartigo.com'" />
        </div>
        <q-space />
      </q-toolbar>
    </q-footer>


  </q-layout>
</template>