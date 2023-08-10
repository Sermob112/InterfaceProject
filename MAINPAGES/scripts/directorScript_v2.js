// const widget = document.getElementById('draggable-widget');
// const header = widget.querySelector('.widget-header');
// const closeButton = widget.querySelector('.close-button');

// let isDragging = false;
// let offsetX, offsetY;

// header.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   offsetX = e.clientX - widget.getBoundingClientRect().left;
//   offsetY = e.clientY - widget.getBoundingClientRect().top;
// });

// document.addEventListener('mousemove', (e) => {
//   if (!isDragging) return;

//   const newX = e.clientX - offsetX;
//   const newY = e.clientY - offsetY;

//   widget.style.left = `${newX}px`;
//   widget.style.top = `${newY}px`;
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
// });

// closeButton.addEventListener('click', () => {
//   widget.style.display = 'none';
// });

// const resizer = document.getElementById('resizable-widget');
// const resizeIcons = resizer.querySelectorAll('.resize-icon');

// resizer.addEventListener('mouseenter', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 1;
//   });
// });

// resizer.addEventListener('mouseleave', () => {
//   resizeIcons.forEach(icon => {
//     icon.style.opacity = 0;
//   });
// });
//изминение размера виджета при открытии нового
function openNewWidget() {
  const widgetContainer = document.querySelector('.widget-container');
  const newWidget = document.createElement('div');
  newWidget.className = 'resizable-widget active-widget';
  newWidget.innerHTML = '<!-- ... Внутренности нового виджета ... -->';

  widgetContainer.appendChild(newWidget);

  const activeWidgets = document.querySelectorAll('.active-widget');
  const widgetWidthPercentage = 100 / (activeWidgets.length);

  activeWidgets.forEach((widget, index) => {
    widget.style.width = `${widgetWidthPercentage}%`;
    widget.style.transform = `translateX(${index * widgetWidthPercentage}%)`;
  });
}
// Размер виджета
function setupWidget(widgetId) {
    const widget = document.getElementById(widgetId);
    const resizeHandle = widget.querySelector('.resize-handle');
    const widgetHeader = widget.querySelector('.widget-header');
    const closeButton = widget.querySelector('.close-button');
  
    let isResizing = false;
    let originalWidth, originalHeight;
    let isDragging = false;
    let initialX, initialY; // Added variables for initial cursor position
  
    resizeHandle.addEventListener('mousedown', (e) => {
      isResizing = true;
      originalWidth = widget.offsetWidth;
      originalHeight = widget.offsetHeight;
      e.preventDefault(); // Prevent text selection during resize
    });
  
    widgetHeader.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - parseFloat(getComputedStyle(widget).left); // Store initial cursor position
      initialY = e.clientY - parseFloat(getComputedStyle(widget).top); // Store initial cursor position
      e.preventDefault(); // Prevent text selection during dragging
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        const newWidth = originalWidth + (e.clientX - resizeHandle.getBoundingClientRect().left);
        const newHeight = originalHeight + (e.clientY - resizeHandle.getBoundingClientRect().top);
        widget.style.width = `${newWidth}px`;
        widget.style.height = `${newHeight}px`;
      } else if (isDragging) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        widget.style.left = `${newX}px`;
        widget.style.top = `${newY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isResizing = false;
      isDragging = false;
    });
  
    closeButton.addEventListener('click', () => {
      widget.style.display = 'none';
    });
  }
  
  const widgetIds = ['widget1', 'widget2', 'widget3'];
  
  widgetIds.forEach(widgetId => {
    setupWidget(widgetId);
  });
// Панель виджетов
  const widgetIcons = document.querySelectorAll('.func');
const widgets = document.querySelectorAll('.resizable-widget');

widgetIcons.forEach(icon => {
  const widgetId = icon.getAttribute('data-widget');
  const widget = document.getElementById(widgetId);

  icon.addEventListener('click', () => {
    if (widget.style.display === 'none') {
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  });
});


const widgetButtons = document.querySelectorAll('.widget-header button');

widgetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const widgetContainer = button.closest('.widget-container');
    const widgets = widgetContainer.querySelectorAll('.resizable-widget');

    widgets.forEach(widget => {
      widget.classList.remove('active-widget');
    });

    const widget = button.closest('.resizable-widget');
    widget.classList.add('active-widget');
  });
});


const vidgetLine = document.querySelector('.vidgetLine');
const vidgetContext = document.querySelector('.vidgetContext')

vidgetLine.addEventListener("click", function(event){
    for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
        vidgetLine.children[i].classList.remove('activeButton');
    }

    for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
        vidgetContext.children[i].classList.remove('activeBlock');
    }

    if (event.target.closest('button')){
        event.target.closest('button').classList.add('activeButton');

        document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
    }
})


//чат

function setupChatWidget() {
  const chatWidgetContainer = document.querySelector('.chat-widget-container');
  const chatWidget = chatWidgetContainer.querySelector('.chat-widget');
  const chatWidgetToggle = chatWidgetContainer.querySelector('.chat-widget-toggle');
  const closeButton = chatWidget.querySelector('.close-button');

  chatWidgetToggle.addEventListener('click', () => {
    chatWidget.style.display = 'block';
    chatWidgetToggle.style.display = 'none'; // Скрываем иконку
  });

  closeButton.addEventListener('click', () => {
    chatWidget.style.display = 'none';
    chatWidgetToggle.style.display = 'block'; // Показываем иконку
  });
}

setupChatWidget();


//симуляция чата
document.addEventListener("DOMContentLoaded", function () {
  const chatContent = document.querySelector(".chat-content");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", sendMessage);

  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      addMessage("user", messageText); // Отправляем сообщение пользователя
      messageInput.value = "";
      simulateResponse(); // Симулируем получение ответа
    }
  }

  function addMessage(sender, message) {
    const messagesList = chatContent.querySelector(".messages-list");
    const messageElement = document.createElement("li");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    messagesList.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight; // Прокручиваем вниз для отображения последнего сообщения
  }

  function simulateResponse() {
    setTimeout(function () {
      addMessage("bot", "Привет! Как я могу помочь вам?"); // Симулируем ответ бота
    }, 1000); // Задержка для эмуляции ответа
  }
});

//боковая панель у главного виджета ежедневник
const panelTitle = document.getElementById('panelTitle');
const panelContent = document.getElementById('panelContent');
const tableRows = document.querySelectorAll('.widget-table tbody tr');
const widgetTextColumn = document.getElementById('widgetTextColumn');

// Обработчики событий для каждой строки таблицы
tableRows.forEach((row, index) => {
  row.addEventListener('click', () => {
    if (widgetTextColumn.style.display === 'block') {
      // Если панель открыта и была нажата та же строка, закрываем панель
      widgetTextColumn.style.display = 'none';
    } else {
      // Иначе, отображаем панель и обновляем данные
      handleRowClick(index);
      const rowData = getRowData(index);
      panelTitle.textContent = rowData.title;
      panelContent.textContent = rowData.content;
      row.classList.add('selected-row');
    }
  });
});


function getRowData(index) {
  // Возвращаем данные в зависимости от индекса строки
  if (index === 0) {
    return {
      title: 'Заголовок для первой строки',
      content: 'Содержимое первой строки...'
    };
  } else if (index === 1) {
    return {
      title: 'Заголовок для второй строки',
      content: 'Содержимое второй строки...'
    };
  }
  // И так далее...
}

const rowStates = {};

// Функция для обработки нажатия на строку
function handleRowClick(index) {
  // Скрываем все открытые панели
  for (const stateIndex in rowStates) {
    if (rowStates[stateIndex]) {
      rowStates[stateIndex] = false;
    }
  }
  
  // Отображаем панель и меняем состояние на true
  widgetTextColumn.style.display = 'block';
  rowStates[index] = true;
}