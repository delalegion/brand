<script>
    export let size = 'p1';
    export let weight = 'font-medium';
    export let font = 'font-primary';
    export let color = 'text-dark-200';
</script>

{#if size === 'h1'}
    <h1 class="text-h1 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'h2'}
    <h1 class="text-h2 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'h3'}
    <h1 class="text-h3 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'h4'}
    <h1 class="text-h4 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'h5'}
    <h1 class="text-h5 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'h6'}
    <h1 class="text-h6 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'p1'}
    <h1 class="text-p1 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'p2'}
    <h1 class="text-p2 {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'button'}
    <h1 class="text-button {color} {font} {weight}">
        <slot />
    </h1>
{/if}
{#if size === 'caption'}
    <h1 class="text-caption {color} {font} {weight}">
        <slot />
    </h1>
{/if}