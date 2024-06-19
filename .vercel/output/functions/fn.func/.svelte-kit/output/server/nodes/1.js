

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eb0525c8.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/index.db92f68e.js","_app/immutable/chunks/singletons.4b4ce8c6.js","_app/immutable/chunks/index.32974663.js"];
export const stylesheets = [];
export const fonts = [];
