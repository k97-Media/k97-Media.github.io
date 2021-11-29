const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const footer = document.querySelector("footer");

if (navLinks.children.length > 0) {
	const linksArr = Array.from(navLinks.children);
	linksArr.forEach((link) => {
		link.href === location.href
			? link.classList.add("current-page-link")
			: link.classList.remove("current-page-link");
	});
}

const addShadow = (element) => {
	localStorage.getItem("theme") == "dark" ?
		element.style.boxShadow = "0.01em 0.01em 0.5em 0.01em #fd7014"
		: element.style.boxShadow = "0.01em 0.01em 0.5em 0.01em #2e2d2d"
}

const scrollFunction = (elementScroll) => {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		navbar.classList.remove("pop-in");
		navbar.classList.add("pop-out");
		footer.querySelector("button").style.display = "block";
	} else {
		navbar.classList.remove("pop-out");
		navbar.classList.add("pop-in");
		footer.querySelector("button").style.display = "none";
	}
	if (
		elementScroll.scrollHeight - elementScroll.scrollTop <=
		elementScroll.clientHeight + 100
	) {
		footer.classList.remove("pop-out");
		footer.classList.add("pop-in");
	} else {
		footer.classList.remove("pop-in");
		footer.classList.add("pop-out");
	}
};

let lastPos = 0;
footer
	.querySelector("button")
	.addEventListener("click", () => (document.documentElement.scrollTop = 0));

window.onscroll = (event) => {
	let elementScroll = event.target.scrollingElement;
	scrollFunction(elementScroll);
};
