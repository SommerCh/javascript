window.onload = function () {



    document.getElementById("vind").onclick = function () {
        pacmansize()
    };

    document.getElementById("op").onclick = function () {
        op()
    };

    document.getElementById("ned").onclick = function () {
        ned()
    };

    document.getElementById("venstre").onclick = function () {
        venstre()
    };

    document.getElementById("hoejre").onclick = function () {
        hoejre()
    };

    document.getElementById("op1").onclick = function () {
        op1()
    };

    document.getElementById("ned1").onclick = function () {
        ned1()
    };

    document.getElementById("venstre1").onclick = function () {
        venstre1()
    };

    document.getElementById("hoejre1").onclick = function () {
        hoejre1()
    };

    document.getElementById("panik").onclick = function () {
        panik()
    };

    document.getElementById("pacmanlyd").play();


};

var nuX = 50
var nuY = 25

function op() {

    nuY = nuY - 10

    document.getElementById("pacman").style.cssText = "left:" + nuX + "px;top:" + nuY + "px;transform:rotate(-90deg)"

}

function ned() {

    nuY = nuY + 10

    document.getElementById("pacman").style.cssText = "left:" + nuX + "px;top:" + nuY + "px;transform:rotate(90deg)"

}

function venstre() {

    nuX = nuX - 10

    document.getElementById("pacman").style.cssText = "left:" + nuX + "px;top:" + nuY + "px;transform:scaleX(-1)"

}

function hoejre() {

    nuX = nuX + 10

    document.getElementById("pacman").style.cssText = "left:" + nuX + "px;top:" + nuY + "px;transform:scaleX(1)"

}




// Ghost


var nuA = 204
var nuB = 100

function op1() {

    nuB = nuB - 10

    document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;"

}

function ned1() {

    nuB = nuB + 10

    document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;"

}

function venstre1() {

    nuA = nuA - 10

    document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:scaleX(-1)"

}

function hoejre1() {

    nuA = nuA + 10

    document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:scaleX(1)"

}




var kim = 0

function panik() {



    if (kim == 0) {
        document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:rotateX(-90deg)";
        kim = 1

    } else {
        kim = 0
        document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:rotateX(0deg)"
    }
}
var size = 0

function pacmansize() {

    if (size == 0) {
        document.getElementById("pacman").src = "img_sound/pacman_big.png"
        document.getElementById("pacman").style.cssText = "transform:scale(8);transition:2s;top:217px;left:300px";
        size = 1
    } else {
        document.getElementById("pacman").src = "img_sound/pacman.png"
        document.getElementById("pacman").style.cssText = "transform:scale(1);transition:2s;";
    }


}

document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            nuA = nuA - 10

            document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:scaleX(-1)"
            break;
        case 38:
            nuB = nuB - 10

            document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;"
            break;
        case 39:
            nuA = nuA + 10

            document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;transform:scaleX(1)"
            break;
        case 40:
            nuB = nuB + 10

            document.getElementById("ghost").style.cssText = "left:" + nuA + "px;top:" + nuB + "px;"
            break;
    }
};



