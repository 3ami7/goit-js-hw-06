const inputEl = document.querySelector(".login-form");

const submitHandler = (event)  => {
    event.preventDefault();

    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Prosze uzupelnic wszystkie pola");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);

    event.currentTarget.reset();
}
