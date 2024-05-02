<script lang="ts">
	import { synth_options, scale } from './store';

	const maxTime = 10;
</script>

<div class="flex flex-col gap-8 p-5">
	<div class="flex flex-col gap-2">
		<label for="scale" class="capitalize font-semibold text-xl">Scale</label>
		<input type="text" class="input p-2 px-4" id="scale" bind:value={$scale} />
	</div>
	<div class="flex flex-col gap-2">
		<label for="attack" class="capitalize font-semibold text-xl"
			>Attack <small class="px-4">{$synth_options.attack}s</small></label
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
		<label for="release" class="capitalize font-semibold text-xl"
			>Release <small class="px-4">{$synth_options.release}s</small></label
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
		<label for="decay" class="capitalize font-semibold text-xl"
			>Decay <small class="px-4">{$synth_options.decay}s</small></label
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
		<label for="sustain" class="capitalize font-semibold text-xl"
			>Sustain <small class="px-4">{$synth_options.sustain * 100}%</small></label
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
