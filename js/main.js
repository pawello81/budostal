const navMobile = document.querySelector('.nav-mobile');
const allNavItems = document.querySelectorAll('.nav__link');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

allNavItems.forEach((item) => {
	item.addEventListener('click', () => {
		navBtn.classList.toggle('is-active');
		navMobile.classList.toggle('nav-mobile--active');
	});
});

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
