// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const messageDisplay = document.getElementById('displayMessage');

    // Add a click event listener
    button.addEventListener('click', () => {
        const hours = new Date().getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning! Ready to code?";
        } else if (hours < 18) {
            greeting = "Good afternoon! Project is looking great.";
        } else {
            greeting = "Good evening! Wrapping up for the day?";
        }

        messageDisplay.textContent = greeting;
        console.log("Greeting updated based on time of day.");
    });
});