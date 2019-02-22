def quick_sort(arr):
    quick_sort_helper(arr, 0, len(arr)-1)
    return arr


def quick_sort_helper(arr, left, right):
    if left < right:
        pivot = partition(arr, left, right)
        quick_sort_helper(arr, left, pivot-1)
        quick_sort_helper(arr, pivot+1, right)


def partition(arr, left, right):
    mid = left + (right - left) // 2
    pivot = arr[mid]
    swap(arr, mid, right)
    bondary = left
    for i in range(left, right):
        if arr[i] < pivot:
            swap(arr, i, bondary)
            bondary += 1
    swap(arr, right, bondary)
    return bondary


def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]


if __name__ == "__main__":
    import random
    a = [random.randint(0, 99) for _ in range(0, 10)]
    print(quick_sort(a))
