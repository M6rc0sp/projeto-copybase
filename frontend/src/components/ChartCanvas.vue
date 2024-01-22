<template>
    <div>
        <canvas ref="chartCanvas" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Tooltip, Title, CategoryScale);

interface DataItem {
    labels: string;
    data: number;
}

export default defineComponent({
    props: {
        data: {
            type: Array as () => DataItem[],
            required: true
        },
        label: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const chartCanvas = ref(null);
        let chart: Chart<'line', number[], string> | null = null;

        const chartData = computed(() => {
            const labels = props.data.map(item => item.labels);
            const data = props.data.map(item => item.data);

            return {
                labels: labels,
                datasets: [{
                    label: props.label,
                    data: data,
                    fill: false,
                    borderColor: props.color,
                    tension: 0.1
                }]
            };
        });

        const createChart = () => {
            if (chartCanvas.value) {
                chart = new Chart<'line', number[], string>(chartCanvas.value, {
                    type: 'line',
                    data: chartData.value,
                    options: {
                        responsive: true,
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        let value: number | string = (context.dataset.data as number[])[context.dataIndex];

                                        if (typeof value === 'number') {
                                            value = props.label === 'MRR' ? formatCurrency(value) : Number(value).toFixed(2);
                                        } else if (value === null) {
                                            value = 'N/A';
                                        }

                                        return props.label + ': ' + value + (props.label === 'Churn Rate' ? '%' : '');
                                    }
                                }
                            }
                        },
                    }
                });
            }
        };

        function formatCurrency(amount: number) {
            return amount.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        }

        const updateChart = () => {
            if (chart) {
                chart.data.labels = chartData.value.labels;
                chart.data.datasets[0].data = chartData.value.datasets[0].data;
                chart.update();
            }
        };

        watch(chartData, updateChart, { deep: true });

        onMounted(createChart);

        return {
            chartCanvas
        };
    }
});
</script>