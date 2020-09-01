const loadform = async () => {
	const html = await (await fetch('https://alina-osyka.github.io/test/resources/form.html')).text()
	document.body.appendChild(document.createElement('main')).innerHTML = html
}