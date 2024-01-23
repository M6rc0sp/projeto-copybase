// import './test.config.ts'
// import { describe, it, expect } from 'vitest'
// import { Quasar } from 'quasar' // Adicione esta linha

// import { mount } from '@vue/test-utils'
// import About from '../../views/AboutView.vue'

// describe('About', () => {
//     it('deve renderizar corretamente', () => {
//         const wrapper = mount(About, {
//             global: {
//                 plugins: [Quasar]
//             }
//         })
//         expect(wrapper.text()).toContain('Sobre esse projeto')
//         expect(wrapper.text()).toContain('Tecnologias usadas')
//         expect(wrapper.text()).toContain('Desafios superados')
//     })

//     it('deve renderizar os ícones corretamente', () => {
//         const wrapper = mount(About, {
//             global: {
//                 plugins: [Quasar] // Adicione esta linha
//             }
//         })
//         const icons = wrapper.findAllComponents({ name: 'q-icon' })
//         expect(icons.length).toBe(3)
//     })
// })