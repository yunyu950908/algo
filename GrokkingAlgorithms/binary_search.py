def binary_search(nums, target):
    low = 0
    high = len(nums)-1
    while low <= high:
        mid = low + (high - low) // 2
        guess = nums[mid]
        if target == guess:
            return mid
        elif target > guess:
            low = mid + 1
        else:
            high = mid - 1
    return -1


if __name__ == '__main__':
    n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    t = 6
    i = binary_search(n, t)
    print("n[{}]={}".format(i, n[i]))
