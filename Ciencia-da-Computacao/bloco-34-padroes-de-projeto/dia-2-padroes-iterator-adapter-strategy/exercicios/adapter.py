from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        print(f"SVG {self.svg_path} with {self.format}")


class SvgAdapter(PngInterface):
    def __init__(self, adptee) -> None:
        self._adptee = adptee

    def draw(self):
        self._adptee.get_image()


svg_image = SvgAdapter(SvgImage("meu_path.svg"))

svg_image.draw()
