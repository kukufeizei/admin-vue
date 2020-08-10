import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 解决路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
/*
  //当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
  hidden: true // (默认 false)

  //当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
  redirect: 'noRedirect'

  //当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  //只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  //若你想不管路由下面的 children 声明的个数都显示你的根路由
  //你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  alwaysShow: true

  name: 'router-name' //设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
  meta: {
    roles: ['admin', 'editor'] //设置该路由进入的权限，支持多个权限叠加
    title: 'title' //设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name' //设置该路由的图标
    noCache: true //如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    breadcrumb: false // 如果设置为false，则不会在breadcrumb面包屑中显示
  }

 */
import Layout from '@/layout'

export const asyncRoutes = [{
	path: '/assembly',
	name: '组件',
	component: Layout,
	redirect: '/icon',
	meta: {
		title: '组件',
		icon: 'component',
	},
	children: [{
		name: '图标',
		path: '/icon',
		component: () => import('@/views/icons/index'),
		meta: {
			title: '图标',
			icon: 'icon',
		}
	}, {
		name: '视频',
		path: '/vue-video-player',
		component: () => import('@/views/assembly/vue-video-player'),
		meta: {
			icon: 'video',
			title: 'vue-video-player',
		}
	}]
}, {
	path: '/nested',
	component: Layout,
	redirect: '/nested/menu1',
	name: '路由嵌套',
	meta: {
		title: '路由嵌套',
		icon: 'nested',
		breadcrumb: false
	},
	children: [{
		name: '菜单一',
		path: '/nested/menu1',
		redirect: '/nested/menu1/menu1-1',
		component: () => import('@/views/nested/menu1/index'),
		meta: {
			title: '菜单一',
		},
		children: [{
			name: '菜单1-1',
			path: '/nested/menu1/menu1-1',
			component: () => import('@/views/nested/menu1/menu1-1/index'),
			meta: {
				title: '菜单1-1'
			}
		}, {
			name: '菜单1-2',
			path: '/nested/menu1/menu1-2',
			component: () => import('@/views/nested/menu1/menu1-2/index'),
			meta: {
				title: '菜单1-2',
				breadcrumb: false
			},
			children: [{
				name: '菜单1-2-1',
				path: '/nested/menu1/menu1-2-1',
				component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index'),
				meta: {
					title: '菜单1-2-1'
				}
			}, {
				name: '菜单1-2-2',
				path: '/nested/menu1/menu1-2-2',
				component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index'),
				meta: {
					title: '菜单1-2-2'
				}
			}]
		}, {
			name: '菜单1-3',
			path: '/nested/menu1/menu1-3',
			component: () => import('@/views/nested/menu1/menu1-3/index'),
			meta: {
				title: '菜单1-3'
			}
		}]
	}, {
		name: '菜单二',
		path: '/nested/menu1/menu1-2',
		component: () => import('@/views/nested/menu2/index'),
		meta: {
			title: '菜单二',
		},
	}]
}, {
	path: '/echarts',
	component: Layout,
	redirect: '/G2Plot',
	name: '蚂蚁金服图表库',
	meta: {
		title: '蚂蚁金服图表库',
		icon: 'chart',
	},
	children: [{
			name: 'G2Plot图表库',
			path: '/G2Plot',
			component: () => import('@/views/Echarts/G2Plot/index'),
			meta: {
				title: 'G2Plot',
				icon: 'chart',
			},
		},
		{
			name: 'L7地图数据可视化',
			path: '/l7',
			component: () => import('@/views/Echarts/L7/index'),
			meta: {
				title: 'L7地图数据可视化',
				icon: 'international',
			},
		}
	]
}, {
	name: '系统设置',
	path: '/system',
	component: Layout,
	redirect: '/personnel',
	meta: {
		title: '系统设置',
		icon: 'example',
	},
	children: [{
		name: '人员管理',
		path: '/personnel',
		component: () => import('@/views/system/user/index'),
		meta: {
			title: '人员管理',
			icon: 'user'
		}
	}, {
		name: '角色管理',
		path: '/role',
		component: () => import('@/views/system/role/index'),
		meta: {
			title: '角色管理',
			icon: 'user'
		}
	}]
}, {
	name: '404页面',
	path: '*',
	redirect: '/404',
	hidden: true,
}];

export const constantRoutes = [ {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },{
	path: '/',
	component: Layout,
	redirect: '/dashboard',
	children: [{
		path: 'dashboard',
		component: () => import('@/views/dashboard/index'),
		name: 'Dashboard',
		meta: {
			title: '控制面板',
			icon: 'dashboard',
			affix: true
		}
	}]
}, {
	path: '/login',
	component: () => import('@/views/login/index'),
	name: 'Login',
	hidden: true
}, {
	path: '/404',
	component: () => import('@/views/error-page/404'),
	hidden: true,
}];


const createRouter = () => new VueRouter({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router;
