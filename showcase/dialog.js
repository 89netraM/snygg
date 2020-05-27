(() => {
	const openButton = document.getElementById("open-dialog");
	const dialog = document.getElementById("example-dialog");
	const closeButton = dialog.querySelector("button.primary");

	openButton.addEventListener(
		"click",
		() => {
			dialog.setAttribute("data-open", true);
		},
		false
	);
	closeButton.addEventListener(
		"click",
		() => {
			dialog.setAttribute("data-open", false);
		},
		false
	);
})();