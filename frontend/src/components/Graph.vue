<template>
  <div class="row chart">
    <div class="col-8">
      <h1 class="text-h4">MRR</h1>
      <canvas id="mrrChart"></canvas>
    </div>
    <div class="col-8">
      <h1 class="text-h4">Churn Rate</h1>
      <canvas id="churnRateChart"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const createChart = () => {
      if (props.data && Object.keys(props.data).length > 0) {
        const labels = Object.keys(props.data);
        const mrrData = labels.map(label => props.data[label]?.mrr);
        const churnRateData = labels.map(label => props.data[label]?.churnRate);

        new Chart(document.getElementById('mrrChart') as HTMLCanvasElement, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'MRR',
              data: mrrData,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          options: {
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    var label = context.chart.data.labels ? context.chart.data.labels[context.dataIndex] : '';
                    var value = context.dataset.data[context.dataIndex];
                    return label + ': ' + value + '%';
                  }
                }
              }
            },
          }
        });

        new Chart(document.getElementById('churnRateChart') as HTMLCanvasElement, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Churn Rate',
              data: churnRateData,
              fill: false,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  // Inclui um símbolo de porcentagem no final do valor do eixo y
                  callback: function (value, index, values) {
                    return value + '%';
                  }
                }
              }
            }
          }
        });
      }
    };

    onMounted(createChart);
    watch(() => props.data, createChart, { deep: true });
  }
});
</script>
