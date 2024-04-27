<script lang="ts">
   import { onMount } from 'svelte';
   import { Application } from '@splinetool/runtime';
   import ButtonPrimary from '../components/buttons/primary.svelte';
   import { _, locale } from 'svelte-i18n'

   //Images
   import Logo from '$lib/assets/logo.svg';
   import Photo from '$lib/assets/photo.png';
   import ProjectNo1 from '$lib/assets/project-1.png';

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
   .offsetPhoto {
      top: -140px; right: -100px; z-index: -1;
   }
   .offsetPhoto img {
      max-height: 550px;
   }

   @media (max-width: 1400px) {
      .offsetPhoto {
         top: -200px; right: -10px;
      } 
   }
   @media (max-width: 1230px) {
      .offsetPhoto {
         top: -240px; right: 18px;
      } 
   }
   @media (max-width: 998px) {
      .offsetPhoto {
         top: -240px; right: 18px;
      } 
      .offsetPhoto img {
         max-height: 400px;
      }
   }
</style>

<nav>
   <div class="max-w-[1920px] px-8 flex flex-wrap justify-between mx-auto p-4">

      <a href="#" class="flex items-center">
         <img src={Logo} class="h-14 mr-3" alt="Logo of Hubert Kruk" />
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
      </button>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
         <ul class="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row space-x-2 md:space-x-4 xl:space-x-8 md:mt-0 justify-center items-center">
            <li class="group">
               <a href="#" class="block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">01</span> {$_('menu.offer')}</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none">//</span>
            <li class="group">
               <a href="#" class="block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">02</span> {$_('menu.works')}</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none">//</span>
            <li class="group">
               <a href="#" class="block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-body1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">03</span> {$_('menu.contact')}</a>
            </li>
         </ul>
      </div>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
         <ul class="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row space-x-2 md:space-x-4 xl:space-x-8 md:mt-0 justify-center items-center">
            <li>
               <a href="#" class="block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-body1 font-medium hover:text-dark-100 transition-colors duration-200 ease-primary {currentLang === "pl" ? "text-dark-200" : "text-dark-400"}" on:click={changeLanguageToPolish}>PL</a>
            </li>
            <li>
               <a href="#" class="block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-body1 font-medium hover:text-dark-100 transition-colors duration-200 ease-primary {currentLang === "en" ? "text-dark-200" : "text-dark-400"}" on:click={changeLanguageToEnglish}>EN</a>
            </li>
         </ul>
      </div>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
         <ButtonPrimary size="medium">{$_('menu.project')}</ButtonPrimary>
      </div>

   </div>
</nav>
 
<!-- <canvas bind:this={canvas} class="object-cover"></canvas> -->
<header class=" py-72 text-center flex justify-center pointer-events-none">
   <div class="container pointer-events-none text-center flex justify-center px-8">
      <h1 class="font-semibold text-h4 md:text-h3 lg:text-h2 xl:text-h1 text-dark-200 pointer-events-none max-w-3xl">{$_('headerTitlePrimary')} <span class="font-secondary text-primary-700 pointer-events-none"><i>{$_('headerTitleSecondary')}</i></span></h1>
   </div>
</header>

<div id="space" class="h-48"></div>

<section id="about" class="flex justify-center w-100">
   <div class="py-12 sm:py-14 md:py-20 lg:py-28 xl:py-36 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-24 sm:pr-5 px-4 max-w-screen-xl relative">
      <h2 class="text-h5 md:text-h4 lg:text-h3 xl:text-h2 text-dark-200 font-semibold">
         {@html $_('about.primary')}
      </h2>
      <h2 class="text-h5 md:text-h4 lg:text-h3 xl:text-h2 text-dark-200 font-semibold mt-8 md:mt-10 lg:mt-14 xl:mt-16">
         {@html $_('about.secondary')}
      </h2>
      <div class="absolute offsetPhoto px-4">
         <img src={Photo} class="mr-3" alt="Photo of Hubert Kruk" />
      </div>
   </div>
</section>

<section id="projects_grid" class="grid grid-rows-2 py-12 md:py-16 lg:py-20 xl:py-24 place-content-center">
   <div class="w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-14 lg:gap-18 lg:gap-26 xl:gap-32">

      <article id="project-1" class="flex flex-col px-4 max-w-[490px] xl:mr-12">
         <img src={ProjectNo1} alt="Project thumbnail" class="object-contain aspect-[5/4] rounded-xl" />
         <h5 class="text-h6 xl:text-h5 text-dark-200 font-medium mt-6 lg:mt-8">Platforma oferująca diety i treningi online</h5>
         <div class="flex flex-row gap-6 mt-4">
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">UI DESIGN</span>
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">BRAND DESIGN</span>
         </div>
      </article>

      <article id="project-2" class="flex flex-col px-4 max-w-[490px] md:mt-16">
         <img src={ProjectNo1} alt="Project thumbnail" class="object-contain aspect-[5/4] rounded-xl" />
         <h5 class="text-h6 xl:text-h5 text-dark-200 font-medium mt-6 lg:mt-8">Nowa digital agencja - dwa kierunki</h5>
         <div class="flex flex-row gap-6 mt-4">
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">UI DESIGN</span>
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">BRAND DESIGN</span>
         </div>
      </article>

   </div>
   <div class="w-fit grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-14 lg:gap-18 lg:gap-26 xl:gap-32 mt-6 sm:mt-12 lg:mt-16">

      <article id="project-1" class="flex flex-col px-4 max-w-[490px] xl:ml-12">
         <img src={ProjectNo1} alt="Project thumbnail" class="object-contain aspect-[5/4] rounded-xl" />
         <h5 class="text-h6 xl:text-h5 text-dark-200 font-medium mt-6 lg:mt-8">Projekty dla biur oraz pośredników nieruchomości</h5>
         <div class="flex flex-row gap-6 mt-4">
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">UI DESIGN</span>
         </div>
      </article>

      <article id="project-2" class="flex flex-col px-4 max-w-[490px] md:mt-16 xl:ml-14">
         <img src={ProjectNo1} alt="Project thumbnail" class="object-contain aspect-[5/4] rounded-xl" />
         <h5 class="text-h6 xl:text-h5 text-dark-200 font-medium mt-6 lg:mt-8">Posty na social media</h5>
         <div class="flex flex-row gap-6 mt-4">
            <span class="text-p2 sm:text-p1 text-dark-400 font-semibold">DIGITAL DESIGN</span>
         </div>
      </article>

   </div>
</section>

<section id="projects_list" class="max-w-screen-2xl py-12 md:py-16 lg:py-20 xl:py-24 place-content-center">
   <div class="grid grid-cols-12">
      <div class="px-6 col-span-3">
         <h1>Test</h1>
      </div>
      <div class="px-6 col-span-9">
         <div class="flex flex-column gap-11 border-t-2 border-dark-900 pt-4">
            <div class="flex flex-row w-full justify-between">
               <div class="gap-6 flex flex-row">
                  <div class="font-primary text-dark-200 font-semibold text-h6">01</div>
                  <div class="font-primary text-dark-200 font-semibold text-h6">Redesign strony Indyjskie Meble</div>
               </div>
               <div class="gap-14 flex flex-row">
                  <div class="gap-6 flex flex-row">
                     <div class="font-primary text-dark-400 font-semibold text-p1">UI DESIGN</div>
                     <div class="font-primary text-dark-400 font-semibold text-p1">UI DESIGN</div>
                  </div>
                  <div>
                     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9997 3C14.4474 3 13.9997 3.44772 13.9997 4C13.9997 4.55228 14.4474 5 14.9997 5L25.5853 5L3.2968 27.2885C2.90628 27.679 2.90628 28.3122 3.2968 28.7027C3.68732 29.0932 4.32049 29.0932 4.71101 28.7027L26.9997 6.41401L26.9997 17C26.9997 17.5523 27.4474 18 27.9997 18C28.552 18 28.9997 17.5523 28.9997 17L28.9997 4C28.9997 3.44772 28.552 3 27.9997 3L14.9997 3Z" fill="#D1D1D1"/>
                     </svg>                        
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>