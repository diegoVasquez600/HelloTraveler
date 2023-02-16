window.onload = function () {
    showTitleWithName();
    getList();
}

function showGreetings(name) {
    alert("Hello " + name + "!");
}

function showTitleWithName() {
    let name = prompt("What is your name traveler?");
    showGreetings(name);
    var title = document.getElementById("title");
    title.innerHTML = "Hello " + name + "!";
}

function getList() {
    var list = [
        {
            'letter' : 'N',
            'name' : 'Naruto',
            'city' : 'New York',
            'color' : 'Navy',
            'animal' : 'Narwhal',
            'thing' : 'Nail'
        },
        {
            'letter' : 'S',
            'name' : 'Sasuke',
            'city' : 'Seattle',
            'color' : 'Silver',
            'animal' : 'Snake',
            'thing' : 'Spoon'
        },
        {
            'letter' : 'D',
            'name' : 'Deidara',
            'city' : 'Detroit',
            'color' : 'Dark Blue',
            'animal' : 'Dolphin',
            'thing' : 'Dagger'
        },
    ];
    // insert list to rows in table
    var table = document.getElementById("table");
    for (var i = 0; i < list.length; i++) {
        var row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = list[i].letter;
        row.insertCell(1).innerHTML = list[i].name;
        row.insertCell(2).innerHTML = list[i].city;
        row.insertCell(3).innerHTML = list[i].color;
        row.insertCell(4).innerHTML = list[i].animal;
        row.insertCell(5).innerHTML = list[i].thing;
    }
}

