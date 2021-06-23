Description:
	This plugin adds a button to the end of posts that 
	enables users to print the document as a PDF.

	The same functionality is applied when the user attempts a
	CTRL + P printing method.

HTML:
	The HTML for the Export PDF button will appear like so:
		- <button id='export-pdf-btn' onclick='print()'>Export PDF</button>

	The button HTML can be updated in export-pdf.php > add_export_button().

Styling:
	The CSS for the button can be updated in:
		- export-pdf.css > #export-pdf-btn
	
	The CSS for the exported page can be updated in:
		- export-pdf.css > @media print

Scripts:
	Document filtering is handled in export-pdf.js > beforePrintEvent()

	Filtering Rules:
		- input tags will be replaced with the values
		- textarea tags will be replaced with the values
		- select tags will be replaced with the selected option's text
