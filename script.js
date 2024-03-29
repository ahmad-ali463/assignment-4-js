// document.getElementById("simpleAlert").onclick = function(){
//     alert("I am in alert")
// }
function simpleAlert(){
    alert("I am in Alert")
    document.getElementById("output").innerHTML =  "I am in Alert"

}


function printMyName(){
    let myname = document.getElementById("inputText").value;

    if(myname === ""){
        alert("please type your name")
        return;
    }
    document.getElementById("output").innerHTML = myname
}

let cities = ['Faisalabad','Islamabad', 'Lahore', 'Karachi','Kashmir','Rawalpindi','Gojra']
function printAllCities(){
document.getElementById("output").innerHTML="";



for ( let index = 0; index < cities.length; index++){
 let city = cities[index]
 console.log('city', city)
 document.getElementById("output").innerHTML += index +")" + city +"<br/>"
}
}

function addYourCitiesInList(){
    let city = document.getElementById("inputText").value;
    if(city === ""){
        alert("please type your city")
return;
    }
    cities.push(city);
    document.getElementById("output").innerHTML = '<span style="color: green ; font-size: 20px">"'+ city +'"</span> has been succesfully added into list.';
}







function generateTable(){
    tablenum =  +prompt("Please Enter the Table Number")
    
    for(let i=1; i<11; i++){
        let table = tablenum + " * " + i + " = " + tablenum*i + "<br />"
        document.getElementById("ouput").innerHTML += table

    }
}


document.getElementById("clear").onclick = function (){
    document.getElementById("output").innerHTML = "";
}