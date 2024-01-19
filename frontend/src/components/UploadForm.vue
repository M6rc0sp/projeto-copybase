<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const file = ref<File | null>(null);

    function handleFileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      file.value = target.files ? target.files[0] : null;
    }

    function submitFile() {
      if (!file.value) return;

      let formData = new FormData();
      formData.append('file', file.value);

      // Aqui você pode fazer uma chamada HTTP para enviar o arquivo para o servidor
      // axios.post('/upload', formData);
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
    <input type="file" @change="handleFileUpload" />
    <button @click="submitFile">Upload</button>
  </div>
</template>

