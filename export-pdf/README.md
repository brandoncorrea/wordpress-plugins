# Export PDF
This plugin adds a button to the end of posts that enables users to print the document as a PDF.
The same functionality is applied when the user attempts a CTRL + P printing method.

## Button HTML
The button HTML can be updated in export-pdf.php > add_export_button()

Current Button HTML below:
```html
<button id='export-pdf-btn' onclick='print()'>Export PDF</button>
```

## export-pdf.css
Contains the styles for the Export PDF Button as well as the exported page.

The button styling is under the ID: #export-pdf-btn

The exported page styling is under the section: @media print

## export-pdf.js
Document filtering is handled in the beforePrintEvent() function.

### Filtering Rules
- input tags will be replaced with the values
- textarea tags will be replaced with the values
- select tags will be replaced with the selected option's text
