function removeSpaces() {
    let input = document.getElementById("inputText").value;

    
    let output = input.replace(/\s+/g, ""); //removes the spaces

    document.getElementById("outputBox").textContent = output;
}

function countCharacters() {
    let text = document.getElementById("textInput").value;

    
    let count = text.length; //counts all the characters

    document.getElementById("resultBox").textContent = count;
}
