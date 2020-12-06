const pathNotFoundEl = document.getElementById("pathNotFound");

window.onload = () => {
	let currentPath = window.location.pathname;
	currentPath = currentPath.substring(1);
	pathNotFoundEl.innerText = decodeURIComponent(currentPath);
};
