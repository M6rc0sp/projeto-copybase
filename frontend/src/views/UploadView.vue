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

interface DataItem {
  labels: string;
  mrr: number;
  churnRate: number;
}

const chartData = ref<Record<string, DataItem>>({});

const handleUpdateData = (newData: Record<string, DataItem>) => {
  console.log('handleUpdateData', newData);
  chartData.value = newData;
};
</script>
