/**
 * Runs before first paint, ahead of hydration.
 *
 * Sets `html[data-motion="on"]` only when the reader has not asked for reduced
 * motion. All reveal styling keys off that attribute, so the failure mode of
 * this script — or of JavaScript generally — is fully visible content rather
 * than a blank page.
 */
export const motionInitScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.motion='on'}}catch(e){}`;
