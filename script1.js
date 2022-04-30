
//find the culprit
alert( "I'm JavaScript!");

//find the culprit and invoke alert

alert("I'm invoked"); //apostrophe was wrong adn corrected.

//explain the below code how it works
alert("I'm JavaScript!");//INVOKES ALERT BOX WHITH I'm Javascript in it.
alert('Hello') //INVOKES ALERT BOX WHITH Hello in it.
alert(`Wor     
 ld`)                //Template literals used to write , alert box shows 
                     //          Wor
                    //            ld.
alert(3 +
1
+ 2); // this is multiple line code and its working , addition is done.

//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";//reassignes string Guvi
let lname = "geek"//assignes string Geek
admin = fname+" "+lname; //concatenates fname and lname with gap inbetwwen
alert( admin ); // "Guvi geek"

// Fix the below to alert hello Guvi geek
fname=10.5; 
fname = "Guvi"; //REASSIGNS TO STRING Guvi
lname = "geek"; //
let name = fname+" "+lname;
alert( `hello ${name}` );

//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b));   //Type casting or coersion to number datatype.

// // If you run the below scritpt you will get “Code is Blasted”
// // Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

a = parseInt("2") > parseInt("12");  //typecasting from string to number
//Don't touch below this
if (a) {
  console.log("Code is Blasted")  //when the numbers are string it returns true and the numbers are typecasted to return false. 
}
else
{
  console.log("Diffused") 
}

// //How to get the success in console.
a = prompt("Enter a number?");
a=false;   //reaassigning it to false
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log(`${value}`);   //writes the score when it not a four or six.
}

// // Fix the code to welcome the boss
// // You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
   message = "welcome boss";
}
else
{
   message = "Go away";    
}
  console.log(message);  //let cannot escape blocks sinceit is blockscope. and hence declared outside the block and assingned inside the blocks.

   //fix the code to welcome the boss
   
let lock = 0;
// //Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

  //Fix the code to welcome the boss
lock = 0    //assigning zero will return false and else block is invoked.
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

// Change the code to print
// 3
// 2
// 1
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- ); //predecrement operator is changed to post decrement operator.
}

//Change the code to print 1 to 10 in 4 lines
i=1;
while(i<=10){
  console.log(i);
  i++;  }

  // Change the code to print even numbers
  //You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  if(num%2==0)
  {
  console.log(num)
  }
}

// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == -1)        //-1 cannot be reached since loop is limited within 0.
  {
   console.log("bomb triggered");
  }
}

// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg); //only hi is printed since lemein is a string , condition returns true and first if condition is executed.
//lemeout is zero and hence returns false.

// Whats the msg printed and why? Guess you answer before running it.
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg); //only hi is printed since lemein is a string , condition returns true and first if condition is executed.
//lemeout is zero and hence returns false.





  
