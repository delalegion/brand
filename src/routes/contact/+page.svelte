<script lang="ts">
   import { goto } from "$app/navigation";
   import { tweened } from 'svelte/motion';
	import { cubicOut, sineInOut } from 'svelte/easing';
   import { onMount } from "svelte";
   import Brief from "../../components/tabs/brief.svelte";
   import Form from "../../components/tabs/form.svelte";
   import Footer from "../../components/footer/footer.svelte";

   let activeTab = 0;

   let opacity = tweened(0, { duration: 200, easing: sineInOut });

   onMount(() => {
      opacity.set(1);
   });

   function changeTab(tabId: number) {
      opacity.set(0).then(() => {
         activeTab = tabId;
         opacity.set(1);
      });
   }

   export let form;
</script>

<style>
   .fade {
      transition: opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
   }
</style>

<section id="contact">
   <div class="pt-12 sm:pt-14 md:pt-20 lg:pt-28 xl:pt-36 md:pb-12 lg:pb-14 xl:pb-20 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-24 sm:pr-5 px-4 mx-auto max-w-screen-xl relative">
      <h2 class="font-semibold text-h4 md:text-h3 lg:text-h2 xl:text-h1 text-dark-200 pb-3 md:pb-10 break-words">
         Zainteresowany <br />współpracą?
      </h2>

      <div class="flex flex-col md:flex-row gap-6 lg:gap-8 py-12">
         <div class="inline-flex items-center -mt-4 -ml-2 inp">
            <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="contact-type-one">
              <input type="radio" name="contact-type" checked on:click={() => changeTab(0)}
                class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                id="contact-type-one" />
              <span
                class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <div class="w-3 h-3 bg-secondary-400 flex rounded-full"></div>
              </span>
            </label>
            <label class="mt-px text-dark-200 cursor-pointer select-none font-primary font-medium text-p1" for="contact-type-one">Mam pomysł, który chciałbym z tobą zrealizować!</label>
         </div>
         <div class="inline-flex items-center -mt-4 -ml-2 inp">
            <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="contact-type-two">
              <input type="radio" name="contact-type" on:click={() => changeTab(1)}
                class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                id="contact-type-two" />
              <span
                class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <div class="w-3 h-3 bg-secondary-400 flex rounded-full"></div>
              </span>
            </label>
            <label class="mt-px text-dark-200 cursor-pointer select-none font-primary font-medium text-p1" for="contact-type-two">Chcę tylko napisać wiadomość</label>
         </div>
      </div>

      {#if 0 === activeTab}
         <div class="tab fade" style:opacity={$opacity}>
            <Brief form={form} />
         </div>
      {/if}
      {#if 1 === activeTab}
         <div class="tab fade" style:opacity={$opacity}>
            <Form form={form} />
         </div>
      {/if}

   </div>
</section>

<Footer />