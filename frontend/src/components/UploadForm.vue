<template>
  <form @submit.prevent="submitFile">
    <div class="row no-wrap items-center">
      <div class="col">
        <q-file v-model="file" class="input-file-chart" :label="$t('analyze.selectHint')" filled
          @input="handleFileUpload" />
      </div>
      <div class="col-auto">
        <q-btn type="submit" :label="$t('analyze.buttonTitle')" class="q-ma-md input-file-chart" color="primary" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import { useQuasar } from 'quasar'
import axios from 'axios';

export default defineComponent({
  setup(props, { emit }) {
    const chartData = ref(null);
    provide('chartData', chartData);
    const file = ref<File | null>(null);
    const $q = useQuasar();

    function handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      file.value = target.files ? target.files[0] : null;
    }

    async function submitFile(this: any) {
      try {
        emit('loading-start');

        if (!file.value) {
          throw new Error(this.$t('analyze.noFileError'));
        }

        let fileName = file.value.name;
        let fileExtension = fileName.split('.').pop();

        if (fileExtension !== 'csv' && fileExtension !== 'xlsx') {
          file.value = null;
          throw new Error(this.$t('analyze.invalidFileError'));
        }

        let formData = new FormData();
        formData.append('file', file.value);

        await new Promise(resolve => setTimeout(resolve, 500));

        const response = await axios.post('http://34.71.35.56/upload', formData);
        console.log(response.data);
        $q.notify({
          type: 'positive',
          message: this.$t('analyze.successMessage')
        });
        chartData.value = response.data;
        emit('updateData', chartData.value);
      } catch (error: any) {
        $q.notify({
          type: 'negative',
          message: error.message
        });
      } finally {
        emit('loading-end');
      }
    }

    return {
      file,
      handleFileUpload,
      submitFile,
    }
  }
});
</script>
