import { readFile } from "../utils/index.js";

export async function day1(): Promise<void> {
    const file = await readFile("biginput.txt");
    const calories = file.split("\n\n").map((x) => x.split("\n")).map((x) => x.map(x => parseInt(x)));
    const topThree = calories.map((i) => {return i.reduce((a,b) => a+b)}).sort((a,b) => b-a).slice(0,3);
    console.log(topThree[0], topThree.reduce((a,b) => a+b));
}

await day1()