console.log("Hello World")
document.getElementById("app")
.innerHTML = "Hello World";


const arr= ["Lars", "Jan", "Peter", "Bo", "Frederik", "Jens"];
const liArr= arr.map((name) => {
    return "<li>"+name+ " Doe "+"</li>";
})

document.getElementById("app")
.innerHTML = "<ul>"+ liArr.join("")+"</ul>";



document.addEventListener("DOMContentLoaded", function() {
    const input = this.getElementById("names");
    const button = this.getElementById("nameButton");
    const appId = document.getElementById("app");

    // Function to render the list in the 'app' div
    function renderList(newName) {
        if (newName) {
            liArr.push("<li>" + newName + " Doe " + "</li>"); 
        }
        appId.innerHTML = "<ul>" + liArr.join("") + "</ul>"; // Set/add to the list
    }

   
    renderList();

    button.addEventListener("click", function() {
        renderList(input.value); // Update list with new input on button click
        input.value = ""; // Clear the input field after adding to the list
    });
});