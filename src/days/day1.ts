import { readFile } from "../utils/index.js";

export async function day1(): Promise<void> {
    const file = await readFile("biginput.txt");
    const calories = file.split("\n\n").map((x) => x.split("\n")).map((x) => x.map(x => parseInt(x)));
    const topThree = calories.map((i) => {return i.reduce((a,b) => a+b)}).sort((a,b) => b-a).slice(0,3);
    console.log(topThree[0], topThree.reduce((a,b) => a+b));
    // let buf: number[] = [];
    // let calories: number[][] = []
    // for (let i in input) {
    //     if (input[i] === "") {
    //         calories.push(buf);
    //         buf = [];
    //         continue;
    //     }
    //     buf.push(parseInt(input[i]));
    // }
    // console.log(calories.map((i) => {return i.reduce((a,b) => a+b)}).reduce((a,b) => Math.max(a,b)));
    // console.log(calories.map((i) => {return i.reduce((a,b) => a+b)}).sort((a,b) => b-a).slice(0,3).reduce((a,b) => a+b));
}

await day1()