const generateBtn = document.getElementById("generateBtn");
const wordInput = document.getElementById("wordInput");
const countInput = document.getElementById("countInput");
const output = document.getElementById("output");
const languageSelect = document.getElementById("languageSelect");
const title = document.getElementById("title");

const translations = {
  en: {
    title: "Repeat a Word",
    wordPlaceholder: "Enter a word",
    countPlaceholder: "How many times?",
    button: "Generate"
  },
  bn: {
    title: "শব্দ পুনরাবৃত্তি করুন",
    wordPlaceholder: "একটি শব্দ লিখুন",
    countPlaceholder: "কতবার?",
    button: "তৈরি করুন"
  },
  // hi: {
  //   title: "शब्द दोहराएं",
  //   wordPlaceholder: "एक शब्द लिखें",
  //   countPlaceholder: "कितनी बार?",
  //   button: "बनाएं"
  // }
};

languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  title.textContent = translations[lang].title;
  wordInput.placeholder = translations[lang].wordPlaceholder;
  countInput.placeholder = translations[lang].countPlaceholder;
  generateBtn.textContent = translations[lang].button;
});

generateBtn.addEventListener("click", () => {
  const word = wordInput.value.trim();
  const count = parseInt(countInput.value);
  output.innerHTML = "";

  if (!word || isNaN(count) || count < 1) {
    output.innerHTML = "<p>Please enter a valid word and number.</p>";
    return;
  }

  for (let i = 0; i < count; i++) {
    const p = document.createElement("p");
    p.textContent = word;
    output.appendChild(p);
  }
  const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  const paragraphs = output.querySelectorAll("p");
  let combinedText = "";

  paragraphs.forEach(p => {
    combinedText += p.textContent + "\n";
  });

  if (combinedText.trim() === "") {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(combinedText)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch(err => {
      console.error("Copy failed:", err);
    });
});
document.getElementById("wordInput").addEventListener("focus", function(e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
});