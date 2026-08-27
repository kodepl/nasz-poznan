const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.56)}&q=80`;

const site = {
  name: "Nasz Poznań",
  domain: "naszpoznan.info",
  tagline: "Miejski magazyn: dzielnice, kultura, komunikacja i życie między Wartą a cytadelą",
  email: "listy@naszpoznan.info",
  city: "Poznań",
  address: "ul. Święty Marcin 29/7, 61-806 Poznań",
  author: "Jakub Nowicki",
  authorBio: "Reporter miejski. Opisuje Poznań od Jeżyc po Starołękę — bez biurowego bełkotu.",
  authorRole: "Redaktor prowadzący",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1555881403-46f3c5c8a57f", 1600),
  aboutImage: u("photo-1513635269975-59663e9acd48", 1200),
  covers: {
    Dzielnice: u("photo-1449824913935-59a10b8d2000"),
    Kultura: u("photo-1507676184212-d03ab07a01bf"),
    Komunikacja: u("photo-1544620341-1ada0b1b7a21"),
    Jedzenie: u("photo-1414235077428-338989a2e8c0"),
    Historia: u("photo-1461360370896-922624d12aae"),
    Sport: u("photo-1461896836934-ffe607ba6851"),
    default: u("photo-1555881403-46f3c5c8a57f"),
  } as Record<string, string>,
  sections: [
    { name: "Dzielnice", blurb: "Jeżyce, Wilda, Łazarz, Nowe Miasto — codzienne sprawy z podwórka." },
    { name: "Kultura", blurb: "Teatr, festiwale, kluby i to, o czym mówi się po premierze." },
    { name: "Komunikacja", blurb: "Tramwaje, rower miejski, parkingi i korki na Hetmańskiej." },
    { name: "Jedzenie", blurb: "Od rogala świętomarcińskiego po nowe lokale na Garbary." },
  ],
};

export function sectionSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
