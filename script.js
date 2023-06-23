document.addEventListener("DOMContentLoaded", function() {
  const chatLog = document.getElementById("chat-log");
  const userInput = document.getElementById("user-input");

  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const userMessage = userInput.value.trim();
      if (userMessage !== "") {
        appendMessage("User: " + userMessage);
        generateResponse();
      }
      userInput.value = "";
    }
  });

  function appendMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatLog.appendChild(messageElement);
  }

  function generateResponse() {
    const responses = ["Hmm", "Amr j ki hbe", "Ami j ki krbo", "Ok"];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    setTimeout(function() {
      appendMessage("Bot: " + response);
    }, 500);
  }
});
