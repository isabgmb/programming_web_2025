// `axios` library:
try {
    // Automatically stringified / parsed
    let data = await axios.post(
        "http://example.com/answer", {answer : 42}
    )
} catch(err) {
    // actually handles HTTP "error" status codes
}

// Create pre-customized instances:
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});



// `superagent` library:
try {
    let data = await request.post("http://example.com/answer")
                        .send({answer : 42});
} catch (err) {
    // actually handles HTTP "error" status codes
}
