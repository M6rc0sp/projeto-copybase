<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
import { useQuasar } from 'quasar'
import axios from 'axios';

export default defineComponent({
  setup() {
    const file = ref<File | null>(null);
    const $q = useQuasar();

    function handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      file.value = target.files ? target.files[0] : null;
    }

    async function submitFile() {
      try {
        if (!file.value) {
          throw new Error('Por favor, selecione um arquivo antes de fazer o upload!');
        }

        let fileName = file.value.name;
        let fileExtension = fileName.split('.').pop();

        if (fileExtension !== 'csv' && fileExtension !== 'xlsx') {
          file.value = null;
          throw new Error('Formato de arquivo inválido. Por favor, envie um arquivo .csv ou .xlsx');
        }

        let formData = new FormData();
        formData.append('file', file.value);

        const response = await axios.post('http://localhost:3000/upload', formData);

        $q.notify({
          type: 'positive',
          message: 'Upload bem-sucedido!'
        });
      } catch (error: any) {
        $q.notify({
          type: 'negative',
          message: error.message
        });
      }
    }

    return {
      file,
      handleFileUpload,
      submitFile
    }
  }
});
</script>

<template>
  <form @submit.prevent="submitFile">
    <q-file v-model="file" label="Escolha um arquivo" @input="handleFileUpload" />
    <q-btn type="submit" label="Upload" />
  </form>
</template>