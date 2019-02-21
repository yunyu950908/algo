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
    a = [2, 4, 6, 8, 0, 1, 3, 5, 7, 9]
    print(selection_sort(a))
