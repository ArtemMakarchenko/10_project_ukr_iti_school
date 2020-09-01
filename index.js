const loadform = async () => {
  const html = await (await fetch('https://alina-osyka.github.io/test/resources/form.html')).text()
	document.body
	  .appendChild(document.createElement('main'))
	    .innerHTML = html
  const [login, password, avatar] = ['login', 'password', 'avatar'].map((id) => document.getElementById(id))
  login.onchange = function(event) {
  	fetch(`http://localhost:3000/users?login=${event.target.value}`)
  	  .then((response) => response.json())
  	  .then((response) => {
  	  	if (response.length === 0) {
  	  	  event.target.style.color = 'green'
  	  	} else {
  	  	  event.target.style.color = 'red'
  	  	}
  	  })
  }
}
loadform()
