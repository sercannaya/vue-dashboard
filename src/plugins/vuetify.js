import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {VueperSlides, VueperSlide} from 'vueperslides';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont'
import 'vueperslides/dist/vueperslides.css'

Vue.use(Vuetify);
Vue.use(VueperSlides, VueperSlide);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    }
});
