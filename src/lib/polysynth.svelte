<script lang="ts">
	import * as Tone from 'tone';
	const poly = new Tone.PolySynth().toDestination();
	import { settings } from './store';
	import Scale from '@tonaljs/scale';
	import Note from '@tonaljs/note';

	$: selected_scale = Scale.get($settings.scale);

	$: {
		poly.set({
			envelope: {
				...$settings.synth_options
			},
			volume: -10
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
			on:contextmenu|preventDefault={() => {
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
	<button
		on:contextmenu|preventDefault={() => {
			return false;
		}}
		on:pointerdown={() => attack(Note.transpose(selected_scale.notes[0], '8P'))}
		on:pointerup={() => release(Note.transpose(selected_scale.notes[0], '8P'))}
		on:pointerleave={() => release(Note.transpose(selected_scale.notes[0], '8P'))}
		class="btn variant-filled px-6 py-2 h3 w-full max-w-sm"
	>
		{Note.transpose(selected_scale.notes[0], '8P')}
	</button>
</div>
