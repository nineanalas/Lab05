const subbtn = document.getElementById("summitbtn");
const enter = document.getElementById("data");
subbtn.addEventListener('click',newElement);
enter.addEventListener('keyup',newElement);


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "close";
  span2.className = "far fa-trash-alt";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  if(event.key === "Enter" || event.button === 0){
    var list = document.createElement("li");
    var inputValue = document.getElementById("data").value;
    var valueText = document.createTextNode(" "+inputValue);
    
    if (inputValue === '') {
      alert("คุณต้องระบุข้อมูลก่อน");
    } else {
      document.getElementById("myList").appendChild(list);
    }
    document.getElementById("data").value = "";
    var span = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "close";
    span2.className = "far fa-trash-alt";
    span.appendChild(txt);
    span.appendChild(span2);
    list.appendChild(span);
    list.appendChild(valueText);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
  }
}
}