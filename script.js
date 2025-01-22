document.addEventListener("DOMContentLoaded", function() {
    // Dropdown functionality
    const navbar = document.querySelector(".dropdown");
    const toggleButton = document.querySelector(".navbar-toggler");

    toggleButton.addEventListener("click", function() {
        if (navbar.style.transform === "translateY(0px)") {
            navbar.style.transform = "translateY(-500px)";
        } else {
            navbar.style.transform = "translateY(0px)";
        }
    });

    // Typewriter Effect
    const texts = [
        " A SOFTWARE DEVELOPER",
        " A RESEARCHER",
        " A PRODUCT MANAGER",
        " A COMMUNITY MANAGER",
    ];
    let speed = 100;
    const textElements = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    // Start the typewriter effect on window load
    window.onload = typeWriter;
});
