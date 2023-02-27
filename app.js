/* ----- MENU BURGER ----- */
const burgerOpen = document.getElementById("burger-open");
const burgerClose = document.getElementById("burger-close");
const verticalBar = document.querySelector(".verticalBar");
const links = Array.from(document.querySelectorAll(".verticalBar--link"));

burgerOpen.addEventListener("click", () => {
	verticalBar.style.display = "flex";
});

burgerClose.addEventListener("click", () => {
	verticalBar.style.display = "none";
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		verticalBar.style.display = "none";
	});
});

/* ----- ARROW TO THE TOP ----- */
const onTopArrow = document.getElementById("onTop");

window.addEventListener("scroll", () => {
	onTopArrow.style.display = window.pageYOffset > 100 ? "block" : "none";
	onTopArrow.style.opacity = window.pageYOffset > 100 ? "1" : "0";
});

/* ----- DARK MODE ----- */
const buttonDarkMode = document.querySelectorAll(".button-darkmode");

buttonDarkMode.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.body.classList.toggle("dark");
	});
});
