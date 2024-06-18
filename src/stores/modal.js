import { writable } from 'svelte/store';

export const modalStore = writable({
   isOpen: false,
   currentPage: 3
});

