const toogler = document.getElementById("toogle");
const logo = document.getElementById("logo");
const socialLinks = document.querySelectorAll(".social-link");
let darkTheme = false;
body.style.transition = "All .5s ease-in-out";

const toogleDark = () => {
	body.classList.add("dark-mode");
	if (socialLinks !== null) {
		socialLinks.forEach((link) => link.classList.add("dark-mode-link"));
	}
	if (logo !== null) {
		logo.classList.add("dark-mode-logo");
	}
	toogler.classList.add("toogler-dark");
};

const toogleLight = () => {
	body.classList.remove("dark-mode");
	if (socialLinks !== null) {
		socialLinks.forEach((link) => link.classList.remove("dark-mode-link"));
	}
	if (logo !== null) {
		logo.classList.remove("dark-mode-logo");
	}
	toogler.classList.remove("toogler-dark");
};

toogler.addEventListener("click", () => {
	darkTheme = !darkTheme;
	localStorage.setItem("theme", `${darkTheme ? "dark" : "light"}`);
	localStorage.getItem("theme") == "dark" ? toogleDark() : toogleLight();
});

localStorage.getItem("theme") == "dark" ? toogleDark() : toogleLight();
