var wsurl = "";

window.onload = function () {
    wsurl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=145ce0ca3b434a26b9b561989c03384f";
    kaldWebservice()
};

function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        console.log("jsonsvar: " + jsonsvar);

        // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        // Når styr på data - så send det videre til udskriv-funktionen
        udskrivData(jsonsvar);

    }).catch(function (error) {
        // Det der skal ske, hvis der opstår en fejl

        console.log("Der er sket en fejl" + error);

    });
}

// Håndterer data og udskriver i html - eller hvad der nu skal ske


function udskrivData(jsondata) {

    var data = '';
    for (var x in jsondata.articles) {

 data += 
` <div id = "latest">
            <div id = "name">Author: ${ jsondata.articles[x].author} </div> 
            <div id = "title" > ${jsondata.articles[x].title } </div> 
            <div id = "description" > ${jsondata.articles[x].description} </div> 
            <div id = "dato"> ${ jsondata.articles[x].publishedAt}  </div> 
            <div id = "link"> <a href = "" > ${jsondata.articles[x].url} </a></div>
            <div><img id=img src="${jsondata.articles[x].urlToImage}" alt=""></div>
            </div >`




    }

    document.getElementById("latest").innerHTML = data;


}