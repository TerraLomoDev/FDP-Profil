import heroImage from "./assets/fdp-profile-hero.png";
import fdpLogo from "./assets/fdp logo.jpg";

const profileStats = [
  { label: "AGE", value: "32" },
  { label: "FACTION", value: "FDP", logo: fdpLogo },
  { label: "REGION", value: "Niedersachsen" },
  { label: "CLASS", value: "IT Business Analyst" },
  { label: "EDUCATION", value: "Fachinformatiker AE" },
];

const affiliations = [
  { name: "Junge Liberale", url: "https://www.julis.de/" },
  { name: "Liberale Vielfalt", url: "https://www.liberalevielfalt.de/" },
  { name: "Chaos Computer Club", url: "https://www.ccc.de/" },
  { name: "Box Club Hannover Kleefeld e. V.", url: "https://www.boxen-hannover.de/" },
];

const quotes = [
  "Das Aufstiegsversprechen muss wieder gelten.",
  "Der Staat macht zu viel Schulden.",
  "Bildung entscheidet, ob Freiheit praktisch wird.",
  "Weniger Buerokratie. Mehr Vertrauen.",
];

const coreTopics = [
  {
    title: "Digitalisierung",
    text:
      "Digitale Verwaltung, moderne Infrastruktur und pragmatische Loesungen, die Buerokratie abbauen und Alltag einfacher machen.",
  },
  {
    title: "Bildung",
    text:
      "Beste Chancen fuer jede Biografie: gute Ausstattung, starke Lehrkraefte und Schulen, die Talente wirklich foerdern.",
  },
  {
    title: "Wirtschaft",
    text:
      "Mehr Raum fuer Gruendung, Mittelstand und Innovation, damit Leistung sich lohnt und Wachstum vor Ort entsteht.",
  },
  {
    title: "Liberaler Feminismus",
    text:
      "Selbstbestimmung, gleiche Chancen und echte Wahlfreiheit in Karriere, Familie und gesellschaftlicher Teilhabe.",
  },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Patrick van Rossum Start">
          Patrick van Rossum
        </a>
        <div className="nav-links">
          <a href="#steckbrief">Steckbrief</a>
          <a href="#fokus">Fokus</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-visual" aria-label="Abstraktes dunkles Profilmotiv">
          <img src={heroImage} alt="" />
          <div className="quote-rotator" aria-label="Politische Aussagen">
            {quotes.map((quote) => (
              <p key={quote}>{quote}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="steckbrief" className="profile-band">
        <div className="section-label">Steckbrief</div>
        <div className="profile-grid">
          <article className="profile-intro">
            <div className="profile-photo" aria-label="Profilbild Platzhalter">
              <span>Profilbild</span>
            </div>
            <div className="profile-copy">
              <h2>Patrick van Rossum</h2>
              <p>
                Platzhalter fuer deinen persoenlichen Text. Hier kann spaeter kurz stehen,
                wer du bist, wofuer du politisch stehst und was Menschen ueber dich wissen sollen.
              </p>
            </div>
          </article>

          <aside className="game-stats" aria-label="Steckbrief Werte">
            {profileStats.map((stat) => (
              <div className="stat-line" key={stat.label}>
                <span>{stat.label}</span>
                {stat.logo ? (
                  <img className="party-logo" src={stat.logo} alt={stat.value} />
                ) : (
                  <strong>{stat.value}</strong>
                )}
              </div>
            ))}
            <div className="stat-line stat-stack">
              <span>AFFILIATIONS</span>
              <ul>
                {affiliations.map((affiliation) => (
                  <li key={affiliation.name}>
                    <a href={affiliation.url} target="_blank" rel="noreferrer">
                      {affiliation.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="fokus" className="focus-section">
        <div className="section-heading">
          <span className="section-label">Kernthemen</span>
          <h2>Positionen mit klarer Kante.</h2>
        </div>
        <div className="topic-list">
          {coreTopics.map((topic) => (
            <details className="topic-item" key={topic.title}>
              <summary>{topic.title}</summary>
              <p>{topic.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="imprint-section" aria-label="Impressum">
        <span className="section-label">Impressum</span>
        <p>Angaben gemaess TMG folgen.</p>
      </section>

      <footer id="kontakt" className="footer">
        <p>FDP Profil</p>
        <a href="mailto:kontakt@example.com">kontakt@example.com</a>
      </footer>
    </main>
  );
}

export default App;
