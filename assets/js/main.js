const navLinks = document.querySelector(".nav-links");

if (navLinks.children.length > 0) {
	const linksArr = Array.from(navLinks.children);
	linksArr.forEach((link) => {
		link.href === location.href
			? link.classList.add("current-page-link")
			: link.classList.remove("current-page-link");
	});
}

const scrollFunction = (elementScroll) => {
	const navbar = document.querySelector(".navbar");
	const footer = document.querySelector("footer");
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		navbar.classList.remove("pop-in");
		navbar.classList.add("pop-out");
	} else {
		navbar.classList.remove("pop-out");
		navbar.classList.add("pop-in");
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

window.onscroll = (event) => {
	let elementScroll = event.target.scrollingElement;
	scrollFunction(elementScroll);
};
