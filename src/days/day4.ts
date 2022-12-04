import { readFile } from "../utils/index.js";

async function day4(): Promise<void> {
    const input = await readFile("day4.txt");
    const split = input.split("\n").map((x) => x.split(",")).map((x) => x.map((x) => x.split("-")));
    const filled = split.map((x) => {
        return x.map((v) => {
            const [start, end] = v;
            const range = Array.from(Array(parseInt(end) - parseInt(start) + 1).keys()).map((x) => x + parseInt(start));
            return range;
        })
    })
    const pairs = [];
    for (let i in filled) {
        const [first, second] = filled[i];
        if (first[0] <= second[0] && first[first.length - 1] >= second[second.length - 1]) {
            console.log("first fully overlaps", filled.indexOf(filled[i]));
            pairs.push(1);
        } else if (second[0] <= first[0] && second[second.length - 1] >= first[first.length - 1]) {
            console.log("second fully overlaps", filled.indexOf(filled[i]));
            pairs.push(1)
        } else {
            // check to see if first and second partially overlap each other
            if (first[0] <= second[0] && first[first.length - 1] >= second[0]) {
                console.log("first partially overlaps", filled.indexOf(filled[i]));
                pairs.push(1);
            }
            if (second[0] <= first[0] && second[second.length - 1] >= first[0]) {
                console.log("second partially overlaps", filled.indexOf(filled[i]));
                pairs.push(1);
            }
            pairs.push(0)
        }
    }
    console.log(pairs.reduce((a, b) => a + b));
}

await day4()