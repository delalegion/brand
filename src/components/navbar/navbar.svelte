<script lang="ts">
   //Components
   import ButtonPrimary from '../buttons/primary.svelte';
   //Images
   import Logo from '$lib/assets/logo.svg';
   import { onMount } from 'svelte';
   import gsap from 'gsap';

   let tl = gsap.timeline({ paused: true });

   onMount(() => {
      tl.to("#menu-bg", { height: 400, duration: 0.2 }).to("#menu-item", {duration: 0.2, opacity: 1, stagger: 0.1, top: 0}).reverse();
   })

   function toggle() {
      tl.reversed(!tl.reversed());
   }
   function closeMenu() {
      tl.reverse();
   }
</script>


<nav>
   <div class="max-w-[1920px] px-4 md:px-8 flex flex-wrap justify-between mx-auto p-4 z-30">

      <a href="/" class="flex items-center z-30 relative">
         <img src={Logo} on:click={closeMenu} class="h-14 mr-3" alt="Logo of Hubert Kruk" />
      </a>
      <button on:click={toggle} data-collapse-toggle="navbar-default" type="button" id="btn-menu" class="z-30 relative inline-flex bg-dark-800 items-center p-4 w-16 h-16 justify-center text-sm text-gray-50 rounded-full md:hidden active:scale-95 hover:translate-y-0.5 duration-200 focus:outline-none dark:text-gray-50 dark:hover:bg-dark-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
         <span class="sr-only">Open main menu</span>
         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
         </svg>
      </button>
      <div class="w-full md:w-auto" id="navbar-default">
         <ul id="menu-desktop" class="z-40 hidden py-2 relative md:flex flex-col p-4 gap-4 mt-4 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 items-start md:justify-center md:items-center">
            <li>
               <a href="#projects" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6">
                  <span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">01</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Portfolio</p><p>Portfolio</p></div>
               </a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span>
            <li>
               <a href="#offer" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6">
                  <span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">02</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Oferta</p><p>Oferta</p></div>
               </a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span>
            <li>
               <a href="/contact" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6">
                  <span class="text-caption text-dark-400 mr-2 transition duration-300 ease group-hover:text-dark-200 mt-0.5 font-semibold">03</span> <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>Kontakt</p><p>Kontakt</p></div>
               </a>
            </li>
         </ul>

         <ul id="menu" class="z-20 md:hidden absolute md:right-0 top-20 left-0 md:top-0 md:relative flex flex-col p-4 gap-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 items-start md:justify-center md:items-center">
            <li class="group">
               <a href="/contact" on:click={closeMenu} id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">01</span> Oferta</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span>
            <li class="group">
               <a href="/" on:click={closeMenu} id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">02</span> Portfolio</a>
            </li>
            <span class="font-regular text-[14px] text-dark-400 flex items-center select-none hidden md:flex">//</span>
            <li class="group">
               <a href="/contact" on:click={closeMenu} id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary"><span class="text-caption text-dark-400 mr-2 mt-0.5 font-semibold">03</span> Kontakt</a>
            </li>
            <li class="group flex flex-row gap-6 mt-4">
               <a href="#" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary">PL</a>
               <a href="#" id="menu-item" class="opacity-0 md:opacity-100 relative top-3.5 block py-2 px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 transition-colors duration-200 ease-primary">EN</a>
            </li>
         </ul>
         <div id="menu-bg" class="bg-dark-900 absolute h-0 top-0 left-0 right-0 z-10"></div>
      </div>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
         <ul class="flex flex-col py-2 mt-4 rounded-lg md:flex-row space-x-2 md:space-x-4 xl:space-x-8 md:mt-0 justify-center items-center">
            <li>
               <a href="/contact" class="link block px-4 xl:px-7 text-dark-200 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6">
               <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>PL</p><p>PL</p></div>
               </a>
            </li>
            <li>
               <a href="/contact" class="link block px-4 xl:px-7 text-dark-400 rounded font-primary text-h5 md:text-p1 font-medium flex flex-row gap-0 group-hover:text-dark-100 ease-primary group overflow-hidden h-6">
                  <div class="flex flex-col group-hover:translate-y-[-24px] transition duration-500 ease"><p>EN</p><p>EN</p></div>
               </a>
            </li>
         </ul>
      </div>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-default">
         <ButtonPrimary size="medium" link="/contact">Zrealizujmy projekt</ButtonPrimary>
      </div>

   </div>
</nav>