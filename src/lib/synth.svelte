<script lang="ts">
	let voices = 1;
	import Voice from '$lib/voice.svelte';
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
