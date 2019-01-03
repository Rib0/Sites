let menu = document.getElementsByClassName("header__menu")[0],
    button = document.getElementsByClassName("burger-menu")[0],
    first = document.getElementById("first"),
    second = document.getElementById("second"),
    third = document.getElementById("third"),
    timerId = null;

button.addEventListener("click", () => {
    if (timerId) return;
    timerId = setTimeout(() => {
        timerId = null
    }, 500);
    if (!menu.clientHeight)
    menu.style.height = menu.scrollHeight + "px";
    else {
        menu.style.height = "";
    }

    first.classList.toggle("firstOpened");
    second.classList.toggle("secondOpened");
    third.classList.toggle("thirdOpened");
})
