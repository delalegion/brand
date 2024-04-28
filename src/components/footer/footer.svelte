<script lang="ts">
   import ButtonPrimary from '../buttons/primary.svelte';
   import ButtonOutline from '../buttons/outline.svelte';
</script>

<footer id="footer" class="max-w-screen-2xl py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 place-content-center px-4 sm:px-8 mx-auto">
   <h2 class="font-primary font-semibold text-h5 sm:text-h4 md:text-h3 lg:text-h2 text-dark-200">Chętny na współpracę?<br />Napisz do mnie!</h2>
   <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 mt-12 gap-8 md:gap-2">
      <div class="col-span-4 sm:col-span-6 md:col-span-8 lg:col-span-10">
         <a href="#" class="text-h6 md:text-h5 lg:text-h4 text-dark-200 pb-3 border-b-2 border-dark-200 font-semibold inline-flex items-center gap-2 md:gap-4">
            <span class="md:mt-1">
               <svg width="32" height="32" viewBox="0 0 32 32" class="w-4 md:w-6 lg:w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.25 3C14.5596 3 14 3.55964 14 4.25C14 4.94036 14.5596 5.5 15.25 5.5L24.7322 5.5L3.36612 26.866C2.87796 27.3542 2.87796 28.1457 3.36612 28.6338C3.85427 29.122 4.64573 29.122 5.13388 28.6338L26.5 7.26769L26.5 16.75C26.5 17.4404 27.0596 18 27.75 18C28.4404 18 29 17.4404 29 16.75L29 4.25C29 3.55964 28.4404 3 27.75 3L15.25 3Z" fill="#D1D1D1"/>
               </svg>
            </span>
            kontakt@hubertkruk.pl</a>
            <div>
               <div class="flex flex-col md:flex-row gap-4 mt-10 md:mt-14">
                  <ButtonOutline size="small">Formularz kontaktowy</ButtonOutline>
                  <ButtonPrimary size="small">Oferta</ButtonPrimary>
               </div>
            </div>
      </div>
      <div class="col-span-4 sm:col-span-6 md:col-span-4 lg:col-span-2">
         <p class="text-p2 text-dark-400 font-semibold">Zaobserwuj mnie</p>
         <ul class="flex gap-6 flex-col mt-4">
            <li><a href="#" class="font-semibold text-dark-200 text-h6 hover:text-dark-50">Behance</a></li>
            <li><a href="#" class="font-semibold text-dark-200 text-h6 hover:text-dark-50">Dribbble</a></li>
            <li><a href="#" class="font-semibold text-dark-200 text-h6 hover:text-dark-50">Instagram</a></li>
            <li><a href="#" class="font-semibold text-dark-200 text-h6 hover:text-dark-50">Github</a></li>
            <li><a href="#" class="font-semibold text-dark-200 text-h6 hover:text-dark-50">Linkedin</a></li>
         </ul>
      </div>
   </div>
   <div class="flex items-center flex-row gap-10 pt-16 md:pt-10">
      <svg width="73" height="46" viewBox="0 0 73 46" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M66.2138 31.2739L62.9465 35.8074C62.1732 36.8847 60.9203 37.5263 59.6014 37.5263C58.2825 37.5263 57.0296 36.8847 56.2562 35.8074L44.9798 20.1371L50.1234 8.47368H62.0233V0H51.2325V0.0121053L43.3492 17.8795L39.4105 26.8192L33.5775 40.0503V0H25.1846V32.9626L8.39287 9.64184V0H0V46H8.39287V13.7576L25.1786 37.0845V46H33.5715V45.9879L41.0351 29.0708L49.464 40.7826C51.814 44.045 55.6028 45.9939 59.6014 45.9939C63.6 45.9939 67.3888 44.045 69.7388 40.7826L73 36.2492L66.2138 31.2679V31.2739Z" fill="#B535FF"/>
      </svg>         
      <p class="text-dark-400 text-caption font-semibold">Hubert Kruk 2024 @ Wszelkie prawa zastrzeżone</p>
   </div>
</footer>