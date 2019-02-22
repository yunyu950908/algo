def selection_sort(arr):
    l = len(arr)
    for i in range(l):
        min = i
        for j in range(i+1, l):
            if arr[j] < arr[min]:
                min = j
        [arr[i], arr[min]] = [arr[min], arr[i]]
    return arr


if __name__ == "__main__":
    import random
    a = [random.randint(0, 99) for _ in range(10)]
    print(selection_sort(a))
