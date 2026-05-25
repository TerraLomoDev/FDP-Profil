import heroImage from "./assets/fdp-profile-hero.png";

const profileStats = [
  { value: "FDP", label: "Profil" },
  { value: "NRW", label: "Standort" },
  { value: "2026", label: "Launch" },
];

const focusItems = [
  "Digitalisierung",
  "Bildung",
  "Wirtschaft",
  "Freiheit",
];

const timeline = [
  { year: "01", title: "Profil", text: "Klare Haltung, kurzer Steckbrief, starke visuelle Identitaet." },
  { year: "02", title: "Positionen", text: "Themen spaeter modular erweiterbar mit Karten und Detailseiten." },
  { year: "03", title: "Kontakt", text: "Direkte Wege fuer Austausch, Termine und Social Links." },
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="FDP Profil Start">
          <span>FDP</span>
          Profil
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
          <div className="floating-card card-one">
            <span>Status</span>
            <strong>bereit fuer Ausbau</strong>
          </div>
          <div className="floating-card card-two">
            <span>Vibe</span>
            <strong>dark / modern / liberal</strong>
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
          <span className="section-label">Fokus</span>
          <h2>Themen mit klarer Kante.</h2>
        </div>
        <div className="focus-list">
          {focusItems.map((item) => (
            <div className="focus-pill" key={item}>
              <span aria-hidden="true"></span>
              {item}
            </div>
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
