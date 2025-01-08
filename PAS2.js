// Function to generate a random password
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Store generated passwords to avoid duplicates
const generatedPasswords = {
    8: new Set(),
    16: new Set(),
    24: new Set()
};

// Event listeners for each generate button
document.querySelectorAll('.generate').forEach(button => {
    button.addEventListener('click', () => {
        const length = parseInt(button.getAttribute('data-length'));
        let password;

        // Generate a unique password
        do {
            password = generatePassword(length);
        } while (generatedPasswords[length].has(password));

        // Store the generated password
        generatedPasswords[length].add(password);

        // Display the password in the corresponding section
        document.getElementById(`password${length}`).textContent = password;

        // Add animation class to the button
        button.classList.add('animate');

        // Remove the animation class after the animation is complete
        button.addEventListener('animationend', () => {
            button.classList.remove('animate');
        }, { once: true });
    });
});

// Page transition animation
const pages = document.querySelectorAll('.container');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        pages.forEach(page => page.classList.remove('show'));
        pages[index].classList.add('show');
    });
});

// Show the home page by default
document.getElementById('home').classList.add('show');

// Feedback functionality
document.getElementById('submitFeedback').addEventListener('click', () => {
    const feedbackInput = document.getElementById('feedbackInput');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    if (feedbackInput.value.trim() !== "") {
        const feedback = document.createElement('p');
        feedback.textContent = feedbackInput.value;
        feedbackDisplay.appendChild(feedback);
        feedbackInput.value = ""; // Clear input after submission
    } else {
        alert("Please enter your feedback before submitting.");
    }
});