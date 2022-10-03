def digit(a):
    result = a ** 2
    return result


for i in range(10):
    print(f"i = {i}")
    print(f"\ti^2 = {digit(i)}")
    print()