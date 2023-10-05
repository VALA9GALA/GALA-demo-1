let quote = [
  "Travel in grace knowing that you are protected by LOVE 💞",
  "Your actions prove your greatness 🤸‍♀️",
  "Accept who you are at the moment, but acknowledge who you want to become 🧚‍♀️",
  "Personal growth lies in the unknown; courage permits you to explore this space 🔮",
];

function handleSubmit(event) {
  event.preventDefault();
  let randomQuote = Math.floor(Math.random() * quote.length);
  let randomQuoteAlert = quote[randomQuote];
  alert(randomQuoteAlert);
}
document.querySelector("#submit-btn").addEventListener("submit", handleSubmit);
