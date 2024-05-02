<script lang="ts">
	import '../app.postcss';
	import Start from '$lib/start.svelte';
	import { app_started } from '$lib/store';
</script>

{#if $app_started}
	<slot />
{:else}
	<Start />
{/if}
