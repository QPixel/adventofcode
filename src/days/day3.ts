import { readFile } from "../utils/index.js";

export async function day3(): Promise<void> {
    const file = await readFile("day3.txt");

    // split the file into an array of strings
    const input = file.split("\n");
    const adjustedInput: string[][] = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 3 === 0 && i !== 0) {
           adjustedInput.push(input.slice(i-3, i));
        }
    }
    adjustedInput.push(input.slice(input.length-3, input.length));
    // split each line into array of characters
    const map = input.map((x) => {
        const part1 = x.slice(0, x.length / 2);
        const part2 = x.slice(x.length / 2, x.length);
        return [part1, part2];
    });
    // give a dictionary of priorities a-z then A-Z a: 1, b: 2, ..., Z: 52
    const priorities = {
        ...Object.fromEntries(Array.from(Array(26).keys()).map((x) => [String.fromCharCode(x + 97), x + 1])),
        ...Object.fromEntries(Array.from(Array(26).keys()).map((x) => [String.fromCharCode(x + 65), x + 27])),
    }
    const totals = [];
    for (let i in map) {
        const part1 = [...map[i][0]];
        const part2 = [...map[i][1]];

        const intersection = new Set(part1.filter(element => part2.includes(element)))

        totals.push(Array.from(intersection.values()).map((x) => priorities[x]).reduce((a, b) => a + b));
    }
    console.log(totals.reduce((a, b) => a + b));
    const newTotals = [];
    console.log(adjustedInput.length)
    for (let i in adjustedInput) {
        const part1 = adjustedInput[i][0].split("")
        const part2 = adjustedInput[i][1].split("")
        const part3 = adjustedInput[i][2].split("")

        // const intersection = part1.filter(element => part2.includes(element) && part3.includes(element));
        // console.log(intersection);
        
        const intersection = new Set(part1.filter(element => part2.includes(element) && part3.includes(element)))

        // console.log(intersection, priorities[intersection.values().next().value]);
        newTotals.push(Array.from(intersection.values()).map((x) => priorities[x])[0]);
    }
    console.log(newTotals.length)
    console.log(newTotals.reduce((a, b) => a + b));
}

await day3()