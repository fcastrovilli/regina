<script lang="ts">
	import * as Tone from 'tone';

	import { onMount } from 'svelte';
	import Voice from '$lib/voice.svelte';

	let voices = 1;

	onMount(() => {
		Tone.start();
	});
</script>

<div class="space-y-4">
	{#each Array(voices) as _}
		<Voice />
	{/each}
	<div class="card variant-soft-secondary">
		<button class="btn btn-primary" on:click={() => (voices += 1)}>Add Voice</button>
		<!-- <button class="btn btn-secondary" on:click={() => voices -= 1}>Remove Voice</button> -->
	</div>
</div>
