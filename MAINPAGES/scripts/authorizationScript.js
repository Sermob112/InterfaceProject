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
  }, 6500); 
  // Запускаем анимацию для поля пароля после небольшой паузы
  setTimeout(function () {
    simulateTyping(passwordField, passwordValue);
  }, 9500); // Измените эту паузу (в миллисекундах) в зависимости от вашего желания
};

const Button = document.getElementById('loginButton');

// Добавляем обработчик события на нажатие кнопки
Button.addEventListener('click', function() {
  // Переходим на другую страницу
  window.location.href = 'director_new.html';
});


// setTimeout(redirectToRent, 5500);



// курсор

