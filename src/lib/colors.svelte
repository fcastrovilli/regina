<script lang="ts">
	import { onMount } from 'svelte';
	import * as Tone from 'tone';
	import type { voiceType } from './types';
	export let voice: voiceType;

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
		if (osc) {
			osc.start();
			osc.volume.value = -100;
		}
	}}
	on:touchmove={(e) => {
		const touch = e.changedTouches[0];

		const touchX = touch.clientX;
		const screenCenter = window.innerWidth / 2;
		value = Math.min(
			Math.max(Math.round(((touchX - screenCenter) / screenCenter) * 50 - 50), -100),
			0
		);
		if (osc) osc.volume.linearRampTo(value, 0.3);
	}}
	class="flex justify-center items-center"
>
	<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
		<g>
			<rect width="100" height="100" fill={voice.color} />
			<text x="10" y="60" font-size="35" fill="white">{value}db</text>
		</g>
	</svg>
</button>
