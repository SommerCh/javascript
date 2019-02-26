var snegl1 = {
    id: "a",
    navn: "Fr. Lilla",
    foto: "img/snegl1.png",
    x: -160,
    y: -40

};

var snegl2 = {
    id: "b",
    navn: "Hr. Grøn",
    foto: "img/snegl2.png",
    x: -160,
    y: 40

};

var sek = 0;
var minSpring = 3;
var maxSpring = 15;
var tidsinterval = 100;
var finishLine = 730;
var s1, s2;

window.onload = function () {


    var racetrack = document.getElementById("raceway");

    s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.style.backgroundImage = "url('" + snegl1.foto + "')";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    s1.title = snegl1.navn;
    racetrack.appendChild(s1);

    s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrack.appendChild(s2);
    s2.title = snegl2.navn;

}

function snegletitel() {
    if (document.getElementById("input1").value != "") {

        s1.title = document.getElementById("input1").value;
    }
    if (document.getElementById("input2").value != "") {

        s2.title = document.getElementById("input2").value;
    }


}

function start() {

    document.getElementById("startknap").style.display = "none";
    afsted();
};

function afsted() {
    snegl1.x += spring();
    snegl2.x += spring();
    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";

    if (snegl1.x >= finishLine || snegl2.x >= finishLine) {

        if (snegl1.x > snegl2.x) {
            setTimeout("winner('" + snegl1.navn + "');", 1000);
        } else if (snegl2.x > snegl1.x) {
            setTimeout("winner('" + snegl2.navn + "');", 1000);
        } else {
            setTimeout("winner('');", 1000);
        }
    } else {
        setTimeout("afsted();", tidsinterval);
        sek = sek + 1;
    }
};

function winner(vinderen) {
    var tid = (sek * tidsinterval) / 1000;
    if (vinderen == "") {
        document.getElementById("h1").innerHTML =
            ("Det blev uafgjort!" + "<br>" + "Det tog" + tid + "sekunder.")
    } else {
        document.getElementById("h1").innerHTML = ("Vinderen er " + vinderen + "." + "<br>" + "Det tog " + tid + " sekunder.")
    }

}

function reload() {
    window.location.reload();
}





function spring() {

    var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
}