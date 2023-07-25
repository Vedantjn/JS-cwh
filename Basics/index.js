// 1. Ways to print in JS

// alert("me")
// console.log("Hello world")
// document.write("This is document write")

// =============================================================================================================================================================================================================

// 2. JS console API

// console.log("Hello world")
// console.log("Hello world", 10, "Vedant")
// console.warn("This is a warning")
// console.error("This is an error")
// console.clear()

// =============================================================================================================================================================================================================

// 3. JS vairiables - Containers to store data values
// var number1 = 34
// var number2 = 56
// console.log(number1 + number2)

// =============================================================================================================================================================================================================

// 4. Datatypes in JS

/*
At a very high level, there are 2 types of data types in JS
1). Primitive : undefined, null, boolean, number, string, symbol
2). Referenced : Arrays, Objects
*/

// Number
// var num1 = 23
// var num2 = 12.23

// String
// var str1 = "This is a string"
// var str2 = 'This is a string'

// Objects
// var marks = {
//     Ravi : 23,
//     Shubham : 12,
//     Vedant : 7
// }
// console.log(marks)

// Boolean
// var a = true;
// var b = false;
// console.log(a)
// console.log(b)

// var und = undefined
// console.log(und)

// var und
// console.log(und)

// var n = null
// console.log(n);

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[2])

// var arr1 = [1, 2, "Name", 4, 5]
// console.log(arr1)

// =============================================================================================================================================================================================================

// 5. Operators in JS

// Airthmetic operators
// var a = 34
// var b = 23
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// Assignment operators
// var c = b
// console.log(c)

// Comparison operators
// var a = 23
// var b = 2
// console.log(a == b)

// Logical operators
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// =============================================================================================================================================================================================================

// 6. Functions in JS
// DRY -> Donot Repeat Yourself

// function avg(a, b){
//     return (a + b)/2;
// }

// console.log(avg(4,6));

// =============================================================================================================================================================================================================

// 7. Conditionals in JS

// var age = 4
// if(age > 2){
//     console.log("You are old")
// }
// else if (age > 4 && age < 6){
//     console.log("You are young")
// }
// else{
//     console.log("You are a kid")
// }
// console.log("End of if-else ladder")

// =============================================================================================================================================================================================================

// 8. Loops in JS

// var arr = [1, 2, 3, 4, 5]
// console.log(arr);

// // for loop
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// // forEach loop
// arr.forEach(function(element){
//     console.log(element)
// })

// while loop
// let j = 0;
// while(j < arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do-while loop
// do{ 
//     console.log(arr[j++])
    
// }while(j < arr.length)

// =============================================================================================================================================================================================================

// 9. Break and Continue

// var arr = [1, 2, 3, 4, 5]
// for(var i = 0; i < arr.length; i++){
//     if(i == 2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// =============================================================================================================================================================================================================

// 10. Array methods
// let myArr = ["Ved", "jain", 7, "sharma"]
// console.log(myArr.length)
// myArr.pop()
// myArr.push("Nirmohi")
// myArr.shift()
// myArr.unshift("Nirmohi")
// console.log(myArr)
// myArr.toString()
// myArr.sort()

// =============================================================================================================================================================================================================

// 11. String Methods

// let myLovelyString = "Vedant is a good good boy"
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1, 5))
// var d = myLovelyString.replace("Vedant", "Nirmohi")
// console.log(d)

// =============================================================================================================================================================================================================

// 12. Dates in JS

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getMinutes())
// console.log(myDate.getHours())

// =============================================================================================================================================================================================================

// 13. DOM Manipulation

// let elem = document.getElementById('click')
// console.log(elem)

// let elemClass = document.getElementsByClassName('container')
// console.log(elemClass)
// elemClass[0].style.background = 'yellow'
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
// tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('p')
// createElement.innerText = "This is a created para"
// tn[0].appendChild(createdElement)

// createdElement2 = document.createElement('b')
// createElement2.innerText = "This is a created bold"
// tn[0].replaceChild(createdElement2, createElement)

// // Selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// =============================================================================================================================================================================================================

// function clicked(){
    //     console.log("The button was clicked")
    // }
    
    // window.onload = function(){
        //     console.log("Loaded")
        // }
        
// =============================================================================================================================================================================================================

// 14. Events in JS

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

// =============================================================================================================================================================================================================

// 15. Arrow Functions

// function sum(a, b){
//     return a+b;
// }
// sum = (a,b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }

// =============================================================================================================================================================================================================

// 16. SetTimeout and setinterval

// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// =============================================================================================================================================================================================================

// 17. JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// =============================================================================================================================================================================================================

// 18. Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// =============================================================================================================================================================================================================

// 19. Template literals - Backticks
// a = 34;
// console.log(`this is my ${a}`)