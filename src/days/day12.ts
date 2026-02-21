import { readFile } from "../utils/index.js";

let ans = 0;

export async function day12(): Promise<void> {
    const file = await readFile("day12.txt");

    const rows = file.split("\n");

    // . = operational
    // # = damaged
    // ? = unknown

    // However, the engineer that produced the condition records also duplicated some of this information in a different format! 
    // After the list of springs for a given row, the size of each contiguous group of damaged springs is listed in the order those groups appear in the row. 
    // This list always accounts for every damaged spring, and each number is the entire size of its contiguous group 
    // (that is, groups are always separated by at least one operational spring: #### would always be 4, never 2,2).



    for (const row of rows) {
        const split_row = row.split(" ");
        const springs = split_row[0];
        const blocks = split_row[1].split(",").map(Number);

        const score = recursive_row_scan(springs, blocks, 0);
        console.log(springs, blocks, score, row_scan(springs, blocks));
        ans += score;


    }

    console.log(ans);

}


function recursive_row_scan(springs: string, blocks: number[], pos: number): number {
    if (pos === springs.length) {
        if (row_scan(springs, blocks)) {
            return 1
        }
        return 0;
    } else if (springs[pos] === "?") {
        return (recursive_row_scan(springs.slice(0, pos) + "#" + springs.slice(pos + 1), blocks, pos + 1)
            + recursive_row_scan(springs.slice(0, pos) + "." + springs.slice(pos + 1), blocks, pos + 1))
    }

    return recursive_row_scan(springs, blocks, pos + 1);
}

function row_scan(springs: string, blocks: number[]): boolean {
    const found = [];
    let current_pos = 0;
    for (const spring of springs) {
        if (spring === ".") {
            if (current_pos > 0) {
                found.push(current_pos);
            }
            current_pos = 0;

        } else if (spring === "#") {
            current_pos++;
        } else {
            return false;
        }
    }
    if (current_pos > 0) {
        found.push(current_pos);
    }
    // console.log(found);
    return found.length === blocks.length && found.every((value, index) => value === blocks[index]);
}

await day12();