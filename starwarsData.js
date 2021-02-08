const quotes = [
  {
    quote: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    character: "Leia Organa",
  },
  {
    quote: "Get your head out of your cockpit.",
    character: "Leia Organa",
  },
  {
    quote:
      "Attachment is forbidden. Possession is forbidden. Compassion, which I would define as unconditional love, is essential to a Jedi’s life. So you might say, that we are encouraged to love.",
    character: "Anakin Skywalker",
  },
  {
    quote: "I‘ve seen your daily routine. You are not busy.",
    character: "Rey",
  },
  {
    quote: "The Force will be with you. Always",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "Use the Force, Luke.",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "I have a bad feeling about this.",
    character: "Obi-Wan Kenobi",
  },
  {
    quote:
      "You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness.”",
    character: "Obi-Wan Kenobi",
  },
  {
    quote: "I find your lack of faith disturbing.",
    character: " Darth Vader",
  },
  {
    quote: "No. I am your father.",
    character: "Darth Vader",
  },
  {
    quote: "You have failed me for the last time.",
    character: "Darth Vader",
  },
  {
    quote:
      "You have controlled your fear. Now, release your anger. Only your hatred can destroy me.”",
    character: "Darth Vader",
  },
  {
    quote: "Now, young Skywalker, you will die.",
    character: "Emperor Palpatine",
  },
  {
    quote: "Do. Or do not. There is no try.",
    character: "Yoda",
  },
  {
    quote:
      "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering. I sense much fear in you.",
    character: "Yoda",
  },
  {
    quote: "You must unlearn what you have learned.",
    character: "Yoda",
  },
  {
    quote: "May the force be with you",
    character: "Various Characters",
  },
  {
    quote: "I am no Jedi.",
    character: "Ahsoka Tano",
  },
  {
    quote: "I’m one with the Force. The Force is with me.",
    character: "Chirrut Îmwe",
  },
  {
    quote: "Chewie, we’re home.",
    character: "Han Solo",
  },
  {
    quote: "Traveling through hyperspace ain’t like dusting crops, farm boy.",
    character: "Han Solo",
  },
  {
    quote: "I never ask that question until after I’ve done it!",
    character: "Han Solo",
  },
  {
    quote:
      "Strike me down in anger and I’ll always be with you, just like your father.",
    character: "Luke Skywalker",
  },
  {
    quote:
      "The Force is not a power you have. It’s not about lifting rocks. It’s the energy between all things, a tension, a balance, that binds the universe together.",
    character: "Luke Skywalker",
  },
  {
    quote: "So this is how liberty dies. With thunderous applause.",
    character: "Padmé Amidala",
  },
];

const backgrounds = [
  "https://i.pinimg.com/originals/67/f4/45/67f4452b097e0f617a562fad270a30fa.jpg",
  "https://wallpaperaccess.com/full/2101913.jpg",
  "https://www.wallpapertip.com/wmimgs/0-4431_star-wars-wallpaper-x-wing.png",
  "https://gameranx.com/wp-content/uploads/2019/08/Star-Wars-Jedi-Fallen-Order-4K-Wallpaper-2.jpg",
  "https://www.androidguys.com/wp-content/uploads/2015/11/star-wars-7-the-force-awakens-kylo-ren-stormtroopers-wallpaper-5217.jpg",
  "https://wallpapercave.com/wp/wp2277969.jpg",
  "https://wallpaperaccess.com/full/2647023.jpg",
  "https://cdn.wallpapersafari.com/72/64/Ci3AMW.jpg",
  "https://wallpapercave.com/wp/wp4605037.jpg",
  "https://www.itl.cat/pngfile/big/136-1366657_star-wars-coruscant.jpg",
  "https://wallpapercave.com/wp/wp1982908.jpg",
  "https://images7.alphacoders.com/101/thumb-1920-1016357.jpg",
  "https://wallpapersbq.com/images/star-wars-the-force-awakens/star-wars-the-force-awakens-wallpaper-6.jpg",
  "https://4kwallpapers.com/images/wallpapers/the-mandalorian-season-2-baby-yoda-din-djarin-the-child-2560x2560-2885.jpg",
];

const planets = [
  {
    name: "Alderaan",
    firstMovie: "A New Hope",
    desc:
      "	Forests, mountains; home planet of Princess Leia and the House of Organa. Destroyed by the first Death Star as punishment for involvement in the Rebel Alliance and also as a demonstration of power.",
    population: "2 billion",
    pic:
      "https://ayay.co.uk/backgrounds/star_wars/locations/planet-alderaan.jpg",
    species: "Human (immigrated)",
  },
  {
    name: "Coruscant",
    firstMovie: "The Phantom Menace",
    desc:
      "Cosmopolitan urban world consisting of one planet-wide city. Governmental center of the Galactic Republic and later the Galactic Empire.",
    population: "2 trillion",
    pic:
      "https://i.pinimg.com/originals/4b/88/4e/4b884edea212ebc4fd2f9dd7b31aadb0.jpg",
    species: "Mostly Human (indigenous), but other sentiens as well",
  },
  {
    name: "Dagobah",
    firstMovie: "The Empire Strikes Back",
    desc: "Swamp planet and Yoda's residence after the fall of the Jedi.",
    population: "No data",
    pic:
      "https://i.pinimg.com/originals/58/79/56/58795608d50457c340e76d763e73c8d5.jpg",
    species: "Non-intelligent species",
  },
  {
    name: "Endor",
    firstMovie: "Return of the Jedi",
    desc:
      "Forest moon that the second Death Star orbits, and house to an Imperial outpost. Inhabited by Ewoks. The location of the battle between the Rebel Alliance and the Empire leading to the destruction of the second Death Star.",
    population: "Over 30 millions",
    pic:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15smwu-09bc315e-c719-4bce-8e04-300783c915d0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZWQ5N2I1NDItODY5Ny00ZDVjLWE3ODMtMGRkODE4NWM4OWQwXC9kMTVzbXd1LTA5YmMzMTVlLWM3MTktNGJjZS04ZTA0LTMwMDc4M2M5MTVkMC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.E3wP4uGsY6eF0M-p6Y543a6TQcVcbbBoAQ3GMB9IIFo",
    species: "Ewoks",
  },
  {
    name: "Hoth",
    firstMovie: "The Empire Strikes Back",
    desc: "Desolate ice planet and base for the Rebel Alliance.",
    population: "No Data",
    pic:
      "https://qph.fs.quoracdn.net/main-qimg-7a80de8011e2d4172d33ab9139620f4c",
    species: "Only a few non-intelligent species",
  },
  {
    name: "Jakku",
    firstMovie: "	The Force Awakens",
    desc:
      "	Desert planet. Site of a 'graveyard' of ships damaged during the Battle of Jakku, the final battle between the New Republic and the Galactic Empire. Also the homeworld of Rey.",
    population: "Less than 25000",
    pic: "https://pbs.twimg.com/media/Chn9RP3UUAI_IUV.jpg",
    species: "Teedo and Uthuthma and many immigrated sentiens",
  },
];

const description =
  "The Star Wars franchise depicts the adventures of characters 'A long time ago in a galaxy far, far away', in which humans and many species of aliens (often humanoid) co-exist with robots, or 'droids', who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology. Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, and holographic projections.\n\nA mystical power known as the Force is described in the original film as 'an energy field created by all living things ... [that] binds the galaxy together'. Through training and meditation, those whom 'the Force is strong with' are able to perform various superpowers (such as telekinesis, precognition, telepathy, and manipulation of physical energy). The Force is wielded by two major knightly orders at conflict with each other: the Jedi, peacekeepers of the Galactic Republic who act on the light side of the Force through non-attachment and arbitration, and the Sith, who use the dark side by manipulating fear and aggression. While Jedi Knights can be numerous, the Dark Lords of the Sith (or 'Darths') are intended to be limited to two: a master and their apprentice.\n\nForce-wielders are very limited in numbers in comparison to the average population. The Jedi and Sith prefer the use of a weapon called a lightsaber, a blade of energy that can cut through virtually any surface and deflect energy bolts. The rest of the population, as well as renegades and soldiers, use laser-powered blaster firearms. In the outer reaches of the galaxy, crime syndicates such as the Hutt cartel are dominant. Bounty hunters are often employed by both gangsters and governments. Illicit activities include smuggling and slavery.";

const species = [
  {
    name: "Dathomirian",
    pic:
      "https://2.bp.blogspot.com/-62uuzAovGB0/T1N4qmgd42I/AAAAAAAACrI/BuWXfRcQnsc/s1600/asajj-ventress-character-fictional-characters-film-character-photo-u4.jpg",
    homePlanet: "Iridonia",
    characteristic: "Humanoid. Males have horns, females do not",
    knownCharacters: "Darth Maul, Asajj Ventress, Savage Opress",
  },
  {
    name: "Humans",
    pic:
      "https://i.pinimg.com/originals/80/64/20/806420e6174b803e1f1c1fa79546e1cb.jpg",
    homePlanet: "Coruscant",
    characteristic: "No Data",
    knownCharacters: "Obi-Wan Kenobi, Anakin Skywalker, Padmé Amidala",
  },
  {
    name: "Gungans",
    pic:
      "https://images6.fanpop.com/image/polls/1683000/1683427_1526572971927_full.png",
    homePlanet: "Naboo",
    characteristic: "Amphibious humanoid, fin-like ears and a long tongue",
    knownCharacters: "Jar Jar Binks",
  },
  {
    name: "Togruta",
    pic:
      "https://i.pinimg.com/originals/1d/46/d0/1d46d0d280d75a420f8d6cd48e9ccf22.png",
    homePlanet: "Shili",
    characteristic: "Humanoid, with large montrals and head tails",
    knownCharacters: "Ahsoka Tano, Shaak Ti",
  },
  {
    name: "Cerean",
    pic:
      "https://pbs.twimg.com/profile_images/1263240441148956679/-Ohpkk1F_400x400.jpg",
    homePlanet: "Cerea",
    characteristic: "Humanoid, binary brain within their towering skulls",
    knownCharacters: "Ki-Adi-Mundi",
  },
  {
    name: "Nautolans",
    pic:
      "https://i.pinimg.com/originals/dd/46/bb/dd46bb46c9951f2661c5ac5aad0b3b88.jpg",
    homePlanet: "Glee Anselm ",
    characteristic:
      "Amphibians Humanoid, green skin color, large dark eyes and large tendrils growing from their heads",
    knownCharacters: "Kit Fisto",
  },
];
