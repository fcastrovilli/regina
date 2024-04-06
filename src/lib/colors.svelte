<script lang="ts">
	import { onMount } from 'svelte';
	import * as Tone from 'tone';
	import type { voiceType } from './types';
	export let voice: voiceType;

	let osc: Tone.Oscillator | undefined = undefined;
	let touchStartY: number = 0;
	let value: number = 0;

	onMount(() => {
		if (osc) return;
		import('tone').then((Tone) => {
			osc = new Tone.Oscillator(voice.note, 'sine').toDestination();
		});
	});
	// $: console.log(value);
</script>

<button
	on:touchstart={(e) => {
		touchStartY = e.changedTouches[0].clientY;
	}}
	on:touchmove={(e) => {
		const touch = e.changedTouches[0];
		const directionY = touchStartY < touch.clientY ? 'down' : 'up';
		// const directionX = touchStartX < touch.screenX ? 'left' : 'right';
		if (directionY == 'up' && value == 0) return;
		if (directionY == 'down' && value < 100) {
			value += 1;
		}
		if (directionY == 'up' && value > 0) value -= 1;
	}}
	class="flex justify-center items-center"
>
	<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
		<g>
			<rect width="100" height="100" fill={voice.color} />
			<text x="10" y="60" font-size="35" fill="white">{value}</text>
		</g>
		<!-- <g>
			<rect x="0" y="0" width="100" height="100" fill="red"></rect>
			<text x="0" y="50" font-family="Verdana" font-size="35" fill="blue">Hello</text>
		</g> -->
	</svg>
</button>
