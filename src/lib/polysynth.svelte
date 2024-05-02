<script lang="ts">
	import * as Tone from 'tone';
	const poly = new Tone.PolySynth().toDestination();
	import { synth_options, scale } from './store';
	import Scale from '@tonaljs/scale';

	$: selected_scale = Scale.get($scale);

	$: {
		poly.set({
			envelope: {
				...$synth_options
			},
			volume: -24
		});
	}

	function attack(note: string) {
		poly.triggerAttack(note);
	}

	function release(note: string) {
		poly.triggerRelease(note);
	}
</script>

<div class="h-screen w-full flex flex-col items-center justify-center gap-4 p-4">
	{#each selected_scale.notes as note}
		<button
			on:contextmenu={() => {
				return false;
			}}
			on:pointerdown={() => attack(note)}
			on:pointerup={() => release(note)}
			on:pointerleave={() => release(note)}
			class="btn variant-filled px-6 py-2 h3 w-full max-w-sm"
		>
			{note}
		</button>
	{/each}
</div>
