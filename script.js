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

let cities = ['faisalabad','multan','karachi', 'lahore','peshawar','hasilpur']
function printAllCities(){
document.getElementById("output").innerHTML="";



for ( let index = 0; index < 6; index++){
 let city = cities[index]
 console.log('city', city)
 document.getElementById("output").innerHTML += index +")" + city +"<br/>"
}
}