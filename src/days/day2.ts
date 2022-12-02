import { readFile } from "../utils/index.js";

const scoring = {
    rock: 1,
    paper: 2,
    scissors: 3,
    won: 6,
    draw: 3,
    lost: 0,
}
const moves: Record<string, string> = {
    // rock
    "A": "X",
    // paper
    "B": "Y",
    // scissors
    "C": "Z",
}
function applyScoring(b: string) {
    switch (b) {
        case "X":
            return scoring.rock;
        case "Y":
            return scoring.paper;
        case "Z":
           return scoring.scissors;
    }
    return 0;
}
export async function day1(): Promise<void> {
    const file = await readFile("day2.txt");
    const input = file.split("\n");
    let p1_score = 0;
    for (let i in input) {
        let [a, b] = input[i].split(" ");
        if (moves[a] === b) {
            p1_score += scoring.draw
            p1_score += applyScoring(b);
        } else if (moves[a] === "X" && b === "Y" || moves[a] === "Y" && b === "Z" || moves[a] === "Z" && b === "X") {
           p1_score += applyScoring(b);
           p1_score += scoring.won;
        } else {
            p1_score += applyScoring(b);
        }
    }
    let p2_score = 0;
    for (let i in input) {
        let [a, b] = input[i].split(" ");
        switch (b) {
            // lose
            case "X":
                if (moves[a] === "X") {
                    p2_score += scoring.scissors;
                } else if (moves[a] === "Y") {
                    p2_score += scoring.rock;
                } else if (moves[a] === "Z") {
                    p2_score += scoring.paper;
                }
                break;
            // draw
            case "Y":
                p2_score += scoring.draw;
                if (moves[a] === "X") {
                    p2_score += scoring.rock;
                } else if (moves[a] === "Y") {
                    p2_score += scoring.paper;
                } else if (moves[a] === "Z") {
                    p2_score += scoring.scissors;
                }
                break;
            // win
            case "Z":
                p2_score += scoring.won;
                if (moves[a] === "X") {
                    p2_score += scoring.paper;
                } else if (moves[a] === "Y") {
                    p2_score += scoring.scissors;
                } else if (moves[a] === "Z") {
                    p2_score += scoring.rock;
                }
                break;
        }
    }
    console.log(p1_score, p2_score);
}

await day1()