export const asyncRoutes =[{
	id:1,
    path:'/assembly',
    name:'组件',
    component:'layout',
    redirect:'/icon',
    meta:{title:'组件',icon:'component'},
    children:[{
		id:6,
        name:'图标',
        path:'/icon',
        component:'icons/index',
        meta:{
            title:'图标',
            icon:'icon'
        }
    },{
		id:7,
        name:'视频',
        path:'/vue-video-player',
        component:'assembly/vue-video-player',
        meta:{
            icon:'video',
            title:'vue-video-player',
        }
    }]
},{
	id:2,
    path: '/nested',
    component: 'layout',
    redirect: '/nested/menu1',
    name: '路由嵌套',
    meta: {
      title: '路由嵌套',
      icon: 'nested',
	  breadcrumb: false
    },
    children:[{
		id:8,
        name:'菜单一',
        path:'/nested/menu1',
        redirect: '/nested/menu1/menu1-1',
        component:'nested/menu1/index',
        meta: {
          title: '菜单一',
        },
        children:[{
			id:14,
            name:'菜单1-1',
            path:'/nested/menu1/menu1-1',
            component:'nested/menu1/menu1-1/index',
            meta:{
                title:'菜单1-1'
            }
        },{
			id:15,
            name:'菜单1-2',
            path:'/nested/menu1/menu1-2',
            component:'nested/menu1/menu1-2/index',
            meta:{
                title:'菜单1-2',
				breadcrumb: false
            },
            children:[{
				id:17,
                name:'菜单1-2-1',
                path:'/nested/menu1/menu1-2-1',
                component:'nested/menu1/menu1-2/menu1-2-1/index',
                meta:{
                    title:'菜单1-2-1'
                }
            },{
				id:18,
                name:'菜单1-2-2',
                path:'/nested/menu1/menu1-2-2',
                component:'nested/menu1/menu1-2/menu1-2-2/index',
                meta:{
                    title:'菜单1-2-2'
                }
            }]
        },{
			id:16,
            name:'菜单1-3',
            path:'/nested/menu1/menu1-3',
            component:'nested/menu1/menu1-3/index',
            meta:{
                title:'菜单1-3'
            }
        }]
    },{
		id:9,
        name:'菜单二',
        path:'/nested/menu1/menu1-2',
        component:'nested/menu2/index',
        meta: {
          title: '菜单二',
        },
    }]
  },{
	    id:3,
		path: '/echarts',
		component: 'layout',
		redirect: '/G2Plot',
		name: '蚂蚁金服图表库',
		meta: {
		  title: '蚂蚁金服图表库',
		  icon: 'chart',
		},
		children:[
			{   
				id:10,
				name:'G2Plot图表库',
				path:'/G2Plot',
				component:'Echarts/G2Plot/index',
				meta: {
				  title: 'G2Plot',
				  icon:'chart',
				},
			},
			{
				id:11,
				name:'L7地图数据可视化',
				path:'/l7',
				component:'Echarts/L7/index',
				meta: {
				  title: 'L7地图数据可视化',
				  icon:'international',
				},
			}
		]
	},{
	   id:4,
       name:'系统设置',
       path:'/system',
       component:'layout',
       redirect:'/personnel',
       meta:{
           title:'系统设置',
           icon:'example'
       },
       children:[{
		   id:12,
           name:'人员管理',
           path:'/personnel',
           component:'system/user/index',
           meta:{
               title:'人员管理',
               icon:'user'
           }
       },{
		   id:13,
           name:'角色管理',
           path:'/role',
           component:'system/role/index',
           meta:{
               title:'角色管理',
               icon:'user'
           }
       }]
    },{ 
	  id:5,
	  name:'404页面',
	  path: '*', 
	  redirect: '/404', 
	  hidden: true ,
	}
  ];

export const editAsyncRoutes =[{
	id:1,
    path:'/assembly',
    name:'组件',
    component:'layout',
    redirect:'/icon',
    meta:{title:'组件',icon:'component'},
    children:[{
		id:4,
        name:'图标',
        path:'/icon',
        component:'icons/index',
        meta:{
            title:'图标',
            icon:'icon'
        }
    },{
		id:5,
        name:'视频',
        path:'/vue-video-player',
        component:'assembly/vue-video-player',
        meta:{
            icon:'video',
            title:'vue-video-player',
        }
    }]
},{
	   id:2,
       name:'系统设置',
       path:'/system',
       component:'layout',
       redirect:'/personnel',
       meta:{
           title:'系统设置',
           icon:'example'
       },
       children:[{
		   id:6,
           name:'人员管理',
           path:'/personnel',
           component:'system/user/index',
           meta:{
               title:'人员管理',
               icon:'user'
           }
       },{
		   id:7,
           name:'角色管理',
           path:'/role',
           component:'system/role/index',
           meta:{
               title:'角色管理',
               icon:'user'
           }
       }]
    },{ 
	  id:3,
      name:'404页面',
      path: '*', 
      redirect: '/404', 
      hidden: true ,
    }
  ];