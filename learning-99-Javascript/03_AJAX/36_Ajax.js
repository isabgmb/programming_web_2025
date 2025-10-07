// `jquery.ajax` library:
$.ajax({
    type: "POST",
    url: "http://example.com/answer",
    data : {answer : 42},
    success: function(msg){
          console.log( "Data Saved: " + msg );
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       console.error("some error");
    }
});



// `fetch-please` library
let api = new FetchPlease();
try {
    let data = api.post("http://example.com", {answer : 42});
}  catch(err) {
    // actually handles HTTP "error" status codes
}
