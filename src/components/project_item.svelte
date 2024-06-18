<script lang="ts">
   import gsap from "gsap";
   import { onMount } from "svelte";

   export let name: string;
   export let pos: number = 1;
   export let scope: string[];
   export let image: string;
   
   onMount(() => {
      const imageContainer = document.querySelector('.project-image-' + pos)!;
      const projectContainer = document.querySelector('.project-item-' + pos)!;

      projectContainer.addEventListener("mouseenter", function () {
         gsap.to(imageContainer, {
            rotate: '2deg',
            left: '60',
            top: '-260px',
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            zIndex: '100'
         })
      })
      projectContainer.addEventListener("mouseleave", function () {
         gsap.to(imageContainer, {
            rotate: '12deg',
            left: '96',
            top: '-300px',
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            zIndex: '100'
         })
      })

   })

</script>

<div class="flex flex-column gap-11 border-t-2 border-dark-900 hover:border-dark-500 hover:border-t-2 duration-200 ease-primary pt-4 mb-8 relative project-item-{pos}">
   <div class="project-image-{pos} w-56 lg:w-72 h-48 lg:h-60 absolute top-[-260px] left-24 rotate-12 opacity-0 rounded-xl overflow-hidden pointer-events-none">
      <img src={image} alt="Project image cover" class="top-0 left-0 right-0 bottom-0 w-full h-full bg-cover pointer-events-none" />
   </div>
   <div class="flex flex-column sm:flex-row w-full justify-between flex-wrap gap-6">
      <div class="gap-6 flex flex-row">
         <p class="font-primary text-dark-200 font-semibold text-h6">0{pos}</p>
         <p class="font-primary text-dark-200 font-semibold text-h6">{name}</p>
      </div>
      <div class="gap-10 w-full sm:w-auto lg:gap-20 flex flex-row justify-between">
         <div class="gap-6 flex flex-row">
            {#each scope as item}
               <p class="font-primary text-dark-400 font-semibold text-p2 sm:text-p1">{item}</p>
            {/each}
         </div>
         <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.9997 3C14.4474 3 13.9997 3.44772 13.9997 4C13.9997 4.55228 14.4474 5 14.9997 5L25.5853 5L3.2968 27.2885C2.90628 27.679 2.90628 28.3122 3.2968 28.7027C3.68732 29.0932 4.32049 29.0932 4.71101 28.7027L26.9997 6.41401L26.9997 17C26.9997 17.5523 27.4474 18 27.9997 18C28.552 18 28.9997 17.5523 28.9997 17L28.9997 4C28.9997 3.44772 28.552 3 27.9997 3L14.9997 3Z" fill="#D1D1D1"/>
            </svg>                        
         </div>
      </div>
   </div>
</div> 