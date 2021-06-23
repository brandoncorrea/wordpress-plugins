( function ( wp ) {
    var FillInTheBlankButton = function ( props ) {
        return wp.element.createElement( wp.editor.RichTextToolbarButton, {
			// Update the button icon here
            icon: 'welcome-write-blog',
			// Update the button text here
            title: 'Fill in the Blank',
            onClick: function () {
                props.onChange(
                    wp.richText.toggleFormat( props.value, {
                        type: 'fill-in-the-blanks/fill-in-the-blank',
                    } )
                );
            },
			isActive: props.isActive,
        } );
    };
	
    wp.richText.registerFormatType( 'fill-in-the-blanks/fill-in-the-blank', {
		// Also update the button text here
        title: 'Fill in the Blank',
        tagName: 'span',
        className: 'fill-in-the-blanks-text',
        edit: FillInTheBlankButton,
    } );
} )( window.wp );