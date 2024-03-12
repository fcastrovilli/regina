<script lang="ts">
	import { onMount } from 'svelte';
	import * as Tone from 'tone';
	import Volume from '$lib/volume.svelte';
	import Frequency from '$lib/frequency.svelte';
	import play from '$lib/icons/play.svg';
	import stop from '$lib/icons/stop.svg';

	export let volume = -100;
	export let frequency = 440;

	let osc: Tone.Oscillator | undefined = undefined;

	$: icon = osc?.state == 'started' ? stop : play;

	onMount(() => {
		if (osc) return;
		import('tone').then((Tone) => {
			osc = new Tone.Oscillator(frequency, 'sine').toDestination();
			osc.volume.value = volume;
		});
	});

	const toggleOsc = () => {
		if (!osc) return;
		osc.state === 'started' ? osc.stop() : osc.start();
		icon = osc.state === 'started' ? stop : play;
	};
</script>

<div class="card variant-ghost p-4 w-full flex flex-col h-full mx-auto justify-center items-center">
	{#if osc}
		<slot>Voice</slot>
		<button on:click={toggleOsc} type="button" class="btn btn-icon variant-ghost uppercase">
			<img src={icon} alt="" />
		</button>

		{#if osc.state === 'started'}
			<div class="space-y-2 w-full">
				<Volume {osc} bind:volume />
				<Frequency {osc} bind:frequencyValue={frequency} />
			</div>
		{/if}
	{/if}
</div>
