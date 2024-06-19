import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.88043200.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/index.db92f68e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.d9fc5053.js","_app/immutable/chunks/index.9b3ba8ea.js","_app/immutable/chunks/index.32974663.js","_app/immutable/chunks/ScrollTrigger.c10f483b.js"];
export const stylesheets = ["_app/immutable/assets/2.827bc128.css"];
export const fonts = [];
