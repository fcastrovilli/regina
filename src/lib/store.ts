import { writable } from 'svelte/store';

export const app_started = writable(false);

import * as Tone from 'tone';

type ToneEnvelopeOptions = Omit<Tone.EnvelopeOptions, 'context'>;

export const synth_options = writable<ToneEnvelopeOptions>({
	attack: 2,
	release: 2,
	attackCurve: 'linear',
	releaseCurve: 'exponential',
	decay: 2,
	sustain: 0.5,
	decayCurve: 'exponential'
});

export const scale = writable('C5 major');
