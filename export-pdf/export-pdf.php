<?php
/**
 * Plugin Name: Export PDF
 * Description: Sends post content to the current user's email
 * Version: 1.0.0
 */
 
	// Wordpress Hooks
	add_action('init', 'export_pdf_script_register');
	add_action('wp_enqueue_scripts', 'export_pdf_enqueue_scripts');
	add_filter('the_content', 'add_export_button');
 
	// Add JS and CSS files
	function export_pdf_script_register() {
		wp_register_script(
			'export-pdf-js',
			plugins_url('export-pdf.js', __FILE__ ),
			array('wp-rich-text')
		);
		wp_enqueue_style(
			'export-pdf-css', 
			plugins_url('export-pdf.css', __FILE__));
	}
	
	// Enqueue JS file
	function export_pdf_enqueue_scripts() {
		wp_enqueue_script('export-pdf-js');
	}
	
	// Appends the content with the Export PDF button
	function add_export_button($content)
	{
		if ($content == null)
			return $content;
		$email = wp_get_current_user()->user_email;
		$button = "<button id=\"export-pdf-btn\" onclick=\"emailNotesToCurrentUser('" . $email . "')\"><p class=\"export-pdf-btn-title\">Save a copy of your notes!</p><p class=\"export-pdf-btn-subtitle\">CLICK HERE</p></button>";
		return $content . $button;
	}
