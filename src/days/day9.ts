import { readFile } from "../utils/index.js";

async function day9() {
    const input = await readFile("day9.txt");
    const split = input.split("\n").map((x) => x.split(" "));
    // const map: string[][] = [["s"]];
    let headPos = [0, 0]
    let tailPos = [0, 0]
    let moves: number[][][] = [];
    for (let i in split) {
        switch (split[i][0]) {
            case "U":
                console.log("UP", split[i][1]);
                // if (map[currentLevel] === undefined) {
                headPos[1] += parseInt(split[i][1]);
                tailPos[1] += parseInt(split[i][1]) - 1
                if (headPos[0] > tailPos[0]) {
                    tailPos[0] += 1;
                }
                // }
                break;
            case "D":
                console.log("DOWN", split[i][1]);
                // if (map[currentLevel] === undefined) {
                headPos[1] -= parseInt(split[i][1]);
                tailPos[1] -= parseInt(split[i][1]) - 1;
                if (headPos[0] > tailPos[0]) {
                    tailPos[0] += 1;
                } else if (headPos[0] < tailPos[0]) {
                    tailPos[0] -= 1;
                }
                // }
                break;
            case "L":
                console.log("LEFT", split[i][1]);
                // if (map[currentLevel] === undefined) {
                headPos[0] -= parseInt(split[i][1])
                tailPos[0] -= parseInt(split[i][1]) - 1;
                if (headPos[1] > tailPos[1]) {
                    tailPos[1] += 1;
                }
                if (headPos[1] < tailPos[1]) {
                    tailPos[1] -= 1;
                }
                // }
                break;
            case "R":
                console.log("RIGHT", split[i][1]);
                // if (map[currentLevel] === undefined) {
                headPos[0] += parseInt(split[i][1]);
                tailPos[0] += parseInt(split[i][1]) - 1;
                if (headPos[1] > tailPos[1]) {
                    tailPos[1] += 1;
                }
                if (headPos[1] < tailPos[1]) {
                    tailPos[1] -= 1;
                }
                // }
                break;
        }
        console.log(headPos, tailPos);
    }
}

function graphBoard() {
    
}
await day9();