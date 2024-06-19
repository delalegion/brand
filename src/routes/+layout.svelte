<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/navbar.svelte';
	import { onNavigate } from '$app/navigation';

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