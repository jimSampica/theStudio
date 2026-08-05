"use client";

import React from "react";

export default function Page() {

    const START_SECONDS = 180;

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
        "Obnoxious",
        "Proud",
        "Worried",
        "Groovy",
        "Heroic",
        "Futuristic",
        "Melting",
        "Average",
        "Fantasy",
        "Flying",
        "Peaceful",
        "Ferocious",
        "Bold",
        "Sleepy",
        "Rambunctious",
        "Dull",
        "Elaborate"];

    const nouns = [
        "Dragon",
        "Shoe",
        "Sandwich",
        "Cake",
        "Balloon",
        "Baby",
        "Shirt",
        "Flower",
        "Room",
        "Pizza",
        "Dog",
        "Horse",
        "Fruit",
        "Truck",
        "Mouse",
        "Guitar",
        "Crayon",
        "Mop",
        "Cloud",
        "Ghost",
        "Hair",
        "Plant",
        "Hippo",
        "Garbage",
        "Monster",
        "Party",
        "Parrot",
        "Motorcycle",
        "Book",
        "Friend",
        "Phone",
        "Pumpkin",
        "Gnome",
        "Fish",
        "Chair",
        "Bug",
        "Robot",
        "Toy",
        "Duck",
        "Giraffe",
        "Pancake",
        "Boat",
        "Mountain",
        "Cottage",
        "Eye",
        "Camper",
        "Door",
        "Cat",
        "Chicken",
        "Character",
        "Astronaut",
        "Sun",
        "Beast",
        "Tattoo",
        "Cartoon",
        "Tool",
        "Park",
        "Frog",
        "Kite",
        "Dinosaur",
        "Superhero",
        "Octopus",
        "Athlete",
        "Planet",
        "Group",
        "Snack",
        "Cowboy",
        "Doll",
        "Emoji",
        "Castle",
        "Farm",
        "Pond",
        "Llama",
        "Treasure",
        "Garden",
        "Snowman",
        "Treehouse",
        "Beverage",
        "Discovery",
        "Beach",
        "Hat",
        "Bling",
        "Spider",
        "Map"];

    const [prompt, setPrompt] = React.useState("");
    const [timeLeft, setTimeLeft] = React.useState<number | null>(null);
    const [gameOver, setGameOver] = React.useState(false);

    React.useEffect(() => {
        if (timeLeft === null || timeLeft <= 0) return;

        const timerId = window.setInterval(() => {
            setTimeLeft((current) => {
                if (current === null) return null;
                return current - 1;
            });
        }, 1000);

        return () => window.clearInterval(timerId);
    }, [timeLeft]);

    React.useEffect(() => {
        if (timeLeft === 0) {
            setGameOver(true);
        }
    }, [timeLeft]);

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function formatTime(totalSeconds: number) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    function generatePrompt() {
        var prompt = `${adjectives[getRandomInt(adjectives.length - 1)]} ${nouns[getRandomInt(nouns.length - 1)]}`;
        setPrompt(prompt);
        setGameOver(false);
        setTimeLeft(START_SECONDS);
    }

    function renderPrompt() {
        if (prompt)
            return (<p className="d-inline">Your prompt is ... <em className="display-5">{prompt}</em></p>);
    }

    return (
        <main className="container">
            <h2 className="my-3">Prompt Generator</h2>
            <button className="btn btn-primary my-4" onClick={generatePrompt}>Generate Prompt</button>
            <div>
                {renderPrompt()}
            </div>
            {timeLeft !== null && !gameOver && (
                <div className="mt-3 fs-2">Time left: {formatTime(timeLeft)}</div>
            )}
            {gameOver && (
                <div className="mt-3 text-danger fw-bold fs-2">GAME OVER</div>
            )}
        </main>
    );
}