declare module "vue-confetti/src/confetti.js";

interface ParticlesConfig {
    type : string,
    size : number,
    dropRate : number,
    colors : string[],
    url : string | null,
}

interface ConfettiConfig {
    particles : Partial<ParticlesConfig>[],
    defaultType : string,
    defaultSize : number,
    defaultDropRate : number,
    defaultColors : string[],
    canvasId : number,
    particlesPerFrame : number,
}
