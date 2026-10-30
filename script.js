const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});

const menuButton =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function() {

        const isOpen =
            navLinks.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
}

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selected =
            button.getAttribute("data-filter");

        filterButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function(card) {

            const category =
                card.getAttribute("data-category");

            card.hidden =
                selected !== "all" &&
                selected !== category;
        });
    });
});


const contactForm =
    document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.querySelector("#name").value;

        const email =
            document.querySelector("#email").value;

        const message =
            document.querySelector("#message").value;

        const status =
            document.querySelector("#form-status");

        const destination = "Tavionmbaker@gmail.com";

        if (destination === "Tavionmbaker@gmail.com") {
            status.textContent =
                "Please set up the contact email first.";
            return;
        }

        const subject = encodeURIComponent(
            "Portfolio message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        status.textContent =
            "Your email app will open. Please send the message there.";

        window.location.href =
            "mailto:" + destination +
            "?subject=" + subject +
            "&body=" + body;
    });
}