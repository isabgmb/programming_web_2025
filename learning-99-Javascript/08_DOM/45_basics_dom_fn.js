function randomColorString() {
    let color = randomColor();
    let rgbString = `rgb(${color.rg}, ${color.g}, ${color.b})`;
    return rgbString;
}

let button = document.createElement("button");

button.addEventListener("click", function() {
    // `this` will bind to `button`
    
    document.body.style.backgroundColor = randomColorString();
})

button.addEventListener("click", () => {
    console.log("Button clicked");
})
