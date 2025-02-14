const signin = document.getElementById("signin")
signin.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        name: document.getElementById("signin-name").value,
        email: document.getElementById("signin-email").value,
        password: document.getElementById("signin-password").value,
    }

    let userdata = JSON.parse(localStorage.getItem("data"))

    let store = userdata.filter((el, i) => el.email == obj.email && el.password == obj.password)
    if (store[0]) {
        alert("login successfull")
    } else {
        alert("invalid password || email")
    }

});

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
    ;
});