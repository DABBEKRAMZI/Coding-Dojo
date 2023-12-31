const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// question 1 
const pokemon1=pokémon.filter(p  => p.id%3===0);
console.log(pokemon1)

// question 2
const pokemon2 = pokémon.filter(p =>p.types.includes("fire"))
console.log(pokemon2)

// question 3
const pokemon3 = pokémon.filter(p =>p.types.length>1)
console.log(pokemon3)


// question 4
const pokemon4 =pokémon.map(p=>p.name)
console.log(pokemon4)

// question 5 
const pokemon5 =pokémon.filter (p=> p.id>69&&p.name)
console.log(pokemon5);


//question 6 
const pokemon6 = pokémon.filter(p => (p.types.length===1)&&(p.types[0]=="poison")).map(p=>p.name)
console.log(pokemon6)

// question 7 
const pokemon7=pokémon.filter(p=> p.types[1]==="flying").map(p=>p.types[0])
console.log(pokemon7)

// question 8 
const count= pokémon.filter(p =>p.types.includes("normal")).length
console.log(count);


