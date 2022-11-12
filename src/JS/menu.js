const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menu_t = document.getElementById('menu-t');
const menu_m = document.getElementById('menu-m');
const menu_b = document.getElementById('menu-b');
menu.addEventListener('click', function () {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show');

		menu_t.style.rotate = '0deg';
		menu_t.style.transformOrigin = 'top left';
		menu_t.style.transition = 'all .4s';
		menu_m.style.opacity = '1';
		menu_b.style.rotate = '0deg';
		menu_b.style.transformOrigin = 'bottom left';
		menu_b.style.transition = 'all .4s';
	} else {
		nav.classList.add('show');
		menu_t.style.rotate = '45deg';
		menu_t.style.transformOrigin = 'top left';
		menu_t.style.transition = 'all .4s';
		menu_m.style.opacity = '0';
		menu_b.style.rotate = '-45deg';
		menu_b.style.transformOrigin = 'bottom left';
		menu_b.style.transition = 'all .4s';
	}
});

window.addEventListener('resize', function () {
	if (this.innerWidth > 640) {
		nav.classList.remove('show');
	}
});
