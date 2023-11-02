function playfunc(element)
{ 
    //   element.muted = true;
    element.play();
    console.log("on");
   
}
function pausefunc(element)
{
    element.pause();
   
   
}
function mutefunc(element) 
{   if (element.muted===false){
        element.muted= true ;
        console.log("video muted");
    }
    else {
     element.muted= false ;
     console.log("video son ");}
}   