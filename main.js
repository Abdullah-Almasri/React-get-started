class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navLinks: ["home", "species", "planets", "about"],
      quotes,
      backgrounds,
      description,
    };
  }

  componentDidMount = () => {
    console.log("Kod som körs när komponenten moteras.");
    let background = this.state.backgrounds[
      Math.floor(Math.random() * this.state.backgrounds.length)
    ];
    document.body.style.backgroundImage = `url(${background})`;
  };

  goto(link) {
    let children = document.querySelector(".app").childNodes;
    console.log(children);
    for (let child of children) {
      if (child.className.includes("nav")) {
        continue;
      }
      if (child.className.includes(link)) {
        child.classList.remove("hidden");
      } else {
        child.classList.add("hidden");
      }
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar navLinks={this.state.navLinks} goto={this.goto} />
        <Home quotes={this.state.quotes} />
        <About description={this.state.description} />
        <Planets />
        <Species />
      </div>
    );
  }
}

function Navbar(props) {
  console.log(props.navLinks);
  return (
    <nav className="navbar">
      <h2>Star Wars Wiki</h2>
      <div className="navlinks">
        {props.navLinks.map((link, i) => (
          <a key={i} href={"#" + link} onClick={() => props.goto(link)}>
            {link[0].toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Home(props) {
  console.log(props.quotes);

  const getRandomQuote = () => {
    let randomQuote =
      props.quotes[Math.floor(Math.random() * props.quotes.length)];
    return `${randomQuote.quote} - ${randomQuote.character}`;
  };

  return (
    <div className="home">
      <h1>{getRandomQuote()}</h1>
    </div>
  );
}

function About(props) {
  return (
    <div className="about hidden">
      <p>
        <strong>
          <i>About Star Wars Wiki</i>
        </strong>
        <br />
        {props.description}
      </p>
    </div>
  );
}

class Planets extends React.Component {
  constructor() {
    super();
    this.state = {
      planets,
    };
  }

  render() {
    return (
      <div className="planets hidden">
        {/* Loopa ut pcomponenter av Planet */}
        {this.state.planets.map((planet, i) => (
          <Planet planet={planet} key={i} />
        ))}
      </div>
    );
  }
}

function Planet(props) {
  return (
    <div className="planet">
      <img src={props.planet.pic} alt={props.planet.name} />
      <div className="container">
        <h4 className="name">
          <strong>{props.planet.name}</strong>
        </h4>
        <p>
          <i>First Apperence:</i> {props.planet.firstMovie}
        </p>
        <p>
          <i>Description:</i> {props.planet.desc}
        </p>
        <p>
          <i>Species:</i> {props.planet.species}
        </p>
        <p>
          <i>Population:</i> {props.planet.population}
        </p>
      </div>
    </div>
  );
}

class Species extends React.Component {
  constructor() {
    super();
    this.state = {
      species,
    };
  }

  render() {
    return (
      <div className="species hidden">
        {this.state.species.map((oneSpecies, i) => (
          <OneSpecies oneSpecies={oneSpecies} key={i} />
        ))}
      </div>
    );
  }
}

function OneSpecies(props) {
  return (
    <div className="one-species">
      <img src={props.oneSpecies.pic} alt={props.oneSpecies.name} />
      <div className="container">
        <h4 className="name">{props.oneSpecies.name}</h4>
        <p>
          <i>Home Planet:</i> {props.oneSpecies.homePlanet}
        </p>
        <p>
          <i>Characteristics:</i> {props.oneSpecies.characteristic}
        </p>
        <p>
          <i>Know Characters:</i> {props.oneSpecies.knownCharacters}
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
