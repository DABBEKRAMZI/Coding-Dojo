function removeCoocki(coockie) {
  var element = document.querySelector(coockie);
  element.remove();
}

function changetemp(a, b, c) {
  for(var i=1 ;i<=4;i++)
  {
    var x = document.querySelector(a+i);
    var y = document.querySelector(b+i);
    var z = c.value;
    if (z == "F") {
      var f = Math.floor(x.innerText.split("°")[0] * 1.8 + 32);
      var d = Math.floor(y.innerText.split("°")[0] * 1.8 + 32);
    } else {
      var f = Math.ceil((x.innerText.split("°")[0] - 32)*0.5556);
      var d = Math.ceil((y.innerText.split("°")[0] - 32)*0.5556);
    }
    console.log(f, d);
    x.innerText = f + "°";
    y.innerText = d + "°";
  }
}
