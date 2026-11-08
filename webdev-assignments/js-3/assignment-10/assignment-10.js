"use strict";

const numberOfCandidates = parseInt(prompt("How many candidates?"));
const candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
    const name = prompt("Name for candidate " + (i+1));
    candidates.push(
        {
        name: name,
        votes: 0,
    });
}

const numberOfVoters = Number(prompt("How many voters?"));

for (let i = 0; i < numberOfVoters; i++) {
    const vote = prompt("Who do you vote for?");
    let candidate = candidates.find((item) => item.name === vote);

    if (candidate) {
        candidate.votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}