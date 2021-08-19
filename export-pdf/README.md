# Export PDF
This plugin adds a button to the end of posts that enables users to email the notes to themselves.

## Button HTML
The button HTML can be updated in export-pdf.php > add_export_button()

Current Button HTML below:
```html
<button id="export-pdf-btn" onclick="showEmailNoteModal()">
  <p class="export-pdf-btn-title">Save a copy of your notes!</p>
  <p class="export-pdf-btn-subtitle">CLICK HERE</p>
</button>
```

## export-pdf.js
- Adds a modal to the page that will be triggered when the "Click Here" button is pressed.
- Accepts a user entered email address and sends the note content to an email notes API.

## Setup
- The fetch call in export-pdf.js will need to be updated with the endpoint that the API is hosted on.
- Copy the export-pdf folder and its contents into the ~\wp-content\plugins directory.
