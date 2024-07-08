<script lang="ts">
	import Polysynth from '$lib/polysynth.svelte';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	const drawerSettings: DrawerSettings = {
		position: 'right',
		width: 'w-full max-w-sm md:max-w-md',
		padding: 'pl-20 py-4'
	};
</script>

<div class="fixed top-5 left-5">
	<button on:click={() => drawerStore.open(drawerSettings)} class="btn variant-filled"
		>Settings</button
	>
</div>
<Polysynth />
