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
    const part1 = []
    const part2 = [];
    for (let i in filled) {
        const [first, second] = filled[i];
        if (first[0] <= second[0] && first[first.length - 1] >= second[second.length - 1]) {
            part1.push(1)
            part2.push(1);
        } else if (second[0] <= first[0] && second[second.length - 1] >= first[first.length - 1]) {
            part1.push(1)
            part2.push(1)
        } else {
            if (first[0] <= second[0] && first[first.length - 1] >= second[0]) {
                part2.push(1);
            }
            if (second[0] <= first[0] && second[second.length - 1] >= first[0]) {
                part2.push(1);
            }
            part1.push(0)
            part2.push(0)
        }
    }
    console.log(part1.reduce((a,b) => a+b), part2.reduce((a, b) => a + b));
}

await day4()