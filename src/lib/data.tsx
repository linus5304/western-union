import { ReactNode } from "react";

type OptionType = {
  flag?: string;
  label: string;
  value: string;
};

export const countries: OptionType[] = [
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e8.svg",
    label: "Ascension Island",
    value: "ac",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg",
    label: "Andorra",
    value: "ad",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg",
    label: "United Arab Emirates",
    value: "ae",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg",
    label: "Afghanistan",
    value: "af",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ec.svg",
    label: "Antigua & Barbuda",
    value: "ag",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ee.svg",
    label: "Anguilla",
    value: "ai",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg",
    label: "Albania",
    value: "al",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg",
    label: "Armenia",
    value: "am",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f4.svg",
    label: "Angola",
    value: "ad",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f6.svg",
    label: "Antarctica",
    value: "aq",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg",
    label: "Argentina",
    value: "ar",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f8.svg",
    label: "American Samoa",
    value: "as",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg",
    label: "Austria",
    value: "at",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg",
    label: "Australia",
    value: "au",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fc.svg",
    label: "Aruba",
    value: "aw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fd.svg",
    label: "Åland Islands",
    value: "ax",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ff.svg",
    label: "Azerbaijan",
    value: "az",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e6.svg",
    label: "Bosnia & Herzegovina",
    value: "ba",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e7.svg",
    label: "Barbados",
    value: "bb",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e9.svg",
    label: "Bangladesh",
    value: "bd",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg",
    label: "Belgium",
    value: "be",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1eb.svg",
    label: "Burkina Faso",
    value: "bf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg",
    label: "Bulgaria",
    value: "bg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ed.svg",
    label: "Bahrain",
    value: "bh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ee.svg",
    label: "Burundi",
    value: "bi",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ef.svg",
    label: "Benin",
    value: "bj",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f1.svg",
    label: "St. Barthélemy",
    value: "bl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f2.svg",
    label: "Bermuda",
    value: "bm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f3.svg",
    label: "Brunei",
    value: "bn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f4.svg",
    label: "Bolivia",
    value: "bo",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f6.svg",
    label: "Caribbean Netherlands",
    value: "CN",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg",
    label: "Brazil",
    value: "br",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f8.svg",
    label: "Bahamas",
    value: "bs",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg",
    label: "Bhutan",
    value: "bt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fb.svg",
    label: "Bouvet Island",
    value: "bv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fc.svg",
    label: "Botswana",
    value: "bw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg",
    label: "Belarus",
    value: "by",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ff.svg",
    label: "Belize",
    value: "bz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg",
    label: "Canada",
    value: "ca",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e8.svg",
    label: "Cocos (Keeling) Islands",
    value: "cc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e9.svg",
    label: "Congo - Kinshasa",
    value: "cg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1eb.svg",
    label: "Central African Republic",
    value: "cf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ec.svg",
    label: "Congo - Brazzaville",
    value: "cd",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg",
    label: "Switzerland",
    value: "ch",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ee.svg",
    label: "Côte d’Ivoire",
    value: "ci",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f0.svg",
    label: "Cook Islands",
    value: "ck",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f1.svg",
    label: "Chile",
    value: "cl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f2.svg",
    label: "Cameroon",
    value: "cm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f3.svg",
    label: "China",
    value: "cn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f4.svg",
    label: "Colombia",
    value: "co",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f5.svg",
    label: "Clipperton Island",
    value: "cp",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f7.svg",
    label: "Costa Rica",
    value: "cr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fa.svg",
    label: "Cuba",
    value: "cu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fb.svg",
    label: "Cape Verde",
    value: "cv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fc.svg",
    label: "Curaçao",
    value: "cw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fd.svg",
    label: "Christmas Island",
    value: "cx",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg",
    label: "Cyprus",
    value: "cy",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg",
    label: "Czechia",
    value: "cz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg",
    label: "Germany",
    value: "de",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ec.svg",
    label: "Diego Garcia",
    value: "dg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ef.svg",
    label: "Djibouti",
    value: "dj",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg",
    label: "Denmark",
    value: "dk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f2.svg",
    label: "Dominica",
    value: "dm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f4.svg",
    label: "Dominican Republic",
    value: "do",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ff.svg",
    label: "Algeria",
    value: "dz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e6.svg",
    label: "Ceuta & Melilla",
    value: "ea",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e8.svg",
    label: "Ecuador",
    value: "ec",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg",
    label: "Estonia",
    value: "ee",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ec.svg",
    label: "Egypt",
    value: "eg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ed.svg",
    label: "Western Sahara",
    value: "eh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f7.svg",
    label: "Eritrea",
    value: "er",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg",
    label: "Spain",
    value: "es",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f9.svg",
    label: "Ethiopia",
    value: "et",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg",
    label: "European Union",
    value: "eu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg",
    label: "Finland",
    value: "fi",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ef.svg",
    label: "Fiji",
    value: "fj",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f0.svg",
    label: "Falkland Islands",
    value: "fk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f2.svg",
    label: "Micronesia",
    value: "fm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f4.svg",
    label: "Faroe Islands",
    value: "fo",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg",
    label: "France",
    value: "fr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e6.svg",
    label: "Gabon",
    value: "ga",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg",
    label: "United Kingdom",
    value: "gb",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e9.svg",
    label: "Grenada",
    value: "gd",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ea.svg",
    label: "Georgia",
    value: "ge",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1eb.svg",
    label: "French Guiana",
    value: "gf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ec.svg",
    label: "Guernsey",
    value: "gg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ed.svg",
    label: "Ghana",
    value: "gh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ee.svg",
    label: "Gibraltar",
    value: "gi",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f1.svg",
    label: "Greenland",
    value: "gl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f2.svg",
    label: "Gambia",
    value: "gm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f3.svg",
    label: "Guinea",
    value: "gn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f5.svg",
    label: "Guadeloupe",
    value: "gp",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f6.svg",
    label: "Equatorial Guinea",
    value: "gq",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg",
    label: "Greece",
    value: "gr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f8.svg",
    label: "South Georgia & South', Sandwich Islands",
    value: "gs",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f9.svg",
    label: "Guatemala",
    value: "gt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fa.svg",
    label: "Guam",
    value: "gu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fc.svg",
    label: "Guinea-Bissau",
    value: "gw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fe.svg",
    label: "Guyana",
    value: "gy",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f0.svg",
    label: "Hong Kong SAR China",
    value: "hk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f2.svg",
    label: "Heard & McDonald Islands",
    value: "hm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f3.svg",
    label: "Honduras",
    value: "hn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg",
    label: "Croatia",
    value: "hr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f9.svg",
    label: "Haiti",
    value: "ht",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg",
    label: "Hungary",
    value: "hu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e8.svg",
    label: "Canary Islands",
    value: "ic",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e9.svg",
    label: "Indonesia",
    value: "id",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg",
    label: "Ireland",
    value: "ie",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f1.svg",
    label: "Israel",
    value: "il",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f2.svg",
    label: "Isle of Man",
    value: "im",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg",
    label: "India",
    value: "in",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f4.svg",
    label: "British Indian Ocean Territory",
    value: "io",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f6.svg",
    label: "Iraq",
    value: "iq",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f7.svg",
    label: "Iran",
    value: "Ir",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg",
    label: "Iceland",
    value: "is",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg",
    label: "Italy",
    value: "it",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg",
    label: "Jersey",
    value: "je",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f2.svg",
    label: "Jamaica",
    value: "jm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f4.svg",
    label: "Jordan",
    value: "jo",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg",
    label: "Japan",
    value: "jp",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg",
    label: "Kenya",
    value: "ke",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ec.svg",
    label: "Kyrgyzstan",
    value: "kg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ed.svg",
    label: "Cambodia",
    value: "kh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ee.svg",
    label: "Kiribati",
    value: "ki",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f2.svg",
    label: "Comoros",
    value: "km",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f3.svg",
    label: "St. Kitts & Nevis",
    value: "kn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f5.svg",
    label: "North Korea",
    value: "kp",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f7.svg",
    label: "South Korea",
    value: "kr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fc.svg",
    label: "Kuwait",
    value: "kw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fe.svg",
    label: "Cayman Islands",
    value: "ky",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ff.svg",
    label: "Kazakhstan",
    value: "kz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e6.svg",
    label: "Laos",
    value: "la",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e7.svg",
    label: "Lebanon",
    value: "lb",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e8.svg",
    label: "St. Lucia",
    value: "lc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg",
    label: "Liechtenstein",
    value: "li",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f0.svg",
    label: "Sri Lanka",
    value: "lk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f7.svg",
    label: "Liberia",
    value: "lr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f8.svg",
    label: "Lesotho",
    value: "ls",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg",
    label: "Lithuania",
    value: "lt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg",
    label: "Luxembourg",
    value: "lu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg",
    label: "Latvia",
    value: "lv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fe.svg",
    label: "Libya",
    value: "ly",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e6.svg",
    label: "Morocco",
    value: "ma",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e8.svg",
    label: "Monaco",
    value: "mc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg",
    label: "Moldova",
    value: "md",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg",
    label: "Montenegro",
    value: "me",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1eb.svg",
    label: "St. Martin",
    value: "mf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ec.svg",
    label: "Madagascar",
    value: "mg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ed.svg",
    label: "Marshall Islands",
    value: "mh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg",
    label: "North Macedonia",
    value: "mk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f1.svg",
    label: "Mali",
    value: "ml",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f2.svg",
    label: "Myanmar (Burma)",
    value: "mm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f3.svg",
    label: "Mongolia",
    value: "mn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f4.svg",
    label: "Macao Sar China",
    value: "mo",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f5.svg",
    label: "Northern Mariana Islands",
    value: "mp",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f6.svg",
    label: "Martinique",
    value: "mq",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f7.svg",
    label: "Mauritania",
    value: "mr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f8.svg",
    label: "Montserrat",
    value: "ms",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg",
    label: "Malta",
    value: "mt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fa.svg",
    label: "Mauritius",
    value: "mu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fb.svg",
    label: "Maldives",
    value: "mv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fc.svg",
    label: "Malawi",
    value: "mw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fd.svg",
    label: "Mexico",
    value: "mx",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fe.svg",
    label: "Malaysia",
    value: "my",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ff.svg",
    label: "Mozambique",
    value: "mz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e6.svg",
    label: "Namibia",
    value: "na",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e8.svg",
    label: "New Caledonia",
    value: "nc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ea.svg",
    label: "Niger",
    value: "ne",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1eb.svg",
    label: "Norfolk Island",
    value: "nf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ec.svg",
    label: "Nigeria",
    value: "ng",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ee.svg",
    label: "Nicaragua",
    value: "ni",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg",
    label: "Netherlands",
    value: "nl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg",
    label: "Norway",
    value: "no",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f5.svg",
    label: "Nepal",
    value: "np",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f7.svg",
    label: "Nauru",
    value: "nr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1fa.svg",
    label: "Niue",
    value: "nu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg",
    label: "New Zealand",
    value: "nz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f4-1f1f2.svg",
    label: "Oman",
    value: "om",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1e6.svg",
    label: "Panama",
    value: "pa",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ea.svg",
    label: "Peru",
    value: "pe",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1eb.svg",
    label: "French Polynesia",
    value: "pf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ec.svg",
    label: "Papua New Guinea",
    value: "pg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ed.svg",
    label: "Philippines",
    value: "ph",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f0.svg",
    label: "Pakistan",
    value: "pk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg",
    label: "Poland",
    value: "pl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f2.svg",
    label: "St. Pierre & Miquelon",
    value: "pm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f3.svg",
    label: "Pitcairn Islands",
    value: "pn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f7.svg",
    label: "Puerto Rico",
    value: "pr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f8.svg",
    label: "Palestinian Territories",
    value: "ps",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg",
    label: "Portugal",
    value: "pt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fc.svg",
    label: "Palau",
    value: "pw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fe.svg",
    label: "Paraguay",
    value: "py",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f6-1f1e6.svg",
    label: "Qatar",
    value: "qa",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1ea.svg",
    label: "Réunion",
    value: "re",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg",
    label: "Romania",
    value: "ro",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg",
    label: "Serbia",
    value: "yu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg",
    label: "Russia",
    value: "ru",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg",
    label: "Rwanda",
    value: "rw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e6.svg",
    label: "Saudi Arabia",
    value: "sa",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e7.svg",
    label: "Solomon Islands",
    value: "sb",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e8.svg",
    label: "Seychelles",
    value: "sc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e9.svg",
    label: "Sudan",
    value: "sd",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg",
    label: "Sweden",
    value: "se",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ec.svg",
    label: "Singapore",
    value: "sg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ed.svg",
    label: "St. Helena",
    value: "sh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg",
    label: "Slovenia",
    value: "si",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ef.svg",
    label: "Svalbard & Jan Mayen",
    value: "sj",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg",
    label: "Slovakia",
    value: "sk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f1.svg",
    label: "Sierra Leone",
    value: "sl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg",
    label: "San Marino",
    value: "sm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f3.svg",
    label: "Senegal",
    value: "sn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f4.svg",
    label: "Somalia",
    value: "so",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f7.svg",
    label: "Suriname",
    value: "sr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f8.svg",
    label: "South Sudan",
    value: "ss",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f9.svg",
    label: "São Tomé & Príncipe",
    value: "st",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fb.svg",
    label: "El Salvador",
    value: "sv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fd.svg",
    label: "Sint Maarten",
    value: "sx",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fe.svg",
    label: "Syria",
    value: "sy",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ff.svg",
    label: "Eswatini",
    value: "sz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e6.svg",
    label: "Tristan Da Cunha",
    value: "sh",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e8.svg",
    label: "Turks & Caicos Islands",
    value: "tc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e9.svg",
    label: "Chad",
    value: "td",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1eb.svg",
    label: "French Southern Territories",
    value: "tf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ec.svg",
    label: "Togo",
    value: "tg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ed.svg",
    label: "Thailand",
    value: "th",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ef.svg",
    label: "Tajikistan",
    value: "tj",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f0.svg",
    label: "Tokelau",
    value: "tk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f1.svg",
    label: "Timor-Leste",
    value: "tl",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f2.svg",
    label: "Turkmenistan",
    value: "tm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f3.svg",
    label: "Tunisia",
    value: "tn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f4.svg",
    label: "Tonga",
    value: "to",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg",
    label: "Turkey",
    value: "tr",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f9.svg",
    label: "Trinidad & Tobago",
    value: "tt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fb.svg",
    label: "Tuvalu",
    value: "tv",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg",
    label: "Taiwan",
    value: "tw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ff.svg",
    label: "Tanzania",
    value: "tz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1e6.svg",
    label: "Ukraine",
    value: "ua",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ec.svg",
    label: "Uganda",
    value: "ug",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg",
    label: "U.S. Outlying Islands",
    value: "um",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f3.svg",
    label: "United Nations",
    value: "un",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg",
    label: "United States",
    value: "us",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1fe.svg",
    label: "Uruguay",
    value: "uy",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ff.svg",
    label: "Uzbekistan",
    value: "uz",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e6.svg",
    label: "Vatican City",
    value: "va",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e8.svg",
    label: "St. Vincent & Grenadines",
    value: "vc",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ea.svg",
    label: "Venezuela",
    value: "ve",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ec.svg",
    label: "British Virgin Islands",
    value: "vg",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ee.svg",
    label: "U.S. Virgin Islands",
    value: "vi",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1f3.svg",
    label: "Vietnam",
    value: "vn",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fb-1f1fa.svg",
    label: "Vanuatu",
    value: "vu",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1eb.svg",
    label: "Wallis & Futuna",
    value: "wf",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fc-1f1f8.svg",
    label: "Samoa",
    value: "ws",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg",
    label: "Kosovo",
    value: "xk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1ea.svg",
    label: "Yemen",
    value: "ye",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1fe-1f1f9.svg",
    label: "Mayotte",
    value: "yt",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg",
    label: "South Africa",
    value: "za",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1f2.svg",
    label: "Zambia",
    value: "zm",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f1ff-1f1fc.svg",
    label: "Zimbabwe",
    value: "zw",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.svg",
    label: "England",
    value: "uk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.svg",
    label: "Scotland",
    value: "uk",
  },
  {
    flag: "https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg",
    label: "Wales",
    value: "uk",
  },
] as const;

export type CardProp = {
  id: number;
  isSelected: boolean;
  icon: any;
  title: string;
  description?: ReactNode;
};

export const recevoireCardData: CardProp[] = [
  {
    id: 1,
    isSelected: false,
    icon: "",
    title: "Espèces",
  },
  {
    id: 2,
    isSelected: false,
    icon: "",
    title: "Compte Bancaire",
  },
];
export const payerCardData: CardProp[] = [
  {
    id: 1,
    isSelected: false,
    icon: "",
    title: "Carte de crédit ou de débit",
    description: (
      <div className="px-6 text-center leading-4 text-[12px]">
        En quelques minutes <sup>1</sup>{" "}
        <span className="font-bold">
          Frais <sup>5</sup> 9.90
        </span>
        <span className="font-normal text-[10px] ml-1">EUR</span>
      </div>
    ),
  },
  {
    id: 2,
    isSelected: false,
    icon: "",
    title: "Payer en espèces",
    description: (
      <div className="px-6 text-center leading-4 text-[12px]">
        En quelques minutes <sup>1</sup>{" "}
        <span className="font-bold">
          Frais <sup>5</sup> 9.90
        </span>
        <span className="font-normal text-[10px] ml-1">EUR</span>
      </div>
    ),
  },
  {
    id: 3,
    isSelected: false,
    icon: "",
    title: "Transfert bancaire \n Enregistrer contrer crédit/débit",
    description: (
      <div className="px-6 text-center leading-4 text-[12px]">
        En quelques minutes <sup>1</sup>{" "}
        <span className="font-bold">
          Frais <sup>5</sup> 9.90
        </span>
        <span className="font-normal text-[10px] ml-1">EUR</span>
      </div>
    ),
  },
];

export const motifOptions: { label: string; value: string }[] = [
  {
    label: "Assistance familiale/Frais de subsistance",
    value: "FAMILY SUPPORT/LIVING EXPENSES",
  },
  { label: "Épargne/Investissements", value: "SAVINGS/INVESTMENTS" },
  {
    label: "Paiement de biens et de services",
    value: "GOODS AND SERVICES PAYMENT/COMMERCIAL TRANSACTION",
  },
  { label: "Frais de voyage", value: "TRAVEL EXPENSES" },
  { label: "Frais d’éducation/scolaires", value: "EDUCATION/SCHOOL FEE" },
  { label: "Loyer/Hypothèque", value: "RENT/MORTGAGE" },
  { label: "Urgence/Assistance médicale", value: "EMERGENCY/MEDICAL AID" },
  {
    label: "Organisme de bienfaisance/Paiement d'aide",
    value: "CHARITY/AID PAYMENT",
  },
  {
    label: "Frais relatifs à une loterie ou un prix/Impôts",
    value: "PRIZE OR LOTTERY FEES/TAXES",
  },
  {
    label: "Paie des employés/Frais des employés",
    value: "Employee Payroll/Employee Expense",
  },
];

export const fondOption: { label: string; value: string }[] = [
  { label: "Salaire/Revenus", value: "SALARY/INCOME" },
  { label: "Économies", value: "SAVINGS" },
  { label: "Prêt/Emprunt", value: "BORROWED FUNDS/LOAN" },
  { label: "Cadeau", value: "GIFT" },
  {
    label: "Pension/Allocations publiques/Aide sociale",
    value: "PENSION/GOVERNMENT/WELFARE",
  },
  { label: "Héritage", value: "INHERITANCE" },
  { label: "Dons de bienfaisance", value: "CHARITABLE DONATIONS" },
];

export const occupationOptions: { label: string; value: string }[] = [
  { label: "Employé", value: "EMPLOYED" },
  { label: "Chômeur", value: "UNEMPLOYED" },
  { label: "Étudiant", value: "STUDENT" },
  { label: "Retraité", value: "RETIRED" },
  { label: "Autre", value: "OTHER" },
];
