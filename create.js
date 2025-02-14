const signup = document.getElementById("signup")
    const arr = JSON.parse(localStorage.getItem("data")) || []
    signup.addEventListener("submit", (e) => {
        e.preventDefault()
        let valid = true;

        let signdata = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value,
        }


        arr.push(signdata)
        document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("phone").value,
            document.getElementById("password").value,

            localStorage.setItem("data", JSON.stringify(arr))
    });

    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        navbar.classList.toggle("sticky", window.scrollY > 0);
        ;
    });