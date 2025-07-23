// 1. Establish WebSocket connection
const socket = new WebSocket('wss://ws.ifelse.io');

// 2. On connection open
socket.addEventListener('open', () => {
  console.log('WebSocket connection established');
  document.getElementById('chatBox').innerHTML += '<p><i>Connected to server</i></p>';
});

// 3. On receiving a message
socket.addEventListener('message', event => {
  const message = event.data;
  document.getElementById('chatBox').innerHTML += `<p><b>Server:</b> ${message}</p>`;
});

// 4. On connection close
socket.addEventListener('close', () => {
  document.getElementById('chatBox').innerHTML += '<p><i>Connection closed</i></p>';
});

// 5. Sending a message
function sendMessage() {
  const input = document.getElementById('messageInput');
  const msg = input.value;

  if (msg.trim() !== '') {
    socket.send(msg);
    document.getElementById('chatBox').innerHTML += `<p><b>You:</b> ${msg}</p>`;
    input.value = '';
  }
}
