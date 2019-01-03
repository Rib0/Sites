let burger__menu = document.getElementsByClassName('burger__menu')[0],
    header__menu = document.getElementsByClassName('header__menu')[0],
    menu = document.getElementsByClassName('menu')[0],
    first = document.getElementsByClassName('first')[0],
    second = document.getElementsByClassName('second')[0],
    third = document.getElementsByClassName('third')[0];

    burger__menu.onclick = () => {
        first.classList.toggle('activeFirst');
        second.classList.toggle('activeSecond');
        third.classList.toggle('activeThird');
        menu.classList.toggle('menu-active');
}