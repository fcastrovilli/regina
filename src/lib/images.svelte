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

<div class="flex items-center justify-center h-screen w-screen p-0">
	<section class="p-0 m-0">
		<div class="grid grid-cols-11">
			<div class="col-span-7 h-full">
				<button
					on:contextmenu={() => {
						return false;
					}}
					on:pointerdown={() => attack(selected_scale.notes[0])}
					on:pointerup={() => release(selected_scale.notes[0])}
					on:pointerleave={() => release(selected_scale.notes[0])}
				>
					<img class="h-auto max-w-full" src="./img/01_A.png" alt="Sezione 1" />
				</button>
				<div class="flex flex-row">
					<button
						on:contextmenu={() => {
							return false;
						}}
						on:pointerdown={() => attack(selected_scale.notes[3])}
						on:pointerup={() => release(selected_scale.notes[3])}
						on:pointerleave={() => release(selected_scale.notes[3])}
					>
						<img class="h-full w-auto" src="./img/04_F.png" alt="Sezione 4" />
					</button>
					<button
						on:contextmenu={() => {
							return false;
						}}
						on:pointerdown={() => attack(selected_scale.notes[4])}
						on:pointerup={() => release(selected_scale.notes[4])}
						on:pointerleave={() => release(selected_scale.notes[4])}
					>
						<img class="h-full w-auto" src="./img/05_D.png" alt="Sezione 5" />
					</button>
				</div>
			</div>
			<div class="grid col-span-4 grid-rows-1">
				<button
					on:contextmenu={() => {
						return false;
					}}
					on:pointerdown={() => attack(selected_scale.notes[1])}
					on:pointerup={() => release(selected_scale.notes[1])}
					on:pointerleave={() => release(selected_scale.notes[1])}
				>
					<img class="h-auto max-w-full" src="./img/02_B.png" alt="Sezione 2" />
				</button>
				<button
					on:contextmenu={() => {
						return false;
					}}
					on:pointerdown={() => attack(selected_scale.notes[2])}
					on:pointerup={() => release(selected_scale.notes[2])}
					on:pointerleave={() => release(selected_scale.notes[2])}
				>
					<img class="h-auto max-w-full" src="./img/03_G.png" alt="Sezione 3" />
				</button>
				<button
					on:contextmenu={() => {
						return false;
					}}
					on:pointerdown={() => attack(selected_scale.notes[5])}
					on:pointerup={() => release(selected_scale.notes[5])}
					on:pointerleave={() => release(selected_scale.notes[5])}
				>
					<img class="h-auto max-w-full" src="./img/06_C.png" alt="Sezione 6" />
				</button>
			</div>
		</div>
		<div class="flex flex-row w-full">
			<button
				on:contextmenu={() => {
					return false;
				}}
				on:pointerdown={() => attack(selected_scale.notes[6])}
				on:pointerup={() => release(selected_scale.notes[6])}
				on:pointerleave={() => release(selected_scale.notes[6])}
			>
				<img class="h-auto max-w-full" src="./img/07_Fsharp.png" alt="Sezione 7" />
			</button>
			<button
				on:contextmenu={() => {
					return false;
				}}
				on:pointerdown={() => attack(selected_scale.notes[0])}
				on:pointerup={() => release(selected_scale.notes[0])}
				on:pointerleave={() => release(selected_scale.notes[0])}
			>
				<img class="h-auto max-w-full" src="./img/08_E.png" alt="Sezione 8" />
			</button>
		</div>
	</section>
</div>
