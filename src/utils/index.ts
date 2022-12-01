import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function readFile(file_name: string) {
    const path = resolve(`${__dirname}/../../inputs/`, file_name);
    console.log(path);
    const file = await fs.readFile(path, "utf-8");
    return file;
}
