import { writable } from 'svelte/store';

export const app_started = writable(false);

import * as Tone from 'tone';

export type synth_settings_type = {
	synth_options: ToneEnvelopeOptions;
	scale: string;
};

type ToneEnvelopeOptions = Omit<Tone.EnvelopeOptions, 'context'>;

// export const synth_options = writable<ToneEnvelopeOptions>({
// 	attack: 2,
// 	release: 2,
// 	attackCurve: 'linear',
// 	releaseCurve: 'exponential',
// 	decay: 2,
// 	sustain: 0.5,
// 	decayCurve: 'exponential'
// });

// export const scale = writable('C5 major');

export const settings = writable<synth_settings_type>({
	synth_options: {
		attack: 2,
		release: 2,
		attackCurve: 'linear',
		releaseCurve: 'exponential',
		decay: 2,
		sustain: 0.5,
		decayCurve: 'exponential'
	},
	scale: 'C5 major'
});

export const updateLocalStorage = (key: string, value: synth_settings_type) => {
	localStorage.setItem(key, JSON.stringify(value));
};
