from collections import namedtuple

GeoPoint = namedtuple("GeoPoint", "lat lon")
location = GeoPoint(-22.81711234090266, -47.069559317039655)

if __name__ == "__main__":
    print(location.lat)  # muito melhor do que location[0]
