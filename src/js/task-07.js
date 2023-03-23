const textInput = document.querySelector("input");
textInput.addEventListener("blur", () => {
    textInput.classList.add("valid", "invalid");
    if (textInput.value.length === 6) {
        textInput.classList.replace("invalid", "valid");
    } else {
        textInput.classList.replace("valid", "invalid");
    }
});