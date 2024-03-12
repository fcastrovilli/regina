<script lang="ts">
	import { onMount } from 'svelte';
	import * as Tone from 'tone';
	import Volume from './volume.svelte';
	import Frequency from './frequency.svelte';

	export let volume = -100;
	export let frequency = 440;

	let osc: Tone.Oscillator | null = null;

	$: status = osc?.state == 'started' ? '⏹' : '▶';
	onMount(() => {
		Tone.start();
		osc = new Tone.Oscillator(frequency, 'sine').toDestination();
		osc.volume.value = volume;
	});

	const toggleOsc = () => {
		if (!osc) return;
		osc.state === 'started' ? osc.stop() : osc.start();
		status = osc.state === 'started' ? '⏹' : '▶';
	};
</script>

<div class="card variant-ghost p-4 w-full flex flex-col h-full mx-auto justify-center items-center">
	{#if osc}
		<button on:click={toggleOsc} type="button" class="btn btn-icon variant-ghost uppercase">
			{status}
		</button>

		<!-- {#if osc.state === 'started'} -->
		<div class="space-y-2 w-full">
			<Volume {osc} bind:volume />
			<Frequency {osc} bind:frequencyValue={frequency} />
		</div>
		<!-- {/if} -->
	{/if}
</div>
