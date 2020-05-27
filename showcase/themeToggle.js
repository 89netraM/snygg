(() => {
	/** @type {HTMLElement} */
	const themeRoot = document.body;
	/** @type {HTMLInputElement} */
	const themeToggle = document.getElementById("theme-toggle");
	
	themeToggle.addEventListener(
		"input",
		() => {
			const theme = themeToggle.checked ? "light" : "dark";
			themeRoot.setAttribute("data-theme", theme);
			localStorage.setItem("theme", theme);
		},
		false
	);

	themeRoot.setAttribute("data-theme", localStorage.getItem("theme") || "dark");
	themeToggle.checked = localStorage.getItem("theme") === "light";
})();