const pathNotFoundEl = document.getElementById("pathNotFound");

window.onload = () => {
	const currentPath = window.location.pathname;
	pathNotFoundEl.innerText = decodeURIComponent(currentPath);
};
