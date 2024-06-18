<script lang="ts">
  import { onDestroy } from "svelte";
  import { modalStore } from "../../stores/modal";

  // Modal content components
  import Digital from "./digital/digital.svelte";
  import Dev from "./dev/dev.svelte";
  import Brand from "./brand/brand.svelte";
  import { fade } from 'svelte/transition';
  import Loader from "./loader.svelte";

  let currentContent = Brand;
  
  const closeModal = () => {
    modalStore.update(n => ({
      currentPage: 4, isOpen: false
    }))
  }

  const loadDataOnChange = (data: Number) => {
    currentContent = Loader;
    
    setTimeout(() => {
      
      switch (data) {
        case 0:
          currentContent = Brand;
          break;
        case 1:
          currentContent = Dev;
          break;
        case 2:
          currentContent = Digital;
          break;
        case 3:
          currentContent = Loader;
          break;
        default:
          currentContent = Loader;
      }

    }, 1000)
  }

  $: loadDataOnChange($modalStore.currentPage);

  const unsubscribe = modalStore.subscribe(value => ({
    isOpen: value.isOpen,
    currentPage: value.currentPage
  }));

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#if $modalStore.isOpen}
  <div class="modal-backdrop" on:click={closeModal} transition:fade></div>
  <div class="p-10 md:p-14 lg:p-20 fixed top-0 right-0 left-0 bottom-0 z-40 box-border" transition:fade>
    <div class="z-50 flex hover:scale-105 active:scale-95 p-4 md:p-6 origin-center rounded-full hover:translate-y-0.5 duration-200 bg-dark-950 absolute right-4 md:right-8 lg:right-12 top-3 md:top-4 lg:top-10" on:click={closeModal}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1916_139)">
        <path d="M0.292892 1.7099C-0.0976321 1.31937 -0.0976321 0.686207 0.292892 0.295681C0.683416 -0.0948429 1.31658 -0.094843 1.70711 0.295681L11.9985 10.5871L22.2901 0.295562C22.6806 -0.0949622 23.3138 -0.0949622 23.7043 0.295562C24.0948 0.686086 24.0948 1.31925 23.7043 1.70977L13.4128 12.0013L23.7043 22.2929C24.0948 22.6834 24.0948 23.3166 23.7043 23.7071C23.3138 24.0976 22.6806 24.0976 22.2901 23.7071L11.9985 13.4155L1.70711 23.707C1.31658 24.0975 0.683418 24.0975 0.292893 23.707C-0.0976311 23.3165 -0.0976312 22.6833 0.292893 22.2928L10.5843 12.0013L0.292892 1.7099Z" fill="#6D6D6D"/>
        </g>
        <defs>
        <clipPath id="clip0_1916_139">
        <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"/>
        </clipPath>
        </defs>
      </svg>                
    </div>
    <div class="relative max-h-full overflow-auto max-w-2xl m-auto z-40 p-6 md:p-10 bg-dark-950 rounded-xl scroller">
      <!-- <button on:click={closeModal}>Close</button> -->
      <div class="fade" transition:fade>
        <svelte:component this={currentContent} />
      </div>
    </div>
  </div>
{/if}

<style>
    * {
    scrollbar-width: auto;
    scrollbar-color: #252525 #ffffff;
  }
  .scroller {
    --scrollbar-color-track: rgb(20,20,20,1);
    --scrollbar-color-thumb: rgba(0,0,0,0);
    transition: all 0.2s ease;
  }
  .scroller:hover {
    --scrollbar-color-thumb: rgba(50,50,50,1);
    transition: all 0.2s ease;
  }

  @supports (scrollbar-width: auto) {
    .scroller {
      scrollbar-color: var(--scrollbar-color-thumb) var(--scrollbar-color-track);
    }
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #252525;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #222222;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 40;
    height: 100%;
    background: rgba(61, 61, 61, 0.50);
    backdrop-filter: blur(10px);
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .fade {
    transition: opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
</style>