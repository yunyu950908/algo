def fibonacci(n):
    if n <= 1:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)


def fibonacci_tail_call(n, prev=1, curr=1):
    if n <= 1:
        return curr
    return fibonacci_tail_call(n-1, curr, prev+curr)


if __name__ == "__main__":
    import timeit
    print(timeit.timeit("fibonacci(10)", "from __main__ import fibonacci"))
    print(timeit.timeit("fibonacci_tail_call(10)","from __main__ import fibonacci_tail_call"))
