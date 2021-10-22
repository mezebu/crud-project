const countries = [
  {
    name: "Afghanistan",
    flag: "data:image/png;base64,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",
  },
  {
    name: "Albania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
  },
  {
    name: "Algeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
  },
  {
    name: "Andorra",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
  },
  {
    name: "Angola",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
  },
  {
    name: "Anguilla",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
  },
  {
    name: "Antigua and Barbuda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
  },
  {
    name: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  },
  {
    name: "Armenia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
  },
  {
    name: "Aruba",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
  },
  {
    name: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
  },
  {
    name: "Austria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
  },
  {
    name: "Azerbaijan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
  },
  {
    name: "Bahamas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
  },
  {
    name: "Bahrain",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
  },
  {
    name: "Bangladesh",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
  },
  {
    name: "Barbados",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
  },
  {
    name: "Belarus",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
  },
  {
    name: "Belgium",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
  },
  {
    name: "Belize",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
  },
  {
    name: "Benin",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
  },
  {
    name: "Bermuda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
  },
  {
    name: "Bhutan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
  },
  {
    name: "Botswana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
  },
  {
    name: "Bouvet Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    name: "Brazil",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  },
  {
    name: "British Indian Ocean Territory",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg",
  },
  {
    name: "Brunei",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
  },
  {
    name: "Bulgaria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
  },
  {
    name: "Burkina Faso",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
  },
  {
    name: "Burundi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
  },
  {
    name: "Cambodia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
  },
  {
    name: "Cameroon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
  },
  {
    name: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
  },
  {
    name: "Cape Verde",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
  },
  {
    name: "Cayman Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
  },
  {
    name: "Central African Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
  },
  {
    name: "Chad",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
  },
  {
    name: "Chile",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
  },
  {
    name: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  },
  {
    name: "Christmas Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg",
  },
  {
    name: "Cocos (Keeling) Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg",
  },
  {
    name: "Colombia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
  },
  {
    name: "Comoros",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg",
  },
  {
    name: "Congo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
  },
  {
    name: "Cook Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
  },
  {
    name: "Costa Rica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg",
  },
  {
    name: "Croatia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
  },
  {
    name: "Cuba",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
  },
  {
    name: "Cyprus",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
  },
  {
    name: "Czech Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
  },
  {
    name: "Denmark",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
  },
  {
    name: "Djibouti",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
  },
  {
    name: "Dominica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
  },
  {
    name: "Dominican Republic",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
  },
  {
    name: "Ecuador",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
  },
  {
    name: "Egypt",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
  },
  {
    name: "El Salvador",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
  },
  {
    name: "Equatorial Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
  },
  {
    name: "Eritrea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
  },
  {
    name: "Estonia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
  },
  {
    name: "Ethiopia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  },
  {
    name: "Falkland Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
  },
  {
    name: "Faroe Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
  },
  {
    name: "Fiji",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
  },
  {
    name: "Finland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  },
  {
    name: "France",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "French Polynesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
  },
  {
    name: "Gabon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
  },
  {
    name: "Gambia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
  },
  {
    name: "Georgia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
  },
  {
    name: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "Ghana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
  },
  {
    name: "Gibraltar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
  },
  {
    name: "Greece",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  },
  {
    name: "Greenland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
  },
  {
    name: "Grenada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
  },
  {
    name: "Guadeloupe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Guadeloupe_%28local%29_variant.svg",
  },
  {
    name: "Guam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
  },
  {
    name: "Guatemala",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
  },
  {
    name: "Guernsey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
  },
  {
    name: "Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
  },
  {
    name: "Guinea-Bissau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
  },
  {
    name: "Guyana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
  },
  {
    name: "Haiti",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
  },
  {
    name: "Heard Island and McDonald Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
  },
  {
    name: "Vatican City State (Holy See)",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
  },
  {
    name: "Honduras",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Naval_Ensign_of_Honduras.svg",
  },
  {
    name: "Hong Kong",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
  },
  {
    name: "Hungary",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
  },
  {
    name: "Iceland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
  },
  {
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    name: "Indonesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  },
  {
    name: "Iran",
    flag: " https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  },
  {
    name: "Iraq",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
  },
  {
    name: "Ireland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    name: "Isle of Man",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
  },
  {
    name: "Israel",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
  },
  {
    name: "Italy",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
  {
    name: "Jamaica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
  },
  {
    name: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
  {
    name: "Jersey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
  },
  {
    name: "Jordan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
  },
  {
    name: "Kazakhstan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
  },
  {
    name: "Kenya",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
  },
  {
    name: "Kiribati",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
  },
  {
    name: "Kuwait",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
  },
  {
    name: "Kyrgyzstan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
  },
  {
    name: "Laos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
  },
  {
    name: "Latvia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
  },
  {
    name: "Lebanon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
  },
  {
    name: "Lesotho",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
  },
  {
    name: "Liberia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
  },
  {
    name: "Liechtenstein",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
  },
  {
    name: "Lithuania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
  },
  {
    name: "Luxembourg",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
  },
  {
    name: "Macau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
  },
  {
    name: "Madagascar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
  },
  {
    name: "Malawi",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
  },
  {
    name: "Malaysia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  },
  {
    name: "Maldives",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
  },
  {
    name: "Mali",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
  },
  {
    name: "Malta",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
  },
  {
    name: "Marshall Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
  },
  {
    name: "Martinique",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Snake_Flag_of_Martinique.svg",
  },
  {
    name: "Mauritania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
  },
  {
    name: "Mauritius",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
  },
  {
    name: "Mayotte",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "Mexico",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  },
  {
    name: "Monaco",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
  },
  {
    name: "Mongolia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
  },
  {
    name: "Montenegro",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
  },
  {
    name: "Montserrat",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
  },
  {
    name: "Morocco",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  },
  {
    name: "Mozambique",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
  },
  {
    name: "Myanmar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
  },
  {
    name: "Namibia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
  },
  {
    name: "Nauru",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
  },
  {
    name: "Nepal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  },
  {
    name: "Netherlands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    name: "New Caledonia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flags_of_New_Caledonia.svg",
  },
  {
    name: "New Zealand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  },
  {
    name: "Nicaragua",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
  },
  {
    name: "Niger",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
  },
  {
    name: "Nigeria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  },
  {
    name: "Niue",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
  },
  {
    name: "Norfolk Island",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
  },
  {
    name: "Northern Mariana Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
  },
  {
    name: "Norway",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    name: "Oman",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
  },
  {
    name: "Pakistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  },
  {
    name: "Palau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
  },
  {
    name: "Panama",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
  },
  {
    name: "Papua New Guinea",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
  },
  {
    name: "Paraguay",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
  },
  {
    name: "Peru",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
  },
  {
    name: "Philippines",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
  },
  {
    name: "Pitcairn",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
  },
  {
    name: "Poland",
    flag: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  },
  {
    name: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    name: "Puerto Rico",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
  },
  {
    name: "Qatar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
  },
  {
    name: "Réunion",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    name: "Romania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  },
  {
    name: "Rwanda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
  },
  {
    name: "Saint Lucia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
  },
  {
    name: "Saint Pierre and Miquelon",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg",
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
  },
  {
    name: "Samoa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
  },
  {
    name: "San Marino",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
  },
  {
    name: "Sao Tome and Principe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
  },
  {
    name: "Saudi Arabia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
  },
  {
    name: "Senegal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
  },
  {
    name: "Serbia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
  },
  {
    name: "Seychelles",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
  },
  {
    name: "Sierra Leone",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
  },
  {
    name: "Singapore",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  },
  {
    name: "Slovakia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
  },
  {
    name: "Slovenia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
  },
  {
    name: "Solomon Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
  },
  {
    name: "Somalia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
  },
  {
    name: "South Africa",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
  },
  {
    name: "Spain",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "Sri Lanka",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
  },
  {
    name: "Sudan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  },
  {
    name: "Suriname",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
  },
  {
    name: "Swaziland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
  },
  {
    name: "Sweden",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  },
  {
    name: "Switzerland",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
  },
  {
    name: "Syria",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
  },
  {
    name: "Taiwan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
  },
  {
    name: "Tajikistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
  },
  {
    name: "Thailand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
  },
  {
    name: "Timor-Leste",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
  },
  {
    name: "Togo",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
  },
  {
    name: "Tokelau",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
  },
  {
    name: "Tonga",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
  },
  {
    name: "Trinidad and Tobago",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
  },
  {
    name: "Tunisia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
  },
  {
    name: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    name: "Turkmenistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
  },
  {
    name: "Turks and Caicos Islands",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
  },
  {
    name: "Tuvalu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
  },
  {
    name: "Uganda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
  },
  {
    name: "Ukraine",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    name: "United Arab Emirates",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    name: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "United States Minor Outlying Islands",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    name: "Uruguay",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
  },
  {
    name: "Uzbekistan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
  },
  {
    name: "Vanuatu",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
  },
  {
    name: "Vietnam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  },
  {
    name: "Wallis and Futuna",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg",
  },
  {
    name: "Yemen",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
  },
  {
    name: "Zambia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
  },
  {
    name: "Zimbabwe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
  },
];

export { countries };
