from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "assets" / "services"

GOLD = (230, 176, 46)
CHARCOAL = (35, 34, 37)
INK = (18, 18, 21)
CREAM = (250, 235, 188)
TEAL = (186, 219, 215)
WHITE = (245, 244, 238)


def lerp(a, b, t):
    return int(a + (b - a) * t)


def gradient(size, top, bottom):
    width, height = size
    image = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(image)
    for y in range(height):
        t = y / max(height - 1, 1)
        color = tuple(lerp(top[i], bottom[i], t) for i in range(3))
        draw.line([(0, y), (width, y)], fill=color)
    return image.convert("RGBA")


def glow(base, center, radius, color, strength=0.5):
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    x, y = center
    for r in range(radius, 0, -8):
        alpha = int(255 * strength * (1 - r / radius) ** 2)
        draw.ellipse((x - r, y - r, x + r, y + r), fill=(*color, alpha))
    base.alpha_composite(overlay)


def add_noise(image, seed=8, opacity=22):
    rng = Random(seed)
    noise = Image.new("RGBA", image.size, (0, 0, 0, 0))
    pixels = noise.load()
    for y in range(image.height):
      for x in range(image.width):
          value = rng.randint(0, opacity)
          pixels[x, y] = (255, 255, 255, value)
    image.alpha_composite(noise)


def draw_panel(draw, box, accent=GOLD):
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=22, fill=(26, 26, 30, 220), outline=(255, 255, 255, 38), width=2)
    draw.rounded_rectangle((x1 + 32, y1 + 34, x2 - 32, y1 + 132), radius=14, fill=(42, 42, 47, 220), outline=(255, 255, 255, 18), width=2)
    draw.rounded_rectangle((x1 + 44, y1 + 168, x2 - 44, y1 + 242), radius=12, fill=(12, 12, 15, 190), outline=(*accent, 95), width=3)
    for i, color in enumerate([GOLD, TEAL, (204, 88, 64)]):
        cx = x1 + 62 + i * 52
        draw.ellipse((cx, y1 + 286, cx + 18, y1 + 304), fill=(*color, 160))
    for y in range(y1 + 350, y2 - 46, 52):
        draw.rounded_rectangle((x1 + 48, y, x2 - 48, y + 8), radius=4, fill=(255, 255, 255, 26))
        detail_right = max(x1 + 70, x2 - 110)
        draw.rounded_rectangle((x1 + 48, y + 22, detail_right, y + 29), radius=4, fill=(*accent, 52))


def draw_bolt(draw, center, scale=1.0, color=GOLD, alpha=170):
    cx, cy = center
    pts = [
        (cx + 30 * scale, cy - 250 * scale),
        (cx - 150 * scale, cy + 18 * scale),
        (cx - 38 * scale, cy - 6 * scale),
        (cx - 125 * scale, cy + 250 * scale),
        (cx + 158 * scale, cy - 72 * scale),
        (cx + 36 * scale, cy - 45 * scale),
    ]
    draw.polygon(pts, fill=(*color, alpha))


def draw_waveform(draw, box, color=GOLD):
    x1, y1, x2, y2 = box
    points = []
    width = x2 - x1
    height = y2 - y1
    for i in range(120):
        x = x1 + width * i / 119
        y = y1 + height / 2
        y += height * 0.25 * __import__("math").sin(i / 7)
        y += height * 0.09 * __import__("math").sin(i / 2.3)
        points.append((x, y))
    draw.line(points, fill=(*color, 210), width=8, joint="curve")
    draw.line([(x1, y1 + height / 2), (x2, y1 + height / 2)], fill=(255, 255, 255, 34), width=2)


def draw_breaker_network(draw, width, height, color=GOLD):
    nodes = [(width * 0.22, height * 0.35), (width * 0.48, height * 0.26), (width * 0.72, height * 0.42), (width * 0.38, height * 0.63), (width * 0.67, height * 0.72)]
    for a, b in [(0, 1), (1, 2), (1, 3), (3, 4), (2, 4)]:
        draw.line([nodes[a], nodes[b]], fill=(*color, 120), width=9)
    for x, y in nodes:
        draw.ellipse((x - 28, y - 28, x + 28, y + 28), fill=(28, 28, 32, 235), outline=(*color, 190), width=5)


def base_scene(size=(1400, 980), seed=1):
    image = gradient(size, (16, 16, 19), (42, 41, 45))
    draw = ImageDraw.Draw(image, "RGBA")
    glow(image, (int(size[0] * 0.78), int(size[1] * 0.35)), int(size[0] * 0.36), GOLD, 0.18)
    glow(image, (int(size[0] * 0.28), int(size[1] * 0.75)), int(size[0] * 0.26), TEAL, 0.08)
    for x in range(-100, size[0], 120):
        draw.line((x, 0, x + size[1] * 0.8, size[1]), fill=(255, 255, 255, 10), width=2)
    add_noise(image, seed, 14)
    return image


def save_hero():
    width, height = 1800, 1000
    rng = Random(42)
    image = gradient((width, height), (10, 11, 14), (31, 30, 35))
    draw = ImageDraw.Draw(image, "RGBA")

    # Keep the hero image intentionally subdued so it reads like a dark
    # industrial photograph behind text instead of an illustrated icon scene.
    glow(image, (1300, 430), 720, GOLD, 0.09)
    glow(image, (1640, 730), 460, TEAL, 0.035)

    cabinet_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    cabinet_draw = ImageDraw.Draw(cabinet_layer, "RGBA")
    for index, x in enumerate(range(760, width + 260, 148)):
        panel_width = 118 + rng.randint(-10, 18)
        top = 72 + rng.randint(-18, 26)
        bottom = height + 28
        body = (x, top, x + panel_width, bottom)

        cabinet_draw.rounded_rectangle(body, radius=7, fill=(18, 19, 23, 178))
        cabinet_draw.rectangle((x + 12, top + 32, x + panel_width - 12, bottom - 44), fill=(33, 34, 39, 92))
        cabinet_draw.rectangle((x + 22, top + 62, x + panel_width - 22, bottom - 78), fill=(9, 10, 13, 72))

        left_alpha = 22 if index % 2 == 0 else 14
        cabinet_draw.line((x + 2, top + 12, x + 2, bottom - 16), fill=(255, 255, 255, left_alpha), width=2)
        cabinet_draw.line((x + panel_width - 2, top + 14, x + panel_width - 2, bottom - 20), fill=(255, 255, 255, 14), width=1)
        cabinet_draw.line((x + 18, top + 38, x + panel_width - 18, top + 38), fill=(255, 255, 255, 10), width=1)

        cabinet_draw.rounded_rectangle(
            (x + 34, top + 110, x + panel_width - 34, top + 230),
            radius=8,
            fill=(46, 47, 53, 44),
            outline=(255, 255, 255, 8),
            width=1,
        )
        cabinet_draw.rounded_rectangle(
            (x + 30, top + 330, x + panel_width - 30, top + 410),
            radius=7,
            fill=(12, 13, 16, 78),
            outline=(*GOLD, 22),
            width=1,
        )

        for light_index, color in enumerate([GOLD, TEAL, (198, 88, 68)]):
            cx = x + 34 + light_index * 25
            cy = top + 474 + rng.randint(-5, 5)
            cabinet_draw.ellipse((cx, cy, cx + 8, cy + 8), fill=(*color, 72))

        for y in range(top + 550, bottom - 120, 62):
            line_width = rng.randint(38, 64)
            cabinet_draw.rounded_rectangle((x + 34, y, x + 34 + line_width, y + 3), radius=2, fill=(255, 255, 255, 14))
            cabinet_draw.rounded_rectangle((x + 34, y + 22, x + 34 + max(28, line_width - 18), y + 25), radius=2, fill=(*GOLD, 16))

    cabinet_layer = cabinet_layer.filter(ImageFilter.GaussianBlur(radius=2.2))
    image.alpha_composite(cabinet_layer)

    sheen = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    sheen_draw = ImageDraw.Draw(sheen, "RGBA")
    for offset, alpha in [(0, 9), (160, 6), (330, 4)]:
        sheen_draw.polygon(
            [
                (1120 + offset, -100),
                (1280 + offset, -100),
                (860 + offset, height + 120),
                (700 + offset, height + 120),
            ],
            fill=(255, 255, 255, alpha),
        )
    sheen = sheen.filter(ImageFilter.GaussianBlur(radius=42))
    image.alpha_composite(sheen)

    shadow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow, "RGBA")
    shadow_draw.rectangle((0, 0, 1120, height), fill=(0, 0, 0, 150))
    shadow_draw.rectangle((0, 0, width, 145), fill=(0, 0, 0, 70))
    shadow_draw.rectangle((0, height - 210, width, height), fill=(0, 0, 0, 72))
    shadow_draw.rectangle((width - 310, 0, width, height), fill=(0, 0, 0, 68))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=28))
    image.alpha_composite(shadow)

    add_noise(image, 21, 7)
    image = image.filter(ImageFilter.GaussianBlur(radius=0.22))
    image = image.filter(ImageFilter.UnsharpMask(radius=1.1, percent=65, threshold=6))
    image.save(OUT / "services-hero.png")


def save_service(name, motif):
    image = base_scene((1200, 860), hash(name) % 100)
    draw = ImageDraw.Draw(image, "RGBA")
    if motif == "arc":
        draw_panel(draw, (120, 120, 430, 760), GOLD)
        draw_bolt(draw, (800, 410), 1.25, GOLD, 150)
        draw.arc((610, 190, 1040, 700), 205, 335, fill=(255, 255, 255, 130), width=8)
    elif motif == "compliance":
        draw_panel(draw, (710, 118, 1020, 760), TEAL)
        for i in range(4):
            y = 220 + i * 105
            draw.rounded_rectangle((130, y, 560, y + 54), radius=14, fill=(255, 255, 255, 26), outline=(*GOLD, 92), width=2)
            draw.line((155, y + 26, 195, y + 42, 245, y + 8), fill=(*GOLD, 210), width=8)
    elif motif == "quality":
        draw_waveform(draw, (140, 210, 1040, 620), GOLD)
        draw_waveform(draw, (140, 320, 1040, 730), TEAL)
        for x in range(170, 1060, 100):
            draw.line((x, 160, x, 730), fill=(255, 255, 255, 18), width=2)
    elif motif == "coordination":
        draw_breaker_network(draw, 1200, 860, GOLD)
        for x in [160, 445, 800]:
            draw_panel(draw, (x, 120, x + 160, 780), GOLD)
    elif motif == "short":
        draw_bolt(draw, (420, 420), 1.35, GOLD, 155)
        draw_bolt(draw, (760, 390), 0.9, WHITE, 110)
        draw_panel(draw, (850, 150, 1080, 760), GOLD)
        draw.arc((250, 180, 950, 820), 190, 328, fill=(*GOLD, 140), width=10)
    elif motif == "investigation":
        draw_panel(draw, (120, 130, 390, 770), TEAL)
        draw.ellipse((660, 190, 1050, 580), outline=(*GOLD, 210), width=18)
        draw.line((946, 510, 1110, 705), fill=(*GOLD, 210), width=28)
        draw.line((720, 400, 810, 450, 910, 330), fill=(255, 255, 255, 150), width=8)
    draw.rectangle((0, 0, 1200, 860), outline=(255, 255, 255, 35), width=3)
    image = image.filter(ImageFilter.UnsharpMask(radius=1.2, percent=125, threshold=3))
    image.save(OUT / f"{name}.png")


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    save_hero()
    save_service("arc-flash-hazard-analysis", "arc")
    save_service("csa-z462-compliance", "compliance")
    save_service("power-quality-report", "quality")
    save_service("coordination-studies", "coordination")
    save_service("short-circuit-reports", "short")
    save_service("engineering-investigations", "investigation")


if __name__ == "__main__":
    main()
