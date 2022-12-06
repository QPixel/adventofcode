import { readFile } from "../utils/index.js";

async function day5(): Promise<void> {
    const input = await readFile("day5.txt");
    const boxes = input.split("\n\n")[0].split("\n").map((x) => x.split(" ")).map((x) => x.map((x) => x.includes("[0]") ? x.replace("[0]", "") : x));
    boxes.pop();
    // convert list of rows into a list of columns
    const columns: string[][] = [];
    for (let row in boxes) {
        for (let col in boxes[row]) {
            if (!columns[col]) {
                columns[col] = [];
            }
            if (boxes[row][col] === "") {
                continue;
            }
            columns[col].push(boxes[row][col]);
        }
    }
    const moves = input.split("\n\n")[1].split("\n").map((x) => x.split(" ").filter((x) => {
        if (x.includes("move") || x.includes("from") || x.includes("to")) {
            return false;
        }
        return true;
    })).map((x) => x.map((x) => Number(x)));
    for (let [amount, from, to] of moves) {
        const fromCol = columns[from - 1];
        const toCol = columns[to - 1];
        const moved = fromCol.splice(0, amount)
        toCol.unshift(...moved);
        // uncomment for part 2
        // const moved = fromCol.splice(0, amount).reverse()
    }
    const joined = columns.map((x) => x[0]).join("");
    console.log(joined.replace(/(\[)|(\])/g, ""));
}

await day5();