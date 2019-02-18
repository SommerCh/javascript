
window.onload = function () {

    var click = 0;

    document.getElementById("knap").onclick = function () {


        if (click == 0) {
            overskriftInner();
            click = 1
        } else {
            overskriftInnervæk();
            click = 0
        }

    };
};


function overskriftInner() {
    document.getElementById("overskrift").innerHTML = "En NY overskrift";
}

function overskriftInnervæk() {
    document.getElementById("overskrift").innerHTML = "En Gammel overskrift";

}