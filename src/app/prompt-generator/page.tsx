'use client';

export default function Page() {

    const adjectives = [
        "Silly",
        "Antique",
        "Happy",
        "Pretty",
        "Strong",
        "Amazing",
        "Giant",
        "Mini",
        "Clean",
        "Sloppy",
        "Spicy",
        "Simple",
        "Challenging",
        "Playful",
        "Cheerful",
        "Gloomy",
        "Expensive",
        "Broken",
        "Mad",
        "Cute",
        "Sus",
        "Unique",
        "Lovable",
        "Cold",
        "Soft",
        "Creepy",
        "Glowing",
        "Colorful",
        "Undercover",
        "Musical",
        "Obnoxious"
    ];

    function generatePrompt() {
        console.log(adjectives[0]);
    }

    return (
        <main className="container">
            <h2 className="my-3">Prompt Generator</h2>

            <button className="btn btn-primary" onClick={generatePrompt}>Generate Prompt</button>
        </main>
    );
}