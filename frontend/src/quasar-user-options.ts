import './styles/quasar.sass'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Notify, Dark } from 'quasar'

type MyQuasarPluginOptions = {
  config: Record<string, unknown>,
  plugins: {
    Notify: typeof Notify,
    Dark: typeof Dark
  }
}

const quasarUserOptions: MyQuasarPluginOptions = {
  config: {},
  plugins: {
    Notify,
    Dark
  }
}

export default quasarUserOptions