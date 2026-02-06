

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'
// Icons
import { faUser, faHome, faCartShopping, faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'

import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
// Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faHome, faCartShopping, faEnvelope,faLinkedin,faGithub,faPhone)

const app = createApp(App)

// Register component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
