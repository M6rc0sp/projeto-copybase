<template>
  <div v-if="hasData" class="row chart">
    <div class="col-12 col-lg-8">
      <h1 class="text-h4">MRR</h1>
      <ChartCanvas v-show="hasData" :data="mrrChartData" label="MRR" color="rgb(75, 192, 192)" />
    </div>
    <div class="col-12 col-lg-8">
      <h1 class="text-h4">Churn Rate</h1>
      <ChartCanvas v-show="hasData" :data="churnRateChartData" label="Churn Rate" color="rgb(255, 99, 132)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ChartCanvas from './ChartCanvas.vue';

interface DataItem {
  labels: string;
  mrr: number;
  churnRate: number;
}

export default defineComponent({
  components: {
    ChartCanvas,
  },
  props: {
    data: {
      type: Object as () => Record<string, DataItem>,
      required: true
    }
  },
  setup(props) {
    const hasData = computed(() => Object.keys(props.data).length > 0);

    const mrrChartData = computed(() => {
      if (!hasData.value) return [];

      const labels = Object.keys(props.data);
      const data = labels.map(label => props.data[label]?.mrr);
      return labels.map((label, index) => ({ labels: label, data: data[index] }));
    });

    const churnRateChartData = computed(() => {
      if (!hasData.value) return [];

      const labels = Object.keys(props.data);
      const data = labels.map(label => props.data[label]?.churnRate);
      return labels.map((label, index) => ({ labels: label, data: data[index] }));
    });

    return {
      hasData,
      mrrChartData,
      churnRateChartData,
    };
  }
});
</script>
