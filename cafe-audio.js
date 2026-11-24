'use strict';

// Each cue is synthesized in the browser. Tuples describe the offset, duration,
// pitch or filter frequency, target pitch, and gain of each layer.
const CAFE_EFFECTS = {
  click: [['tone', 0, .08, 740, 620, .095]],
  bell: [['tone', 0, .24, 1047, 1047, .20], ['tone', .075, .22, 1319, 1319, .13]],
  prepare: [['noise', 0, .08, 1050, 0, .19], ['tone', .04, .11, 420, 345, .10]],
  grind: [['noise', 0, .16, 720, 0, .22], ['noise', .19, .14, 880, 0, .24]],
  pour: [['noise', 0, .37, 480, 0, .19], ['noise', .065, .28, 1520, 0, .12], ['tone', .14, .12, 680, 420, .065]],
  dough: [['noise', 0, .13, 420, 0, .32], ['tone', .02, .12, 200, 107, .15], ['noise', .17, .12, 330, 0, .22]],
  oven: [['noise', 0, .13, 460, 0, .29], ['tone', .13, .13, 940, 850, .15]],
  cut: [['noise', 0, .045, 2500, 0, .25], ['noise', .09, .042, 2250, 0, .26], ['noise', .17, .04, 2700, 0, .21]],
  mix: [['noise', 0, .13, 1350, 0, .20], ['noise', .15, .14, 900, 0, .22], ['tone', .24, .10, 365, 260, .075]],
  plate: [['tone', 0, .16, 1397, 1320, .17], ['tone', .012, .10, 2100, 1990, .09]],
  steep: [['tone', 0, .22, 530, 620, .10], ['noise', .04, .19, 1250, 0, .09]],
  wrong: [['tone', 0, .19, 320, 185, .20]],
  ready: [['tone', 0, .17, 659, 659, .15], ['tone', .11, .24, 880, 880, .15]],
  serve: [['tone', 0, .16, 523, 523, .16], ['tone', .09, .15, 659, 659, .14], ['tone', .18, .25, 784, 784, .12]],
  tip: [['tone', 0, .17, 659, 659, .14], ['tone', .08, .16, 784, 784, .15], ['tone', .18, .26, 1047, 1047, .14]],
  leave: [['tone', 0, .18, 430, 350, .14], ['tone', .14, .23, 350, 240, .12]],
  buy: [['tone', 0, .13, 1319, 1195, .15], ['tone', .10, .16, 988, 988, .12]],
  build: [['noise', 0, .05, 520, 0, .25], ['tone', .07, .12, 390, 330, .12], ['tone', .14, .23, 659, 659, .16]],
  dawn: [['tone', 0, .18, 392, 392, .15], ['tone', .13, .22, 523, 523, .14]],
  close: [['tone', 0, .22, 587, 587, .14], ['tone', .13, .28, 440, 440, .13]],
  chapter: [['tone', 0, .17, 523, 523, .16], ['tone', .09, .19, 659, 659, .15], ['tone', .19, .26, 1047, 1047, .14]]
};

class CafeAudio {
  constructor() {
    this.context = null;
    this.noise = null;
    this.voices = new Set();
  }

  unlock() {
    try {
      const AudioClass = globalThis.AudioContext ?? globalThis.webkitAudioContext;
      if (!AudioClass) return null;
      this.context ??= new AudioClass();
      if (this.context.state !== 'running') void this.context.resume().catch(() => {});
      return this.context;
    } catch {
      return null;
    }
  }

  effect(cue, delay = 0) {
    const layers = CAFE_EFFECTS[cue];
    if (!layers || this.voices.size >= 24) return;
    const context = this.unlock();
    if (!context) return;
    for (const [kind, start, duration, frequency, end, strength] of layers) {
      const at = context.currentTime + start + delay;
      const gain = context.createGain();
      gain.gain.setValueAtTime(.001, at);
      gain.gain.exponentialRampToValueAtTime(strength, at + .021);
      gain.gain.exponentialRampToValueAtTime(.001, at + duration);
      const source = kind === 'noise' ? context.createBufferSource() : context.createOscillator();
      if (kind === 'noise') {
        if (!this.noise) {
          this.noise = context.createBuffer(1, context.sampleRate, context.sampleRate);
          const samples = this.noise.getChannelData(0);
          for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
        }
        source.buffer = this.noise;
        const filter = context.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = frequency;
        filter.Q.value = .65;
        source.connect(filter).connect(gain);
      } else {
        source.type = 'sine';
        source.frequency.setValueAtTime(frequency, at);
        source.frequency.exponentialRampToValueAtTime(end, at + duration);
        source.connect(gain);
      }
      gain.connect(context.destination);
      this.voices.add(source);
      source.onended = () => {
        this.voices.delete(source);
        source.disconnect();
        gain.disconnect();
      };
      source.start(at);
      source.stop(at + duration + .015);
    }
  }

  stop() {
    for (const voice of this.voices) voice.stop();
    this.voices.clear();
  }
}
