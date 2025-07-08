function newQuote() {
  const quotes = [
    "Не ошибается тот, кто ничего не делает.",
    "Тот, кто ищет, всегда найдёт.",
    "Будь тем изменением, которое хочешь увидеть в мире.",
    "Смелость – это победа над страхом."
  ];
  const element = document.getElementById('quote');
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  element.textContent = random;
}
