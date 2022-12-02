use std::fs;

fn main() {
    let contents =
        fs::read_to_string("../../inputs/biginput.txt").expect("Something went wrong reading the file");
    let split: Vec<Vec<i32>> = contents.split("\n\n").map(|s| s.split("\n").map(|s| s.parse::<i32>().expect("test")).collect()).collect();
    let mut sorted: Vec<i32> = split.iter().map(|n| n.iter().sum()).collect();
    sorted.sort();
    let top_three = sorted.iter().rev().take(3).collect::<Vec<&i32>>();
    let sum = top_three.iter().map(|n| **n).sum::<i32>();
    println!("{:?} {}", top_three[0], sum);
}
