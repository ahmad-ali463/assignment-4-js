// document.getElementById("simpleAlert").onclick = function(){
//     alert("I am in alert")
// }
function simpleAlert(){
    alert("I am in alert")

}


function printMyName(){
    let myname = document.getElementById("inputText").value;

    if(myname === ""){
        alert("please type your name")
        return;
    }
    document.getElementById("output").innerHTML = myname
}

let cities = ['Faisalabad','Multan','Karachi', 'Lahore','Peshawar','Hasilpur']
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