if __name__ == '__main__':
    lines = open('../inputs/day1.txt', 'r').read().split("\n\n")
    lines = [[int(x) for x in line.split()] for line in lines]
    lines = sorted([sum(line) for line in lines], reverse=True)[0:3]
    print(lines[0], sum(lines))