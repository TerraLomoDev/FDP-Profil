import heroImage from "./assets/fdp-profile-hero.png";
import fdpLogo from "./assets/fdp logo.jpg";

const profileStats = [
  { label: "NAME", value: "Patrick van Rossum" },
  { label: "AGE", value: "32" },
  { label: "FACTION", value: "FDP", logo: fdpLogo },
  { label: "REGION", value: "Hannover" },
  { label: "CLASS", value: "IT Business Analyst" },
  { label: "EDUCATION", value: "Fachinformatiker AE" },
];

const affiliations = [
  { name: "Junge Liberale", url: "https://www.julis.de/" },
  { name: "Liberale Vielfalt", url: "https://www.liberalevielfalt.de/" },
  { name: "Chaos Computer Club", url: "https://www.ccc.de/" },
  { name: "Box Club Hannover Kleefeld e. V.", url: "https://www.boxen-hannover.de/", suffix: "(Mitglied)" },
];

const interests = [
  { icon: "\u{1F94A}", name: "Kampfsport" },
  { icon: "\u{2708}\u{FE0F}", name: "Reisen" },
  { icon: "\u{1F4BB}", name: "IT" },
  { icon: "\u{270D}\u{FE0F}", name: "Schreiben" },
];

const quotes = [
  "Das Aufstiegsversprechen muss wieder gelten.",
  "Der Staat macht zu viel Schulden.",
  "Bildung entscheidet, ob Freiheit praktisch wird.",
  "Weniger Bürokratie. Mehr Vertrauen.",
];

const coreTopics = [
  {
    title: "Buchholz-Kleefeld (Bezirksratswahlen)",
    text:
      "Kommunalpolitik muss konkret sein: sichere Wege, lebendige Stadtteile, digitale Verwaltung vor Ort und ein Bezirksrat, der Probleme löst, statt sie zu vertagen.",
    featured: true,
  },
  {
    title: "Digitalisierung",
    paragraphs: [
      "Die Veränderungen, die uns insbesondere durch Künstliche Intelligenz in den nächsten fünf Jahren bevorstehen, werden größer sein als vieles, was wir in den vergangenen Jahrzehnten erlebt haben. Deshalb dürfen wir Digitalisierung nicht länger nur als technisches Thema begreifen. Digitalisierung ist Gesellschaftspolitik. Sie entscheidet darüber, wie wir lernen, arbeiten, wirtschaften und miteinander leben.",
      "Der digitale Staat ist die Grundvoraussetzung für ein modernes, handlungsfähiges Deutschland. Bürgerinnen und Bürger erwarten zu Recht eine Verwaltung, die einfach, schnell und digital funktioniert.",
      "Wir können es uns nicht länger leisten, dass der Föderalismus die Digitalisierung lähmt und Fortschritt blockiert. Deutschland braucht statt endloser Selbstbeschäftigung endlich eine gemeinsame digitale Strategie und den Mut, bestehende Regeln grundlegend zu hinterfragen.",
    ],
    article: {
      label: "Interview bei eGovernment: Zeit für eine Neuausrichtung",
      url: "https://www.egovernment.de/zeit-fuer-eine-neuausrichtung-a-3a073c53f2835cbc995c92f1621c1fda/",
    },
  },
  {
    title: "Bildung",
    text:
      "Beste Chancen für jede Biografie: gute Ausstattung, starke Lehrkräfte und Schulen, die Talente wirklich fördern.",
  },
  {
    title: "Liberaler Feminismus",
    text:
      "Selbstbestimmung, gleiche Chancen und echte Wahlfreiheit in Karriere, Familie und gesellschaftlicher Teilhabe.",
  },
  {
    title: "Wirtschaft",
    text:
      "Mehr Raum für Gründung, Mittelstand und Innovation, damit Leistung sich lohnt und Wachstum vor Ort entsteht.",
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
          <a href="#steckbrief">Profil</a>
          <a href="#fokus">Fokus</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-visual" aria-label="Abstraktes dunkles Profilmotiv">
          <img className="hero-backdrop" src={heroImage} alt="" aria-hidden="true" />
          <img className="hero-media" src={heroImage} alt="" />
          <div className="quote-rotator" aria-label="Politische Aussagen">
            {quotes.map((quote) => (
              <p key={quote}>{quote}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="steckbrief" className="profile-band">
        <div className="section-label">Profil</div>
        <div className="profile-grid">
          <article className="profile-intro">
            <div className="profile-photo" aria-label="Profilbild Platzhalter">
              <span>Profilbild</span>
            </div>
          </article>

          <aside className="game-stats" aria-label="Profil Werte">
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
              <span>INTERESTS</span>
              <ul className="interest-list">
                {interests.map((interest) => (
                  <li key={interest.name}>
                    <span aria-hidden="true">{interest.icon}</span>
                    {interest.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stat-line stat-stack">
              <span>AFFILIATIONS</span>
              <ul>
                {affiliations.map((affiliation) => (
                  <li key={affiliation.name}>
                    <a href={affiliation.url} target="_blank" rel="noreferrer">
                      {affiliation.name}
                    </a>
                    {affiliation.suffix ? ` ${affiliation.suffix}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="fokus" className="focus-section">
        <div className="section-heading">
          <span className="section-label">Schwerpunkthemen</span>
          <h2>Nicht links. Nicht rechts. Sondern nach vorn.</h2>
        </div>
        <div className="topic-list">
          {coreTopics.map((topic) => (
            <details className={topic.featured ? "topic-item topic-item-featured" : "topic-item"} key={topic.title}>
              <summary>{topic.title}</summary>
              {topic.paragraphs
                ? topic.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                : <p>{topic.text}</p>}
              {topic.article ? (
                <a className="topic-link" href={topic.article.url} target="_blank" rel="noreferrer">
                  {topic.article.label}
                </a>
              ) : null}
            </details>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="footer">
        <p>Patrick van Rossum</p>
        <div className="footer-links">
          <a href="./impressum.html">Impressum</a>
          <a href="./datenschutz.html">Datenschutzerklärung</a>
          <span>Kontakt: Patrick_van_rossum@julis.de</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
