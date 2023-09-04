const johnSelectorBtn = document.querySelector('#john-selector')
const janeSelectorBtn = document.querySelector('#jane-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'Виталий' ? 'from-me' : 'gray-bg'}">
    <div class="message-avatar">
      <img src="../../img/avatar.png" alt="${message.sender}">
    </div>
    <div class="message-content">
      <div class="message-sender">${message.sender}</div>
      <div class="message-text">${message.text}</div>
      <div class="message-timestamp">${message.timestamp}</div>
    </div>
  </div>
`

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message)
  })
}

let messageSender = 'Дмитрий' // Начальное значение отправителя

const updateMessageSender = (name) => {
  messageSender = name
  chatInput.placeholder = `Введите сообщение`

  if (name === 'Виталий') {
    johnSelectorBtn.classList.add('active-person')
    janeSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Дмитрий') {
    janeSelectorBtn.classList.add('active-person')
    johnSelectorBtn.classList.remove('active-person')
  }

  chatInput.focus()
}

johnSelectorBtn.onclick = () => updateMessageSender('Дмитрий') // При клике на Виталий, отправляются сообщения от Дмитрия
janeSelectorBtn.onclick = () => updateMessageSender('Виталий') // При клике на Дмитрий, отправляются сообщения от Виталия

const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }

  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))
  chatMessages.innerHTML += createChatMessageElement(message)
  chatInputForm.reset()
  chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

clearChatBtn.addEventListener('click', () => {
  localStorage.clear()
  chatMessages.innerHTML = ''
})