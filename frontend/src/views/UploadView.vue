<template>
  <q-page class="row" padding>
    <div class="col-12 col-lg-8">
      <UploadForm @updateData="handleUpdateData" @loading-start="startLoading" @loading-end="endLoading" />
    </div>
    <div class="col-12">
      <div v-if="state.isLoading" class="row q-mt-xl justify-center items-center">
        <div class="flex flex-center q-pa-md">
          <q-spinner color="primary" size="60px" />
          <h5 class="q-pl-md">Carregando...</h5>
        </div>
      </div>
      <div v-else>
        <Graph :data="state.chartData" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import UploadForm from '../components/UploadForm.vue'
import Graph from '@/components/Graph.vue';

import { handleUpdateData, startLoading, endLoading, state } from '@/services/uploadService';
</script>