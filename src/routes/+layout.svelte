<script lang="ts">
	import '../app.postcss';
	import Start from '$lib/start.svelte';
	import { app_started } from '$lib/store';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import Settings from '$lib/settings.svelte';

	initializeStores();
</script>

{#if $app_started}
	<Drawer>
		<Settings />
	</Drawer>
	<slot />
{:else}
	<Start />
{/if}
