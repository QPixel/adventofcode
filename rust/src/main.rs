use std::fs;

fn main() {
    let contents =
        fs::read_to_string("../../inputs/biginput.txt").expect("Something went wrong reading the file");
    let split: Vec<Vec<u32>> = contents.split("\n\n").map(|s| s.split("\n").map(|s| s.parse::<u32>().unwrap_or_default()).collect()).collect();
    let mut sorted: Vec<u32> = split.iter().map(|n| n.iter().sum()).collect();
    sorted.sort();
    let top_three = sorted.iter().rev().take(3).collect::<Vec<&u32>>();
    let sum = top_three.iter().map(|n| **n).sum::<u32>();
    println!("{:?} {}", top_three[0], sum);
}
