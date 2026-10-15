import os
from PIL import Image, ImageDraw, ImageFont

def get_font(size, bold=False):
    # Try system fonts on Windows
    font_paths = [
        "C:\\Windows\\Fonts\\segoeui.ttf" if not bold else "C:\\Windows\\Fonts\\segoeuib.ttf",
        "C:\\Windows\\Fonts\\arial.ttf" if not bold else "C:\\Windows\\Fonts\\arialbd.ttf",
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def draw_rounded_rect(draw, bbox, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

def create_base(title, subtitle, badge_text):
    W, H = 1080, 1920
    im = Image.new("RGBA", (W, H), "#141110")
    draw = ImageDraw.Draw(im)

    # Top gradient glow
    for y in range(450):
        alpha = int(45 * (1.0 - y / 450.0))
        draw.line([(0, y), (W, y)], fill=(196, 77, 42, alpha))

    # Header badge
    draw_rounded_rect(draw, (80, 80, 480, 140), 30, fill="#2A1A14", outline="#C44D2A", width=2)
    badge_font = get_font(26, bold=True)
    draw.text((110, 95), badge_text, font=badge_font, fill="#F59E0B")

    # Main titles
    t_font = get_font(60, bold=True)
    st_font = get_font(32, bold=False)
    draw.text((80, 165), title, font=t_font, fill="#FFFFFF")
    draw.text((80, 245), subtitle, font=st_font, fill="#A8A29E")

    return im, draw

def save_screen(im, filename):
    out_dir = os.path.join(os.path.dirname(__file__), "..", "store-assets")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, filename)
    im.convert("RGB").save(out_path, "PNG", quality=95)
    print(f"Generato screenshot: {out_path}")

# ================= SCREENSHOT 1: Calcolatore Carbonara =================
def gen_s1():
    im, draw = create_base(
        "Calcolo Scientifico Dosi",
        "Rapporti stechiometrici perfetti per persona",
        "ROMALAB SCIENTIFICO"
    )

    # Card principale (ricetta)
    card_bg = "#1F1A17"
    border = "#3A2A22"
    draw_rounded_rect(draw, (60, 320, 1020, 1820), 40, fill=card_bg, outline=border, width=2)

    # Recipe title inside card
    title_font = get_font(46, bold=True)
    sub_font = get_font(28, bold=False)
    draw.text((100, 360), "Spaghetti alla Carbonara", font=title_font, fill="#F59E0B")
    draw.text((100, 420), "Emulsione micellare di tuorli d'uovo, pecorino & grasso fuso", font=sub_font, fill="#A8A29E")

    # Dose Selector pill
    draw_rounded_rect(draw, (100, 480, 520, 560), 20, fill="#2C201A", outline="#C44D2A", width=2)
    draw.text((130, 500), "Dosi per: 4 persone (Standard)", font=get_font(26, bold=True), fill="#FFFFFF")

    # Ingredient items
    items = [
        ("Spaghetti trafilati al bronzo", "400 g", "#F59E0B"),
        ("Guanciale laziale / amatriciano", "240 g", "#EF4444"),
        ("Tuorli d'uovo freschi (L)", "5 tuorli", "#FBBF24"),
        ("Pecorino Romano DOP", "140 g", "#E2E8F0"),
        ("Pepe nero in grani macinato", "10 g", "#94A3B8"),
        ("Sale per l'acqua (5g/L)", "20 g", "#38BDF8"),
        ("Acqua consigliata in cottura", "2.6 L", "#60A5FA")
    ]

    y_pos = 600
    for name, qty, color in items:
        draw_rounded_rect(draw, (100, y_pos, 980, y_pos + 90), 16, fill="#271F1B")
        draw.ellipse((125, y_pos + 33, 145, y_pos + 53), fill=color)
        draw.text((165, y_pos + 26), name, font=get_font(28, bold=False), fill="#F3F4F6")
        draw.text((820, y_pos + 24), qty, font=get_font(32, bold=True), fill=color)
        y_pos += 110

    # Modalità Easy / Pro Tip box
    draw_rounded_rect(draw, (100, 1400, 980, 1770), 24, fill="#12251B", outline="#10B981", width=2)
    draw.text((130, 1430), "MODALITÀ EASY • CONSIGLIO ANTI-ERRORE", font=get_font(24, bold=True), fill="#10B981")
    tip_text = (
        "Tempera la carbocrema in una ciotola di vetro o ceramica a bagnomaria freddo.\n"
        "Aggiungi un cucchiaio d'acqua di cottura a 60°C poco alla volta per pre-idratare\n"
        "il pecorino prima di mantecare con la pasta cotta al dente.\n\n"
        "Zero grumi, zero effetto frittata garantito dalla termodinamica!"
    )
    draw.text((130, 1480), tip_text, font=get_font(24, bold=False), fill="#E2E8F0")

    save_screen(im, "screenshot-1-carbonara-calculator.png")

# ================= SCREENSHOT 2: Analizzatore Termico =================
def gen_s2():
    im, draw = create_base(
        "Controllo Termico & Mantecatura",
        "La fisica dell'emulsione contro il rischio frittata",
        "SCIENZA IN CUCINA"
    )

    card_bg = "#1F1A17"
    border = "#3A2A22"
    draw_rounded_rect(draw, (60, 320, 1020, 1820), 40, fill=card_bg, outline=border, width=2)

    draw.text((100, 360), "Analizzatore Termico Mantecatura", font=get_font(44, bold=True), fill="#F59E0B")
    draw.text((100, 420), "Misura la temperatura della padella a fuoco spento", font=get_font(28, bold=False), fill="#A8A29E")

    # Big Gauge Circle
    gauge_box = (340, 500, 740, 900)
    draw.arc(gauge_box, 135, 405, fill="#3A2A22", width=36)
    draw.arc(gauge_box, 135, 315, fill="#10B981", width=36) # Active green zone
    draw.text((470, 650), "62°C", font=get_font(72, bold=True), fill="#10B981")
    draw.text((450, 750), "ZONA OTTIMALE", font=get_font(26, bold=True), fill="#10B981")

    # Zones description
    zones = [
        ("< 50°C", "Grasso solido, pecorino non disciolto", "#94A3B8"),
        ("58°C - 65°C", "ZONA EMULSIONE: micelle stabili e vellutate", "#10B981"),
        ("68°C - 75°C", "Coagulazione proteine uovo: RISCHIO FRITTATA!", "#F59E0B"),
        ("> 75°C", "Danno irreversibile: separazione fase grassa/acqua", "#EF4444")
    ]

    y_pos = 960
    for temp, desc, col in zones:
        draw_rounded_rect(draw, (100, y_pos, 980, y_pos + 105), 18, fill="#271F1B", outline=col, width=2)
        draw.text((130, y_pos + 30), temp, font=get_font(32, bold=True), fill=col)
        draw.text((320, y_pos + 34), desc, font=get_font(24, bold=False), fill="#E2E8F0")
        y_pos += 125

    # Formula Box
    draw_rounded_rect(draw, (100, 1500, 980, 1760), 24, fill="#2A1B14", outline="#C44D2A", width=2)
    draw.text((130, 1530), "LEGGE DELLA MANTECATURA (STOKES)", font=get_font(24, bold=True), fill="#F59E0B")
    eq_text = (
        "Viscosità = f(Amido, Acqua, Lipidi del Guanciale)\n"
        "L'agitazione orbitale a 60°C disperde le goccioline di grasso\n"
        "sospese nell'amido gelatinizzato, creando la crema perfetta."
    )
    draw.text((130, 1590), eq_text, font=get_font(24, bold=False), fill="#F3F4F6")

    save_screen(im, "screenshot-2-thermal-analyzer.png")

# ================= SCREENSHOT 3: 11 Ricette Canoniche =================
def gen_s3():
    im, draw = create_base(
        "11 Capisaldi della Tradizione",
        "Primi, secondi e dolci autentici romani",
        "RICETTARIO COMPLETO"
    )

    card_bg = "#1F1A17"
    border = "#3A2A22"
    draw_rounded_rect(draw, (60, 320, 1020, 1820), 40, fill=card_bg, outline=border, width=2)

    recipes = [
        ("Spaghetti alla Carbonara", "Tuorli, Pecorino Romano DOP, Guanciale, Pepe", "Primo"),
        ("Tonnarelli Cacio e Pepe", "Pecorino Romano DOP stagionato, Pepe nero tostato", "Primo"),
        ("Bucatini all'Amatriciana", "Pomodoro San Marzano, Guanciale croccante, Pecorino", "Primo"),
        ("Rigatoni alla Gricia", "L'antenata bianca: solo guanciale, pecorino e pepe", "Primo"),
        ("Saltimbocca alla Romana", "Fettine di vitello, prosciutto crudo, salvia fresca", "Secondo"),
        ("Coda alla Vaccinara", "Stufato lento al pomodoro, sedano, pinoli e cacao amaro", "Secondo"),
        ("Abbacchio a Scottadito", "Costolette d'agnello marinate con rosmarino e aglio", "Secondo"),
        ("Carciofi alla Giudìa", "Carciofi romaneschi IGP a fiore croccante", "Contorno"),
        ("Supplì al Telefono", "Riso al pomodoro, cuore filante di fior di latte", "Street Food"),
        ("Maritozzo con la Panna", "Brioche soffice romana farcita di panna fresca montata", "Dolce")
    ]

    y_pos = 360
    for name, desc, cat in recipes:
        draw_rounded_rect(draw, (100, y_pos, 980, y_pos + 120), 18, fill="#271F1B")
        draw.text((130, y_pos + 20), name, font=get_font(28, bold=True), fill="#FFFFFF")
        draw.text((130, y_pos + 65), desc, font=get_font(20, bold=False), fill="#A8A29E")

        # Category badge
        draw_rounded_rect(draw, (820, y_pos + 25, 955, y_pos + 70), 12, fill="#3A241A", outline="#C44D2A")
        draw.text((840, y_pos + 33), cat, font=get_font(18, bold=True), fill="#F59E0B")
        y_pos += 140

    save_screen(im, "screenshot-3-tradition-recipes.png")

# ================= SCREENSHOT 4: Guida SOS 10 Scenari =================
def gen_s4():
    im, draw = create_base(
        "Pronto Soccorso Gastronomico",
        "10 protocolli scientifici per salvare il tuo piatto",
        "GUIDA SOS EMERGENZE"
    )

    card_bg = "#1F1A17"
    border = "#3A2A22"
    draw_rounded_rect(draw, (60, 320, 1020, 1820), 40, fill=card_bg, outline=border, width=2)

    troubles = [
        ("Uovo coagulato / Frittata", "Ghiaccio istantaneo per bloccare la termica + emulsione rapida con acqua d'amido a 60°C."),
        ("Grumi nel Cacio e Pepe", "Pecorino separato? Aggiungi 20ml d'acqua di cottura ricca d'amido e usa mixer a immersione."),
        ("Guanciale bruciato o gommoso", "Fuoco troppo alto: filtra il grasso rimasto e separa i cubetti amari dal fondo padella."),
        ("Pasta troppo salata", "Allunga con amido puro non salato e bilancia la sapidità con grani di pepe nero tostato."),
        ("Sugo Amatriciana troppo acido", "Neutralizza il pomodoro con una punta di cucchiaino di bicarbonato e lipidi caldi."),
        ("Carciofi Giudìa gommosi", "Doppio shock termico: prima immersione a 145°C, poi apertura a fiore in olio a 180°C."),
        ("Supplì che si aprono in frittura", "Riposo 2 ore in frigo per retrogradare l'amido e doppia sigillatura con uovo e pangrattato.")
    ]

    y_pos = 360
    for title, sol in troubles:
        draw_rounded_rect(draw, (100, y_pos, 980, y_pos + 185), 20, fill="#271F1B", outline="#C44D2A", width=1)
        draw.text((130, y_pos + 20), "🚨 " + title, font=get_font(26, bold=True), fill="#F59E0B")
        # Split sol in 2 lines if long
        draw.text((130, y_pos + 70), sol[:68], font=get_font(21, bold=False), fill="#E2E8F0")
        if len(sol) > 68:
            draw.text((130, y_pos + 105), sol[68:], font=get_font(21, bold=False), fill="#A8A29E")
        y_pos += 205

    save_screen(im, "screenshot-4-sos-first-aid.png")

if __name__ == "__main__":
    gen_s1()
    gen_s2()
    gen_s3()
    gen_s4()
    print("Tutti i 4 screenshot sono stati generati con successo!")
