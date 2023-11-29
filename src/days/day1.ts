import { readFile } from "../utils/index.js";

export async function day1(): Promise<void> {
    const file = await readFile("day1.txt");
}

await day1()