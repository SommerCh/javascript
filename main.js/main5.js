window.onload = function () {

    document.getElementById("knap").onclick = function () {
        øller()
    };


};

function øller() {
    var l
    var text = " Øller"
    var resultattext = ''

    for (l = 0; l < 5; l++) {
        
        resultattext+=text
    }
document.getElementById("svar").innerHTML=resultattext
}