<script lang="ts">
	import * as Tone from 'tone';
	export let volume: number = -100;
	export let osc: Tone.Oscillator | null = null;

	const updateVolume = () => {
		if (!osc) return;
		osc.volume.linearRampTo(volume, 0.1);
	};
</script>

<label for="volume" class="font-semibold text-slate-400">Volume</label>
<p class="h1 text-center">{volume} dB</p>
<input
	type="range"
	on:input={updateVolume}
	name="volume"
	bind:value={volume}
	min={-100}
	max={-3}
	step={0.1}
/>
