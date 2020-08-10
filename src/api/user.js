import request from '@/utils/request'
//登录
export const login = (data) => request({
  url: '/user/login',
  method: 'post',
  data
})
//登录信息
export const userInfo = (token) => request({
  url: '/user/info',
  method: 'post',
  data:{
      token
  }
})
//用户列表
export const userList = (data) => request({
  url: '/user/list',
  method: 'post',
  data
})
//获取角色列表
export const roleList = (data)=>request({
	url:'/role/list',
	method:'post',
	data
})
//获取权限总菜单
export const roleMenus = (data)=>request({
	url:'/role/menus',
	method:'post',
	data
})