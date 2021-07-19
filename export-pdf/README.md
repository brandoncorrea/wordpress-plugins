# Export PDF
This plugin adds a button to the end of posts that enables users to email the notes to themselves.

## Button HTML
The button HTML can be updated in export-pdf.php > add_export_button()

Current Button HTML below:
```html
<button id="export-pdf-btn" onclick="emailNotesToCurrentUser('CurrentUser@mail.com')">Email Notes</button>
```

## export-pdf.css
Contains the styles for the Email Notes Button.

## export-pdf.js
Sends the note content to an email notes API.
