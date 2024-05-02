<script lang="ts">
	import { synth_options } from './store';
	const maxTime = 10;
</script>

<div class="flex flex-col gap-4 p-5">
	<div class="flex flex-col gap-2">
		<label for="attack" class="capitalize"
			>Attack <small class="px-4">{$synth_options.attack}</small></label
		>
		<input
			type="range"
			class="range"
			id="attack"
			min="0"
			max={maxTime}
			step="0.1"
			bind:value={$synth_options.attack}
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="release" class="capitalize"
			>Release <small class="px-4">{$synth_options.release}</small></label
		>
		<input
			type="range"
			class="range"
			id="release"
			min="0"
			max={maxTime}
			step="0.1"
			bind:value={$synth_options.release}
		/>
	</div>
	<div class="flex flex-col gap-2">
		<label for="decay" class="capitalize"
			>Decay <small class="px-4">{$synth_options.decay}</small></label
		>
		<input
			type="range"
			class="range"
			id="decay"
			min="0"
			max={maxTime}
			step="0.1"
			bind:value={$synth_options.decay}
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label for="sustain" class="capitalize"
			>Sustain <small class="px-4">{$synth_options.sustain}</small></label
		>
		<input
			type="range"
			class="range"
			id="sustain"
			min="0"
			max="1"
			step="0.1"
			bind:value={$synth_options.sustain}
		/>
	</div>
</div>
