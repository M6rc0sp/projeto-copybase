<template>
  <q-page class="row" padding>
    <q-card class="col-12 col-lg-8">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">{{ $t('analyze.titleUpload') }}</div>
      </q-card-section>
      <q-card-section>
        <UploadForm @updateData="handleUpdateData" @loading-start="startLoading" @loading-end="endLoading" />
      </q-card-section>
      <q-card-section>
        <div v-if="state.isLoading" class="row q-mt-xl justify-center items-center">
          <div class="flex flex-center q-pa-md">
            <q-spinner color="primary" size="60px" />
            <h5 class="q-pl-md">{{ $t('analyze.loading') }}</h5>
          </div>
        </div>
        <div v-else>
          <Graph :data="state.chartData" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import UploadForm from '../components/UploadForm.vue'
import Graph from '@/components/Graph.vue';

import { handleUpdateData, startLoading, endLoading, state } from '@/services/uploadService';
</script>