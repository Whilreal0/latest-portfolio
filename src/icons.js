import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faBars, faAngleLeft, faAngleRight,faUpRightFromSquare, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger,faFacebook, faInstagram , faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFaceSadTear,faCopyright } from '@fortawesome/free-regular-svg-icons'


library.add
    (faXmark, faBars, faFacebookMessenger, faAngleLeft, faAngleRight,faLinkedin ,faFacebook, faUpRightFromSquare,
    faGithub, faInstagram, faFaceSadTear,faCopyright,faArrowUp )

Vue.component('fa-icon', FontAwesomeIcon)