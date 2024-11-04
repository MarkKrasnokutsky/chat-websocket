const socket = new SockJS('http://localhost:8080/ws');
let stompClient = Stomp.over(socket);

stompClient.connect({}, (frame) => {
    console.log('Connected to WebSocket server ' + frame);

    stompClient.subscribe('/topic/messages', function (message) {
        showMessage(JSON.parse(message.body)["response"], false);
    });
});

function sendMessage() {
    const messageContext = document.getElementById("inputMessage").value;
    if(messageContext) {
        showMessage(messageContext, true);
        stompClient.send('/app/chat', {}, messageContext);
        document.getElementById("inputMessage").value = '';
    }
}

function showMessage(message, isClient) {
    const messageElement = document.createElement('div');
    messageElement.style.padding = '14px 14px';
    messageElement.style.minWidth = '200px';
    messageElement.style.display = 'flex';
    messageElement.style.flexDirection = 'column';
    const text = document.createElement('p');
    const date = document.createElement('span');

    let dateVal = new Date();

    date.innerText = dateVal.getDate() + ' | ' + dateVal.getHours() + ':' + dateVal.getMinutes();
    text.innerText = message;

    messageElement.appendChild(text);
    messageElement.appendChild(date);

    if (isClient) {
        messageElement.style.backgroundColor = '#c67d54';
    }
    else {
        messageElement.style.backgroundColor = '#357db8';
    }

    document.getElementById('messages').appendChild(messageElement);
}
