var close = document.getElementsByClassName("close");
for (var i=0;i<close.length;i++) 
{
  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev)
{
  if (ev.target.tagName === "LI") 
    ev.target.classList.toggle("check");
}, false);

function addnewtodo()
{
  var li = document.createElement("li");
  var input = document.getElementById("input").value;
  var content = document.createTextNode(input);
  li.appendChild(content);

  if (input === "")
    alert("Please enter information.");
  else
    document.getElementById("ul").appendChild(li);

  document.getElementById("input").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i=0;i<close.length;i++) 
  {
    close[i].onclick = function()
    {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}