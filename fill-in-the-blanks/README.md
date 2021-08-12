# Fill in the Blanks
This plugin enables the author to insert fill-in-the-blank fields that readers may fill out as they listen to the speaker.

Regular text will appear for the author, while textboxes will appear for non-author users.

## HTML
The HTML for the author's text will appear like so:
```html
<span class="fill-in-the-blanks-text">Some Text</span>
<span class="fill-in-the-blanks-textarea>Some more text</span>
```

The HTML for the reader's textboxes will appear like so:
```html
<input type="text" class="fill-in-the-blanks-input" />
<textarea class="fill-in-the-blanks-input"></textarea>
````

## Display Rules
If rules need to be changed about who can see text and who can see textboxes, this can be updated here: 
- fill-in-the-blanks.php > should_return_raw_content()

## Styling
The CSS for the author's input textbox view can be updated in:
- fill-in-the-blanks.css > .fill-in-the-blanks-text

The CSS for the author's textarea view can be updated in:
- fill-in-the-blanks.css > .fill-in-the-blanks-textarea

The CSS for the reader's textbox view can be updated in:
- fill-in-the-blanks.css > .fill-in-the-blanks-input

The icon and title for the button that the author clicks can be updated here: 
- fill-in-the-blanks.js > Calls to add_button toward the bottom of the script
- The first parameter is the icon.
- The second parameter is the button text.
- The third parameter is the class name that the highlighted text is wrapped with when the button is clicked.
