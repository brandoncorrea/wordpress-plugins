( function ( wp ) {
	
	const add_button = (icon, title, className) => {
		var formatType = 'fill-in-the-blanks/' + className;
		
		var menuButton = props => 
			wp.element.createElement(wp.editor.RichTextToolbarButton, {
				icon,
				title,
				onClick: () =>
					props.onChange(
						wp.richText.toggleFormat( props.value, {
							type: formatType,
						})
					),
				isActive: props.isActive,
			});
		
		wp.richText.registerFormatType(formatType, {
			title,
			tagName: 'span',
			className,
			edit: menuButton,
		} );
		
	}
	
	add_button(
		'welcome-write-blog', 
		'Fill in the Blank', 
		'fill-in-the-blanks-text');
	
	add_button(
		'format-aside', 
		'Blank Text Area', 
		'fill-in-the-blanks-textarea');
} )( window.wp );