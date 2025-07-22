const validateNewPassword = (username:string, password:string, repeatPassword:string) => {

    if (password !== repeatPassword) {
        return "Парли не совпадают"
    }


    if (username.length >= 20) {
        return "Имя сервиса должно быть меньше 20 символов"
    }

    if (password.length >= 20) {
        return "Пароль должно быть меньше 20 символов"
    }

    if (repeatPassword.length >= 20) {
        return "Пароль должно быть меньше 20 символов"
    }

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

    const splitPassword = password.split("")

    if (username.length < 1) {
        return "Длинна username должна быть больше 1 символа"
    }

    if (password.length < 5) {
        return "Длинна пароля должна быть больше 5 символов"
    }

    const uppercasePasswordValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (uppercaseLetters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (!uppercasePasswordValidator()) {
        return "Пароль должен содержать хотя бы одну заглавную букву"
    }

    const lowercasePasswordValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (lowercaseLetters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (!lowercasePasswordValidator()) {
        return "Пароль должен содержать хотя бы одну маленькую букву"
    }

    const numbersValidatePassword = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (numbersArray.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (!numbersValidatePassword()) {
        return "Пароль должен содержать хотя бы одну цифру"
    }

    const specialCharactersValidator = () => {
        for (let a = 0; a < splitPassword.length; a++) {
            if (specialCharacters.includes(splitPassword[a])) {
                return true;
            }
        }
        return false;
    }

    if (!specialCharactersValidator()) {
        return "Пароль должен содержать хотя бы один спец символ"
    }

    return true;
}

export default validateNewPassword;
