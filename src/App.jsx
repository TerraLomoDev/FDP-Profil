import heroImage from "./assets/fdp-profile-hero.png";

const profileStats = [
  { value: "FDP", label: "Profil" },
  { value: "NRW", label: "Standort" },
  { value: "2026", label: "Launch" },
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

const timeline = [
  {
    year: "01",
    title: "Profil",
    text: "Klare Haltung, kurzer Steckbrief, starke visuelle Identitaet.",
  },
  {
    year: "02",
    title: "Positionen",
    text: "Themen spaeter modular erweiterbar mit Karten und Detailseiten.",
  },
  {
    year: "03",
    title: "Kontakt",
    text: "Direkte Wege fuer Austausch, Termine und Social Links.",
  },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Patrick van Rossum Start">
          <span>PVR</span>
          Patrick van Rossum
        </a>
        <div className="nav-links">
          <a href="#steckbrief">Steckbrief</a>
          <a href="#fokus">Fokus</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Patrick van Rossum</p>
          <h1>Ein moderner Steckbrief fuer ein klares FDP Profil.</h1>
          <p className="intro">
            Dunkel, direkt und persoenlich: eine Startseite als digitale Visitenkarte,
            gebaut fuer Positionen, Vita und spaetere Kampagnen-Inhalte.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#steckbrief">Profil ansehen</a>
            <a className="ghost-action" href="#kontakt">Kontakt</a>
          </div>
        </div>

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
            <h2>Patrick van Rossum</h2>
            <p>
              Platzhalter fuer eine kurze politische Selbstbeschreibung mit Fokus auf
              Haltung, Region und Themen. Die Seite ist bewusst so angelegt, dass Inhalte
              spaeter schnell ersetzt oder erweitert werden koennen.
            </p>
          </article>

          <div className="stats-row" aria-label="Profil Kennzahlen">
            {profileStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
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
              <summary>
                <span aria-hidden="true"></span>
                {topic.title}
              </summary>
              <p>{topic.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="timeline-section" aria-label="Roadmap">
        {timeline.map((item) => (
          <article className="timeline-card" key={item.title}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <footer id="kontakt" className="footer">
        <p>FDP Profil</p>
        <a href="mailto:kontakt@example.com">kontakt@example.com</a>
      </footer>
    </main>
  );
}

export default App;
