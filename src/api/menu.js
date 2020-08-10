import request from '@/utils/request'

export const  getRoutes =(token)=>request({
    url: '/menus',
    method: 'post',
    data:{
        token
    }
  })
