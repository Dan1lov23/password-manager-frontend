const securityCheck = (password:string) => {

    const uppercaseLetters: string[] = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const lowercaseLetters: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const numbersArray:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const specialCharacters: string[] = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '[', ']', '{', '}', '|', ':', ';', '"', '<', '>', ',', '.', '?', '/'
    ];

    const splitPassword = password.split("");

    let checkPoints:number = 0;

    if (password.length > 6) {
        checkPoints++;
    }

    const uppercasePasswordValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (uppercaseLetters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (uppercasePasswordValidator()) {
       checkPoints++;
    }

    const lowercasePasswordValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (lowercaseLetters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (lowercasePasswordValidator()) {
        checkPoints++;
    }

    const numbersValidatePassword = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (numbersArray.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (numbersValidatePassword()) {
        checkPoints++;
    }

    const specialCharactersValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (specialCharacters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (specialCharactersValidator()) {
        checkPoints++;
    }

    return checkPoints;
}

export default securityCheck;
