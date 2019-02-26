// window.onload = function () {
//     månd()
// };




//     function månd() {

//         var måndnr =  new Date().getMonth();;


//         if (måndnr == 0 || måndnr == 1 || måndnr == 2) {

//             document.getElementById("seasonimage").src = "winter.jpg";

//         } else if (måndnr == 3 || måndnr == 4 || måndnr == 5) {

//             document.getElementById("seasonimage").src = "spring.jpg";

//         } else if (måndnr == 6 || måndnr == 7 || måndnr == 8) {

//             document.getElementById("seasonimage").src = "summer.jpg";

//         } else if (måndnr == 9 || måndnr == 10 || måndnr == 11) {

//             document.getElementById("seasonimage").src = "autumn.jpg";


//         } else {
//             alert("Der er sket en fejl");
//         }

//     };

window.onload = function () {


    var month = new Date().getMonth();

    switch (month) {
        // January, February, March
        case 0:
        case 1:
        case 2:
            document.getElementById("seasonimage").innerHTML = < img src = "../Img-Style/Img/winter.jpg"/> ;
            break;
            // April, May, June
        case 3:
        case 4:
        case 5:

            console.log("Spring");
            break;
            // July, August, September
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
            // October, November, December
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Something went wrong.");
    }
}