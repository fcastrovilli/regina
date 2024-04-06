<script lang="ts">
	// import Synth from '$lib/synth.svelte';
	import Colors from '$lib/colors.svelte';
	import { all_notes } from '$lib/store';
</script>

<!-- <div class="p-4 w-full space-y-4">
	<Synth />
</div> -->

<div class="h-screen w-screen grid lg:grid-cols-4 grid-cols-2">
	{#each $all_notes as voice}
		<Colors {voice} />
	{/each}
</div>
