<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/navbar.svelte';
	import { onNavigate } from '$app/navigation';
   import { onMount } from 'svelte';
   import gsap from 'gsap';
   import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

	onMount(() => {
      gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(ScrollToPlugin);
   })

	onNavigate((navigation) => {
		if (!(document as any).startViewTransition) return;

		return new Promise((resolve) => {
			(document as any).startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<!-- Navbar with menu -->
<Navbar />

<main data-barba="wrapper">
    <slot />
</main>