// Basic usage:
let response = await fetch(URL, {
    method,
    headers,
    body,
}); // resolves with response headers
let data = await response.json(); // resolves body content


// Larger example:
let data1 = await fetch("http://example.com/answer", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
    },
    // body data type must match "Content-Type" header
    body: JSON.stringify({answer: 42}), 
})
.then(response => response.json())
// WARNING: _only_ handles true network failures,
// not HTTP "error" status codes like 403!
.catch(err => console.error(err))


// Response object properties:
response.status // HTTP code of the response,
response.ok // true is the status is 200-299.
response.headers // Map-like object with HTTP headers.

// Other response parsing options:
response.json() // JSON object,
response.text() // text,
response.formData() // FormData object (form/multipart encoding),
response.blob() // Blob (binary data with type),
response.arrayBuffer() //ArrayBuffer (pure binary data),
