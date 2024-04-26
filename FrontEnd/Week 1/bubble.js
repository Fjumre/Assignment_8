
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const button1 = document.getElementById('hiDiv1');
    const button2 = document.getElementById('hiDiv2');
    const outerButton = document.getElementById("outerButton")
    
        button1.addEventListener('click', function() {
           //console.log("Hi from Div 1");
           paragraf.innerText= "Hi from " + div1.id;
        });

        button2.addEventListener('click', function() {
            //console.log("Hi from Div 2");
            paragraf.innerText= "Hi from " + div2.id;
        });

        outerButton.addEventListener('click', function(event) {
            //console.log("Hi from " + event.target.id);
           paragraf.innerText= "Hi from " + event.target.id;

        });
        
    });
