<script lang="ts">
	import { onMount } from 'svelte';
	import * as Tone from 'tone';
	import type { voiceType } from './types';
	export let voice: voiceType;

	let valueInDb: number = -Infinity;
	$: {
		valueInDb = 20 * Math.log10(value);
		valueInDb = Math.max(valueInDb, -3);
	}

	let osc: Tone.Oscillator | undefined = undefined;
	// let touchStart: number = 0;
	let value: number = -100;

	onMount(() => {
		if (osc) return;
		import('tone').then((Tone) => {
			osc = new Tone.Oscillator(voice.note, 'sine').toDestination();
		});
	});
</script>

<button
	on:touchstart={(e) => {
		// touchStart = e.changedTouches[0].clientX;
		if (osc) osc.start();
	}}
	on:touchmove={(e) => {
		const touch = e.changedTouches[0];

		const touchX = touch.clientX;
		const screenCenter = window.innerWidth / 2;
		value = Math.min(
			Math.max(Math.round(((touchX - screenCenter) / screenCenter) * 50 - 60), -100),
			0
		);
		if (osc) osc.volume.linearRampTo(value, 0.1);
	}}
	class="flex justify-center items-center"
>
	<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
		<g>
			<rect width="100" height="100" fill={voice.color} />
			<text x="10" y="60" font-size="35" fill="white">{value}</text>
		</g>
	</svg>
</button>
