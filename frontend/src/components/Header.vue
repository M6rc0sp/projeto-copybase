<template>
    <q-header elevated height-hint="98">
        <q-toolbar>
            <q-toolbar-title class="row items-center justify-between">
                <div class="col-3">
                    <q-space />
                </div>
                <div class="col-6 text-center" style="font-family: 'Roboto', sans-serif;">
                    MetricAnalyzer
                </div>
                <div class="col-3 row items-center">
                    <!-- <div class="col-2">
                        <q-select v-model="selectedLocale"
                            :options="$i18n.availableLocales.map(locale => ({ label: locale.toUpperCase(), value: locale }))"
                            @input="changeLocale" />
                    </div> -->
                    <div class="col-6">
                        <q-btn flat round @click="toggleTheme" :icon="$q.dark.isActive ? 'brightness_3' : 'brightness_5'" />
                    </div>
                </div>
            </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="center">
            <q-route-tab to="/" :label="$t('header.home')" />
            <q-route-tab to="/analysis" :label="$t('header.analyze')" />
            <q-route-tab to="/about" :label="$t('header.about')" />
        </q-tabs>
    </q-header>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selectedLocale: this.$i18n.locale,
        };
    },
    methods: {
        toggleTheme() {
            this.$q.dark.toggle();
            localStorage.setItem('darkMode', this.$q.dark.isActive ? 'dark' : 'light');
        },
        changeLocale() {
            this.$i18n.locale = this.selectedLocale;
            // console.log('Locale após a mudança:', this.$i18n.locale);
        },
    },
    created() {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode) {
            this.$q.dark.set(darkMode === 'dark');
        }
    },
};
</script>