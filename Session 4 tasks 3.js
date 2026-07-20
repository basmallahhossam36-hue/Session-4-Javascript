function sendVerificationEmail(email) {
    return new Promise((resolve, reject) => {
    console.log("Sending verification email to " );
setTimeout(() => {
    resolve("email sent successfully");
}, 2000);
    });
}
async function rigisterUser(name, email) {
    try{
        if(!name || !email) {
            throw new Error("Invalid user data");
        }
        const message = await sendVerificationEmail(email);
        console.log(message);
        console.log ("user registered successfully");
    }
    catch(error) {
        console.log(error.message);
    }
}
registerUser("Basmallah", "basmallah@example.com");