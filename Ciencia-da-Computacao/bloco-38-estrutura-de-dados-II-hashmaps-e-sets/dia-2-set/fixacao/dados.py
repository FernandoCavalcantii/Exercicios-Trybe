# dado_1 = [x for x in range(1, 7)]
# dado_2 = [x for x in range(1, 7)]


# def get_seven_tuples(dado_1, dado_2):
#     result = []
#     for int in dado_1:
#         for num in dado_2:
#             if int + num == 7:
#                 result.append((int, num))
#     return result


# print(get_seven_tuples(dado_1, dado_2))


# import random

# number = random.randint(1, 6)
rolls = [1, 1, 6, 6]
# rolls = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]

# for x in range(10):
#     rolls.append(number)
#     number = random.randint(1, 6)


def get_seven_tuples(rolls):
    seen_before = set()
    result = []

    for roll in rolls:
        if 7 - roll in seen_before:
            result.append((7 - roll, roll))
            seen_before.discard(7 - roll)
        else:
            seen_before.add(roll)

    return result


print(get_seven_tuples(rolls))

# def get_seven_tuples(rolls):
#     counter_dict = {}
#     result = []

#     for int in rolls:
#         if 7 - int in counter_dict:
#             counter_dict[7 - int] -= 1
#             result.append((int, 7 - int))
#             if counter_dict[7 - int] == 0:
#                 del counter_dict[7 - int]
#             continue

#         if int not in counter_dict:
#             counter_dict[int] = 1
#         else:
#             counter_dict[int] += 1

#     return result


# print(get_seven_tuples(rolls))
