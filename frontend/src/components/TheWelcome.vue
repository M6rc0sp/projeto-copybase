<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card v-for="(item, index) in items" :key="index" class="q-ma-md col-12 col-md-4">
        <q-card-section class="bg-primary text-white text-center">
          <q-icon :name="item.icon" size="4em" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">{{ item.title }}</div>
          <div>{{ item.description }}</div>
          <q-btn outline :label="item.label" @click="handleClick(index)" />
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section class="bg-primary text-white row items-center justify-between">
          <div class="text-h6 q-ma-md">{{ dialogTitle }}</div>
          <q-btn icon="close" round dense color="red" text-color="white" @click="dialog = false" />
        </q-card-section>
        <q-card-section v-html="dialogDescription"></q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import DOMPurify from 'dompurify';

export default {
  data() {
    return {
      items: [
        {
          title: this.$t('welcome.analysis.title'),
          link: '/analysis',
          icon: 'analytics',
          label: this.$t('welcome.analysis.label'),
          description: this.$t('welcome.analysis.description'),
          detailedDescription: this.$t('welcome.analysis.detailedDescription')
        },
        {
          title: this.$t('welcome.importanceOfAnalysis.title'),
          link: '/importance-of-analysis',
          icon: 'info',
          label: this.$t('welcome.importanceOfAnalysis.label'),
          description: this.$t('welcome.importanceOfAnalysis.description'),
          detailedDescription: this.$t('welcome.importanceOfAnalysis.detailedDescription')
        },
        {
          title: this.$t('welcome.whatIsMRR.title'),
          link: '/what-is-mrr',
          icon: 'attach_money',
          label: this.$t('welcome.whatIsMRR.label'),
          description: this.$t('welcome.whatIsMRR.description'),
          detailedDescription: this.$t('welcome.whatIsMRR.detailedDescription')
        },
        {
          title: this.$t('welcome.whatIsChurnRate.title'),
          link: '/what-is-churn-rate',
          icon: 'trending_down',
          label: this.$t('welcome.whatIsChurnRate.label'),
          description: this.$t('welcome.whatIsChurnRate.description'),
          detailedDescription: this.$t('welcome.whatIsChurnRate.detailedDescription')
        },
      ],
      dialog: false,
      dialogTitle: '',
      dialogDescription: ''
    };
  },
  watch: {
    dialog(val) {
      if (val) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  },
  methods: {
    handleClick(index: number) {
      if (index === 0) {
        this.$router.push(this.items[index].link);
      } else {
        this.dialogTitle = this.items[index].title;
        this.dialogDescription = DOMPurify.sanitize(this.items[index].detailedDescription);
        this.dialog = true;
      }
    }
  }
};
</script>