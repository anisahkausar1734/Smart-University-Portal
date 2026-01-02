fetch("header.html")
.then(res => res.text())
.then(data => document.getElementById("header").innerHTML = data);

fetch("footer.html")
.then(res => res.text()).then(data => document.getElementById("footer").innerHTML = data);

        
// Hamburger Menu Functionality
document.addEventListener("click", function (e) {

    const menu = document.getElementById("navlinks");
    const logo = document.getElementById("menuToggle");

    // If logo is clicked → toggle menu
    if (e.target.closest("#menuToggle")) {
        menu.classList.toggle("active");
        return;
    }

    // If click is outside menu AND outside logo → close menu
    if (
        menu.classList.contains("active") &&
        !e.target.closest("#navlinks") &&
        !e.target.closest("#menuToggle")
    ) {
        menu.classList.remove("active");
    }
});