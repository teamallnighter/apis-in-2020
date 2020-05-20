function randomFact() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // HTTP 200 response
            // we get JSON response
            var json = JSON.parse(this.responseText);
            parseResponse(json);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send(); // we call Chuck Norris API endpoint for random facts
}

function parseResponse(json) {
    // JSON response is a simple object with a value property containing
    // the random fact
    document.getElementById("data").innerHTML = "<b>" + json["value"] + "</b>";
}

// Last step is to add a click event listener on the logo of Chuck Norris
// for loading a new random fact
document.getElementById("logo").addEventListener("click", function() {
    randomFact();
});

// now we can test our application :)
// we call the random fact method a first time at the loading of the page
randomFact();