import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.c0616447.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.32974663.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/ScrollTrigger.c10f483b.js","_app/immutable/chunks/index.db92f68e.js","_app/immutable/chunks/index.9b3ba8ea.js","_app/immutable/chunks/navigation.b2c7d450.js","_app/immutable/chunks/singletons.4b4ce8c6.js"];
export const stylesheets = ["_app/immutable/assets/0.69875bd2.css"];
export const fonts = [];
