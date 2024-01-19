<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
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
      if (!file.value) {
        $q.notify({
          type: 'negative',
          message: 'Por favor, selecione um arquivo antes de fazer o upload.'
        });
        return;
      }

      let formData = new FormData();
      formData.append('file', file.value);

      try {
        // Aqui você pode fazer uma chamada HTTP para enviar o arquivo para o servidor
        await axios.post('/upload', formData);
        $q.notify({
          type: 'positive',
          message: 'Upload bem-sucedido!'
        });
      } catch (error) {
        $q.notify({
          type: 'negative',
          message: 'Ocorreu um erro durante o upload.'
        });
      }
    }

    return {
      file,
      handleFileUpload,
      submitFile
    };
  }
});
</script>

<template>
  <div>
    <q-file v-model="file" label="Escolha um arquivo" @input="handleFileUpload" />
    <q-btn @click="submitFile" label="Upload" />
  </div>
</template>