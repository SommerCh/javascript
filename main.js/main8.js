
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("vinter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("forår");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("sommer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("efterår");
        break;
    default:
        console.log("Noget gik galt!");
}