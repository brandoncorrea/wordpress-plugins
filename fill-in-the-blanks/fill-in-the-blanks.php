<?php
/**
 * Plugin Name: Fill in the Blanks
 * Description: Replaces text with textboxes for users who did not author the post.
 * Version: 1.0.0
 */
 
	// Wordpress Hooks
	add_action( 'init', 'fill_in_the_blanks_script_register' );
	add_action( 'enqueue_block_editor_assets', 'fill_in_the_blanks_enqueue_assets_editor' );
	add_filter('the_content', 'content_filter');
 
	// Add JS and CSS files
	function fill_in_the_blanks_script_register() {
		wp_register_script(
			'fill-in-the-blanks-js',
			plugins_url( 'fill-in-the-blanks.js', __FILE__ ),
			array( 'wp-rich-text' )
		);
		wp_enqueue_style(
			'fill-in-the-blanks-css', 
			plugins_url('fill-in-the-blanks.css', __FILE__));
	}
	
	// Enqueue JS file
	function fill_in_the_blanks_enqueue_assets_editor() {
		wp_enqueue_script( 'fill-in-the-blanks-js' );
	}

	// Filters the HTML depending on the user
	function content_filter($content)
	{
		if (should_return_raw_content() || $content == null)
			return $content;
		else
			return replace_blank_fields($content);
	}
	
	// replaces all tags with input tags: <span class="fill-in-the-blanks-text" />
	function replace_blank_fields($content)
	{
		// Get all Span elements with class, 'my-custom-format'
		$dom = new DOMDocument();
		$dom->loadHTML($content);
		$xpath = new DomXPath($dom);
		$elements = $xpath->query("//span[@class='fill-in-the-blanks-text']");
		
		// Replace each element with inputs
		foreach ($elements as $el)
		{
			$input = $dom->createElement('input', '');
			$input->setAttribute('type', 'text');
			$input->setAttribute('class', 'fill-in-the-blanks-input');
			$el->parentNode->replaceChild($input, $el);
		}
		
		// Returns updated HTML
		return $dom->saveHTML();
	}
	
	// Returns true if the user authored the post
	function should_return_raw_content()
	{
		return get_the_author() !== wp_get_current_user()->user_login;
	}
