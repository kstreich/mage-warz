import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let spellApi = Axios.create({
  baseURL: 'https://mage-warz.herokuapp.com/api',
  withCredentials: true
})

let auth = Axios.create({
  baseURL: 'https://mage-warz.herokuapp.com/auth',
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    spellBooks: [],
    activeBook: {},
    spells: []
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user
    },
    setSpellBooks(state, spellbooks) {
      state.spellBooks = spellbooks
    },
    setActiveBook(state, book) {
      state.activeBook = book
    },
    setSpells(state, spells) {
      state.spells = spells
    }

  },
  actions: {

    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => {
          console.log('Cannot Login')
        })
    },
    register({ commit, dispatch }, creds) {
      auth.post('register', creds)
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => {
          console.log('Cannot Register')
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('SETUSER', res.data)
        })
        .catch(err => {
          router.push({ name: 'auth' })
        })
    },
    getSpellBooks({ commit, dispatch }) {
      spellApi.get('spellbooks')
        .then(res => {
          console.log(res.data)
          commit('setSpellBooks', res.data)
        })
        .catch(err => {
          console.log('cannot get spellbooks')
        })
    },
    createNewSpellBook({ commit, dispatch }, bookName) {
      spellApi.post('spellbooks', bookName)
        .then(res => {
          console.log(res.data)
          dispatch('getSpellBooks')
        })
        .catch(err => {
          console.log('cannot add new spellbook')
        })
    },
    getBook({ commit }, bookId) {
      spellApi.get('spellbooks/' + bookId)
        .then(res => {
          let book = res.data
          commit('setActiveBook', book)
        })
    },
    getSpells({ commit }) {
      spellApi.get('spells')
        .then(res => {
          console.log('All Spells from API', res.data)
          commit('setSpells', res.data)
        })
    }
  }
})
