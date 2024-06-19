import * as universal from '../entries/pages/contact/_page.ts.js';
import * as server from '../entries/pages/contact/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.ts";
export { server };
export const server_id = "src/routes/contact/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.c2170ba6.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/index.db92f68e.js","_app/immutable/chunks/singletons.4b4ce8c6.js","_app/immutable/chunks/index.32974663.js","_app/immutable/chunks/index.d9fc5053.js","_app/immutable/chunks/index.9b3ba8ea.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.b2c7d450.js"];
export const stylesheets = ["_app/immutable/assets/3.67d0a53e.css"];
export const fonts = [];
