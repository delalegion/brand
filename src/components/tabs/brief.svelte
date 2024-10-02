<script lang="ts">
   import { enhance } from '$app/forms';
   import { fade } from 'svelte/transition';
   import { sineIn } from 'svelte/easing';
   import { browser } from '$app/environment';

   const budgetFirst: string = '< 5 tysięcy';
   const budgetMiddle: string = 'Od 5 do 15 tys.';
   const budgetLast: string = '> 15 tys.';

   export let form;

   const scrollToErrorMessage = () => {
      if (browser) {
         gsap.to(window, { duration: 1, scrollTo: '#info' });
      }
   }

   $: form && scrollToErrorMessage();

   import Button from '../../components/buttons/primary.svelte';
   import gsap from 'gsap';
</script> 
 
      <div class="flex py-2 md:py-5 lg:py-10">
         <h5 class="font-medium text-h6 md:text-h6 lg:text-h6 xl:text-h5 text-dark-200 max-w-[700px]">Uzupełnij brief swoimi pomysłami, a zamienię je w przepiękną opowieść, która oczaruje świat!</h5>
      </div>

      <form method="POST" action="?/brief" class="flex py-10 max-w-[580px]" use:enhance>
         <div class="col-span-3">

            {#if form?.success}<p id="info" class="w-full p-4 bg-green-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Wiadomość wysłana. Odpowiem jak najszybciej będzie to mozliwe. W razie potrzeby szybkiego kontaktu zapraszam dzwonić na podany numer telefonu: 782788066</p>{/if}
            {#if form?.nameError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Pole imię / firma jest wymagane i musi zawierać conajmniej 5 znaków.</p>{/if}
            {#if form?.emailError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Pole email jest wymagane i musi zawierać prawidłowy adres email.</p>{/if}
            {#if form?.topicError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}
            >Pole temat, powód kontaktu jest wymagane i musi zawierać conajmniej 5 znaków.</p>{/if}
            {#if form?.phoneError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Pole numer telefonu może zawierać jedynie cyfry.</p>{/if}
            {#if form?.messageError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Pole treść wiadomości jest wymagane i musi zawierać conajmniej 5 znaków.</p>{/if}
            {#if form?.checkboxError}<p id="info" class="w-full p-4 bg-red-800 rounded-lg text-gray-200 col-span-6 lg:col-span-12" transition:fade={{ easing: sineIn, duration: 300 }}>Aby wysłać wiadomość musisz zaakceptować zgodę na przetwarzanie danych.</p>{/if}

            <p class="font-medium text-p1 text-dark-200 my-6">Budżet:</p>
            <div class="flex flex-row gap-6 lg:gap-8 flex-wrap">

               <div class="inline-flex items-center -mt-4 -ml-2 inp">
                  <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="budget-first">
                    <input type="radio" name="budget-type" checked
                      class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10 "
                      id="budget-first" value="< 5 tysięcy" />
                    <span
                      class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <div class="w-3 h-3 bg-secondary-400 flex rounded-full"></div>
                    </span>
                  </label>
                  <label class="mt-px text-dark-200 cursor-pointer select-none font-primary font-medium text-p1" for="budget-first">{ budgetFirst }</label>
               </div>

               <div class="inline-flex items-center -mt-4 -ml-2 inp">
                  <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="budget-middle">
                    <input type="radio" name="budget-type"
                      class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                      id="budget-middle" value="Od 5 do 15 tys." />
                    <span
                      class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <div class="w-3 h-3 bg-secondary-400 flex rounded-full"></div>
                    </span>
                  </label>
                  <label class="mt-px text-dark-200 cursor-pointer select-none font-primary font-medium text-p1" for="budget-middle">{ budgetMiddle }</label>
               </div>

               <div class="inline-flex items-center -mt-4 -ml-2 inp">
                  <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="budget-last">
                    <input type="radio" name="budget-type"
                      class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10"
                      id="budget-last" value="> 15 tys." />
                    <span
                      class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <div class="w-3 h-3 bg-secondary-400 flex rounded-full"></div>
                    </span>
                  </label>
                  <label class="mt-px text-dark-200 cursor-pointer select-none font-primary font-medium text-p1" for="budget-last">{ budgetLast }</label>
               </div>

            </div>

            <div class="flex py-10 gap-4 flex-col">
               <div class="relative h-16 w-full min-w-[200px] inp">
						<input placeholder="Temat, powód kontaktu *" name="topic"
						  class="peer h-full w-full border-2 border-dark-700 placeholder:text-dark-400 rounded-md bg-transparent px-3 md:px-6 pt-5 pb-0 font-primary font-semibold text-p1 text-dark-200 outline outline-0 transition-all placeholder-shown:border-dark-150 focus:border-dark-500 focus:outline-0 disabled:border-0 disabled:bg-dark-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute pl-3 md:pl-6 top-3 flex select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-dark-400 transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-placeholder-shown:text-dark-500 peer-focus:text-[11px] peer-disabled:peer-placeholder-shown:text-dark-50 placeholder-shown:text-dark-50">
						  Temat, powód kontaktu *
						</label>
					 </div>
                <div class="relative h-[180px] w-full min-w-[200px] inp">
						<textarea placeholder="Treść wiadomości *" name="message"
						  class="peer h-full w-full border-2 min-h-[180px] placeholder:text-dark-400 border-dark-700 rounded-md bg-transparent px-3 md:px-6 pt-7 pb-0 font-primary font-semibold text-p1 text-dark-200 outline outline-0 transition-all placeholder-shown:border-dark-150 focus:border-dark-500 focus:outline-0 disabled:border-0 disabled:bg-dark-50 placeholder:opacity-0 focus:placeholder:opacity-100"></textarea>
						<label
						  class="after:content[''] pointer-events-none absolute pl-3 md:pl-6 top-3 flex select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-dark-400 transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-placeholder-shown:text-dark-500 peer-focus:text-[11px] peer-disabled:peer-placeholder-shown:text-dark-50 placeholder:text-dark-50 placeholder-shown:text-dark-50">
						  Treść wiadomości *
						</label>
					 </div>
            </div>

            <div class="flex py-2 gap-4 flex-col">
               <div class="relative h-16 w-full min-w-[200px] inp">
						<input placeholder="Email *" name="email" type="email"
						  class="peer h-full w-full border-2 border-dark-700 placeholder:text-dark-400 rounded-md bg-transparent px-3 md:px-6 pt-5 pb-0 font-primary font-semibold text-p1 text-dark-200 outline outline-0 transition-all placeholder-shown:border-dark-150 focus:border-dark-500 focus:outline-0 disabled:border-0 disabled:bg-dark-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute pl-3 md:pl-6 top-3 flex select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-dark-400 transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-placeholder-shown:text-dark-500 peer-focus:text-[11px] peer-disabled:peer-placeholder-shown:text-dark-50 placeholder-shown:text-dark-50">
						  Email *
						</label>
               </div>
               <div class="relative h-16 w-full min-w-[200px] inp">
						<input placeholder="Imię / Firma *" name="name" type="text"
						  class="peer h-full w-full border-2 border-dark-700 placeholder:text-dark-400 rounded-md bg-transparent px-3 md:px-6 pt-5 pb-0 font-primary font-semibold text-p1 text-dark-200 outline outline-0 transition-all placeholder-shown:border-dark-500 focus:border-dark-500 focus:outline-0 disabled:border-0 disabled:bg-dark-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute pl-3 md:pl-6 top-3 flex select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-dark-400 transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-placeholder-shown:text-dark-500 peer-focus:text-[11px] peer-disabled:peer-placeholder-shown:text-dark-50 placeholder-shown:text-dark-50">
						  Imię / Firma *
						</label>
               </div>
               <div class="relative h-16 w-full min-w-[200px] inp">
						<input placeholder="Numer telefonu (opcjonalnie)" name="phone" type="phone"
						  class="peer h-full w-full border-2 border-dark-700 placeholder:text-dark-400 rounded-md bg-transparent px-3 md:px-6 pt-5 pb-0 font-primary font-semibold text-p1 text-dark-200 outline outline-0 transition-all placeholder-shown:border-dark-150 focus:border-dark-500 focus:outline-0 disabled:border-0 disabled:bg-dark-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
						<label
						  class="after:content[''] pointer-events-none absolute pl-3 md:pl-6 top-3 flex select-none !overflow-visible truncate text-[11px] font-semibold leading-tight text-dark-400 transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-dark-400 after:transition-transform after:duration-300 peer-placeholder-shown:text-[16px] peer-focus:top-2 peer-placeholder-shown:text-dark-500 peer-focus:text-[11px] peer-disabled:peer-placeholder-shown:text-dark-50 placeholder-shown:text-dark-50">
						  Numer telefonu (opcjonalnie)
						</label>
               </div>
               <div class="inline-flex items-center mt-2 mb-4 -ml-2 inp">
                  <label class="relative flex items-center p-2 rounded-full cursor-pointer" for="terms">
                    <input type="checkbox" name="terms"
                      class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-dark-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary-400 checked:bg-primary checked:before:bg-dark-900 hover:before:opacity-10 placeholder-shown:text-dark-50"
                      id="terms" />
                    <span
                      class="absolute text-secondary-400 flex items-center justify-center transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" stroke-width="1">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    </span>
                  </label>
                  <label class="mt-px text-dark-200 text-p2 cursor-pointer select-none font-primary font-medium placeholder-shown:text-dark-50" for="terms">Akceptuję politykę prywatności i wyrażam zgodę na przetwarzanie danych osobowych</label>
               </div>
               <div class="flex flex-row gap-10">
                  <Button size="medium" submit="true">Wyślij zapytanie</Button>
                  <!-- <div class="flex flex-row gap-2 justify-center items-center">
                     <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 5H19.75C21.483 5 22.8992 6.35645 22.9949 8.06558L23 8.25V17.75C23 19.483 21.6435 20.8992 19.9344 20.9949L19.75 21H6.25C4.51697 21 3.10075 19.6435 3.00514 17.9344L3 17.75V8.25C3 6.51697 4.35645 5.10075 6.06558 5.00514L6.25 5ZM21.5 10.373L13.3493 14.6637C13.1619 14.7623 12.9431 14.7764 12.7468 14.706L12.6507 14.6637L4.5 10.374V17.75C4.5 18.6682 5.20711 19.4212 6.10647 19.4942L6.25 19.5H19.75C20.6682 19.5 21.4212 18.7929 21.4942 17.8935L21.5 17.75V10.373ZM19.75 6.5H6.25C5.33183 6.5 4.57881 7.20711 4.5058 8.10647L4.5 8.25V8.679L13 13.1525L21.5 8.678V8.25C21.5 7.33183 20.7929 6.57881 19.8935 6.5058L19.75 6.5ZM6.01172 22C6.58925 22.9021 7.60021 23.5 8.75081 23.5H20.2508C23.1503 23.5 25.5008 21.1495 25.5008 18.25V10.75C25.5008 9.59941 24.9029 8.58846 24.0008 8.01093V18.25C24.0008 20.3211 22.3219 22 20.2508 22H6.01172Z" fill="#E1D7D7"/>
                     </svg>                                                   
                     <a href="mailto:kontakt@hubertkruk.pl" class="mt-px text-dark-200 text-h6 cursor-pointer font-primary font-medium">kontakt@hubertkruk.pl</a>
                  </div> -->
               </div>
            </div>

         </div>
      </form>