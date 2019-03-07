var wsurl = "";
var nr;
var grader;
window.onload = function () {
    // lytter efter keyup i inputfeltet
    document.getElementById("inpPostnr").addEventListener("keyup", function () {

        var inputvalue = document.getElementById("inpPostnr").value

        wsurl = "https://dawa.aws.dk/postnumre/autocomplete?q=" + inputvalue;
        kaldWebservice();
    })

    // lytter efter valg
    document.getElementById("inpPostnr").addEventListener("change", function () {
        document.getElementById("databox").innerHTML = "Du har valgt: " + document.getElementById("inpPostnr").value
        nr = document.querySelector("#Postnrliste option").getAttribute("data-nr");

        wsurl = "http://api.openweathermap.org/data/2.5/weather?zip=" + nr + ",dk&appid=4e79c0a196c6cd3d416e0c0f1293e67f&lang=da&units=metric";
        kaldWebservice2()
    })


};



function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        // console.log("jsonsvar: " + jsonsvar);

        // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        // Når styr på data - så send det videre til udskriv-funktionen
        udskrivData(jsonsvar);

    }).catch(function (error) {
        // Det der skal ske, hvis der opstår en fejl

        console.log("Der er sket en fejl" + error);

    });
}

function kaldWebservice2() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        // console.log("jsonsvar: " + jsonsvar);

        // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        // Når styr på data - så send det videre til udskriv-funktionen
        udskrivData2(jsonsvar);

    }).catch(function (error) {
        // Det der skal ske, hvis der opstår en fejl

        console.log("Der er sket en fejl" + error);

    });
}


function udskrivData2(jsondata) {

    var icon = "http://openweathermap.org/img/w/" + jsondata.weather[0].icon + ".png";

    document.getElementById("bynavn").innerHTML = "Næremste vejestation er i: " + jsondata.name;
    document.getElementById("beskrivelse").innerHTML = "Her er : " + jsondata.weather[0].description;
    document.getElementById("temp").innerHTML = "Temperaturen er : " + Math.round(jsondata.main.temp) + "&#176 c";
    document.getElementById("imgdiv").innerHTML = "<img id='img' src='" + icon + "'>";
    document.getElementById("right").style.display = "inline";
    document.getElementById("inpPostnr").style.margin = "5% 0% 0% 33%";
    document.getElementById("left").style.gridColumn = "1/2";
    document.getElementById("right").style.gridColumn = "2/2";
    document.getElementById("right").style.gridRow = "1/2";
    grader = Math.round(jsondata.main.temp);


    if (grader < 8) {

        document.getElementById("rain").src = "rain3.jfif";

    } else {

        document.getElementById("rain").src = "rain.jpg";
    }




}




// Håndterer data og udskriver i html - eller hvad der nu skal ske

function udskrivData(jsondata) {
    //<option value="8000 Aarhus"></option>

    var opt = ""

    for (var x in jsondata) {

        opt += '<option value="' + jsondata[x].tekst + '" data-nr="' + jsondata[x].postnummer.nr + '">'

    }

    document.getElementById("Postnrliste").innerHTML = opt
}