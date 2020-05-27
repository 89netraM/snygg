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

	let initialTheme = localStorage.getItem("theme");
	if (initialTheme == null) {
		const media = matchMedia("(prefers-color-scheme: light)");
		media.addEventListener(
			"change",
			e => {
				if (localStorage.getItem("theme") == null) {
					const theme = media.matches ? "light" : "dark";
					themeRoot.setAttribute("data-theme", theme);
					themeToggle.checked = theme === "light";
				}
			},
			false
		);

		initialTheme = media.matches ? "light" : "dark";
	}
	themeRoot.setAttribute("data-theme", initialTheme);
	themeToggle.checked = initialTheme === "light";
})();