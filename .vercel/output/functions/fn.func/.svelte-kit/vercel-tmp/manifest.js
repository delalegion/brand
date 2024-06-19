export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["add.png","favicon.png","offer-balls-1.png","offer-balls-2.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.460c2077.js","app":"_app/immutable/entry/app.21a28444.js","imports":["_app/immutable/entry/start.460c2077.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/singletons.4b4ce8c6.js","_app/immutable/chunks/index.32974663.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.21a28444.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/index.db92f68e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
