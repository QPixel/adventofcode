import { readFile } from "../utils/index.js";

// type poss = [number, string];

async function day6(): Promise<void> {
    const input = await readFile("day6.txt");
    // loop over each character in the string
    const possibilities = []
    for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            // console.log(input[i])
            possibilities.push([i, input.slice(i - 4, i)]);
        }
    }
    let isDuplicate = false;
    for (let poss in possibilities) {
        new Set(possibilities[poss][1] as string).size === (possibilities[poss][1] as string).length ? isDuplicate = false : isDuplicate = true;
        if (!isDuplicate) {
            console.log(possibilities[poss][0]);
            break;
        }
    }
};

async function day6_part2(): Promise<void> {
    const input = await readFile("day6.txt");
    // loop over each character in the string
    const possibilities = []
    for (let i = 0; i <= input.length; i++) {
        const slice = input.slice(i, i + 14);
        possibilities.push([i+14, slice]);
    }
    let isDuplicate = false;
    for (let poss in possibilities) {
        if ((possibilities[poss][1] as string).length !== 14) {break}
        let set = new Set(possibilities[poss][1] as string);
        set.size === (possibilities[poss][1] as string).length ? isDuplicate = false : isDuplicate = true;
        if (!isDuplicate) {
            console.log(possibilities[poss][0]);
            break;
        }
    }
};
await day6();
await day6_part2();