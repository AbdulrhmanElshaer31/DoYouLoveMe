function moveRandomEl(elm) {
    elm.style.position = "absolute";
    const newTop = Math.floor(Math.random() * 90 + 5) + "%";
    const newLeft = Math.floor(Math.random() * 90 + 5) + "%";


    elm.style.transition = "top 0.3s ease-in-out, left 0.3s ease-in-out";

    elm.style.top = newTop;
    elm.style.left = newLeft;
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});