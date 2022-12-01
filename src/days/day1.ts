import { readFile } from "../utils/index.js";

export async function day1(): Promise<void> {
    const file = await readFile("day1.txt");
    const calories = file.split("\n\n").map((x) => x.split("\n")).map((x) => x.map(x => parseInt(x)));
    const highest = calories.map((group) => group.reduce((a,b) => a+b)).reduce((a,b) => Math.max(a,b));
    const topThree = calories.map((i) => {return i.reduce((a,b) => a+b)}).sort((a,b) => b-a).slice(0,3).reduce((a,b) => a+b) 
    console.log(highest);
    console.log(topThree)
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