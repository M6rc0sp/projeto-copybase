<template>
  <q-page class="row" padding>
    <div class="col-8">
      <UploadForm @updateData="handleUpdateData" />
    </div>
    <div class="col-12">
      <Graph :data="chartData" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import UploadForm from '../components/UploadForm.vue'
import Graph from '@/components/Graph.vue';

import { ref } from 'vue';

const chartData = ref<Record<string, { mrr: number, churnRate: number }> | undefined>(undefined);

const handleUpdateData = (newData: Record<string, { mrr: number, churnRate: number }>) => {
  console.log('handleUpdateData', newData);
  chartData.value = newData;
};
</script>
