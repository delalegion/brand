<script lang="ts">
   import { onMount } from 'svelte';
   import { Application } from '@splinetool/runtime';
   import Font from '../components/typography.svelte';
   import Logo from '$lib/assets/logo.svg';
   import { _, locale } from 'svelte-i18n'

   let canvas!: HTMLCanvasElement;
   let currentLocale: string;
   $: currentLang = currentLocale;

   locale.subscribe((value) => {
      if (value == null) return;
      if (value == "pl-PL") { value = "pl"; }
      if (value == "en-EN") { value = "en"; }
      currentLocale = value;
   })

   onMount(() => {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/JxXjSXhd5fsb7r4K/scene.splinecode');
   })

   const changeLanguageToEnglish = () => {
      locale.set('en');
   }
   const changeLanguageToPolish = () => {
      locale.set('pl');
   }
</script>

<style>
   canvas {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      z-index: -1;
      filter: contrast(0.98);
   }
</style>

<nav>
   <div class="max-w-[1920px] px-8 flex flex-wrap justify-between mx-auto p-4">

      <Font>Aktualne co</Font>
      <a href="#" class="flex items-center">
            <img src={Logo} class="h-14 mr-3" alt="Logo of Hubert Kruk" />
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
         <ul class="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 justify-center items-center">
            <li class="group">
               <a href="#" class="block py-2 px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-400"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">01</span> OFERTA</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none">//</span>
            <li class="group">
               <a href="#" class="block py-2 px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-400"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">02</span> PRACE</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none">//</span>
            <li class="group">
               <a href="#" class="block py-2 px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-400"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">03</span> KONTAKT</a>
            </li>
         </ul>
      </div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
         <ul class="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 justify-center items-center">
            <li>
               <a href="#" class="block py-2 px-7 text-dark-200 rounded font-primary text-body1 font-medium hover:text-dark-100 transition-colors duration-400 {currentLang === "pl" ? "text-dark-200" : "text-dark-400"}" on:click={changeLanguageToPolish}>PL</a>
            </li>
            <li>
               <a href="#" class="block py-2 px-7 text-dark-200 rounded font-primary text-body1 font-medium hover:text-dark-100 transition-colors duration-400 {currentLang === "en" ? "text-dark-200" : "text-dark-400"}" on:click={changeLanguageToEnglish}>EN</a>
            </li>
         </ul>
      </div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
         <button type="button" class="text-dark-950 bg-dark-200 hover:bg-dark-400 focus:outline-none font-semibold text-button rounded-full text-sm px-8 py-5 text-center">ZREALIZUJMY PROJEKT</button>
      </div>

   </div>
</nav>
 
<canvas bind:this={canvas} class="object-cover"></canvas>
<header class=" py-60 text-center flex justify-center pointer-events-none">
   <div class="container pointer-events-none text-center flex justify-center">
      <h1 class="font-semibold text-h1 text-dark-200 pointer-events-none max-w-3xl">{$_('headerTitlePrimary')} <span class="font-secondary text-primary-700 pointer-events-none"><i>{$_('headerTitleSecondary')}</i></span></h1>
   </div>
</header>
