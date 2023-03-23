const inputEL = document.getElementById('validation-input');

inputEL.addEventListener('blur', () => {
    inputEL.ariaValueMax.length ===
    +inputEL.dataset.length
        ? (inputEL.className = 'valid')
        : (inputEL.className = 'invalid');
});