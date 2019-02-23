def greddy(src, dst):
    ret = set()
    while dst:
        cov = set()
        best_station = None
        for station, states_for_station in src.items():
            covered = dst & states_for_station
            if len(covered) > len(cov):
                best_station = station
                cov = covered
        ret.add(best_station)
        dst -= cov
    return ret


if __name__ == "__main__":
    states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
    stations = {}
    stations["kone"] = set(["id", "nv", "ut"])
    stations["ktwo"] = set(["wa", "id", "mt"])
    stations["kthree"] = set(["or", "nv", "ca"])
    stations["kfour"] = set(["nv", "ut"])
    stations["kfive"] = set(["ca", "az"])
    print(greddy(stations, states_needed))
