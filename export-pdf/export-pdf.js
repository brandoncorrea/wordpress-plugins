function emailNotesToCurrentUser(recipient) {
	var button = document.getElementById('export-pdf-btn');
	button.enabled = false;
	
	// Hard set input values
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++)
		inputs[i].setAttribute('value', inputs[i].value);
	
	// Hard set textareas
	var textareas = document.getElementsByTagName('textarea');
	for (var i = 0; i < textareas.length; i++)
		textareas[i].innerHTML = textareas[i].value;
	
	// Hard set selected option
	var selects = document.getElementsByTagName('select');
	for (var i = 0; i < selects.length; i++) {
		var selected = selects[i].selectedIndex;
		selects[i].options[selected].setAttribute('selected', 'selected');
	}
	
	// Gather request data
	var title = document.getElementsByClassName('entry-title')[0].innerText;
	var author = document.getElementsByClassName('author')[0].innerText;
	var date = document.getElementsByClassName('posted-on')[0].innerText;
	var content = document.getElementsByClassName('entry-content')[0].innerHTML;
	
	fetch('https://sendgrid-email-api-app.herokuapp.com/email/notes', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			title,
			author,
			date,
			content,
			recipient
		})
	})
	.finally(() => button.enabled = true);
}
