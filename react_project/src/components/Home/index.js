import { dynamicWrapper, createRoute } from '@/utils/core';
const routesConfig = (app) => ({
	path: '/Home',
	title: '首页',
	auth:true,
	component: dynamicWrapper(app, [] ,() => import('./components'))
});
export default (app) => createRoute(app, routesConfig);