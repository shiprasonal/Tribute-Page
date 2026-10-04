document.documentElement.classList.add("js");

/* ---------- 1. Scroll progress bar ---------- */
const progress = document.getElementById("progress");

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  progress.style.width = percent + "%";
}
window.addEventListener("scroll", updateProgress);
updateProgress();

/* ---------- 2. Timeline items scroll par dikhana ---------- */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

/* ---------- 3. Quote badalna ---------- */
const quotes = [
    "For great men, religion is a way of making friends; small people make religion a fighting tool.",
    "I feel comfortable in the company of young people, particularly high school students.",
];
const quoteText = document.getElementById("quoteText");
const quoteBtn = document.getElementById("quoteBtn");
let quoteIndex = 0;

quoteBtn.addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteText.textContent = quotes[quoteIndex];
});

/* ---------- 4. Image load na ho to placeholder ---------- */
const portraitImg = document.getElementById("portraitImg");

portraitImg.addEventListener("error", () => {
  const fallback = document.createElement("div");
  fallback.className = "img-fallback";
  fallback.textContent = "APJ";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", "Portrait of Dr. A. P. J. Abdul Kalam");
  portraitImg.replaceWith(fallback);
});