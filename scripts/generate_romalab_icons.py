import math
import os
from PIL import Image, ImageDraw, ImageFilter

def create_romalab_icon(size=512, maskable=False):
    # 4x supersampled for silky smooth anti-aliased curves
    scale = 4
    dim = size * scale
    img = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))

    # 1. Warm Roman Terracotta / Charcoal Dark Gradient Background
    bg = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    bg_draw = ImageDraw.Draw(bg)
    for y in range(dim):
        factor = y / dim
        # Subtle gradient from #231b18 (warm deep charcoal) to #120f0e
        r = int(35 * (1 - factor) + 16 * factor)
        g = int(27 * (1 - factor) + 13 * factor)
        b = int(24 * (1 - factor) + 12 * factor)
        bg_draw.line([(0, y), (dim, y)], fill=(r, g, b, 255))

    # 2. Masking
    mask = Image.new("L", (dim, dim), 0)
    mask_draw = ImageDraw.Draw(mask)
    if maskable:
        mask_draw.rectangle([0, 0, dim, dim], fill=255)
    else:
        radius = int(112 * (dim / 512))
        mask_draw.rounded_rectangle([0, 0, dim, dim], radius=radius, fill=255)

    img.paste(bg, (0, 0), mask)

    draw = ImageDraw.Draw(img)

    # 3. Outer Golden Ring Border
    if not maskable:
        border_w = int(8 * (dim / 512))
        radius = int(112 * (dim / 512))
        draw.rounded_rectangle(
            [border_w // 2, border_w // 2, dim - border_w // 2, dim - border_w // 2],
            radius=radius,
            outline=(245, 158, 11, 90),
            width=border_w
        )

    # Content scaling & centering
    c_scale = 0.70 if maskable else 0.85
    cx, cy = dim // 2, dim // 2 + int(12 * (dim / 512))

    # 4. Colosseum Arched Foundation (Roman Architecture silhouette)
    arch_w = int(260 * c_scale * (dim / 512))
    arch_h = int(60 * c_scale * (dim / 512))
    arch_y = cy + int(110 * c_scale * (dim / 512))

    # Colosseum base wall
    draw.rounded_rectangle(
        [cx - arch_w // 2, arch_y, cx + arch_w // 2, arch_y + arch_h],
        radius=int(8 * (dim / 512)),
        fill=(68, 64, 60, 255)
    )

    # Arches cutout
    num_arches = 5
    slot_w = arch_w // (num_arches * 2 + 1)
    for i in range(num_arches):
        x0 = cx - arch_w // 2 + (2 * i + 1) * slot_w
        x1 = x0 + slot_w
        draw.rounded_rectangle(
            [x0, arch_y + int(10 * (dim / 512)), x1, arch_y + arch_h - int(5 * (dim / 512))],
            radius=int(6 * (dim / 512)),
            fill=(24, 20, 18, 255)
        )

    # 5. Golden Carbonara Pan / Cream Sauce Glow
    glow_radius = int(150 * c_scale * (dim / 512))
    glow_box = [cx - glow_radius, cy - int(20 * (dim / 512)) - glow_radius, cx + glow_radius, cy - int(20 * (dim / 512)) + glow_radius]
    draw.ellipse(glow_box, fill=(245, 158, 11, 40))

    # 6. Spaghetti Swirls (Silky Carbonara ribbons)
    line_w = int(24 * c_scale * (dim / 512))
    gold_yolk = (245, 158, 11, 255)
    cream_highlight = (254, 240, 138, 255)

    # Ribbon 1: main loop
    points1 = []
    steps = 100
    for t in range(steps):
        angle = t * (math.pi * 2.8) / steps
        r = (80 + 40 * math.sin(t * 0.1)) * c_scale * (dim / 512)
        px = cx + r * math.cos(angle)
        py = cy - int(20 * (dim / 512)) + (r * 0.7) * math.sin(angle)
        points1.append((px, py))

    for i in range(len(points1) - 1):
        draw.line([points1[i], points1[i+1]], fill=gold_yolk, width=line_w)

    # Ribbon highlight (creamy sheen)
    points2 = []
    for t in range(int(steps * 0.6)):
        angle = t * (math.pi * 2.2) / (steps * 0.6) + 0.5
        r = (65 + 20 * math.cos(t * 0.15)) * c_scale * (dim / 512)
        px = cx + r * math.cos(angle)
        py = cy - int(25 * (dim / 512)) + (r * 0.65) * math.sin(angle)
        points2.append((px, py))

    for i in range(len(points2) - 1):
        draw.line([points2[i], points2[i+1]], fill=cream_highlight, width=int(line_w * 0.45))

    # 7. Crispy Browned Guanciale Cubes
    guanciale_color = (185, 28, 28, 255)  # Terracotta / cured meat red
    crust_dark = (127, 29, 29, 255)        # Crispy rendered fat

    cubes = [
        (cx - int(60 * c_scale * (dim / 512)), cy + int(15 * c_scale * (dim / 512)), 32, 24, 15),
        (cx + int(50 * c_scale * (dim / 512)), cy - int(30 * c_scale * (dim / 512)), 36, 26, -20),
        (cx - int(10 * c_scale * (dim / 512)), cy + int(50 * c_scale * (dim / 512)), 30, 22, 5),
        (cx + int(20 * c_scale * (dim / 512)), cy - int(75 * c_scale * (dim / 512)), 28, 20, -10),
    ]

    for gx, gy, gw, gh, rot in cubes:
        w_scaled = int(gw * c_scale * (dim / 512))
        h_scaled = int(gh * c_scale * (dim / 512))
        draw.rounded_rectangle([gx, gy, gx + w_scaled, gy + h_scaled], radius=int(6 * (dim / 512)), fill=guanciale_color)
        draw.rounded_rectangle([gx + 2, gy + 2, gx + w_scaled - 2, gy + int(h_scaled * 0.35)], radius=int(3 * (dim / 512)), fill=crust_dark)

    # 8. Cracked Black Pepper Grains
    peppers = [
        (cx - 75, cy - 45), (cx + 80, cy + 20), (cx - 20, cy - 65),
        (cx + 35, cy + 45), (cx - 40, cy + 30), (cx + 60, cy - 50),
        (cx - 15, cy + 10), (cx + 10, cy - 20), (cx - 85, cy + 10),
        (cx + 90, cy - 15), (cx + 40, cy - 90)
    ]
    for px_raw, py_raw in peppers:
        px = cx + int(px_raw * c_scale * (dim / 512))
        py = cy + int(py_raw * c_scale * (dim / 512))
        pr = int(5 * c_scale * (dim / 512))
        draw.ellipse([px - pr, py - pr, px + pr, py + pr], fill=(15, 10, 8, 255))

    # 9. Classical Golden Fork Lifting Pasta (Center-Top)
    fork_color = (251, 191, 36, 255)
    fork_highlight = (254, 243, 199, 255)
    fh_w = int(14 * c_scale * (dim / 512))
    fork_top_y = cy - int(210 * c_scale * (dim / 512))
    fork_bot_y = cy - int(90 * c_scale * (dim / 512))

    # Handle
    draw.rounded_rectangle([cx - fh_w // 2, fork_top_y, cx + fh_w // 2, fork_bot_y], radius=int(5 * (dim / 512)), fill=fork_color)
    draw.line([(cx - 2, fork_top_y + 10), (cx - 2, fork_bot_y - 10)], fill=fork_highlight, width=int(3 * (dim / 512)))

    # Fork Crown & 4 Tines
    tine_w = int(6 * c_scale * (dim / 512))
    tine_len = int(45 * c_scale * (dim / 512))
    base_w = int(56 * c_scale * (dim / 512))
    draw.rounded_rectangle([cx - base_w // 2, fork_bot_y - 10, cx + base_w // 2, fork_bot_y + 15], radius=int(6 * (dim / 512)), fill=fork_color)

    tine_offsets = [-base_w // 2 + 6, -base_w // 6, base_w // 6 - tine_w, base_w // 2 - tine_w - 6]
    for ox in tine_offsets:
        draw.rounded_rectangle([cx + ox, fork_bot_y + 10, cx + ox + tine_w, fork_bot_y + 10 + tine_len], radius=int(3 * (dim / 512)), fill=fork_color)

    # 10. Downsample to target size with Lanczos filter for razor-sharp rendering
    final_img = img.resize((size, size), Image.Resampling.LANCZOS)
    return final_img

if __name__ == "__main__":
    icons_dir = os.path.join(os.path.dirname(__file__), "..", "icons")
    os.makedirs(icons_dir, exist_ok=True)

    print("Generating RomaLab icons...")
    # Standard PWA Icons
    icon_192 = create_romalab_icon(192, maskable=False)
    icon_192.save(os.path.join(icons_dir, "icon-192.png"))

    icon_512 = create_romalab_icon(512, maskable=False)
    icon_512.save(os.path.join(icons_dir, "icon-512.png"))

    # Maskable Icon for Android adaptive launcher
    icon_maskable = create_romalab_icon(512, maskable=True)
    icon_maskable.save(os.path.join(icons_dir, "icon-maskable-512.png"))

    print("✅ Icons generated successfully in icons/ folder!")
