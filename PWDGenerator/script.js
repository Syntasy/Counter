function generatePassword(length, includeLowercase, includeNumbers, includeUppercase, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "`!@#$%^&*()_+=-,./;':";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (length <= 0) {
        return "(password too short)";
    }
    if (allowedChars.length === 0) {
        return "(select at least one)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copyBtn');

    generateBtn.addEventListener('click', () => {
        const length = parseInt(document.getElementById('lengthInput').value);
        const includeLowercase = document.getElementById('lowercase').checked;
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSymbols = document.getElementById('symbols').checked;

        const password = generatePassword(
            length,
            includeLowercase,
            includeNumbers,
            includeUppercase,
            includeSymbols
        );

        output.value = password;
        copyBtn.disabled = password.startsWith("("); // Disable copy button if password is an error
    });

    copyBtn.addEventListener('click', () => {
        const output = document.getElementById('output');
        navigator.clipboard.writeText(output.value);
    });
});
