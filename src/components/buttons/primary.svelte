<script lang="ts">
   export let size: string = "large";
   export let type: string = "default";
   export let link: string = "#";
   export let submit: string = "false";
</script>

{#if submit === "true"}
<input type="submit" class="text-dark-950 bg-dark-200 text-center hover:translate-y-0.5 duration-200 ease-primary hover:bg-dark-300 active:scale-95 focus:outline-none font-semibold text-button rounded-full text-base
{size === "large" ? 'px-8 py-5' : (size === "medium" ? 'px-7 py-4' : 'px-5 py-3' )}" value="Wyślij zapytanie" />
{:else}
<a on:click href="{link}" type="button" class="text-dark-950 flex justify-center bg-dark-200 text-center hover:translate-y-0.5 duration-200 ease-primary hover:bg-dark-300 active:scale-95 focus:outline-none font-semibold text-button rounded-full text-base
{size === "large" ? 'px-8 py-5' : (size === "medium" ? 'px-7 py-4' : 'px-5 py-3' )}"><slot /></a>
{/if}