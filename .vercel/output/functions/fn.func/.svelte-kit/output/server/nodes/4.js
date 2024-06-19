

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/works/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.02120cc1.js","_app/immutable/chunks/scheduler.c8bdc4c4.js","_app/immutable/chunks/index.db92f68e.js"];
export const stylesheets = [];
export const fonts = [];
