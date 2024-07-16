"use client";

import React from "react";

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
        "Obnoxious"];

    const nouns = [
        "Dragon",
        "Shoe",
        "Sandwich",
        "Cake",
        "Balloon",
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
        "Superhero"];

    const [prompt, setPrompt] = React.useState("");

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function generatePrompt() {
        var prompt = `${adjectives[getRandomInt(adjectives.length - 1)]} ${nouns[getRandomInt(nouns.length - 1)]}`;
        setPrompt(prompt);
    }

    function renderPrompt(){
        if(prompt)
            return (<p className="d-inline">Your prompt is ... <span className="display-5">{prompt}</span></p>);
    }

    return (
        <main className="container">
            <h2 className="my-3">Prompt Generator</h2>
            <button className="btn btn-primary my-4" onClick={generatePrompt}>Generate Prompt</button>
            <div className="my-4">
                {renderPrompt()}
            </div>
        </main>
    );
}