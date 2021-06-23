# Fill in the Blanks
This plugin enables the author to insert fill-in-the-blank fields that readers may fill out as they listen to the speaker.

Regular text will appear for the author, while textboxes will appear for non-author users.

## HTML
The HTML for the author's text will appear like so:
```html
<span class="fill-in-the-blanks-text">SomeText</span>
```

The HTML for the reader's textbox will appear like so:
```html
<input type="text" class="fill-in-the-blanks-input" />
````

## Display Rules
If rules need to be changed about who can see text and who can see textboxes, this can be updated here: 
- fill-in-the-blanks.php > should_return_raw_content()

## Styling
The CSS for the author's text view can be updated in:
- fill-in-the-blanks.css > .fill-in-the-blanks-text
	
The CSS for the reader's textbox view can be updated in:
- fill-in-the-blanks.css > .fill-in-the-blanks-input

The button icon that the author clicks on can be updated in: 
- fill-in-the-blanks.js > FillInTheBlankButton > icon attribute

The text that appears next to the button can be updated by changing both:
- fill-in-the-blanks.js > FillInTheBlankButton > title attribute
- registerFormatType function > title attribute
