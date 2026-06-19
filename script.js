/* ======================================
   PORTFOLIO SCRIPT.JS
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       TYPING ANIMATION
    ====================================== */

    const typingElement =
    document.getElementById("typing");

    const roles = [

        "Java Developer",
        "MCA Graduate",
        "Web Application Developer",
        "Software Engineer",
        "Problem Solver"

    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole =
        roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

            charIndex++;

            if (
                charIndex ===
                currentRole.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;
            }

        } else {

            typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                roleIndex++;

                if (
                    roleIndex >=
                    roles.length
                ) {

                    roleIndex = 0;
                }
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 50 : 120
        );
    }

    if (typingElement) {
        typeEffect();
    }

    /* ======================================
       DARK MODE
    ====================================== */

    const themeToggle =
    document.getElementById(
        "theme-toggle"
    );

    const currentTheme =
    localStorage.getItem(
        "portfolio-theme"
    );

    if (
        currentTheme === "dark"
    ) {

        document.body.classList.add(
            "dark-theme"
        );

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    }

    themeToggle?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-theme"
            );

            const darkMode =
            document.body.classList.contains(
                "dark-theme"
            );

            if (darkMode) {

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

                themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

            } else {

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

                themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';
            }
        }
    );

    /* ======================================
       MOBILE MENU
    ====================================== */

    const menuBtn =
    document.querySelector(
        ".menu-btn"
    );

    const navLinks =
    document.querySelector(
        ".nav-links"
    );

    menuBtn?.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-active"
            );

        }
    );

    /* ======================================
       ACTIVE NAVBAR LINKS
    ====================================== */

    const sections =
    document.querySelectorAll(
        "section"
    );

    const links =
    document.querySelectorAll(
        ".nav-links a"
    );

    window.addEventListener(
        "scroll",
        () => {

            let currentSection = "";

            sections.forEach(
                section => {

                    const sectionTop =
                    section.offsetTop - 120;

                    const sectionHeight =
                    section.clientHeight;

                    if (
                        window.scrollY >=
                        sectionTop &&
                        window.scrollY <
                        sectionTop +
                        sectionHeight
                    ) {

                        currentSection =
                        section.getAttribute(
                            "id"
                        );
                    }

                }
            );

            links.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.href.includes(
                            currentSection
                        )
                    ) {

                        link.classList.add(
                            "active"
                        );
                    }
                }
            );

        }
    );

    /* ======================================
       SCROLL REVEAL
    ====================================== */

    const revealElements =
    document.querySelectorAll(

        ".skill-card," +
        ".certificate-card," +
        ".project-card," +
        ".blog-card," +
        ".contact-box," +
        ".timeline-content," +
        ".info-box"

    );

    revealElements.forEach(
        el => {

            el.style.opacity = "0";
            el.style.transform =
            "translateY(50px)";
            el.style.transition =
            "all .8s ease";
        }
    );

    function revealOnScroll() {

        revealElements.forEach(
            el => {

                const elementTop =
                el.getBoundingClientRect()
                .top;

                const windowHeight =
                window.innerHeight;

                if (
                    elementTop <
                    windowHeight - 100
                ) {

                    el.style.opacity =
                    "1";

                    el.style.transform =
                    "translateY(0)";
                }
            }
        );
    }

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    /* ======================================
       VISITOR COUNTER
    ====================================== */

    let visits =
    localStorage.getItem(
        "portfolio_visits"
    );

    if (!visits) {

        visits = 1;

    } else {

        visits =
        parseInt(visits) + 1;
    }

    localStorage.setItem(
        "portfolio_visits",
        visits
    );

    const visitorCounter =
    document.getElementById(
        "visitor-count"
    );

    if (visitorCounter) {

        visitorCounter.textContent =
        visits;
    }

    /* ======================================
       BACK TO TOP
    ====================================== */

    const backToTop =
    document.getElementById(
        "backToTop"
    );

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 300
            ) {

                backToTop.style.display =
                "block";

            } else {

                backToTop.style.display =
                "none";
            }
        }
    );

    backToTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

    /* ======================================
       SMOOTH SCROLLING
    ====================================== */

    document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

                if(target){

                    target.scrollIntoView({

                        behavior:
                        "smooth"

                    });

                }

            }
        );

    });

    /* ======================================
       CONTACT FORM
    ====================================== */

    const contactForm =
    document.getElementById(
        "contact-form"
    );

    contactForm?.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const name =
            document.getElementById(
                "name"
            ).value.trim();

            const email =
            document.getElementById(
                "email"
            ).value.trim();

            const subject =
            document.getElementById(
                "subject"
            ).value.trim();

            const message =
            document.getElementById(
                "message"
            ).value.trim();

            if (

                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""

            ){

                alert(
                    "Please fill all fields."
                );

                return;
            }

            const emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

            if(
                !emailPattern.test(
                    email
                )
            ){

                alert(
                    "Please enter a valid email."
                );

                return;
            }

            alert(
                "Message sent successfully!"
            );

            contactForm.reset();

        }
    );

    /* ======================================
       FLOATING ICON ANIMATION
    ====================================== */

    const floatingCards =
    document.querySelectorAll(
        ".floating-card"
    );

    floatingCards.forEach(
        (card,index)=>{

            card.animate(

                [

                    {
                        transform:
                        "translateY(0px)"
                    },

                    {
                        transform:
                        "translateY(-15px)"
                    },

                    {
                        transform:
                        "translateY(0px)"
                    }

                ],

                {

                    duration:
                    3000 +
                    index * 500,

                    iterations:
                    Infinity

                }

            );

        }
    );

    /* ======================================
       PRELOADER END
    ====================================== */

    console.log(
        "Portfolio Loaded Successfully"
    );

});