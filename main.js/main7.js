window.onload = function () {

    document.getElementById("knap").onclick = function () {
        dato(), dag()
    };




    var d = new Date();

    function dato() {
        document.getElementById("dato").innerHTML = d.toLocaleString();

    }

    function dag() {


        var weekday = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag ", "Lørdag", "Søndag"];

        var dagnr = d.getDay();

        document.getElementById("slagsdag").innerHTML = "Det er " + weekday[dagnr];


        if (dagnr > 0 && dagnr < 5) {

            document.getElementById("text").innerHTML = "og det er hverdag.";

        } else if (dagnr == 5) {

            document.getElementById("text").innerHTML = "og det er NÆSTEN weekend.";


        } else if (dagnr == 6 || dagnr == 0) {

            document.getElementById("text").innerHTML = "og det er WEEKEND.";

        } else {
            alert("Der er sket en fejl");
        }





    }


};