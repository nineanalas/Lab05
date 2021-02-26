const txt1 = document.getElementById("text1");
txt1.addEventListener("click", textchange);
const txt2 = document.getElementById("text2");
txt2.addEventListener("click", textchange);

function textchange()
{
    txt1.innerHTML = "Hi";
    txt2.innerHTML = "Hi";
}

function button1()
{
    const button1 = document.getElementById("button1");
    button1.style.color = "black";
    button1.style.backgroundColor = "#73C2FB";
    alert(button1.innerText + " say : Why you click me ?");
    
    button1.onclick = function()
    {
        return false;
    }
}

function button2()
{
    const button2 = document.getElementById("button2");
    button2.style.color = "black";
    button2.style.backgroundColor = "#D377A1";
    alert(button2.innerText + " say : Why you click me ?");

    button2.onclick = function()
    {
        return false;
    }
}

function button3(){
    const button3 = document.getElementById("button3");
    button3.style.color = "black";
    button3.style.backgroundColor = "#29AB87";
    alert(button3.innerText + " say : Why you click me ?");

    button3.onclick = function()
    {
        return false;
    }
}

function button4(){
    const button4 = document.getElementById("button4");
    button4.style.color = "black";
    button4.style.backgroundColor = "#EA8741";
    alert(button4.innerText + " say : Why you click me ?");

    button4.onclick = function()
    {
        return false;
    }
}