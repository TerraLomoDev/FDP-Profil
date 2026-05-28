import heroVideo from "./assets/hero-video.mp4";
import fdpLogo from "./assets/fdp logo.jpg";
import instagramLogo from "./assets/instagram.png";
import youtubeLogo from "./assets/youtube.png";

const profileStats = [
  { label: "NAME", value: "Patrick van Rossum" },
  { label: "AGE", value: "32" },
  { label: "FACTION", value: "FDP", logo: fdpLogo, url: "https://www.fdp.de/" },
  { label: "REGION", value: "Hannover" },
  { label: "CLASS", value: "IT Business Analyst" },
  { label: "EDUCATION", value: "Fachinformatiker AE" },
];

const affiliations = [
  { name: "Junge Liberale", url: "https://www.julis.de/", suffix: "(Mitglied)" },
  { name: "Liberale Vielfalt", url: "https://www.liberalevielfalt.de/", suffix: "(Mitglied)" },
  { name: "Chaos Computer Club", url: "https://www.ccc.de/", suffix: "(Mitglied)" },
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

const heroQuotes = [
  "Wer hart arbeitet, muss wieder aufsteigen können.",
  "Mehr Geld im Portemonnaie. Weniger beim Staat.",
  "Bildung entscheidet, ob Freiheit praktisch wird.",
  "Weniger Bürokratie. Mehr Vertrauen.",
  "Der Liberale Feminismus ist die Lösung.",
  "Die beste Sozialpolitik ist eine gute Wirtschaftspolitik.",
  "Steuerbetrug zahlt am Ende die Mitte.",
  "Deutschland braucht Macher statt Verwalter.",
];

const siteHeroQuotes = [
  "Wer hart arbeitet, muss aufsteigen können",
  "Integration gelingt nicht ohne Ordnung",
  "Mehr Geld im Portemonnaie. Weniger beim Staat.",
  "Steuerbetrug zahlt am Ende die Mitte",
  "Bildung entscheidet, ob Freiheit praktisch wird",
  "Weniger Bürokratie. Mehr Vertrauen.",
  "Liberaler Feminismus macht Menschen frei",
  "Wirtschaftspolitik ist die beste Sozialpolitik",
  "Deutschland braucht Macher statt Verwalter",
  "Ohne gelebte Meinungsfreiheit stirbt Demokratie",
];

const coreTopics = [
  {
    title: "Buchholz-Kleefeld (Bezirksratswahlen)",
    paragraphs: [
      "Unsere Kommunalpolitik muss endlich im 21. Jahrhundert ankommen. Durch meinen Beruf als IT Business Analyst habe ich gelernt, den aktuellen Ist-Zustand zu hinterfragen und neue Wege zu finden, wenn Prozesse nicht mehr funktionieren. Genau dieses Denken braucht es auch in der Politik. Dinge dürfen nicht weiter nur deshalb so gemacht werden, weil man sie schon immer so gemacht hat.",
      "Überquellende Mülleimer, beschädigte Spielplätze, schlechte Beleuchtung oder Angsträume im öffentlichen Raum dürfen nicht erst nach Monaten bemerkt werden, sondern müssen schnell und unkompliziert gemeldet und behoben werden können.",
      "Mit der EU Digital Identity Wallet, die ab Anfang 2027 allen Bürgerinnen und Bürgern zur Verfügung gestellt werden soll, entstehen dafür völlig neue Möglichkeiten. Vereinfacht gesagt: eine sichere digitale Identität auf dem Handy, mit der Menschen Behördengänge, Beteiligung und Meldungen einfach digital erledigen können. Warum sollte man damit nicht auch direkt Probleme im eigenen Stadtteil melden können?",
      "Gleichzeitig bietet Künstliche Intelligenz neue Chancen für mehr Sicherheit in unseren Städten. Etwa an Orten, an denen sich Menschen abends unsicher fühlen, oder um Schulen besser vor dem aktuell zunehmenden Vandalismus zu schützen. Dabei gilt aber klar: Sicherheit darf niemals auf Kosten der Privatsphäre entstehen. Deshalb müssen solche Systeme anonymisiert arbeiten und Persönlichkeitsrechte konsequent geschützt werden. Gesichtserkennung im öffentlichen Raum, wie sie aktuell von der Landesregierung evaluiert wird, lehne ich dagegen klar ab.",
    ],
    featured: true,
  },
  {
    title: "Bildung",
    paragraphs: [
      "Das Aufstiegsversprechen unserer Gesellschaft muss wieder gelten. Herkunft entscheidet in Deutschland noch immer viel zu oft über Zukunft. Die Zahlen des Statistischen Bundesamts zeigen das deutlich: Menschen mit Migrationshintergrund haben ein mehr als doppelt so hohes Armutsrisiko wie Menschen ohne Migrationshintergrund. Bei Ausländerinnen und Ausländern liegt die Armutsgefährdung sogar noch deutlich höher.",
      "Die Antwort darauf ist Bildung. Bildung ist der Schlüssel zu Aufstieg, Freiheit und echter Integration. Deshalb muss endlich auch das Kooperationsverbot im Bildungsbereich abgeschafft werden. Dieses Bürokratiemonster sorgt dafür, dass Bund und Länder sich bei Schulen gegenseitig die Verantwortung zuschieben, statt gemeinsam Probleme zu lösen. Während Klassenzimmer marode sind, Unterricht ausfällt und Chancen verloren gehen, diskutiert die Politik darüber, wer überhaupt zuständig ist. Das ist absurd.",
      "Gerade in Niedersachsen brauchen wir verpflichtende Sprachstandards vor der Einschulung. Kinder, die diese Standards noch nicht erfüllen, müssen deshalb gezielt gefördert werden, bevor sie regulär die Schule besuchen. Wer dem Unterricht von Anfang an sprachlich nicht folgen kann, startet mit einem massiven Nachteil, der später nur schwer aufzuholen ist.",
    ],
  },
  {
    title: "Digitalisierung",
    paragraphs: [
      "Die Veränderungen, die uns insbesondere durch Künstliche Intelligenz in den nächsten fünf Jahren bevorstehen, werden größer sein als vieles, was wir in den vergangenen Jahrzehnten erlebt haben. Deshalb dürfen wir Digitalisierung nicht länger nur als technisches Thema begreifen. Digitalisierung ist Gesellschaftspolitik. Sie entscheidet darüber, wie wir lernen, arbeiten, wirtschaften und miteinander leben.",
      "Der digitale Staat ist die Grundvoraussetzung für ein modernes, handlungsfähiges Deutschland. Bürgerinnen und Bürger erwarten zu Recht eine Verwaltung, die einfach, schnell und digital funktioniert.",
      "Wir können es uns nicht länger leisten, dass der Föderalismus die Digitalisierung lähmt und Fortschritt blockiert. Deutschland braucht statt endloser Selbstbeschäftigung endlich eine gemeinsame digitale Strategie und den Mut, bestehende Regeln grundlegend zu hinterfragen.",
    ],
    article: [
      {
        label: "Interview bei eGovernment: Zeit für eine Neuausrichtung",
        url: "https://www.egovernment.de/zeit-fuer-eine-neuausrichtung-a-3a073c53f2835cbc995c92f1621c1fda/",
      },
      {
        label: "LOAD: Cyberbomben und der Umgang mit Hackbacks",
        url: "https://load-ev.de/2022/05/31/cyberbomben/",
      },
    ],
  },
  {
    title: "Liberaler Feminismus",
    paragraphs: [
      "Mit dem Erstarken der AfD geraten Frauenrechte und jahrzehntelang erkämpfte gesellschaftliche Fortschritte zunehmend unter Druck. Gleichzeitig hat sich in Teilen Deutschlands ein ideologisch geprägter Feminismus etabliert, der Menschen immer stärker in Gruppen einteilt, statt sie als Individuen zu betrachten.",
      "Für mich bedeutet liberaler Feminismus etwas anderes. Er ist nicht männlich oder weiblich, sondern ein Einsatz für die Freiheit und Selbstbestimmung jedes einzelnen Menschen. Niemand sollte aufgrund des eigenen Geschlechts in gesellschaftliche Rollenbilder oder Erwartungen gedrängt werden.",
      "Liberaler Feminismus denkt deshalb weiter. Er schließt Frauenrechte, Männerrechte sowie die Rechte von trans und intergeschlechtlichen Menschen selbstverständlich mit ein. Denn Geschlechterrollen betreffen nicht nur eine Gruppe, sondern die gesamte Gesellschaft. Wer echte Gleichberechtigung erreichen will, darf Menschen nicht gegeneinander ausspielen, sondern muss Freiheit, Respekt und gleiche Chancen für alle verteidigen.",
      "Gleichzeitig fordert liberaler Feminismus keine künstliche Ergebnisgleichheit zwischen den Geschlechtern, wenn Unterschiede das Ergebnis tatsächlich selbstbestimmter Entscheidungen sind. Das Ziel ist nicht, Menschen in identische Lebenswege zu drängen, sondern strukturelle Diskriminierung dort zu erkennen und zu beseitigen, wo sie Freiheit und Chancen einschränkt.",
    ],
    article: {
      label: "Grundlagenprogramm Liberaler Feminismus",
      url: "https://julis-niedersachsen.de/grundlagenprogramm-liberaler-feminismus/",
    },
  },
  {
    title: "Einwanderung",
    paragraphs: [
      "Die Debatte über Migration und Flüchtlingspolitik wird in Deutschland inzwischen von beiden Seiten extrem populistisch geführt. Immer wieder werden völlig unterschiedliche Themen bewusst oder unbewusst miteinander vermischt. Asylbewerber, Flüchtlinge, qualifizierte Einwanderung und Migration werden oft in einen Topf geworfen, obwohl dahinter unterschiedliche Herausforderungen stehen und deshalb auch unterschiedliche Lösungen notwendig sind. Die einen tun so, als gäbe es überhaupt keine Probleme. Die anderen tun so, als wäre Migration die Ursache aller Probleme unseres Landes. Beides hat mit der Realität wenig zu tun.",
      "Fakt ist Deutschland braucht Zuwanderung. Unsere Gesellschaft wird älter, der Fachkräftemangel wächst und der Mythos, man könne dieses Problem allein durch eine höhere Geburtenrate lösen, ist seit Jahren widerlegt. Selbst Länder mit deutlich stärkerer Familienförderung wie die skandinavischen Staaten stehen vor denselben demografischen Herausforderungen.",
      "Gleichzeitig darf sich ein Staat aber auch nicht auf der Nase herumtanzen lassen. Wer dauerhaft in Deutschland leben möchte, muss bereit sein, Teil unserer Gesellschaft zu werden, unsere Gesetze zu respektieren und seinen Beitrag zu leisten. Integration bedeutet nicht nur Rechte, sondern auch Verantwortung.",
      "Was wir nicht brauchen, ist Symbolpolitik, wie sie aktuell von der Bundesregierung betrieben wird. Wer Migration in erster Linie für parteipolitische Taktik nutzt, sendet auch an dringend benötigte Fachkräfte das falsche Signal und erschwert damit qualifizierte Einwanderung, auf die Deutschland wirtschaftlich angewiesen ist.",
      "Das Flüchtlingsproblem lässt sich nur europäisch lösen. Deshalb brauchen wir die konsequente Umsetzung des Gemeinsamen Europäischen Asylsystems (GEAS) und funktionierende Aufnahmezentren an den EU-Außengrenzen. Europa muss entscheiden können, wer bleiben darf und wer nicht und gleichzeitig humanitäre Verantwortung mit Ordnung und Kontrolle verbinden. Wer glaubt, dass Deutschland diese Herausforderungen im Alleingang bewältigen könnte, verkennt die Realität. Großbritanniens Brexit zeigt deutlich, dass nationale Abschottung keine Lösung für globale Probleme sein kann.",
    ],
  },
  {
    title: "Wirtschaft",
    paragraphs: [
      "Deutschland steckt seit Jahren in einer wirtschaftlichen Stagnation. Das Versprechen, dass es die nächste Generation einmal besser haben wird, ist längst kein Selbstläufer mehr. Wir gehören zu den Ländern mit der höchsten Steuer- und Abgabenlast weltweit, dennoch funktionieren vieles oft zu langsam, zu kompliziert und zu ineffizient. Um dies zu lösen müssen Politik und Gesellschaft gleichermaßen bereit sein, ihre Komfortzone zu verlassen.",
      "Die enorme Schuldenaufnahme der aktuellen Bundesregierung, aber auch die reflexhafte Skandalisierung jeder Einsparung im Sozialbereich zeigen, wie schwer sich Deutschland mit echten Veränderungen tut. Die Agenda 2010, die letzte große Arbeitsmarktreform in Deutschland, hat gezeigt, dass notwendige Reformen häufig auf Widerstand stoßen, langfristig jedoch dazu beitragen, Wohlstand zu sichern und neue Chancen für kommende Generationen zu schaffen. Wirtschaftlicher Fortschritt entsteht nicht durch das Festhalten am Status quo. Er braucht Mut und die Bereitschaft, neue Wege zu gehen.",
      "Um nur einige Beispiele zu nennen: Festhalten am Sonntagsverkaufsverbot, obwohl der Handel online und in unseren Nachbarländern längst weiterläuft, ist ein gutes Beispiel für veraltetes Denken. Während Geschäfte in Deutschland geschlossen bleiben, fließt Kaufkraft ins Ausland oder zu internationalen Onlineplattformen. Auch das Lieferkettengesetz der EU zeigt, wie häufig mit zusätzlicher Bürokratie auf Probleme reagiert wird, obwohl pragmatischere und innovationsfreundlichere Lösungen möglich wären.",
      "Gleichzeitig muss der Staat konsequent gegenüber allen handeln, die sich nicht an die gemeinsamen Regeln halten. Das gilt sowohl für Menschen, die Sozialleistungen missbrauchen, als auch für diejenigen, die sich durch Steuerhinterziehung ihrer Verantwortung gegenüber der Gesellschaft entziehen. Eine funktionierende Soziale Marktwirtschaft basiert auf Vertrauen und Fairness. Wer Unterstützung benötigt, muss sie erhalten können. Wer jedoch bewusst Leistungen erschleicht oder sich seiner steuerlichen Verantwortung entzieht, schadet uns allen. Deshalb braucht es einen Staat, der Chancen ermöglicht und Leistung belohnt, gleichzeitig aber Regeln konsequent durchsetzt und Missbrauch wirksam bekämpft.",
    ],
  },
];

const sortedTopics = [
  ...coreTopics.filter((topic) => topic.featured),
  ...coreTopics.filter((topic) => !topic.featured).sort((a, b) => a.title.localeCompare(b.title, "de")),
];

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Hauptnavigation">
        <a className="brand" href="#top" aria-label="Patrick van Rossum Start">
          Patrick van Rossum (Quereinsteiger)
        </a>
        <div className="nav-links">
          <a href="#steckbrief">Profil</a>
          <a href="#fokus">Schwerpunktthemen</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-visual" aria-label="Abstraktes dunkles Profilmotiv">
          <video
            className="hero-media"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="quote-rotator" aria-label="Politische Aussagen">
            {siteHeroQuotes.map((quote) => (
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
            <p className="profile-bio">
              Als überzeugter Ordoliberaler steht für mich die Freiheit des Individuums an erster Stelle. Staatliche
              Eingriffe sind nur dann gerechtfertigt, wenn sie zu einem deutlich größeren Maß an Freiheit für die
              Gesellschaft insgesamt führen.
            </p>
          </article>

          <aside className="game-stats" aria-label="Profil Werte">
            {profileStats.map((stat) => (
              <div className="stat-line" key={stat.label}>
                <span>{stat.label}</span>
                {stat.logo ? (
                  <a className="party-logo-link" href={stat.url} target="_blank" rel="noopener noreferrer">
                    <img className="party-logo" src={stat.logo} alt={stat.value} />
                  </a>
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
                    <a href={affiliation.url} target="_blank" rel="noopener noreferrer">
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
          {sortedTopics.map((topic) => (
            <details className={topic.featured ? "topic-item topic-item-featured" : "topic-item"} key={topic.title}>
              <summary>{topic.title}</summary>
              {topic.paragraphs
                ? topic.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                : <p>{topic.text}</p>}
              {(Array.isArray(topic.article) ? topic.article : topic.article ? [topic.article] : []).map((article) => (
                <a className="topic-link" href={article.url} target="_blank" rel="noopener noreferrer" key={article.url}>
                  {article.label}
                </a>
              ))}
            </details>
          ))}
        </div>
      </section>

      <footer id="kontakt" className="footer">
        <div className="footer-brand">
          <p>Patrick van Rossum</p>
          <div className="social-links footer-social-links" aria-label="Social Media">
            <a
              className="social-link"
              href="https://www.instagram.com/patrick_vanrossum/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagramLogo} alt="" />
            </a>
            <span className="social-link social-link-static" aria-label="YouTube">
              <img src={youtubeLogo} alt="" />
            </span>
          </div>
        </div>
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
