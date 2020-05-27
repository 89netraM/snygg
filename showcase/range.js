(() => {
	/** @type {HTMLInputElement} */
	const rangeInteractive = document.querySelector(`#range-interactive > input[type="range"]`);
	/** @type {HTMLSpanElement} */
	const rangeInteractiveDisplay = document.querySelector("#range-interactive > [data-range-value]");

	function updateDisplay() {
		rangeInteractiveDisplay.setAttribute("data-range-value", rangeInteractive.valueAsNumber);
	}
	rangeInteractive.addEventListener("input", () => updateDisplay(), false);
})();