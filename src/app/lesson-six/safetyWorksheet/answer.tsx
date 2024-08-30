export const AllAnswers = [
    "cupboard",
    "faucet",
    "gluegun",
    "kiln",
    "saw",
    "spill",
    "tableSitting"
] as const;

export type Answer = typeof AllAnswers[number];