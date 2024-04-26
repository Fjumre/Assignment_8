document.body.style.background = "red";
const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "blue";
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const button = document.getElementById('change color');

    // Set up the button click event
    button.addEventListener('click', function() {
        // Get the div elements by their IDs
        const containerDiv = document.getElementById('container');
        const contentDiv = document.getElementById('content');
        const appDiv = document.getElementById('app');

        // Change the background color of each div
        containerDiv.style.backgroundColor = 'lightblue';
        contentDiv.style.backgroundColor = 'lightgreen';
        appDiv.style.backgroundColor = 'lightcoral';
    });
});
