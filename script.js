// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


// ========================================
// SLIGHT HERO PARALLAX
// ========================================

const hero =
    document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.15}px`;

    }

});


// ========================================
// CARD MOUSE EFFECT
// ========================================

const cards =
    document.querySelectorAll(".category-card");

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;

            card.style.transform =
                `
                translateY(-10px)
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});
