<template>
  <div v-if="hasData" class="row chart">
    <div class="col-12 col-lg-9">
      <q-card flat bordered>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">MRR</div>
        </q-card-section>
        <q-card-section>
          <ChartCanvas v-show="hasData" :data="mrrChartData" label="MRR" color="rgb(75, 192, 192)" />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-12 col-lg-9 q-mt-md">
      <q-card flat bordered>
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Churn Rate</div>
        </q-card-section>
        <q-card-section>
          <ChartCanvas v-show="hasData" :data="churnRateChartData" label="Churn Rate" color="rgb(255, 99, 132)" />
        </q-card-section>
      </q-card>
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
