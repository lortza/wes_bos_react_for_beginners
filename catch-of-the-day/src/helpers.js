export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getSillyName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "zealous",
    "vigorous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried",
    "stifled",
    "fragrant",
    "migrant",
    "militant",
    "striped",
    "languid",
    "whimsical",
    "joyous",
    "sticky",
    "justifiable",
    "damp",
    "failed",
    "victorious"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "husbands",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data",
    "proposals",
    "shoes",
    "toenails",
    "lemons",
    "pillows",
    "kittens",
    "tiles",
    "urchins",
    "scales",
    "buckles",
    "knobs",
    "termites",
    "handshake",
    "earthquake",
    "gap",
    "pickle",
    "fire-swamp"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
