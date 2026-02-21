import { readFile } from "../utils/index.js";

// used https://www.youtube.com/watch?v=xTGkP2GNmbQ
// used https://www.reddit.com/r/adventofcode/comments/18gqqbh/2023_day_12_part_1_solved_in_under_three_minutes/ 

let ans = 0;

// Key must be a string: Map uses reference equality for objects, so [1,2,3] !== [1,2,3]
const cache = new Map<string, number>();


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
        let springs = split_row[0];
        springs = [springs, springs, springs, springs, springs].join("?");
        let blocks = split_row[1].split(",").map(Number);
        blocks = [blocks, blocks, blocks, blocks, blocks].flat();

        const score = recursive_row_scan(springs, blocks, 0, 0, 0);
        console.log(springs, blocks, score);
        ans += score;


        cache.clear();
    }

    console.log(ans);

}


function recursive_row_scan(springs: string, blocks: number[], pos: number, bI: number, current: number): number {
    const key = `${pos},${bI},${current}`;
    if (cache.has(key)) {
        return cache.get(key)!;
    }
    // we have reached the end of the springs
    if (pos === springs.length) {
        // Valid end: all blocks used and no run in progress, OR we just finished the last block at the end (no trailing .)
        if (bI === blocks.length && current === 0) {
            return 1;
        }
        if (bI === blocks.length - 1 && blocks[bI] === current) {
            return 1;
        }
        return 0;
    }
    let row_ans = 0;
    for (const char of [".", "#"]) {
        if (springs[pos] !== char && springs[pos] !== "?") continue;
        if (char === ".") {
            if (current === 0) {
                row_ans += recursive_row_scan(springs, blocks, pos + 1, bI, 0);
            } else if (bI < blocks.length && blocks[bI] === current) {
                row_ans += recursive_row_scan(springs, blocks, pos + 1, bI + 1, 0);
            }
        } else {
            // char === "#" — only extend current block if we don't exceed its size
            if (bI < blocks.length && current + 1 <= blocks[bI]) {
                row_ans += recursive_row_scan(springs, blocks, pos + 1, bI, current + 1);
            }
        }
    }
    cache.set(key, row_ans);
    return row_ans;
}

// function row_scan(springs: string, blocks: number[]): boolean {
//     const found = [];
//     let current_pos = 0;
//     for (const spring of springs) {
//         if (spring === ".") {
//             if (current_pos > 0) {
//                 found.push(current_pos);
//             }
//             current_pos = 0;

//         } else if (spring === "#") {
//             current_pos++;
//         } else {
//             return false;
//         }
//     }
//     if (current_pos > 0) {
//         found.push(current_pos);
//     }
//     // console.log(found);
//     return found.length === blocks.length && found.every((value, index) => value === blocks[index]);
// }




await day12();