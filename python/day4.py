lines = open('../inputs/day4.txt', 'r').read().split("\n")

lines = [[[int(v) for v in x.split("-")] for x in line.split(',')] for line in lines]
part1 = []
part2 = []
for line in lines:
    first = [x for x in range(line[0][0], line[0][1] + 1)]
    second = [x for x in range(line[1][0], line[1][1] + 1)]
    if first[0] <= second[0] and first[len(first) - 1] >= second[len(second) - 1]:
        part2.append(1)
        part1.append(1)
    elif second[0] <= first[0] and second[len(second) - 1] >= first[len(first) - 1]:
        part2.append(1)
        part1.append(1)
    else:
        if first[0] <= second[0] and first[len(first) - 1] >= second[0]:
            part2.append(1)
        elif second[0] <= first[0] and second[len(second) - 1] >= first[0]:
            part2.append(1)
        else:
            part2.append(0)
            part1.append(0)

print(sum(part2), sum(part1))