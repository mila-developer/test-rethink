alert('Hello, Bruno!');

function showMesage() 
{
  var data = new Date();
  alert(data.toString());
}

var button = document.getElementById("btn");

button.addEventListener("click", showMesage);