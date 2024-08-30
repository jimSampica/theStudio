export const AllAnswers = [
    "cupboard",
    "faucet",
    "gluegun",
    "kiln",
    "saw",
    "spill",
    "tableSitting",
    "scissors",
    "cutting",
    "flipflop",
    "bookbag",
    "knife",
    "drink",
    "cup",
    "candybar",
    "laptop",
    "bottle",
    "cord"
] as const;

export type Answer = typeof AllAnswers[number];