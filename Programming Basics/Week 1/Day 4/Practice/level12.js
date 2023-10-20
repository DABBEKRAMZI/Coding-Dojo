// chalenge 1 
var a=100 ;
function abc(){
    var a= 25 ;
}
console.log(a) ;
// answer : 100 

// chalenge 2
var a=100 ;
function abc(){
    var a= 25 ;
}
abc () ;
console.log(a) ;
// answer : 100 

// chalenge 3
var a=100 ;
function abc(){
    var a= 25 ;
    console.log(a);
}
abc () ;
console.log(a) ;
// answer : 25,100 

//chalenge 4 
var x= 10 ;
function abc(){
    console.log(x);
    return x*10 ;
}
console(x);
// answer : 10

//chalenge 5 
var x= 10 ;
function abc(x){
    console.log(x);
    return x*10 ;
}
abc(x);
console(x);
// answer : 10,10

//chalenge 6
var x= 10 ;
function abc(x){
    console.log(x);
    return x*10 ;
}
var z=abc(x);
console(z);
// answer : 10,100

//chalenge 7
var x= 10 ;
function abc(x){
    console.log(x);
    return x*10 ;
}
var z=abc(x)+abc(x);
console(z);
// answer : 10,10,200

// chalenge 8 
var x=10,y=20;
function abc(){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);
// answer : 10,20

// chalenge 9 
var x=10,y=20;
function abc(){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}
abc();
console.log(x);
console.log(y);
// answer : 20,30,10,20

// chalenge 10
var x=10,y=20;
function abc(){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
    return x*10 ;
}
var z=abc();
console.log(x);
console.log(y);
console.log(z);
// answer : 20,30,10,20,200

// chalenge 11
var x=10,y=20;
function abc(x,y){
    x=x+10;
    y=y+10;
    return x*10 ;
}
var z=abc(x,y)+abc(y,x);
console.log(z);
// answer : 500

// chalenge 12 
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0; i<x.length,i++){
        x[i]=x[i]+2 ;
    }
}
abc();
console.log(x);
// answer : [1,3,5,7]

// chalenge 13 
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0; i<x.length,i++){
        x[i]=x[i]+2 ;
    }
    return x;
}
abc();
console.log(x);
// answer : [1,3,5,7]

abc();
console.log(x);
// answer : [1,3,5,7]

// chalenge 14 
var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for (var i=0; i<x.length,i++){
        x[i]=x[i]+2 ;
    }
    return x;
}
x=abc();
console.log(x);
// answer : [2,3,4,5]

// chalenge 15 
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        arr.push(i);
    }
    return arr ;

}
var dojo=abc(5);
console.log(dojo);
// answer : [0,1,2,3,4]

// chalenge 16 
function abc(num){
    var arr=[];
    for (var i=0;i<num;i++){
        if(i%2==0){
         arr.push(i);}
    }
    return arr ;

}
var dojo=abc(5);
console.log(dojo);
// answer : [0,2,4]

// chalenge 17 
function abc(arr){
    for (var i=0;i<arr.length;i++){
        if(arr[i]<0){
         arr[i]='dojo';}
    }
    return arr ;

}
var output =abc([-3,0,3,-5]);
console.log(output);
// answer : ['dojo',0,3,'dojo']

// chalenge 18 
function abc(number){
    var arr=[];
    for (var i=0;i<number;i++){
        arr.push(0);
    }
    return arr ;

}
var output=abc(5);
console.log(output);
// answer : [0,0,0,0,0]

// chalenge 19
function abc(number){
    var sum=0;
    for (var i=0;i<number;i++){
        sum=sum+i;
    }
    console.log(sum);
    return sum+10 ;
}
var output=abc(2);
console.log(output);
// answer : 3,13


// chalenge 20
function abc(number){
    var sum=0;
    for (var i=0;i<number;i++){
        sum=sum+i;
    }
    console.log(sum);
    return sum+10 ;
}
var output=abc(2)+abc(3);
console.log(output);
// answer : 3,6,29

// chalenge 21
function looping(x,y){
    for (var i = 0 ; i<x; i++){
        for (var j=0 ; j<y;j++){
            console.log(i*j);
        }
    }
    return x*y ;
}
var z= looping(2,3);
console.log(z);
// answer : 0,0,0,0,1,2,6 