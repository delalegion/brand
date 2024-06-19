<script lang="ts">
   import { onMount } from 'svelte';
   import { Application } from '@splinetool/runtime';

   //Components
   import ButtonOutline from '../components/buttons/outline.svelte';
   import ProjectItem from '../components/project_item.svelte';
   import Footer from '../components/footer/footer.svelte';
   import Navbar from '../components/navbar/navbar.svelte'; 
   import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

   //Images
   import Photo from '$lib/assets/photo.png';
   import ProjectNo1 from '$lib/assets/project-1.png';
   import gsap from 'gsap';
   import { tweened } from 'svelte/motion';
   import { sineInOut } from 'svelte/easing';
   import { modalStore } from '../stores/modal';
   import ModalWithSkills from '../components/modal/modal.svelte';

   let canvas!: HTMLCanvasElement;

   let activeTab = 0;
   let height = tweened(0, { duration: 200, easing: sineInOut });

   function changeTab(tabId: number) {
      const tabList = document.querySelectorAll('.tab-content')!;
      const tabListTitleContainer = document.querySelectorAll('.tab-title')!;

      if (tabId !== activeTab) {
         gsap.to(tabListTitleContainer[activeTab], {
            rotate: 0,
            ease: 'expo.out'
         })
         gsap.to(tabList[activeTab], {
            y: '-20',
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'expo.out',
            zIndex: '-1'
         })
      }

      activeTab = tabId;

      gsap.to(tabListTitleContainer[activeTab], {
         rotate: 45,
         ease: 'expo.in'
      })
      gsap.to(tabList[tabId], {
         y: '0',
         height: 'auto',
         opacity: 1,
         duration: 0.3,
         ease: 'expo.in',
         zIndex: '30'
      })
   }

   onMount(() => {
      gsap.registerPlugin(ScrollTrigger);
      const spline = new Application(canvas);
      spline.load('https://prod.spline.design/JxXjSXhd5fsb7r4K/scene.splinecode');

      const horizontalScroll = document.querySelector('.horizontal-scroll-content')!;

      function getScrollAmount() {
         let scrollWidth = horizontalScroll.scrollWidth;
         return -(scrollWidth - window.innerWidth);
      }

      const tween = gsap.to(horizontalScroll, {
         x: getScrollAmount,
         duration: 3,
      })
      
      ScrollTrigger.create({
         trigger:".horizontal-scroll-container",
         start:"top 20%",
         end: () => `+=${getScrollAmount() * -1}`,
         pin:true,
         animation:tween,
         scrub:1,
         invalidateOnRefresh:true,
      })

      height.set(338);
   })

   

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

<section data-barba="container" data-barba-namespace="home" class="md:overflow-x-hidden">
<canvas bind:this={canvas} class="object-cover"></canvas>
<header class=" py-72 text-center flex justify-center pointer-events-none">
   <div class="container pointer-events-none text-center flex justify-center px-8">
      <h1 class="font-semibold text-h4 md:text-h3 lg:text-h2 xl:text-h1 text-dark-200 pointer-events-none max-w-3xl">Nowoczesne podejście do <span class="font-secondary text-primary-500 italic">designu.</span></h1>
   </div>
</header>

<div id="space" class="h-48"></div>

<section id="about" class="flex justify-center w-100">
   <div class="py-12 sm:py-14 md:py-20 lg:py-28 xl:py-36 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-24 sm:pr-5 px-4 max-w-screen-xl relative">
      <h2 class="text-h5 md:text-h4 lg:text-h3 xl:text-h2 text-dark-200 font-semibold">
         Pasjonat projektowania cyfrowego, specjalizujący się w tworzeniu <span class="font-secondary text-primary-500 italic">stron</span> internetowych, projektowaniu nowoczesnych <span class="font-secondary text-primary-500 italic">identyfikacji</span> wizualnych marek, komponowaniu materiałów drukowanych i tworzeniu oszałamiającej grafiki 3D.
      </h2>
      <h2 class="text-h5 md:text-h4 lg:text-h3 xl:text-h2 text-dark-200 font-semibold mt-8 md:mt-10 lg:mt-14 xl:mt-16">
         Oferuję również wdrażanie stron internetowych za pomocą <span class="font-secondary text-secondary-400 italic">nowoczesnych</span> rozwiązań frontendowych.
      </h2>
      <div class="absolute offsetPhoto px-4">
         <img src={Photo} class="mr-3" alt="Photo of Hubert Kruk" />
      </div>
   </div>
</section>

<section id="projects" class="grid grid-rows-2 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center">
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
         <ProjectItem name="Redesign strony Indyjskie Meble" pos={1} scope={["UI DESIGN"]} image={ProjectNo1}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Portal dla centrum rozrywki Hullo" pos={2} scope={["UI DESIGN"]} image={ProjectNo1}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Brand oraz strona dla agencji 8BIT Turtle" pos={3} scope={["UI DESIGN", "BRAND DESIGN"]} image={ProjectNo1}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Renewables Agency - Odnawialne źródła energii" pos={4} scope={["UI DESIGN"]} image={ProjectNo1}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Adfoster - digital kampanie" pos={5} scope={["UI DESIGN", "BRAND DESIGN"]} image={ProjectNo1}></ProjectItem>
         <!-- Project list item -->
         <ProjectItem name="Analychee - obsługa analityczna i doradcza" pos={6} scope={["UI DESIGN", "BRAND DESIGN"]} image={ProjectNo1}></ProjectItem>

      </div>
   </div>
</section>

   <section id="offer" class="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-8">
      <div class="max-w-screen-2xl mx-auto">
         <div class="border border-dark-900 w-full"></div>
         <h5 class="font-primary text-dark-200 font-semibold text-h5 mt-10">Moje mozliwości</h5>
      </div>

      <div class="flex md:hidden flex-col mt-10 lg:mt-20 flex-nowrap py-1 mb-12">
         <div class="flex flex-col w-full gap-10 mt-8 md:mt-0">
      
            <div class="border-dark-800 pt-6 border-t-2">
               <div class="flex flex-col gap-6">
                  <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4 flex w-full justify-between" on:click={() => changeTab(0)}>Digital Design
                     <svg class="tab-title" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 13.4927L3.75378 13.4927C3.33978 13.4927 3.00378 13.8287 3.00378 14.2427C3.00378 14.6567 3.33978 14.9927 3.75378 14.9927L13 14.9927L13 24.2388C13 24.6528 13.336 24.9888 13.75 24.9888C14.164 24.9888 14.5 24.6528 14.5 24.2388L14.5 14.9927L23.7524 14.9927C24.1664 14.9927 24.5024 14.6567 24.5024 14.2427C24.5024 13.8287 24.1664 13.4927 23.7524 13.4927L14.5 13.4927L14.5031 4.24288C14.5031 3.82888 14.1671 3.49288 13.7531 3.49288C13.3391 3.49288 13.0031 3.82888 13.0031 4.24288L13 13.4927Z" fill="#D1D1D1"/>
                     </svg>                     
                  </h4>
                  <div class="flex flex-col gap-6 tab-content">
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Projektowanie cyfrowe ma znaczący wpływ na dzisiejszą erę internetu, pomagając firmom budować swoje marki, angażować klientów i oferować innowacyjne rozwiązania graficzne. Chętnie Ci pomogę w projektowaniu nowoczesnych grafik, które przyczynią się do promocji Twojej marki w przestrzeni online, a także w tworzeniu interfejsów użytkownika (UI) dla stron internetowych i aplikacji mobilnych.</p>
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Mimo mojego młodego wieku, posiadam znaczne doświadczenie w tworzeniu czytelnych, nowoczesnych i przystępnych dla przyszłych klientów rozwiązań, które spełnią oczekiwania nawet najbardziej wymagających klientów.</p>
                     </div>
                     <div>
                        <ButtonOutline size="small" on:click={() => modalStore.update(n => ({ currentPage: 2, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>
            <div class="border-dark-800 pt-6 border-t-2">
               <div class="flex flex-col gap-6">
                  <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4 flex w-full justify-between" on:click={() => changeTab(1)}>Brand + Print
                     <svg class="tab-title" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 13.4927L3.75378 13.4927C3.33978 13.4927 3.00378 13.8287 3.00378 14.2427C3.00378 14.6567 3.33978 14.9927 3.75378 14.9927L13 14.9927L13 24.2388C13 24.6528 13.336 24.9888 13.75 24.9888C14.164 24.9888 14.5 24.6528 14.5 24.2388L14.5 14.9927L23.7524 14.9927C24.1664 14.9927 24.5024 14.6567 24.5024 14.2427C24.5024 13.8287 24.1664 13.4927 23.7524 13.4927L14.5 13.4927L14.5031 4.24288C14.5031 3.82888 14.1671 3.49288 13.7531 3.49288C13.3391 3.49288 13.0031 3.82888 13.0031 4.24288L13 13.4927Z" fill="#D1D1D1"/>
                     </svg>                     
                  </h4>
                  <div class="flex flex-col gap-6 top-[-20px] opacity-0 h-0 tab-content">
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Działam na styku sztuki graficznej i druku, dostarczając klientom profesjonalne rozwiązania od projektu logo po ulotki, broszury, opakowania i wiele innych materiałów promocyjnych. Jako product designer dążę do oferowania kompleksowych rozwiązań, które wspierają klientów w realizacji ich celów marketingowych i biznesowych poprzez wzmacnianie wizerunku i promocję.</p>

                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Tworzę spójne i rozpoznawalne identyfikacje wizualne, które wyróżniają się na tle konkurencji oraz nadają markom unikalny charakter. To istotny element budowania marki, który sprawia, że firma zyskuje własną tożsamość i jest zapamiętywana przez klientów.</p>
                     </div>
                     <div>
                        <ButtonOutline size="small" on:click={() => modalStore.update(n => ({ currentPage: 0, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>
            <div class="border-dark-800 pt-6 border-t-2">
               <div class="flex flex-col gap-6">
                  <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4 flex w-full justify-between" on:click={() => changeTab(2)}>Development
                     <svg class="tab-title" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 13.4927L3.75378 13.4927C3.33978 13.4927 3.00378 13.8287 3.00378 14.2427C3.00378 14.6567 3.33978 14.9927 3.75378 14.9927L13 14.9927L13 24.2388C13 24.6528 13.336 24.9888 13.75 24.9888C14.164 24.9888 14.5 24.6528 14.5 24.2388L14.5 14.9927L23.7524 14.9927C24.1664 14.9927 24.5024 14.6567 24.5024 14.2427C24.5024 13.8287 24.1664 13.4927 23.7524 13.4927L14.5 13.4927L14.5031 4.24288C14.5031 3.82888 14.1671 3.49288 13.7531 3.49288C13.3391 3.49288 13.0031 3.82888 13.0031 4.24288L13 13.4927Z" fill="#D1D1D1"/>
                     </svg>                     
                  </h4>
                  <div class="flex flex-col gap-6 top-[-20px] opacity-0 h-0 tab-content">
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Poza moją główną profesją, która jest digital design, mam również pasję i umiejętności w dziedzinie programowania webowego. Programowanie to dla mnie nie tylko praca, ale również sposób wyrażania kreatywności i tworzenia czegoś wartościowego.</p>

                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Dzięki nowoczesnym technologiom jestem w stanie tworzyć strony internetowe od zera, począwszy od projektu graficznego aż po pełne, działające rozwiązania online. Moje umiejętności pozwalają mi dostosowywać projekty do indywidualnych potrzeb klientów, tworząc responsywne i atrakcyjne witryny, które zapewniają użytkownikom wyjątkowe doświadczenia.</p>
                     </div>
                     <div>
                        <ButtonOutline size="small" on:click={() => modalStore.update(n => ({ currentPage: 1, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>
      
         </div>
      </div>

      <div class="hidden md:flex flex-col mt-10 lg:mt-20 flex-nowrap horizontal-scroll-container gap-8">
         <div class="flex flex-row h-100 horizontal-scroll-content w-full gap-20 mt-8 md:mt-0">

            <div class="flex w-full justify-center items-start md:items-center shrink-0">
               <div class="grid grid-cols-6 md:grid-cols-12 lg:gap-20 w-full max-w-[1800px] lg:pl-24 lg:pr-20">
                  <div class="col-span-6 md:col-span-12 w-full sm:w-3/4 lg:w-full lg:col-span-5 w-[300px] md:w-2/3">
      
                     <div class="grid grid-cols-3 grid-rows-2 w-full">
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-4">
                           <svg width="123" height="123" viewBox="0 0 123 123" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path class="origin-[50%_50%] animate-rotateOne" d="M89.4592 61.8317C89.4592 78.5694 86.2741 93.6737 81.1683 104.556C76.0252 115.518 69.1185 121.854 61.8289 121.854C54.5393 121.854 47.6326 115.518 42.4895 104.556C37.3837 93.6737 34.1985 78.5694 34.1985 61.8317C34.1985 45.0939 37.3837 29.9896 42.4895 19.1071C47.6326 8.14521 54.5393 1.80933 61.8289 1.80933C69.1185 1.80933 76.0252 8.14521 81.1683 19.1071C86.2741 29.9896 89.4592 45.0939 89.4592 61.8317Z" stroke="#3D3D3D" stroke-width="2"/>
                              <path class="origin-[50%_50%] animate-rotateTwo" d="M61.827 89.4612C45.0892 89.4612 29.9849 86.2761 19.1024 81.1703C8.14052 76.0272 1.80464 69.1205 1.80464 61.8309C1.80464 54.5413 8.14052 47.6346 19.1024 42.4915C29.9849 37.3857 45.0892 34.2006 61.827 34.2006C78.5647 34.2006 93.669 37.3857 104.552 42.4915C115.513 47.6346 121.849 54.5413 121.849 61.8309C121.849 69.1205 115.513 76.0272 104.552 81.1703C93.669 86.2761 78.5647 89.4612 61.827 89.4612Z" stroke="#3D3D3D" stroke-width="2"/>
                           </svg>                        
                        </div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] bg-[url('/offer-balls-1.png')] bg-cover bg-no-repeat"></div>
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
                  <div class="flex flex-col col-span-6 md:col-span-12 lg:col-span-7 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-12 lg:mr-10">
                     <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4">Digital Design</h4>
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Projektowanie cyfrowe ma znaczący wpływ na dzisiejszą erę internetu, pomagając firmom budować swoje marki, angażować klientów i oferować innowacyjne rozwiązania graficzne. Chętnie Ci pomogę w projektowaniu nowoczesnych grafik, które przyczynią się do promocji Twojej marki w przestrzeni online, a także w tworzeniu interfejsów użytkownika (UI) dla stron internetowych i aplikacji mobilnych.</p>
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Mimo mojego młodego wieku, posiadam znaczne doświadczenie w tworzeniu czytelnych, nowoczesnych i przystępnych dla przyszłych klientów rozwiązań, które spełnią oczekiwania nawet najbardziej wymagających klientów.</p>
                     </div>
                     <div>
                        <ButtonOutline size="medium" on:click={() => modalStore.update(n => ({ currentPage: 2, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>
            <div class="flex w-full justify-center items-start md:items-center shrink-0">
               <div class="grid grid-cols-6 md:grid-cols-12 lg:gap-20 w-full max-w-[1800px] lg:pr-28">
                  <div class="col-span-6 md:col-span-12 w-full sm:w-3/4 lg:w-full lg:col-span-5 w-[300px] md:w-2/3">
      
                     <div class="grid grid-cols-3 grid-rows-2 w-full">
                        <div class="aspect-square"></div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-4">
                           <svg width="160" height="160" viewBox="0 0 124 124" fill="none" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="62.145" cy="62.4358" r="60.4672" transform="rotate(-90 62.145 62.4358)" stroke="#3D3D3D" stroke-width="2"/>
                           </svg>                                                     
                        </div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-2">
                           <svg width="166" height="166" viewBox="0 0 166 166" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.12053" cy="163.651" r="2.31535" transform="rotate(-90 3.12053 163.651)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="151.303" r="2.31535" transform="rotate(-90 3.12053 151.303)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="138.955" r="2.31535" transform="rotate(-90 3.12053 138.955)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="126.605" r="2.31535" transform="rotate(-90 3.12053 126.605)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="114.257" r="2.31535" transform="rotate(-90 3.12053 114.257)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="101.909" r="2.31535" transform="rotate(-90 3.12053 101.909)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="89.5606" r="2.31535" transform="rotate(-90 3.12053 89.5606)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="77.2113" r="2.31535" transform="rotate(-90 3.12053 77.2113)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="64.8629" r="2.31535" transform="rotate(-90 3.12053 64.8629)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="52.5145" r="2.31535" transform="rotate(-90 3.12053 52.5145)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="40.1661" r="2.31535" transform="rotate(-90 3.12053 40.1661)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="27.817" r="2.31535" transform="rotate(-90 3.12053 27.817)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="15.4683" r="2.31535" transform="rotate(-90 3.12053 15.4683)" fill="#3D3D3D"/>
                              <circle cx="3.12053" cy="3.11995" r="2.31535" transform="rotate(-90 3.12053 3.11995)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="163.651" r="2.31535" transform="rotate(-90 15.4692 163.651)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="151.303" r="2.31535" transform="rotate(-90 15.4692 151.303)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="138.955" r="2.31535" transform="rotate(-90 15.4692 138.955)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="126.605" r="2.31535" transform="rotate(-90 15.4692 126.605)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="114.257" r="2.31535" transform="rotate(-90 15.4692 114.257)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="101.909" r="2.31535" transform="rotate(-90 15.4692 101.909)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="89.5606" r="2.31535" transform="rotate(-90 15.4692 89.5606)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="77.2113" r="2.31535" transform="rotate(-90 15.4692 77.2113)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="64.8629" r="2.31535" transform="rotate(-90 15.4692 64.8629)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="52.5145" r="2.31535" transform="rotate(-90 15.4692 52.5145)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="40.1661" r="2.31535" transform="rotate(-90 15.4692 40.1661)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="27.817" r="2.31535" transform="rotate(-90 15.4692 27.817)" fill="#3D3D3D"/>
                              <circle cx="15.4692" cy="15.4683" r="2.31535" transform="rotate(-90 15.4692 15.4683)" fill="#AC956F"/>
                              <circle cx="15.4692" cy="3.11983" r="2.31535" transform="rotate(-90 15.4692 3.11983)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="163.651" r="2.31535" transform="rotate(-90 27.8178 163.651)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="151.303" r="2.31535" transform="rotate(-90 27.8178 151.303)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="138.955" r="2.31535" transform="rotate(-90 27.8178 138.955)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="126.605" r="2.31535" transform="rotate(-90 27.8178 126.605)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="114.257" r="2.31535" transform="rotate(-90 27.8178 114.257)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="101.909" r="2.31535" transform="rotate(-90 27.8178 101.909)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="89.5606" r="2.31535" transform="rotate(-90 27.8178 89.5606)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="77.2113" r="2.31535" transform="rotate(-90 27.8178 77.2113)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="64.8629" r="2.31535" transform="rotate(-90 27.8178 64.8629)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="52.5145" r="2.31535" transform="rotate(-90 27.8178 52.5145)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="40.1661" r="2.31535" transform="rotate(-90 27.8178 40.1661)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="27.817" r="2.31535" transform="rotate(-90 27.8178 27.817)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="15.4683" r="2.31535" transform="rotate(-90 27.8178 15.4683)" fill="#3D3D3D"/>
                              <circle cx="27.8178" cy="3.11983" r="2.31535" transform="rotate(-90 27.8178 3.11983)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="163.651" r="2.31535" transform="rotate(-90 40.1652 163.651)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="151.303" r="2.31535" transform="rotate(-90 40.1652 151.303)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="138.955" r="2.31535" transform="rotate(-90 40.1652 138.955)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="126.605" r="2.31535" transform="rotate(-90 40.1652 126.605)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="114.257" r="2.31535" transform="rotate(-90 40.1652 114.257)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="101.909" r="2.31535" transform="rotate(-90 40.1652 101.909)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="89.5606" r="2.31535" transform="rotate(-90 40.1652 89.5606)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="77.2113" r="2.31535" transform="rotate(-90 40.1652 77.2113)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="64.8629" r="2.31535" transform="rotate(-90 40.1652 64.8629)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="52.5145" r="2.31535" transform="rotate(-90 40.1652 52.5145)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="40.1661" r="2.31535" transform="rotate(-90 40.1652 40.1661)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="27.817" r="2.31535" transform="rotate(-90 40.1652 27.817)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="15.4683" r="2.31535" transform="rotate(-90 40.1652 15.4683)" fill="#3D3D3D"/>
                              <circle cx="40.1652" cy="3.11995" r="2.31535" transform="rotate(-90 40.1652 3.11995)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="163.651" r="2.31535" transform="rotate(-90 52.5148 163.651)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="151.303" r="2.31535" transform="rotate(-90 52.5148 151.303)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="138.955" r="2.31535" transform="rotate(-90 52.5148 138.955)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="126.605" r="2.31535" transform="rotate(-90 52.5148 126.605)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="114.257" r="2.31535" transform="rotate(-90 52.5148 114.257)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="101.909" r="2.31535" transform="rotate(-90 52.5148 101.909)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="89.5606" r="2.31535" transform="rotate(-90 52.5148 89.5606)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="77.2113" r="2.31535" transform="rotate(-90 52.5148 77.2113)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="64.8629" r="2.31535" transform="rotate(-90 52.5148 64.8629)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="52.5145" r="2.31535" transform="rotate(-90 52.5148 52.5145)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="40.1661" r="2.31535" transform="rotate(-90 52.5148 40.1661)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="27.817" r="2.31535" transform="rotate(-90 52.5148 27.817)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="15.4683" r="2.31535" transform="rotate(-90 52.5148 15.4683)" fill="#3D3D3D"/>
                              <circle cx="52.5148" cy="3.11983" r="2.31535" transform="rotate(-90 52.5148 3.11983)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="163.651" r="2.31535" transform="rotate(-90 64.8639 163.651)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="151.303" r="2.31535" transform="rotate(-90 64.8639 151.303)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="138.955" r="2.31535" transform="rotate(-90 64.8639 138.955)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="126.605" r="2.31535" transform="rotate(-90 64.8639 126.605)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="114.257" r="2.31535" transform="rotate(-90 64.8639 114.257)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="101.909" r="2.31535" transform="rotate(-90 64.8639 101.909)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="89.5606" r="2.31535" transform="rotate(-90 64.8639 89.5606)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="77.2113" r="2.31535" transform="rotate(-90 64.8639 77.2113)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="64.8629" r="2.31535" transform="rotate(-90 64.8639 64.8629)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="52.5145" r="2.31535" transform="rotate(-90 64.8639 52.5145)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="40.1661" r="2.31535" transform="rotate(-90 64.8639 40.1661)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="27.817" r="2.31535" transform="rotate(-90 64.8639 27.817)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="15.4683" r="2.31535" transform="rotate(-90 64.8639 15.4683)" fill="#3D3D3D"/>
                              <circle cx="64.8639" cy="3.11983" r="2.31535" transform="rotate(-90 64.8639 3.11983)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="163.651" r="2.31535" transform="rotate(-90 77.2118 163.651)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="151.303" r="2.31535" transform="rotate(-90 77.2118 151.303)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="138.955" r="2.31535" transform="rotate(-90 77.2118 138.955)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="126.605" r="2.31535" transform="rotate(-90 77.2118 126.605)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="114.257" r="2.31535" transform="rotate(-90 77.2118 114.257)" fill="#AC956F"/>
                              <circle cx="77.2118" cy="101.909" r="2.31535" transform="rotate(-90 77.2118 101.909)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="89.5606" r="2.31535" transform="rotate(-90 77.2118 89.5606)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="77.2113" r="2.31535" transform="rotate(-90 77.2118 77.2113)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="64.8629" r="2.31535" transform="rotate(-90 77.2118 64.8629)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="52.5145" r="2.31535" transform="rotate(-90 77.2118 52.5145)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="40.1661" r="2.31535" transform="rotate(-90 77.2118 40.1661)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="27.817" r="2.31535" transform="rotate(-90 77.2118 27.817)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="15.4683" r="2.31535" transform="rotate(-90 77.2118 15.4683)" fill="#3D3D3D"/>
                              <circle cx="77.2118" cy="3.11995" r="2.31535" transform="rotate(-90 77.2118 3.11995)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="163.651" r="2.31535" transform="rotate(-90 89.561 163.651)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="151.303" r="2.31535" transform="rotate(-90 89.561 151.303)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="138.955" r="2.31535" transform="rotate(-90 89.561 138.955)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="126.605" r="2.31535" transform="rotate(-90 89.561 126.605)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="114.257" r="2.31535" transform="rotate(-90 89.561 114.257)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="101.909" r="2.31535" transform="rotate(-90 89.561 101.909)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="89.5606" r="2.31535" transform="rotate(-90 89.561 89.5606)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="77.2113" r="2.31535" transform="rotate(-90 89.561 77.2113)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="64.8629" r="2.31535" transform="rotate(-90 89.561 64.8629)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="52.5145" r="2.31535" transform="rotate(-90 89.561 52.5145)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="40.1661" r="2.31535" transform="rotate(-90 89.561 40.1661)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="27.817" r="2.31535" transform="rotate(-90 89.561 27.817)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="15.4683" r="2.31535" transform="rotate(-90 89.561 15.4683)" fill="#3D3D3D"/>
                              <circle cx="89.561" cy="3.11983" r="2.31535" transform="rotate(-90 89.561 3.11983)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="163.651" r="2.31535" transform="rotate(-90 101.909 163.651)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="151.303" r="2.31535" transform="rotate(-90 101.909 151.303)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="138.955" r="2.31535" transform="rotate(-90 101.909 138.955)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="126.605" r="2.31535" transform="rotate(-90 101.909 126.605)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="114.257" r="2.31535" transform="rotate(-90 101.909 114.257)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="101.909" r="2.31535" transform="rotate(-90 101.909 101.909)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="89.5606" r="2.31535" transform="rotate(-90 101.909 89.5606)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="77.2113" r="2.31535" transform="rotate(-90 101.909 77.2113)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="64.8629" r="2.31535" transform="rotate(-90 101.909 64.8629)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="52.5145" r="2.31535" transform="rotate(-90 101.909 52.5145)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="40.1661" r="2.31535" transform="rotate(-90 101.909 40.1661)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="27.817" r="2.31535" transform="rotate(-90 101.909 27.817)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="15.4683" r="2.31535" transform="rotate(-90 101.909 15.4683)" fill="#3D3D3D"/>
                              <circle cx="101.909" cy="3.11983" r="2.31535" transform="rotate(-90 101.909 3.11983)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="163.651" r="2.31535" transform="rotate(-90 114.257 163.651)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="151.303" r="2.31535" transform="rotate(-90 114.257 151.303)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="138.955" r="2.31535" transform="rotate(-90 114.257 138.955)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="126.605" r="2.31535" transform="rotate(-90 114.257 126.605)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="114.257" r="2.31535" transform="rotate(-90 114.257 114.257)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="101.909" r="2.31535" transform="rotate(-90 114.257 101.909)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="89.5606" r="2.31535" transform="rotate(-90 114.257 89.5606)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="77.2113" r="2.31535" transform="rotate(-90 114.257 77.2113)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="64.8629" r="2.31535" transform="rotate(-90 114.257 64.8629)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="52.5145" r="2.31535" transform="rotate(-90 114.257 52.5145)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="40.1661" r="2.31535" transform="rotate(-90 114.257 40.1661)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="27.817" r="2.31535" transform="rotate(-90 114.257 27.817)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="15.4683" r="2.31535" transform="rotate(-90 114.257 15.4683)" fill="#3D3D3D"/>
                              <circle cx="114.257" cy="3.11995" r="2.31535" transform="rotate(-90 114.257 3.11995)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="163.651" r="2.31535" transform="rotate(-90 126.606 163.651)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="151.303" r="2.31535" transform="rotate(-90 126.606 151.303)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="138.955" r="2.31535" transform="rotate(-90 126.606 138.955)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="126.605" r="2.31535" transform="rotate(-90 126.606 126.605)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="114.257" r="2.31535" transform="rotate(-90 126.606 114.257)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="101.909" r="2.31535" transform="rotate(-90 126.606 101.909)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="89.5606" r="2.31535" transform="rotate(-90 126.606 89.5606)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="77.2113" r="2.31535" transform="rotate(-90 126.606 77.2113)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="64.8629" r="2.31535" transform="rotate(-90 126.606 64.8629)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="52.5145" r="2.31535" transform="rotate(-90 126.606 52.5145)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="40.1661" r="2.31535" transform="rotate(-90 126.606 40.1661)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="27.817" r="2.31535" transform="rotate(-90 126.606 27.817)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="15.4683" r="2.31535" transform="rotate(-90 126.606 15.4683)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="3.11983" r="2.31535" transform="rotate(-90 126.606 3.11983)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="163.651" r="2.31535" transform="rotate(-90 138.955 163.651)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="151.303" r="2.31535" transform="rotate(-90 138.955 151.303)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="138.955" r="2.31535" transform="rotate(-90 138.955 138.955)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="126.605" r="2.31535" transform="rotate(-90 138.955 126.605)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="114.257" r="2.31535" transform="rotate(-90 138.955 114.257)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="101.909" r="2.31535" transform="rotate(-90 138.955 101.909)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="89.5606" r="2.31535" transform="rotate(-90 138.955 89.5606)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="77.2113" r="2.31535" transform="rotate(-90 138.955 77.2113)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="64.8629" r="2.31535" transform="rotate(-90 138.955 64.8629)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="52.5145" r="2.31535" transform="rotate(-90 138.955 52.5145)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="40.1661" r="2.31535" transform="rotate(-90 138.955 40.1661)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="27.817" r="2.31535" transform="rotate(-90 138.955 27.817)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="15.4683" r="2.31535" transform="rotate(-90 138.955 15.4683)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="3.11983" r="2.31535" transform="rotate(-90 138.955 3.11983)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="163.651" r="2.31535" transform="rotate(-90 151.303 163.651)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="151.303" r="2.31535" transform="rotate(-90 151.303 151.303)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="138.955" r="2.31535" transform="rotate(-90 151.303 138.955)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="126.605" r="2.31535" transform="rotate(-90 151.303 126.605)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="114.257" r="2.31535" transform="rotate(-90 151.303 114.257)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="101.909" r="2.31535" transform="rotate(-90 151.303 101.909)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="89.5606" r="2.31535" transform="rotate(-90 151.303 89.5606)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="77.2113" r="2.31535" transform="rotate(-90 151.303 77.2113)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="64.8629" r="2.31535" transform="rotate(-90 151.303 64.8629)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="52.5145" r="2.31535" transform="rotate(-90 151.303 52.5145)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="40.1661" r="2.31535" transform="rotate(-90 151.303 40.1661)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="27.817" r="2.31535" transform="rotate(-90 151.303 27.817)" fill="#AC956F"/>
                              <circle cx="151.303" cy="15.4683" r="2.31535" transform="rotate(-90 151.303 15.4683)" fill="#3D3D3D"/>
                              <circle cx="151.303" cy="3.11995" r="2.31535" transform="rotate(-90 151.303 3.11995)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="163.651" r="2.31535" transform="rotate(-90 163.652 163.651)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="151.303" r="2.31535" transform="rotate(-90 163.652 151.303)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="138.955" r="2.31535" transform="rotate(-90 163.652 138.955)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="126.605" r="2.31535" transform="rotate(-90 163.652 126.605)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="114.257" r="2.31535" transform="rotate(-90 163.652 114.257)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="101.909" r="2.31535" transform="rotate(-90 163.652 101.909)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="89.5606" r="2.31535" transform="rotate(-90 163.652 89.5606)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="77.2113" r="2.31535" transform="rotate(-90 163.652 77.2113)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="64.8629" r="2.31535" transform="rotate(-90 163.652 64.8629)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="52.5145" r="2.31535" transform="rotate(-90 163.652 52.5145)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="40.1661" r="2.31535" transform="rotate(-90 163.652 40.1661)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="27.817" r="2.31535" transform="rotate(-90 163.652 27.817)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="15.4683" r="2.31535" transform="rotate(-90 163.652 15.4683)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="3.11983" r="2.31535" transform="rotate(-90 163.652 3.11983)" fill="#3D3D3D"/>
                           </svg>                              
                        </div>
                        <div class="aspect-square"></div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px]"></div>
                     </div>
                     
                  </div>
                  <div class="flex flex-col col-span-6 md:col-span-12 lg:col-span-7 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-12 lg:mr-10">
                     <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4">Brand + Print</h4>
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Działam na styku sztuki graficznej i druku, dostarczając klientom profesjonalne rozwiązania od projektu logo po ulotki, broszury, opakowania i wiele innych materiałów promocyjnych. Jako product designer dążę do oferowania kompleksowych rozwiązań, które wspierają klientów w realizacji ich celów marketingowych i biznesowych poprzez wzmacnianie wizerunku i promocję.</p>
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Tworzę spójne i rozpoznawalne identyfikacje wizualne, które wyróżniają się na tle konkurencji oraz nadają markom unikalny charakter. To istotny element budowania marki, który sprawia, że firma zyskuje własną tożsamość i jest zapamiętywana przez klientów.</p>
                     </div>
                     <div>
                        <ButtonOutline size="medium" on:click={() => modalStore.update(n => ({ currentPage: 0, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>
            <div class="flex w-full justify-center items-start md:items-center shrink-0">
               <div class="grid grid-cols-6 md:grid-cols-12 lg:gap-20 w-full max-w-[1800px] lg:pr-28">
                  <div class="col-span-6 md:col-span-12 w-full sm:w-3/4 lg:w-full lg:col-span-5 w-[300px] md:w-2/3">
      
                     <div class="grid grid-cols-3 grid-rows-2 w-full">
                        <div class="aspect-square"></div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-4">
                           <svg width="150" height="150" viewBox="0 0 150 150" fill="none" class="w-full h-full origin-[50%_50%] animate-rotateOne" xmlns="http://www.w3.org/2000/svg">
                              <path d="M75 150V90" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M21.9678 128.031L64.3925 85.6067" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M0 75.0002H60" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M21.9678 21.9678L64.3925 64.3925" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M75 0V60" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M128.032 21.9678L85.6069 64.3925" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M150 75.0002H90" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                              <path d="M128.032 128.031L85.6069 85.6067" stroke="#3D3D3D" stroke-width="2" stroke-miterlimit="10"/>
                           </svg>                                                                              
                        </div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-2">
                           <svg width="166" height="166" viewBox="0 0 166 166" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.12102" cy="163.651" r="2.31535" transform="rotate(-90 3.12102 163.651)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="151.303" r="2.31535" transform="rotate(-90 3.12102 151.303)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="138.955" r="2.31535" transform="rotate(-90 3.12102 138.955)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="126.605" r="2.31535" transform="rotate(-90 3.12102 126.605)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="114.257" r="2.31535" transform="rotate(-90 3.12102 114.257)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="101.909" r="2.31535" transform="rotate(-90 3.12102 101.909)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="89.5606" r="2.31535" transform="rotate(-90 3.12102 89.5606)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="77.2113" r="2.31535" transform="rotate(-90 3.12102 77.2113)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="64.8629" r="2.31535" transform="rotate(-90 3.12102 64.8629)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="52.5145" r="2.31535" transform="rotate(-90 3.12102 52.5145)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="40.1661" r="2.31535" transform="rotate(-90 3.12102 40.1661)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="27.817" r="2.31535" transform="rotate(-90 3.12102 27.817)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="15.4683" r="2.31535" transform="rotate(-90 3.12102 15.4683)" fill="#3D3D3D"/>
                              <circle cx="3.12102" cy="3.11995" r="2.31535" transform="rotate(-90 3.12102 3.11995)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="163.651" r="2.31535" transform="rotate(-90 15.4697 163.651)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="151.303" r="2.31535" transform="rotate(-90 15.4697 151.303)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="138.955" r="2.31535" transform="rotate(-90 15.4697 138.955)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="126.605" r="2.31535" transform="rotate(-90 15.4697 126.605)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="114.257" r="2.31535" transform="rotate(-90 15.4697 114.257)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="101.909" r="2.31535" transform="rotate(-90 15.4697 101.909)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="89.5606" r="2.31535" transform="rotate(-90 15.4697 89.5606)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="77.2113" r="2.31535" transform="rotate(-90 15.4697 77.2113)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="64.8629" r="2.31535" transform="rotate(-90 15.4697 64.8629)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="52.5145" r="2.31535" transform="rotate(-90 15.4697 52.5145)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="40.1661" r="2.31535" transform="rotate(-90 15.4697 40.1661)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="27.817" r="2.31535" transform="rotate(-90 15.4697 27.817)" fill="#3D3D3D"/>
                              <circle cx="15.4697" cy="15.4683" r="2.31535" transform="rotate(-90 15.4697 15.4683)" fill="#E7E7E7"/>
                              <circle cx="15.4697" cy="3.11983" r="2.31535" transform="rotate(-90 15.4697 3.11983)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="163.651" r="2.31535" transform="rotate(-90 27.8183 163.651)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="151.303" r="2.31535" transform="rotate(-90 27.8183 151.303)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="138.955" r="2.31535" transform="rotate(-90 27.8183 138.955)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="126.605" r="2.31535" transform="rotate(-90 27.8183 126.605)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="114.257" r="2.31535" transform="rotate(-90 27.8183 114.257)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="101.909" r="2.31535" transform="rotate(-90 27.8183 101.909)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="89.5606" r="2.31535" transform="rotate(-90 27.8183 89.5606)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="77.2113" r="2.31535" transform="rotate(-90 27.8183 77.2113)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="64.8629" r="2.31535" transform="rotate(-90 27.8183 64.8629)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="52.5145" r="2.31535" transform="rotate(-90 27.8183 52.5145)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="40.1661" r="2.31535" transform="rotate(-90 27.8183 40.1661)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="27.817" r="2.31535" transform="rotate(-90 27.8183 27.817)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="15.4683" r="2.31535" transform="rotate(-90 27.8183 15.4683)" fill="#3D3D3D"/>
                              <circle cx="27.8183" cy="3.11983" r="2.31535" transform="rotate(-90 27.8183 3.11983)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="163.651" r="2.31535" transform="rotate(-90 40.1659 163.651)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="151.303" r="2.31535" transform="rotate(-90 40.1659 151.303)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="138.955" r="2.31535" transform="rotate(-90 40.1659 138.955)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="126.605" r="2.31535" transform="rotate(-90 40.1659 126.605)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="114.257" r="2.31535" transform="rotate(-90 40.1659 114.257)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="101.909" r="2.31535" transform="rotate(-90 40.1659 101.909)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="89.5606" r="2.31535" transform="rotate(-90 40.1659 89.5606)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="77.2113" r="2.31535" transform="rotate(-90 40.1659 77.2113)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="64.8629" r="2.31535" transform="rotate(-90 40.1659 64.8629)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="52.5145" r="2.31535" transform="rotate(-90 40.1659 52.5145)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="40.1661" r="2.31535" transform="rotate(-90 40.1659 40.1661)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="27.817" r="2.31535" transform="rotate(-90 40.1659 27.817)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="15.4683" r="2.31535" transform="rotate(-90 40.1659 15.4683)" fill="#3D3D3D"/>
                              <circle cx="40.1659" cy="3.11995" r="2.31535" transform="rotate(-90 40.1659 3.11995)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="163.651" r="2.31535" transform="rotate(-90 52.5151 163.651)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="151.303" r="2.31535" transform="rotate(-90 52.5151 151.303)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="138.955" r="2.31535" transform="rotate(-90 52.5151 138.955)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="126.605" r="2.31535" transform="rotate(-90 52.5151 126.605)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="114.257" r="2.31535" transform="rotate(-90 52.5151 114.257)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="101.909" r="2.31535" transform="rotate(-90 52.5151 101.909)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="89.5606" r="2.31535" transform="rotate(-90 52.5151 89.5606)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="77.2113" r="2.31535" transform="rotate(-90 52.5151 77.2113)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="64.8629" r="2.31535" transform="rotate(-90 52.5151 64.8629)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="52.5145" r="2.31535" transform="rotate(-90 52.5151 52.5145)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="40.1661" r="2.31535" transform="rotate(-90 52.5151 40.1661)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="27.817" r="2.31535" transform="rotate(-90 52.5151 27.817)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="15.4683" r="2.31535" transform="rotate(-90 52.5151 15.4683)" fill="#3D3D3D"/>
                              <circle cx="52.5151" cy="3.11983" r="2.31535" transform="rotate(-90 52.5151 3.11983)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="163.651" r="2.31535" transform="rotate(-90 64.8642 163.651)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="151.303" r="2.31535" transform="rotate(-90 64.8642 151.303)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="138.955" r="2.31535" transform="rotate(-90 64.8642 138.955)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="126.605" r="2.31535" transform="rotate(-90 64.8642 126.605)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="114.257" r="2.31535" transform="rotate(-90 64.8642 114.257)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="101.909" r="2.31535" transform="rotate(-90 64.8642 101.909)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="89.5606" r="2.31535" transform="rotate(-90 64.8642 89.5606)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="77.2113" r="2.31535" transform="rotate(-90 64.8642 77.2113)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="64.8629" r="2.31535" transform="rotate(-90 64.8642 64.8629)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="52.5145" r="2.31535" transform="rotate(-90 64.8642 52.5145)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="40.1661" r="2.31535" transform="rotate(-90 64.8642 40.1661)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="27.817" r="2.31535" transform="rotate(-90 64.8642 27.817)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="15.4683" r="2.31535" transform="rotate(-90 64.8642 15.4683)" fill="#3D3D3D"/>
                              <circle cx="64.8642" cy="3.11983" r="2.31535" transform="rotate(-90 64.8642 3.11983)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="163.651" r="2.31535" transform="rotate(-90 77.2123 163.651)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="151.303" r="2.31535" transform="rotate(-90 77.2123 151.303)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="138.955" r="2.31535" transform="rotate(-90 77.2123 138.955)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="126.605" r="2.31535" transform="rotate(-90 77.2123 126.605)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="114.257" r="2.31535" transform="rotate(-90 77.2123 114.257)" fill="#E7E7E7"/>
                              <circle cx="77.2123" cy="101.909" r="2.31535" transform="rotate(-90 77.2123 101.909)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="89.5606" r="2.31535" transform="rotate(-90 77.2123 89.5606)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="77.2113" r="2.31535" transform="rotate(-90 77.2123 77.2113)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="64.8629" r="2.31535" transform="rotate(-90 77.2123 64.8629)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="52.5145" r="2.31535" transform="rotate(-90 77.2123 52.5145)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="40.1661" r="2.31535" transform="rotate(-90 77.2123 40.1661)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="27.817" r="2.31535" transform="rotate(-90 77.2123 27.817)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="15.4683" r="2.31535" transform="rotate(-90 77.2123 15.4683)" fill="#3D3D3D"/>
                              <circle cx="77.2123" cy="3.11995" r="2.31535" transform="rotate(-90 77.2123 3.11995)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="163.651" r="2.31535" transform="rotate(-90 89.5614 163.651)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="151.303" r="2.31535" transform="rotate(-90 89.5614 151.303)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="138.955" r="2.31535" transform="rotate(-90 89.5614 138.955)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="126.605" r="2.31535" transform="rotate(-90 89.5614 126.605)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="114.257" r="2.31535" transform="rotate(-90 89.5614 114.257)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="101.909" r="2.31535" transform="rotate(-90 89.5614 101.909)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="89.5606" r="2.31535" transform="rotate(-90 89.5614 89.5606)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="77.2113" r="2.31535" transform="rotate(-90 89.5614 77.2113)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="64.8629" r="2.31535" transform="rotate(-90 89.5614 64.8629)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="52.5145" r="2.31535" transform="rotate(-90 89.5614 52.5145)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="40.1661" r="2.31535" transform="rotate(-90 89.5614 40.1661)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="27.817" r="2.31535" transform="rotate(-90 89.5614 27.817)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="15.4683" r="2.31535" transform="rotate(-90 89.5614 15.4683)" fill="#3D3D3D"/>
                              <circle cx="89.5614" cy="3.11983" r="2.31535" transform="rotate(-90 89.5614 3.11983)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="163.651" r="2.31535" transform="rotate(-90 101.91 163.651)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="151.303" r="2.31535" transform="rotate(-90 101.91 151.303)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="138.955" r="2.31535" transform="rotate(-90 101.91 138.955)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="126.605" r="2.31535" transform="rotate(-90 101.91 126.605)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="114.257" r="2.31535" transform="rotate(-90 101.91 114.257)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="101.909" r="2.31535" transform="rotate(-90 101.91 101.909)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="89.5606" r="2.31535" transform="rotate(-90 101.91 89.5606)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="77.2113" r="2.31535" transform="rotate(-90 101.91 77.2113)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="64.8629" r="2.31535" transform="rotate(-90 101.91 64.8629)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="52.5145" r="2.31535" transform="rotate(-90 101.91 52.5145)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="40.1661" r="2.31535" transform="rotate(-90 101.91 40.1661)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="27.817" r="2.31535" transform="rotate(-90 101.91 27.817)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="15.4683" r="2.31535" transform="rotate(-90 101.91 15.4683)" fill="#3D3D3D"/>
                              <circle cx="101.91" cy="3.11983" r="2.31535" transform="rotate(-90 101.91 3.11983)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="163.651" r="2.31535" transform="rotate(-90 114.258 163.651)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="151.303" r="2.31535" transform="rotate(-90 114.258 151.303)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="138.955" r="2.31535" transform="rotate(-90 114.258 138.955)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="126.605" r="2.31535" transform="rotate(-90 114.258 126.605)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="114.257" r="2.31535" transform="rotate(-90 114.258 114.257)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="101.909" r="2.31535" transform="rotate(-90 114.258 101.909)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="89.5606" r="2.31535" transform="rotate(-90 114.258 89.5606)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="77.2113" r="2.31535" transform="rotate(-90 114.258 77.2113)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="64.8629" r="2.31535" transform="rotate(-90 114.258 64.8629)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="52.5145" r="2.31535" transform="rotate(-90 114.258 52.5145)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="40.1661" r="2.31535" transform="rotate(-90 114.258 40.1661)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="27.817" r="2.31535" transform="rotate(-90 114.258 27.817)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="15.4683" r="2.31535" transform="rotate(-90 114.258 15.4683)" fill="#3D3D3D"/>
                              <circle cx="114.258" cy="3.11995" r="2.31535" transform="rotate(-90 114.258 3.11995)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="163.651" r="2.31535" transform="rotate(-90 126.606 163.651)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="151.303" r="2.31535" transform="rotate(-90 126.606 151.303)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="138.955" r="2.31535" transform="rotate(-90 126.606 138.955)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="126.605" r="2.31535" transform="rotate(-90 126.606 126.605)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="114.257" r="2.31535" transform="rotate(-90 126.606 114.257)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="101.909" r="2.31535" transform="rotate(-90 126.606 101.909)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="89.5606" r="2.31535" transform="rotate(-90 126.606 89.5606)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="77.2113" r="2.31535" transform="rotate(-90 126.606 77.2113)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="64.8629" r="2.31535" transform="rotate(-90 126.606 64.8629)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="52.5145" r="2.31535" transform="rotate(-90 126.606 52.5145)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="40.1661" r="2.31535" transform="rotate(-90 126.606 40.1661)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="27.817" r="2.31535" transform="rotate(-90 126.606 27.817)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="15.4683" r="2.31535" transform="rotate(-90 126.606 15.4683)" fill="#3D3D3D"/>
                              <circle cx="126.606" cy="3.11983" r="2.31535" transform="rotate(-90 126.606 3.11983)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="163.651" r="2.31535" transform="rotate(-90 138.955 163.651)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="151.303" r="2.31535" transform="rotate(-90 138.955 151.303)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="138.955" r="2.31535" transform="rotate(-90 138.955 138.955)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="126.605" r="2.31535" transform="rotate(-90 138.955 126.605)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="114.257" r="2.31535" transform="rotate(-90 138.955 114.257)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="101.909" r="2.31535" transform="rotate(-90 138.955 101.909)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="89.5606" r="2.31535" transform="rotate(-90 138.955 89.5606)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="77.2113" r="2.31535" transform="rotate(-90 138.955 77.2113)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="64.8629" r="2.31535" transform="rotate(-90 138.955 64.8629)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="52.5145" r="2.31535" transform="rotate(-90 138.955 52.5145)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="40.1661" r="2.31535" transform="rotate(-90 138.955 40.1661)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="27.817" r="2.31535" transform="rotate(-90 138.955 27.817)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="15.4683" r="2.31535" transform="rotate(-90 138.955 15.4683)" fill="#3D3D3D"/>
                              <circle cx="138.955" cy="3.11983" r="2.31535" transform="rotate(-90 138.955 3.11983)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="163.651" r="2.31535" transform="rotate(-90 151.304 163.651)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="151.303" r="2.31535" transform="rotate(-90 151.304 151.303)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="138.955" r="2.31535" transform="rotate(-90 151.304 138.955)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="126.605" r="2.31535" transform="rotate(-90 151.304 126.605)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="114.257" r="2.31535" transform="rotate(-90 151.304 114.257)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="101.909" r="2.31535" transform="rotate(-90 151.304 101.909)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="89.5606" r="2.31535" transform="rotate(-90 151.304 89.5606)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="77.2113" r="2.31535" transform="rotate(-90 151.304 77.2113)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="64.8629" r="2.31535" transform="rotate(-90 151.304 64.8629)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="52.5145" r="2.31535" transform="rotate(-90 151.304 52.5145)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="40.1661" r="2.31535" transform="rotate(-90 151.304 40.1661)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="27.817" r="2.31535" transform="rotate(-90 151.304 27.817)" fill="#E7E7E7"/>
                              <circle cx="151.304" cy="15.4683" r="2.31535" transform="rotate(-90 151.304 15.4683)" fill="#3D3D3D"/>
                              <circle cx="151.304" cy="3.11995" r="2.31535" transform="rotate(-90 151.304 3.11995)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="163.651" r="2.31535" transform="rotate(-90 163.652 163.651)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="151.303" r="2.31535" transform="rotate(-90 163.652 151.303)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="138.955" r="2.31535" transform="rotate(-90 163.652 138.955)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="126.605" r="2.31535" transform="rotate(-90 163.652 126.605)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="114.257" r="2.31535" transform="rotate(-90 163.652 114.257)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="101.909" r="2.31535" transform="rotate(-90 163.652 101.909)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="89.5606" r="2.31535" transform="rotate(-90 163.652 89.5606)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="77.2113" r="2.31535" transform="rotate(-90 163.652 77.2113)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="64.8629" r="2.31535" transform="rotate(-90 163.652 64.8629)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="52.5145" r="2.31535" transform="rotate(-90 163.652 52.5145)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="40.1661" r="2.31535" transform="rotate(-90 163.652 40.1661)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="27.817" r="2.31535" transform="rotate(-90 163.652 27.817)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="15.4683" r="2.31535" transform="rotate(-90 163.652 15.4683)" fill="#3D3D3D"/>
                              <circle cx="163.652" cy="3.11983" r="2.31535" transform="rotate(-90 163.652 3.11983)" fill="#3D3D3D"/>
                           </svg>                              
                        </div>
                        <div class="aspect-square"></div>
                        <div class="aspect-square"></div>
                        <div class="outline outline-2 outline-dark-900 aspect-square outline-offset-[-1px] flex items-center justify-center p-2 bg-[url('/offer-balls-2.png')] bg-cover bg-no-repeat"></div>
                     </div>
                     
                  </div>
                  <div class="flex flex-col col-span-6 md:col-span-12 lg:col-span-7 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-12 lg:mr-10">
                     <h4 class="font-primary text-dark-200 font-semibold text-h5 md:text-h4">Development</h4>
                     <div class="flex flex-col gap-4 lg:gap-6">
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Poza moją główną profesją, która jest digital design, mam również pasję i umiejętności w dziedzinie programowania webowego. Programowanie to dla mnie nie tylko praca, ale również sposób wyrażania kreatywności i tworzenia czegoś wartościowego.</p>
                        <p class="text-p2 md:text-p1 text-dark-400 font-primary font-medium">Dzięki nowoczesnym technologiom jestem w stanie tworzyć strony internetowe od zera, począwszy od projektu graficznego aż po pełne, działające rozwiązania online. Moje umiejętności pozwalają mi dostosowywać projekty do indywidualnych potrzeb klientów, tworząc responsywne i atrakcyjne witryny, które zapewniają użytkownikom wyjątkowe doświadczenia.</p>
                     </div>
                     <div>
                        <ButtonOutline size="medium" on:click={() => modalStore.update(n => ({ currentPage: 1, isOpen: true }))}>Szczegółowa oferta</ButtonOutline>
                     </div>
                  </div>
               </div>
            </div>


         </div>
      </div>
      
   </section>
</section>

<Footer />

<!-- Modal with skills components -->
<ModalWithSkills />