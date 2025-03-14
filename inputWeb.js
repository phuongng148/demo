
function dForms() {
    let loginForm = document.getElementById('dangnhap-f');
    let registerForm = document.getElementById('dangki-f');

    if (loginForm.style.display === "" || loginForm.style.display === "block") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }
}
