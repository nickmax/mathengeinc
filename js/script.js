const typewriterElement = document.getElementById("typewriter");
const words = ["Fast", "Seamless", "Hassle-free"]; // Words to display
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewriterEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // Typing the word
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            // Pause at the end of the word
            isDeleting = true;
            setTimeout(typewriterEffect, 1000); // Wait before deleting
        } else {
            setTimeout(typewriterEffect, 100); // Typing speed
        }
    } else {
        // Deleting the word
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Move to the next word
            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                // Loop back to the first word
                wordIndex = 0;
            }

            setTimeout(typewriterEffect, 500); // Wait before typing the next word
        } else {
            setTimeout(typewriterEffect, 50); // Deleting speed
        }
    }
}

// Start the typewriter effect
typewriterEffect();

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'active' class to steps when they come into view
function animateSteps() {
    const steps = document.querySelectorAll('.business-step');
    steps.forEach((step) => {
        if (isInViewport(step)) {
            step.classList.add('active');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', animateSteps);

// Initial check on page load
animateSteps();