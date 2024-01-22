import { ref } from 'vue';

interface DataItem {
  labels: string;
  mrr: number;
  churnRate: number;
}

interface UploadViewState {
  chartData: Record<string, DataItem>;
  isLoading: boolean;
}

export const state = ref<UploadViewState>({
  chartData: {},
  isLoading: false,
});

export const handleUpdateData = (newData: Record<string, DataItem>) => {
  state.value.chartData = newData;
};

export const startLoading = () => {
  state.value.isLoading = true;
};

export const endLoading = () => {
  state.value.isLoading = false;
};