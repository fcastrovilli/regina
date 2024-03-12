<script lang="ts">
	let start = false;
	import Synth from '$lib/synth.svelte';
</script>

<div class="p-4 w-full space-y-4">
	<button class="btn variant-ghost w-full" on:click={() => (start = !start)}
		>{start ? 'Stop' : 'Start'}</button
	>
	{#if start}
		<Synth />
	{/if}
</div>
