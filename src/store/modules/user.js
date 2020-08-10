//import { login, logout, getInfo } from '@/api/user'
import {login,userInfo} from "@/api/user"
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getRoutes } from '@/api/menu'
import store from '../index'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  menus: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  REMOVE_MENUS:(state)=>{
      state.menus=[]
  }
}

const actions = {
  //获取菜单
    getMenus({ commit, state }) { //这个是新增的action
      return new Promise((resolve, reject) => {
        getRoutes(state.token).then(response => {  //这里的getMenus是调用request方法从服务端获得路由菜单数据的Promise，类似getInfo
          const { data } = response
		  	
          if (!data) {
            reject('Verification failed, please Login again.')
          }
          const menus = data

          // roles must be a non-empty array
          if (!menus || menus.length <= 0) {
            reject('getMenus: menus must be a non-null array!')
          }

          commit('SET_MENUS', menus)
          resolve(menus)
        }).catch(error => {
           console.log('错误')
          reject(error)
        })
      })
   },
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      userInfo(getToken()).then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const {  username, imgurl } = data
        commit('SET_NAME', username)
        commit('SET_AVATAR', imgurl)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('REMOVE_MENUS')
        removeToken()
        resetRouter()
        resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
