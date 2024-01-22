<template>
  <q-page padding class="row justify-center q-gutter-md">
    <q-card v-for="(item, index) in items" :key="index" class="q-ma-lg col-10 col-lg-4">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col-3 text-center">
            <q-icon :name="item.icon" size="4em" />
          </div>
          <div class="col-9">
            <div class="text-h6">{{ item.title }}</div>
            <div>{{ item.description }}</div>
            <q-btn outline label="Learn More" :href="item.link" target="_blank" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          title: 'Documentation',
          description: 'Vue’s official documentation provides you with all information you need to get started.',
          link: 'https://vuejs.org/',
          icon: 'book'
        },
        {
          title: 'Tooling',
          description: 'This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar.',
          link: 'https://vitejs.dev/guide/features.html',
          icon: 'build'
        },
        {
          title: 'Documentation',
          description: 'Vue’s official documentation provides you with all information you need to get started.',
          link: 'https://vuejs.org/',
          icon: 'book'
        },
        {
          title: 'Tooling',
          description: 'This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar.',
          link: 'https://vitejs.dev/guide/features.html',
          icon: 'build'
        },
      ]
    }
  }
}
</script>