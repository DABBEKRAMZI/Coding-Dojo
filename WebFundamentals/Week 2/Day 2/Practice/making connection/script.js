function modifname()
{
    document.querySelector("#name").innerText="DABBEK Ramzi"
}

function accept(element) {
   
    var e=document.querySelector(element) ;
    var c=document.querySelector("#numberrequest")
    var j=document.querySelector("#numberconnection")
    j.innerHTML++
    c.innerHTML--;
    console.log(e);
    e.remove();
}

function refuse(element) {
    var e=document.querySelector(element) ;
    var c=document.querySelector("#numberrequest")
    c.innerHTML--;
    console.log(e);
    e.remove();
}