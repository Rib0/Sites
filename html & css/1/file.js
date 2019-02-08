let menu = document.getElementsByClassName("header__menu")[0],
    button = document.getElementsByClassName("burger-menu")[0],
    first = document.getElementById("first"),
    second = document.getElementById("second"),
    third = document.getElementById("third"),
    timerId = null;

button.addEventListener("click", () => {
    if (!menu.classList.contains('opened')){
		menu.style.height = menu.scrollHeight + "px";
		menu.classList.add('opened')
	}
    else {
        menu.style.height = "";
		menu.classList.remove('opened');
    }

    first.classList.toggle("firstOpened");
    second.classList.toggle("secondOpened");
    third.classList.toggle("thirdOpened");
})
