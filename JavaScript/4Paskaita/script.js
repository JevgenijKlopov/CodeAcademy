const myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // const myName = document.getElementById("name");
    // const myName = myForm.querySelector("#name");
    const myName = myForm.elements["name"];
    const myEmail = myForm.elements["email"];
    const myEmailValid = validateEmail(myEmail)
    const myNameValid = nameValidation(myName);
    if (myNameValid && myEmailValid) {
        // window.location.href ="https://www.google.com"
    }
    console.log(myName)
})
function nameValidation(inputElement) {
    if (!hasValue(inputElement)) {
        return false;
    }
    // if (inputElement.value === "") {
    //     inputElement.parentNode.querySelector("small").innerText = "Fail";
    // } else {
    //     inputElement.parentNode.querySelector("small").innerText = "Succsess";
    // }
    // return inputElement.value !== "";
    showMessage(inputElement.parentNode, "Done")
    return true;
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!hasValue(email)) {
         return false;
     }
    if (!re.test(email.value)) {
        // email.parentNode.querySelector("small").innerText = "Fail";
        showMessage(email.parentElement, "Invalid Email");
    } else {
        // email.parentNode.querySelector("small").innerText = "Succsess";
        showMessage(email.parentElement, "Done");
    }
    return re.test(email.value);
}
function hasValue(inputElement) {
    if (inputElement.value === "") {
        showMessage(inputElement.parentNode, "Laukas yra privalomas")
        return false;
    }
        return true;
}
function showMessage(parentElement, msg) {
    parentElement.querySelector("small").innerText = msg;
}