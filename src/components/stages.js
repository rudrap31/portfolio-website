// Scroll stops. scrollProgress runs 0 → MAX_PROGRESS; each section fades in/out
// over FADE at the edges of its [start, end] window.
export const MAX_PROGRESS = 4;
const FADE = 0.15;

export const STAGES = {
  about:      { start: 0.75, end: 1.5,  target: 0.9 },
  experience: { start: 1.5,  end: 2.25, target: 1.85 },
  projects:   { start: 2.25, end: 3.0,  target: 2.6 },
  contact:    { start: 3.0,  end: Infinity, target: 3.5 },
};

const clamp01 = (v) => Math.min(1, Math.max(0, v));

export const stageOpacity = (progress, name) => {
  const { start, end } = STAGES[name];
  return clamp01((progress - start) / FADE) * clamp01((end - progress) / FADE);
};

export const activeStage = (progress) =>
  Object.keys(STAGES).find((name) => {
    const { start, end } = STAGES[name];
    return progress >= start && progress <= end;
  });

// The 3D camera path was tuned for 0 → 3 with About at ~1. Keep everything up to
// the end of About identical and compress the extra stops so the camera doesn't
// fly past the scene.
export const cameraProgress = (progress) => {
  const knee = STAGES.about.end;
  if (progress <= knee) return progress;
  return knee + (progress - knee) * ((3 - knee) / (MAX_PROGRESS - knee));
};
