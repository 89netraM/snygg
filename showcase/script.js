(() => {
	/** @type {Array<HTMLSelectElement>} */
	const sections = new Array(...document.querySelectorAll("section"));
	/** @type {Array<HTMLLIElement>} */
	const links = new Array(...document.querySelectorAll("nav > ul > li"));
	/** @type {HTMLElement} */
	const nav = document.querySelector("body > nav");
	/** @type {HTMLElement} */
	const more = document.querySelector("header > nav");

	function hideAll() {
		for (const section of sections) {
			section.hidden = true;
		}
	}

	/** @param {string} id */
	function showOnly(id) {
		hideAll();
		sections.find(x => x.id === id).hidden = false;
	}

	function deactivateAll() {
		for (const link of links) {
			link.classList.remove("active");
		}
	}

	/** @param {string} id */
	function activateOnly(id) {
		deactivateAll();
		links.find(x => x.querySelector(`[href="#${id}"]`) != null).classList.add("active");
	}

	/** @param {string} id */
	function select(id) {
		showOnly(id);
		activateOnly(id);
	}

	function updateByHash() {
		select(location.hash.length > 0 ? location.hash.substring(1) : "home");
		nav.classList.remove("visible");
	}

	/** @param {HTMLElement} pane */
	function togglePane(pane) {
		if (pane.classList.contains("visible")) {
			pane.classList.remove("visible");
		}
		else {
			pane.classList.add("visible");
		}
	}

	updateByHash();
	document.querySelector("header > .expand-nav").addEventListener("click", () => togglePane(nav), false);
	document.querySelector("header > .expand-more").addEventListener("click", () => togglePane(more), false);

	window.addEventListener("hashchange", () => updateByHash(), false);
})();