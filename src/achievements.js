const ACHIEVEMENT_INTERVAL_MS = 2 * 60 * 1000;

const achievementMessages = [
  "Ein Amt hätte jetzt erst deinen Namen aufgerufen.",
  "Ein Amt hätte dich jetzt gebeten, noch kurz zu warten.",
  "Ein Amt hätte jetzt erst die Wartemarke ausgegeben.",
  "Ein Amt hätte gerade deine Nummer übersprungen.",
  "Ein Amt hätte jetzt gesagt: 'Nur noch fünf Minuten.'",
  "Ein Amt hätte jetzt Schichtwechsel.",
  "Ein Amt hätte jetzt erst geprüft, ob du einen Termin brauchst.",
  "Ein Amt hätte dich jetzt ins falsche Wartezimmer geschickt.",
  "Ein Amt hätte jetzt erstmal geschlossen.",
  "Ein Amt hätte jetzt deine Nummer falsch verstanden.",
  "Ein Amt hätte jetzt zur Frühstückspause aufgerufen.",
  "Ein Amt hätte jetzt gesagt: 'Der Kollege kommt gleich.'",
  "Ein Amt hätte jetzt festgestellt, dass du im falschen Stock bist.",
  "Ein Amt hätte jetzt erst deine Akte gesucht.",
  "Ein Amt hätte dich jetzt nochmal hinten anstellen lassen.",
  "Ein Amt hätte jetzt gefragt, ob du wirklich einen Termin hast.",
  "Ein Amt hätte jetzt erst den Computer hochgefahren.",
  "Ein Amt hätte jetzt die nächste Nummer aufgerufen. Nicht deine.",
  "Ein Amt hätte jetzt erst das Fenster geöffnet.",
  "Ein Amt hätte dir jetzt einen Termin in drei Monaten angeboten.",
  "Ein Amt hätte jetzt gesagt: 'Da sind Sie hier leider falsch.'",
  "Ein Amt hätte gerade angefangen, deine Wartezeit zu bearbeiten.",
  "Ein Amt hätte dich jetzt gebeten, Platz zu nehmen.",
  "Ein Amt hätte jetzt erst die Kaffeemaschine gestartet.",
  "Ein Amt hätte jetzt geprüft, ob heute überhaupt geöffnet ist.",
  "Ein Amt hätte jetzt erstmal deine Unterlagen sortiert.",
  "Ein Amt hätte jetzt gesagt: 'Einen kleinen Moment noch.'",
  "Ein Amt hätte jetzt die Warteschlange neu organisiert.",
  "Ein Amt hätte jetzt Feierabend.",
  "Ein Amt hätte jetzt erst festgestellt, dass noch ein Formular fehlt.",
];

let lastMessageIndex = -1;
let elapsedMinutes = 0;
let hideTimer;

function pickMessage() {
  if (achievementMessages.length === 1) return achievementMessages[0];

  let nextIndex = lastMessageIndex;
  while (nextIndex === lastMessageIndex) {
    nextIndex = Math.floor(Math.random() * achievementMessages.length);
  }

  lastMessageIndex = nextIndex;
  return achievementMessages[nextIndex];
}

function createAchievementToast() {
  const toast = document.createElement("aside");
  toast.className = "achievement-toast";
  toast.setAttribute("aria-live", "polite");
  toast.setAttribute("aria-atomic", "true");

  const kicker = document.createElement("p");
  kicker.className = "achievement-toast__kicker";
  kicker.textContent = "Achievement unlocked";

  const title = document.createElement("strong");
  title.className = "achievement-toast__title";

  const message = document.createElement("p");
  message.className = "achievement-toast__message";

  toast.append(kicker, title, message);
  document.body.append(toast);

  return { toast, title, message };
}

function showAchievement(elements) {
  elapsedMinutes += ACHIEVEMENT_INTERVAL_MS / 60 / 1000;
  elements.title.textContent = `${elapsedMinutes} Minuten auf dieser Seite`;
  elements.message.textContent = pickMessage();
  elements.toast.classList.add("is-visible");

  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 8500);
}

function initAchievements() {
  const elements = createAchievementToast();

  window.setInterval(() => {
    showAchievement(elements);
  }, ACHIEVEMENT_INTERVAL_MS);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAchievements, { once: true });
} else {
  initAchievements();
}
