// Функция для отправки сообщения

//Открыть чат
document.addEventListener('DOMContentLoaded', function () {
  const employeeTable = document.querySelector('.employee-table');
  const widgetChat = document.querySelector('#widgetChat');
  const personRows = document.querySelectorAll('.person-row'); // Выбираем все элементы с классом "person-row"

  personRows.forEach(row => {
    row.addEventListener('click', function () {
      // При нажатии на элемент "person-row", отображаем виджет
      widgetChat.style.display = 'block';
    });
  });
});

//Открыть диалог
// const personRows = document.querySelectorAll(".person-row");

// personRows.forEach(row => {
//   row.addEventListener("click", () => {
//     personRows.forEach(row => row.classList.remove("selected"));

//     // Добавляем класс .selected к элементу, на котором был клик
//     row.classList.add("selected");

//     const userName = row.querySelector("td").textContent;
//     selectedUserName = userName; // Сохраняем выбранное имя
//     displayChatWithUser(userName);
//   });
// });
const personRows = document.querySelectorAll(".person-row");
const personsContainer = document.querySelector(".persons");

personRows.forEach(row => {
  row.addEventListener("click", () => {

    personRows.forEach(row => row.classList.remove("selected"));


    row.classList.add("selected");

    const userName = row.querySelector("td").textContent;
    selectedUserName = userName; 
    displayChatWithUser(userName);


    const existingButton = Array.from(personsContainer.querySelectorAll(".person-selector-button span")).find(span => span.textContent === userName);

    if (!existingButton) {

      const button = document.createElement("button");
      button.className = "button person-selector-button";
      button.innerHTML = `
        <img src="../../img/avatar.png" alt="Аватар ${userName}">
        <span>${userName}</span>
      `;


      button.addEventListener("click", () => {

        displayChatWithUser(userName);
      });

   
      personsContainer.appendChild(button);
    }
  });
});


// Функция для получения текущего времени в формате "чч:мм:сс"
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}


// Функция для отображения переписки с выбранным пользователем
function displayChatWithUser(userName) {
  // Очистите текущий чат
  clearChat();

  const chatHeader = document.createElement("div");
  chatHeader.className = "chat-header";
  chatHeader.innerHTML = `<h2>${userName}</h2>`;
  const chatMessages = document.querySelector(".chat-messages");
  chatMessages.appendChild(chatHeader);


}

// Очистка текущего чата
function clearChat() {
  const chatHeader = document.querySelector(".chat-header");
  const chatMessages = document.querySelector(".chat-messages");
  if (chatHeader) {
      chatHeader.remove();
  }
  if (chatMessages) {
      chatMessages.innerHTML = ""; // Очищаем содержимое сообщений
  }
}

let selectedUserName = null; // Переменная для хранения выбранного имени

// Обработчик события для кнопок выбора пользователя
const personButtons = document.querySelectorAll(".person-selector-button");
personButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userName = button.querySelector("span").textContent;
        selectedUserName = userName; // Сохраняем выбранное имя
        displayChatWithUser(userName);
    });
});

// Функция для отправки сообщения и получения ответа
function sendMessageAndReceiveResponse(messageText) {
  const chatMessages = document.querySelector(".chat-messages");
  
  // Отправляем сообщение пользователя
  const userMessage = createMessageElement("Вы", messageText, true);
  chatMessages.appendChild(userMessage);
  
  // Генерируем ответ от выбранного пользователя
  if (selectedUserName) {
    const responseMessageText = generateResponse(messageText, selectedUserName);
    setTimeout(() => {
      const responseMessage = createMessageElement(selectedUserName, responseMessageText, false);
      chatMessages.appendChild(responseMessage);
    }, 1000);
    
    if (!messageHistory[selectedUserName]) {
      messageHistory[selectedUserName] = [];
    }
    messageHistory[selectedUserName].push({ sender: "Вы", text: messageText, isUser: true });
    
    // Генерируем и сохраняем ответ

    const responseMessage = { sender: selectedUserName, text: responseMessageText, isUser: false };
    messageHistory[selectedUserName].push(responseMessage);
  }
}



function createMessageElement(sender, messageText, senderAvatar, timestamp) {
  const message = document.createElement("div");
  message.className = "message";
  
  // Создаем элемент аватара
  const messageAvatar = document.createElement("div");
  messageAvatar.className = "message-avatar";
  const avatarImg = document.createElement("img");
  avatarImg.src = "../../img/avatar.png"; // URL аватарки отправителя
  avatarImg.alt = "../../img/avatar.png";
  messageAvatar.appendChild(avatarImg);
  
  // Создаем элемент контента сообщения
  const messageContent = document.createElement("div");
  messageContent.className = "message-content";
  const messageSender = document.createElement("div");
  messageSender.className = "message-sender";
  messageSender.textContent = sender;
  const messageTextDiv = document.createElement("div");
  messageTextDiv.className = "message-text";
  messageTextDiv.textContent = messageText;
  const messageTimestamp = document.createElement("div");
  messageTimestamp.className = "message-timestamp";
  messageTimestamp.textContent = timestamp;
  
  // Добавляем элементы в контент сообщения
  messageContent.appendChild(messageSender);
  messageContent.appendChild(messageTextDiv);
  messageContent.appendChild(messageTimestamp);
  
  // Добавляем элементы в сообщение
  message.appendChild(messageAvatar);
  message.appendChild(messageContent);
  
  return message;
}


// Функция для генерации ответа (вы можете настроить ее по своему усмотрению)
const responses = {
  "Виталий Алексеевич": [
    "Хорошо, сейчас подойду",
    "Ок",
  ],
  "Дмитрий Викторович": [
    "Здравствуйте!",
    "Да, понял, буду через 10 минут у вас",
  ],
  // Добавьте другие имена и соответствующие им ответы здесь
};

function generateResponse(userMessage, userName) {
  if (responses[userName]) {
    const userResponses = responses[userName];
    const randomIndex = Math.floor(Math.random() * userResponses.length);
    return userResponses[randomIndex];
  } else {
    return "Все понял, буду";
  }
}

// Обработчик события для отправки сообщения
const chatInputForm = document.querySelector(".chat-input-form");
chatInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = e.target.querySelector(".chat-input").value;
  if (messageText.trim() !== "") {
      sendMessageAndReceiveResponse(messageText);
  }
});
const messageHistory = {};
function displayChatWithUser(userName) {
  // Очистите текущий чат
  clearChat();

  // Создайте заголовок чата с именем пользователя
  const chatHeader = document.createElement("div");
  chatHeader.className = "chat-header";
  chatHeader.innerHTML = `<h2>${userName}</h2>`;
  const chatMessages = document.querySelector(".chat-messages");
  chatMessages.appendChild(chatHeader);

  // Отображаем переписку с выбранным пользователем
  if (messageHistory[userName]) {
    messageHistory[userName].forEach((message) => {
      const messageElement = createMessageElement(message.sender, message.text, message.isUser);
      chatMessages.appendChild(messageElement);
    });
  }
}
