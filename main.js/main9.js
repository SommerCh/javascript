
window.onload = function() {

document.getElementById("google").onclick = function() {googlealert,bingconfirm()};

document.getElementById("bing").onclick = function() {bingconfirm()};
};


function googlealert(){
alert("Du bliver nu sendt til www.Google.dk")

}

function bingconfirm(){
    confirm("Er du sikker på at du vil forlade siden?")
    
    }