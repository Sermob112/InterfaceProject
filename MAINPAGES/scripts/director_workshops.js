// Получите все элементы с классом .workshop
const workshops = document.querySelectorAll('.workshop');

// Добавьте обработчик события click для каждого элемента
workshops.forEach(workshop => {
  workshop.addEventListener('click', () => {
    // Получите содержимое подсказки из атрибута data-tooltip
    const tooltipContent = workshop.getAttribute('data-tooltip');

    // Проверьте, существует ли подсказка для данного элемента
    let tooltip = workshop.querySelector('.workshop-tooltip');

    // Если подсказка не существует, создайте её
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'workshop-tooltip';
      tooltip.textContent = tooltipContent; // Используйте содержимое из data-tooltip

      // Добавьте подсказку к элементу .workshop
      workshop.appendChild(tooltip);
    }

    // Переключите видимость подсказки
    tooltip.classList.toggle('show-tooltip');
  });
});