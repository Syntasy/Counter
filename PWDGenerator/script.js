function generatePassword(length, includeLowercase, includeNumbers, includeUppercase, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "`!@#$%^&*()_+=-,./;':";

    let allowedChars = "";
    let password= "";

    // Password options
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    // verify
    if(length <= 0){
        return `(pasword too short)`;
    }
    if(allowedChars.length === 0){
        return `(select at least one)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength   = 12;
const includeLowercase = true;
const includeUppercase = true;  
const includeNumbers   = true;
const includeSymbols   = true;

// generating password, have to keep these in correct order (ugh)
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

// return generated password
console.log(`generated password: ${password}`);