import { readFile } from "../utils/index.js";

type tree = {
    type: string,
    children: Array<{
        name: string,
        type: "dir" | "file",
        size: number
    }>,
    parent: string,
    size: number
}

export async function day7(): Promise<void> {
    const input = await readFile("day7.txt");
    const split = input.split("\n");
    let currentCommand = "";
    const path: string[] = [];
    const tree: Record<string, tree> = {};
    // todo clean up
    for (let i in split) {
        switch (split[i].slice(0, 1)) {
            case "$":
                const cmd = split[i].split(" ");
                switch (cmd[1]) {
                    case "cd":
                        if (cmd[2] === "..") {
                            path.pop();
                            continue
                        }
                        currentCommand = "cd";
                        if (cmd[2] !== "/") {
                            path.push(cmd[2]);
                        }
                        break;
                    case "ls":
                        currentCommand = "ls";
                        break;
                }
                break;
            default:
                if (currentCommand === "ls") {
                    const cmd = split[i].split(" ");
                    switch (cmd[0]) {
                        case "dir":
                            if (tree[`/${path.join("/")}`] === undefined) {
                                tree[`/${path.join("/")}`] = {
                                    type: "dir",
                                    children: [],
                                    parent: `/${path.slice(0, -1).join("/")}`,
                                    size: 0
                                }
                            }
                            if (path.join("/") === "") {
                                tree[`/${path.join("/")}`].children.push({ name: `/${cmd[1]}`, size: tree[cmd[1]] === undefined ? 0 : tree[cmd[1]].size, type: "dir" });
                            } else {
                                tree[`/${path.join("/")}`].children.push({ name: `/${path.join("/")}/${cmd[1]}`, size: tree[cmd[1]] === undefined ? 0 : tree[cmd[1]].size, type: "dir" });
                            }
                            break;
                        default:
                            if (tree[`/${path.join("/")}`] === undefined) {
                                tree[`/${path.join("/")}`] = {
                                    type: "dir",
                                    children: [],
                                    parent: `/${path.slice(0, -1).join("/")}`,
                                    size: 0
                                }
                            }
                            tree[`/${path.join("/")}`].size += Number(cmd[0]);
                            if (path.join("/") === "") {
                                tree[`/${path.join("/")}`].children.push({ name: `/${cmd[1]}`, size: Number(cmd[0]), type: "file" });
                            } else {
                                tree[`/${path.join("/")}`].children.push({ name: `/${path.join("/")}/${cmd[1]}`, size: Number(cmd[0]), type: "file" });
                            }
                            break;
                    }
                }
        }
    }
    const getSizeOfChildren = (branch: string) => {
        for (let child in tree[branch].children) {
            if (tree[branch].children[child].type === "dir") {
                getSizeOfChildren(tree[branch].children[child].name);
                tree[branch].children[child].size = tree[tree[branch].children[child].name].size;
                tree[branch].size += tree[tree[branch].children[child].name].size;
            }
        }
    }
    getSizeOfChildren("/");
    // part 1
    let sum = 0
    for (let i in tree) {
        if (tree[i].size <= 100000 && tree[i].type === "dir") {
            sum += tree[i].size;
        }
    }
    console.log("Sum of all directories with size <= 100000:", sum);
    // part 2
    const totalFreeSpace = 70000000 - tree["/"].size;
    const updateSpace = Math.abs(totalFreeSpace - 30000000);
    console.log("Total Free Space:", totalFreeSpace);
    console.log("Needed to free up Space:", updateSpace);
    const candidates = []
    for (let i in tree) {
        if (tree[i].size >= updateSpace && tree[i].size <= totalFreeSpace) {
            candidates.push(tree[i].size);
        }
    }
    candidates.sort((a, b) => b - a).reverse();
    console.log("Most likely candidate", candidates[0])
}


await day7();