// Generate the modal for user entry
window.onload = () => {
	// Create modal element
	var modal = document.createElement('div');
	modal.id = 'email-notes-modal';
	modal.style.display = 'none';
	modal.style.position = 'fixed'; 
	modal.style.zIndex = 1;
	modal.style.left = 0;
	modal.style.top = 0;
	modal.style.width = '100%';
	modal.style.height = '100%';
	modal.style.overflow = 'auto';
	modal.style.backgroundColor = 'rgb(0,0,0)'; 
	modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
	modal.onclick = event => {
		if (event.target.id === modal.id)
			modal.style.display = 'none';
	}
	
	// Create modal content
	var content = document.createElement('div');
	content.style.backgroundColor = '#fefefe';
	content.style.margin = '15% auto';
	content.style.padding = '20px';
	content.style.border = '1px solid #888';
	content.style.width = '80%';

	// Create close button
	var closeButton = document.createElement('span');
	closeButton.classList.add('close-modal-button')
	closeButton.innerHTML = '&times;';
	closeButton.style.color = '#aaa';
	closeButton.style.float = 'right';
	closeButton.style.fontSize = '28px';
	closeButton.style.fontWeight = 'bold';
	closeButton.onclick = () => modal.style.display = 'none';
	
	// Create main modal message
	var modalText = document.createElement('p');
	modalText.innerHTML = 'Enter your email address to receive a copy of your notes!';

	// Create error message placeholder
	var errorMessage = document.createElement('p');
	errorMessage.style.color = 'red';

	// Create textbox for user entered email
	var textbox = document.createElement('input');
	textbox.type = 'text';
	textbox.id = 'email-recipient';
	textbox.placeholder = 'Email';
	textbox.style.width = '100%';

	// Create send button
	var sendButton = document.createElement('button');
	sendButton.innerHTML = 'Send Notes';
	sendButton.style.marginTop = '10px';
	sendButton.style.width = '100%';
	sendButton.onclick = () => {
		errorMessage.innerHTML = '';
		emailNotesToUser(textbox.value)
		.then(res => {
			if (res.ok)
				modal.style.display = 'none';
			else if (res.status === 400)
				errorMessage.innerHTML = 'Invalid email. Please try again.';
			else
				errorMessage.innerHTML = 'An error occurred. Please try again.';
		})
	}
	
	// Build modal
	content.appendChild(closeButton);
	content.appendChild(modalText);
	content.appendChild(errorMessage);
	content.appendChild(textbox);
	content.appendChild(sendButton);
	modal.appendChild(content);

	// Place modal at the bottom of the body
	document.body.appendChild(modal);
}

// Show the modal when the 
const showEmailNoteModal = () =>
	document.getElementById('email-notes-modal').style.display = 'block';

//
function emailNotesToUser(recipient) {
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
	
	// Gather html content
	var contents = document.getElementsByClassName('entry-content');

	// exit if there's nothing to send
	if (!contents.length) return;

	// Send the request
	return fetch('HTTP|HTTPS://HOSTNAME:PORT/email/notes', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			content: contents[0].innerHTML,
			recipient
		})
	})
}
