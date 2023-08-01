

function toggleSidebar(event) {
  const sidebar = document.querySelector('.sidebar');
  const container = document.getElementById('workshop-map-container');
  const sidebarTexts = sidebar.querySelectorAll(".sidebar-text");
  const circles = sidebar.querySelectorAll(".circle-2");

  // Проверяем, был ли нажат элемент с классом sidebar (background-image)
  if (event.target.classList.contains('sidebar')) {
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "80px";
      container.style.marginLeft = "100px";
      container.style.width = "calc(80% - 100px)";
      container.style.height = "calc(80% + 20px)";
    } else {
      sidebar.style.width = "250px";
      container.style.marginLeft = "280px";
      container.style.width = "80%";
      container.style.height = "80%";
    }
  }

  // Изменяем прозрачность текста и фигур при открытии/закрытии сайдбара
  sidebarTexts.forEach((text) => {
    text.style.opacity = (sidebar.style.width === "250px") ? "1" : "0";
  });

  circles.forEach((circle) => {
    circle.style.opacity = (sidebar.style.width === "250px") ? "1" : "0";
  });
}
function toggleContainer(containerId, event) {
  const container = document.getElementById(containerId);
  container.classList.toggle('open');
  event.stopPropagation(); // Остановить распространение события нажатия на дочерние элементы
}

 // Получаем ссылку на сайдбар
  const sidebar = document.querySelector('.sidebar');
  const conteiner = document.querySelector('.workshop-map-container');
  const circle2 = document.querySelector('.circle-2');
   const circle = document.querySelector('.circle');
  // Вызываем функцию через 2 секунды после загрузки страницы
 setTimeout(() => {
      toggleSidebar({ target: sidebar }); // Передаем в функцию событие с нажатым элементом sidebar
    }, 2000);

  setTimeout(() => {
      toggleSidebar({ target: sidebar }); // Передаем в функцию событие с нажатым элементом sidebar
    }, 12000);

window.addEventListener('DOMContentLoaded', () => {
  // Ждем 3 секунды и вызываем функцию для открытия контейнера
  setTimeout(() => {
    toggleContainer('workshop-map-container');
  }, 3000);
    setTimeout(() => {
    toggleContainer('workshop-map-container');
  }, 11000);

  setTimeout(() => {
      circle2.style.backgroundColor = 'red'; // Здесь можно указать нужный цвет
      circle2.style.opacity = 1; // Устанавливаем полную прозрачность
       circle.style.backgroundColor = 'red'; // Здесь можно указать нужный цвет
      circle.style.opacity = 1; // Устанавливаем полную прозрачность
    }, 2000);
});