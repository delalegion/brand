// src/lib/i18n/index.ts
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'pl'

register('en', () => import('./locales/en.json'))
register('pl', () => import('./locales/pl.json'))

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale,
})