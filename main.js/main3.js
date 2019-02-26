
window.onload = function() {

document.getElementById("knap").onclick = function() {flereTing()};


};


function flereTing(){
document.getElementById("wrapper").style.cssText= "background-color :lightgreen";
document.getElementById("knap").style.cssText="background-color:blue;color:white";


document.getElementById("knap").disabled = true;
}

