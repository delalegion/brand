<script lang="ts">
   import { onMount } from 'svelte';
   import { Application } from '@splinetool/runtime';
   import { _, locale } from 'svelte-i18n';

   //Components
   import ButtonPrimary from '../components/buttons/primary.svelte';
   import ButtonOutline from '../components/buttons/outline.svelte';
   import ProjectItem from '../components/project_item.svelte';
   import Footer from '../components/footer/footer.svelte';

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
      const dots: NodeListOf<SVGCircleElement> = document.querySelectorAll(".circle");

      const chooseDots = (tablica: NodeListOf<SVGCircleElement>) => {
         // Losowanie indeksów
         let index1 = Math.floor(Math.random() * tablica.length);
         let index2 = Math.floor(Math.random() * tablica.length);
         
         // Sprawdzenie, czy indeksy są różne
         while (index2 === index1) {
            index2 = Math.floor(Math.random() * tablica.length);
         }
         
         // Zwrócenie wylosowanych wartości
         return [tablica[index1], tablica[index2]];
      }

      setTimeout(() => {
         const [dot1, dot2] = chooseDots(dots);
         console.log(dot1);
      }, 2000);

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

   @media (max-width: 1496px) {
      .offsetPhoto {
         top: -200px; right: -10px;
      } 
   }
   @media (max-width: 1316px) {
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

<section id="projects_grid" class="grid grid-rows-2 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center">
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

<section id="projects_list" class="max-w-screen-2xl py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center mx-auto">
   <div class="grid grid-cols-12">
      <div class="px-4 sm:px-8 col-span-12 lg:col-span-2 xl:col-span-3">
         <a href="#" class="font-primary text-dark-200 font-semibold text-h5 gap-2 flex flex-row items-center mb-10">Kontakt
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.2499 7.99932C16.6642 7.99932 17 8.33513 17 8.74938L17 16.2499C17 16.6642 16.6642 17 16.2499 17L8.74927 17C8.33502 17 7.9992 16.6642 7.9992 16.2499C7.9992 15.8357 8.33502 15.4999 8.74927 15.4999L14.4391 15.4999L3.21969 4.28042C2.92677 3.9875 2.92677 3.5126 3.21969 3.21968C3.51261 2.92677 3.98753 2.92677 4.28045 3.21969L15.4999 14.4391L15.4999 8.74938C15.4999 8.33513 15.8357 7.99932 16.2499 7.99932Z" fill="#D1D1D1"/>
            </svg>               
         </a>
      </div>
      <div class="px-4 sm:px-8 col-span-12 lg:col-span-10 xl:col-span-9">

         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN", "BRAND DESIGN"]}></ProjectItem>

      </div>
   </div>
</section>

<section id="offer" class="max-w-screen-2xl py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center px-4 sm:px-8 mx-auto">
   <div class="border border-dark-900 w-full"></div>
   <div class="mt-10 lg:mt-20">
      <h5 class="font-primary text-dark-200 font-semibold text-h5">Moje mozliwości</h5>
      <div class="mt-16">
         <div class="grid grid-cols-12 lg:gap-20">
            <div class="col-span-12 w-full sm:w-3/4 lg:w-full lg:col-span-5">

               <div class="grid grid-cols-3 grid-rows-2 w-full">
                  <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-4">
                     <svg width="123" height="123" viewBox="0 0 123 123" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="origin-[50%_50%] animate-rotateOne" d="M89.4592 61.8317C89.4592 78.5694 86.2741 93.6737 81.1683 104.556C76.0252 115.518 69.1185 121.854 61.8289 121.854C54.5393 121.854 47.6326 115.518 42.4895 104.556C37.3837 93.6737 34.1985 78.5694 34.1985 61.8317C34.1985 45.0939 37.3837 29.9896 42.4895 19.1071C47.6326 8.14521 54.5393 1.80933 61.8289 1.80933C69.1185 1.80933 76.0252 8.14521 81.1683 19.1071C86.2741 29.9896 89.4592 45.0939 89.4592 61.8317Z" stroke="#3D3D3D" stroke-width="2"/>
                        <path class="origin-[50%_50%] animate-rotateTwo" d="M61.827 89.4612C45.0892 89.4612 29.9849 86.2761 19.1024 81.1703C8.14052 76.0272 1.80464 69.1205 1.80464 61.8309C1.80464 54.5413 8.14052 47.6346 19.1024 42.4915C29.9849 37.3857 45.0892 34.2006 61.827 34.2006C78.5647 34.2006 93.669 37.3857 104.552 42.4915C115.513 47.6346 121.849 54.5413 121.849 61.8309C121.849 69.1205 115.513 76.0272 104.552 81.1703C93.669 86.2761 78.5647 89.4612 61.827 89.4612Z" stroke="#3D3D3D" stroke-width="2"/>
                     </svg>                        
                  </div>
                  <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px]"></div>
                  <div class="aspect-square"></div>
                  <div class="aspect-square"></div>
                  <div class="aspect-square"></div>
                  <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-2">
                     <svg width="166" height="166" viewBox="0 0 167 166" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.19642" cy="2.35887" r="2.31535" fill="#3D3D3D" class="circle" />
                        <circle cx="15.5448" cy="2.35887" r="2.31535" fill="#3D3D3D" class="circle" />
                        <circle cx="27.8939" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="2.35887" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="14.7081" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="27.0557" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="27.0556" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="39.4042" r="2.31535" fill="#B535FF"/>
                        <circle cx="77.2879" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="39.4042" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="51.7527" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="64.1026" r="2.31535" fill="#B535FF"/>
                        <circle cx="114.333" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="64.1026" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="76.4501" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="88.7988" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="101.147" r="2.31535" fill="#B535FF"/>
                        <circle cx="77.2879" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="101.147" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="113.497" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8931" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.287" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="125.844" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="138.193" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="15.5448" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="150.541" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="3.19642" cy="162.89" r="2.31535" fill="#B535FF"/>
                        <circle cx="15.5448" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="27.8939" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="40.2426" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="52.591" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="64.9386" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="77.2879" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="89.6365" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="101.985" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="114.333" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="126.682" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="139.031" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="151.379" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                        <circle cx="163.728" cy="162.89" r="2.31535" fill="#3D3D3D"/>
                     </svg>                        
                  </div>
               </div>
               
            </div>
            <div class="flex flex-col col-span-12 lg:col-span-7 gap-6 lg:gap-8 mt-12 lg:mr-10">
               <h4 class="font-primary text-dark-200 font-semibold text-h4">Digital Design</h4>
               <div class="flex flex-col gap-4 lg:gap-6">
                  <p class="text-p1 text-dark-400 font-primary font-medium">Projektowanie cyfrowe ma znaczący wpływ na dzisiejszą erę internetu, pomagając firmom budować swoje marki, angażować klientów i oferować innowacyjne rozwiązania graficzne. Chętnie Ci pomogę w projektowaniu nowoczesnych grafik, które przyczynią się do promocji Twojej marki w przestrzeni online, a także w tworzeniu interfejsów użytkownika (UI) dla stron internetowych i aplikacji mobilnych.</p>
                  <p class="text-p1 text-dark-400 font-primary font-medium">Mimo mojego młodego wieku, posiadam znaczne doświadczenie w tworzeniu czytelnych, nowoczesnych i przystępnych dla przyszłych klientów rozwiązań, które spełnią oczekiwania nawet najbardziej wymagających klientów.</p>
               </div>
               <div>
                  <ButtonOutline size="medium">Szczegółowa oferta</ButtonOutline>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<Footer />