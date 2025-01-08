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
const generatedPasswords = new Set();

// Event listener for the generate button
document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    let password;

    // Generate a unique password
    do {
        password = generatePassword(length);
    } while (generatedPasswords.has(password));

    // Store the generated password
    generatedPasswords.add(password);

    // Display the password
    document.getElementById("password").textContent = password;
});