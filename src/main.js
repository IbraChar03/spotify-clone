import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackwardStep, faBars, faCirclePlay, faDesktop, faFolder, faForwardStep, faHatWizard, faHeart, faHouse, faMagnifyingGlass, faRotateRight, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faHatWizard, faHouse, faMagnifyingGlass, faBars, faDesktop, faVolumeHigh, faHeart, faFolder, faShuffle, faBackwardStep, faCirclePlay, faForwardStep, faRotateRight)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
