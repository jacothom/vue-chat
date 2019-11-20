import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: null,
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => !!state.error
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})
