// Replace input-type elements with their values before printing
function beforePrintEvent() {
	
	// Hard set input values (non-cosmetic)
	// This must be done in order to preserve the 
	// current values after the document is restored
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++)
		inputs[i].setAttribute('value', inputs[i].value);
	
	var options = document.getElementsByTagName('option');
	for (var i = 0; i < options.length; i++)
		if (options[i].selected)
			options[i].setAttribute('selected', '');
	
	var textAreas = document.getElementsByTagName('textarea');
	for (var i = 0; i < textAreas.length; i++)
		textAreas[i].innerHTML = textAreas[i].value;
	
	// Save copy of HTML
	originalDocument = document.body.innerHTML;
	
	// Replace tags with text
	// This must be done so that page doesn't looks less like a website
	while (document.getElementsByTagName('input').length > 0)
	{
		var el = document.getElementsByTagName('input')[0];
		var textNode = document.createTextNode(el.value);
		el.parentNode.replaceChild(textNode, el);
	}
	
	while(document.getElementsByTagName('select').length > 0)
	{
		var el = document.getElementsByTagName('select')[0];
		var textNode = document.createTextNode(el.options[el.selectedIndex].text);
		el.parentNode.replaceChild(textNode, el);
	}
	
	while (document.getElementsByTagName('textarea').length > 0)
	{
		var el = document.getElementsByTagName('textarea')[0];
		var textNode = document.createTextNode(el.value);
		el.parentNode.replaceChild(textNode, el);
	}
	
	// Hide the export button
	document.getElementById('export-pdf-btn').style.display = 'none';
}

// Restore the original document after printing
function afterPrintEvent() {
	document.body.innerHTML = originalDocument;
	originalDocument = "";
}

// Temporary variable for restoring the document
var originalDocument = "";

// Apply the same functions for CTRL + P printing methods
window.addEventListener("beforeprint", beforePrintEvent);
window.addEventListener("afterprint", afterPrintEvent);