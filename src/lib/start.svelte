<script lang="ts">
	import { browser } from '$app/environment';
	import { app_started } from '$lib/store';
	import * as Tone from 'tone';

	async function handleClick() {
		if (browser) {
			await Tone.start();
			Tone.setContext(new Tone.Context({ latencyHint: 'balanced' }));
			$app_started = true;
		}
	}
</script>

<div class="h-screen w-screen flex items-center justify-center">
	<button class="btn variant-ringed p-10 rounded-full" on:click={handleClick}>
		<h1 class="h1">Start</h1>
	</button>
</div>
