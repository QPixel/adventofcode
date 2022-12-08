import { readFile } from "../utils/index.js";

async function day8(): Promise<void> {
    const input = await readFile("day8.txt");
    const split = input.split("\n");
    let part1_sum = 0;
    let part2_scores = [];
    for (let i = 1; i < split.length - 1; i++) {
        for (let j = 1; j < split.length - 1; j++) {
            // lets first compare all the rows between the current row and the top and make sure the entire path is clear
            let topClear = true;
            let topScore = 0;
            for (let k = i - 1; k >= 0; k--) {
                if (split[k][j] > split[i][j] || split[k][j] === split[i][j]) {
                    topClear = false;
                    topScore += 1;
                    break;
                } else {
                    topScore += 1;
                }
            }
            if (topClear) {
                console.log(`${split[i][j]} (${i}, ${j}) is visible on top because ${split[i][j]} > ${split[i - 1][j]}`)
            }
            let bottomClear = true;
            let bottomScore = 0;
            for (let k = i + 1; k < split.length; k++) {
                if (split[k][j] > split[i][j] || split[k][j] === split[i][j]) {
                    bottomClear = false;
                    bottomScore += 1;
                    break;
                } else {
                    bottomScore += 1;
                }
            }
            if (bottomClear) {
                console.log(`${split[i][j]} (${i}, ${j}) is visible on bottom because ${split[i][j]} > ${split[i + 1][j]}`)
            }
            let leftClear = true;
            let leftScore = 0;
            for (let k = j - 1; k >= 0; k--) {
                if (split[i][k] > split[i][j] || split[i][k] === split[i][j]) {
                    leftClear = false;
                    leftScore += 1;
                    break;
                } else {
                    leftScore += 1;
                }
            }
            if (leftClear) {
                console.log(`${split[i][j]} (${i}, ${j}) is visible on left because ${split[i][j]} > ${split[i][j - 1]}`)
            }
            let rightClear = true;
            let rightScore = 0;
            for (let k = j + 1; k < split.length; k++) {
                if (split[i][k] > split[i][j] || split[i][k] === split[i][j]) {
                    rightClear = false;
                    rightScore += 1;
                    break;
                } else {
                    rightScore += 1;
                }
            }
            if (rightClear) {
                console.log(`${split[i][j]} (${i}, ${j}) is visible on right because ${split[i][j]} > ${split[i][j + 1]}`)
            }
            if (topClear || bottomClear || leftClear || rightClear) {
                part1_sum += 1;
            }
            part2_scores.push(topScore * bottomScore * leftScore * rightScore);
        }
    }
    part1_sum += split[0].length + split[split.length - 1].length + split.length * 2 - 4;
    console.log(`Part 1: ${part1_sum}`);
    console.log(`Part 2: ${part2_scores.sort((a, b) => b - a)[0]}`);
}

await day8();