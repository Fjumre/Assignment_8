document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display"); 

    // Adding event listeners to all number and operator buttons
    document.querySelectorAll("#buttons button").forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonValue = button.textContent; // Get the text content of the clicked button

            if (buttonValue === "=") {
                try {
                    display.textContent = eval(display.textContent);
                } catch (e) {
                    display.textContent = "Error"; 
                }
            }  else {
                // For any other button, append its value to the display
                display.textContent += buttonValue;
            }
        });
    });
});
