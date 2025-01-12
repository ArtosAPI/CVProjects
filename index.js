function copyText(object) {
	navigator.clipboard.writeText(object.innerHTML);
	alert("nametag copied!");
	window.open("https://web.telegram.org/a/");
}
