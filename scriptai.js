document.addEventListener('DOMContentLoaded', function () {
  // Initial system message
  appendMessage('ChatGPT Bot', 'Hello! How can I help you today?');

  // Function to send user message to the server
  window.sendMessage = function () {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('You', userInput);

    // Make a request to the server
    fetch(`/chat?message=${encodeURIComponent(userInput)}`)
      .then(response => response.json())
      .then(data => {
        const botReply = data.reply || 'I have no response.';
        appendMessage('ChatGPT Bot', botReply);
      })
      .catch(error => {
        console.error('Error:', error.message);
        appendMessage('ChatGPT Bot', 'Oops! Something went wrong.');
      });

    // Clear the user input field
    document.getElementById('user-input').value = '';
  };

  // Function to append a message to the chat box
  function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
