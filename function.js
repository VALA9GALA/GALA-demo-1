let quoteArray = [
  "Travel in grace knowing that you are protected by LOVE 💞",
  "Your actions prove your greatness 🤸‍♀️",
  "Accept who you are at the moment, but acknowledge who you want to become 🧚‍♀️",
  "Personal growth lies in the unknown; courage permits you to explore this space 🔮",
];

let submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("submit", handleSubmit);

function handleSubmit() {
  let randomQuote = Math.floor(Math.random() * quoteArray.length);
  let randomQuoteAlert = quoteArray[randomQuote];
  alert(randomQuoteAlert);
}
