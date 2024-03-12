<script lang="ts">
	import * as Tone from 'tone';
	export let frequencyValue = 440;

	export let osc: Tone.Oscillator | null = null;
	const updateFrequency = () => {
		if (!osc) return;
		osc.frequency.value = frequencyValue;
	};
</script>

<label for="frequency">Frequency</label>
<input
	type="range"
	on:input={updateFrequency}
	name="frequency"
	bind:value={frequencyValue}
	min={0}
	max={10000}
	step={1}
/>

<p class="h1 text-center">{frequencyValue} Hz</p>
