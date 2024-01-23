import 'quasar/dist/quasar.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from './locales/messages'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const i18n = createI18n({
    locale: 'pt',
    messages,
})

const app = createApp(App).use(i18n).use(Quasar, quasarUserOptions)

// app.use(createPinia())
app.use(router)

app.mount('#app')
