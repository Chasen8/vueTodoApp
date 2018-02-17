/*
* @Author: Pearl8
* @Date:   2018-02-17 10:08:36
* @Last Modified by:   Pearl8
* @Last Modified time: 2018-02-17 11:57:50
*/

import Vue from 'vue'
import App from './app.vue'

import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)