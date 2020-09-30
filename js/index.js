//Objects Reference
const closeButton = document.getElementById("closeButton");
const openButton = document.getElementById("openButton");
const loginForm = document.getElementById("loginForm");


//Events
openButton.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
    loginForm.classList.add("hidden");
});