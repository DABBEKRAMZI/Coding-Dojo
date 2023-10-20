// create two contaier for 
function howMuchLeftOverCake(numberOfPieces,numberOfPeople){
    var pieces = numberOfPeople*(12/5) ;

    if ((numberOfPieces-pieces) <=0 ) console.log("No leftovers for you!") ;
    else if ((numberOfPieces-pieces) <=2 ) console.log("You have some leftovers") ;
    else if ((numberOfPieces-pieces) <=5 ) console.log("You have leftovers to share") ;
    else if ((numberOfPieces-pieces) >5 ) console.log("Hold another party!") ;


}

howMuchLeftOverCake(13,5);