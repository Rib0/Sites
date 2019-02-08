let first = document.getElementById('first'),
    second = document.getElementById('second'),
    third = document.getElementById('third'),
    button = document.getElementsByClassName('burger-menu')[0],
    menu = document.getElementsByClassName('menu')[0],
    timerId = null;

button.onclick = () => {
     if (!menu.classList.contains('opened')) {
		menu.style.height = menu.scrollHeight + 'px'
		menu.classList.add('opened');
	 } else {
		menu.classList.remove('opened');
		menu.style.height = '';
	 }
        first.classList.toggle('first-active');
        second.classList.toggle('second-active');
        third.classList.toggle('third-active');
}