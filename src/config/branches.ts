export interface Branch {
    slug: string;
    name: string;
    area: string;
    venue: string;
    street: string;
    locality: string;
    postcode: string;
    ofstedNumber: string;
    mapUrl: string;
    nearby: string[];
}

export const branches: Branch[] = [
    {
        slug: "enfield",
        name: "TuitionBase Enfield",
        area: "Enfield",
        venue: "Oasis Academy Hadley",
        street: "South Street",
        locality: "Enfield",
        postcode: "EN3\u00A04PX",
        ofstedNumber: "EY545755",
        mapUrl: "https://maps.app.goo.gl/MWmWY6Z21fPyphqq6",
        nearby: ["Ponders End", "Enfield Highway", "Enfield Lock", "Brimsdown", "Enfield Town", "Waltham Cross"],
    },
    {
        slug: "edmonton",
        name: "TuitionBase Edmonton",
        area: "Edmonton",
        venue: "The Latymer School",
        street: "Haselbury Road",
        locality: "London",
        postcode: "N9\u00A09TN",
        ofstedNumber: "EY552284",
        mapUrl: "https://maps.app.goo.gl/TdmKreorm52gdsHk9",
        nearby: ["Upper Edmonton", "Lower Edmonton", "Tottenham", "Palmers Green", "Southgate", "Enfield Town"],
    },
    {
        slug: "forest-gate",
        name: "TuitionBase Forest Gate",
        area: "Forest Gate",
        venue: "Forest Gate Community School",
        street: "Forest Lane",
        locality: "London",
        postcode: "E7\u00A09BB",
        ofstedNumber: "EY553940",
        mapUrl: "https://maps.app.goo.gl/5hwQARsPHZBq4mUQ9",
        nearby: ["Stratford", "Leyton", "Manor Park", "Upton Park", "Walthamstow", "Ilford"],
    },
];

export const branchPath = (branch: Branch) => `/tuition-in-${branch.slug}/`;

// Postcodes contain &nbsp; for HTML display; use this for plain-text contexts (meta, JSON-LD)
export const postcodeText = (branch: Branch) => branch.postcode.replaceAll("&nbsp;", "\u00A0");
