export const CheckValidation = (email: any, password: any, userName?: any) => {
    const trimmedEmail = email.current.value?.trim() ?? "";
    const trimmedPassword = password.current.value?.trim() ?? "";

    if (userName !== undefined && userName.current.value.trim() === "") {
        return { valid: false, message: "Username is required" };
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!isEmailValid) return { valid: false, message: "Invalid email format" };

    if (trimmedPassword.length === 0) return { valid: false, message: "Password is required" };

    // Require at least one digit, one lowercase, one uppercase, and minimum length 8
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(trimmedPassword);
    if (!isPasswordValid) return { valid: false, message: "Password must be at least 8 characters long and include uppercase, lowercase letters, and a number" };

    return { valid: true, message: "Validation successful" };

}