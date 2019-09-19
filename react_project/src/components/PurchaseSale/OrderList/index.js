import { dynamicWrapper, createRoute } from '@/utils/core';
const routesConfig = (app) => ({
	path: '/OrderList',
	title: '订单列表',
	auth:true,
	component: dynamicWrapper(app, [], () => import('./components'))
});
export default (app) => createRoute(app, routesConfig);