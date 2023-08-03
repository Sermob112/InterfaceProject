// Получаем ссылки на поля логина и пароля
const loginField = document.querySelector(".login-field");
const passwordField = document.querySelector(".password-field");

// Значения для заполнения полей
const loginValue = "login";
const passwordValue = "password";

// Функция для имитации анимации печатания
function simulateTyping(element, text, speed = 100) {
  let index = 0;
  function typeNextCharacter() {
    if (index < text.length) {
      element.value += text[index];
      index++;
      setTimeout(typeNextCharacter, speed);
    }
  }
  typeNextCharacter();
}

// Запускаем анимацию при загрузке страницы
window.onload = function () {
  // Запускаем анимацию для поля логина
  setTimeout(function () {
    simulateTyping(loginField, loginValue);
  }, 1500); 
  // Запускаем анимацию для поля пароля после небольшой паузы
  setTimeout(function () {
    simulateTyping(passwordField, passwordValue);
  }, 3500); // Измените эту паузу (в миллисекундах) в зависимости от вашего желания
};

const loginButton = document.querySelector(".login-button");

// Функция для добавления класса подсветки
function highlightButton() {
  loginButton.classList.add("login-button-highlight");
}

// Запускаем функцию с задержкой в 3 секунды после загрузки страницы
setTimeout(highlightButton, 5000);
// Функция для автоматического перехода по ссылке через 3 секунды
function redirectToRent() {
  window.location.href = 'Director.html';
}
setTimeout(redirectToRent, 5500);