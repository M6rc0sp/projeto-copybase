import { config } from '@vue/test-utils'
import { Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/material-icons'

config.global.plugins = [[Quasar, {
  iconSet: iconSet
}]]