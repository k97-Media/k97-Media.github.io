const navLinks = document.querySelector(".nav-links");

if (navLinks.children.length > 0) {
	const linksArr = Array.from(navLinks.children);
	linksArr.forEach((link) => {
		link.href === location.href
			? link.classList.add("current-page-link")
			: link.classList.remove("current-page-link");
	});
}
