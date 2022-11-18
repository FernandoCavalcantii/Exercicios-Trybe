meu_array = []
for int in range(100):
    meu_array.append(int)


def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            for number3 in array3:
                print(f"Array 3: {number3}")
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


multiply_arrays(meu_array, meu_array, meu_array)

import time

start_time = time.time()


print("Process finished --- %s seconds ---" % (time.time() - start_time))
