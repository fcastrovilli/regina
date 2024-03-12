<script lang="ts">
	import Voice from '$lib/voice.svelte';

	let voices = 1;
</script>

<div class="space-y-4">
	{#each Array(voices) as _, i}
		<Voice>
			<slot>Voice {i + 1}</slot>
		</Voice>
	{/each}
	<button class="py-4 card variant-soft-secondary w-full" on:click={() => (voices += 1)}
		>Add Voice</button
	>
	<!-- <button class="btn btn-secondary" on:click={() => voices -= 1}>Remove Voice</button> -->
</div>
