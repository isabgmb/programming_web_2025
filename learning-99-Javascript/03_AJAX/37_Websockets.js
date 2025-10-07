// special protocols: "ws" and "wss" correspond to HTTP(S)
let socket = new WebSocket("wss://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener("message", function (event) {
    console.log('Message from server ', event.data);
});

// Can send data as strings:
let obj = {a : 42, b : "blah"};
socket.send(JSON.stringify(obj));

// or also as binary blobs / arraybuffers
