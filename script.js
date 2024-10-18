function clearText() {
    var textBox = document.getElementById("myTextBox");
    if (textBox.value === "Type something here...") {
        textBox.value = "";
    }
}

function resetText() {
    var textBox = document.getElementById("myTextBox");
    if (textBox.value === "") {
        textBox.value = "Type something here...";
    }
}

function copyText() {
    var textBox = document.getElementById("myTextBox");
    textBox.select();
    textBox.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(textBox.value)
        .then(() => {
            alert("Copied the text: " + textBox.value);
        })
        .catch(err => {
            alert("Failed to copy text: " + err);
        });
}