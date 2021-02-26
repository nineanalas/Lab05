function activatetonight(){
    const body = document.getElementById("body");
    const txt1 = document.getElementById("text1");
    const txt2 = document.getElementById("text2");
    const color = document.getElementById("color");
    const night = document.getElementById("changetext");
    const word = document.getElementById("word");
    const changemode = document.getElementById("changemode");

    body.style.backgroundColor = "black";
    txt1.style.color = "white";
    txt2.style.color = "white";
    txt1.innerHTML = "GOOD NIGHT";
    txt2.innerHTML = "This is night time!";
    color.style.color = "white";
    word.style.color = "blue";
    night.style.color = "white";
    night.innerHTML = "Click the button below to activate the day mode.";
    changemode.innerHTML = "Activate the day mode";
    changemode.onclick = function() {activatetoday()};

}

function activatetoday(){
    const body = document.getElementById("body");
    const txt1 = document.getElementById("text1");
    const txt2 = document.getElementById("text2");
    const color = document.getElementById("color");
    const day = document.getElementById("changetext");
    const word = document.getElementById("word");
    const changemode = document.getElementById("changemode");

    body.style.backgroundColor = "white";
    txt1.style.color = "black";
    txt2.style.color = "black";
    txt1.innerHTML = "GOOD MORNING";
    txt2.innerHTML = "This is day time!";
    color.style.color = "black";
    word.style.color = "red";
    day.style.color = "black";
    day.innerHTML = "Click the button below to activate the night mode.";
    changemode.innerHTML = "Activate the night mode";
    changemode.onclick = function() {activatetonight()};
}