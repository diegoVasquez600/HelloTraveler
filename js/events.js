window.onload = function() {
    showTitleWithName();
}

function showGreetings(name) {
    alert("Hello " + name + "!");
}

function showTitleWithName(){
    let name = prompt("What is your name traveler?");
    showGreetings(name);
    var title = document.getElementById("title");
    title.innerHTML = "Hello " + name + "!";
}

