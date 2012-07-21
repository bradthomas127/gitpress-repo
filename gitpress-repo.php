<?php
/*
Plugin Name: GitPress Repo
Plugin URI: https://github.com/bradthomas127/gitpress-repo
Description: Makes embedding Github Repositories super easy.
Usage: Drop in the shortcode and fill in the Repository name and author name.
	Repo shortcode: [repo name="_s" author="Automattic"]
	Repo shortcode with branch: [repo name="jquery" author="jquery" branch="strip_iife"]
	Gist shortcode: [gist id="2639806"]
Version: 1.0
Author: Bradthomas127
Author URI: http://wp-ultra.com
License: GNU General Public License v2
License URI: http://www.opensource.org/licenses/GPL-2.0
*/

/**
 * Add GitPress Repo Shortcode.
 *
 * @since: GitPress Repo 1.0
 */

function gitpress_repo_shortcode( $atts ) {
	extract( shortcode_atts( array(
		'name' => '',
		'author' => '',
		'branch' => null,
	), $atts ) );

	$divId  = sanitize_title_with_dashes( 'repo-js_'.$author.'-'.$name ); 
	$html = '<div id="'.$divId.'"></div>';
	
	if ( ! $branch ) {
		// If no branch.
		$html .= '<script type="text/javascript">'.
						'jQuery(function($){ $("#'.$divId.'").repo({ user: "'.$author.'", name: "'.$name.'" });});'.
					'</script>';
	} else {
		// If has branch.
		$html .= '<script type="text/javascript">'.
						'jQuery(function($){ $("#'.$divId.'").repo({ user: "'.$author.'", name: "'.$name.'", branch: "'.$branch.'" });});'.
					'</script>';
	}
	return $html;
}
add_shortcode('repo','gitpress_repo_shortcode');

/**
 * Add GitPress Repo Gist Shortcode.
 *
 * @since: GitPress Repo 1.0
 */
function gitpress_repo_gist_shortcode( $atts ) {
	extract(shortcode_atts(array(
		'id' => ''
	), $atts) );

	$html =  "<script src=\"http://gist.github.com/".trim($id).".js\"></script>";
	
	return $html;
	
}
add_shortcode('gist', 'gitpress_repo_gist_shortcode');

/**
 * Add GitPress Repo Style and Script.
 *
 * @since: GitPress Repo 1.0
 */
function gitpress_repo_script() {
	/*
	 * You might want to wrap in Conditional tags - http://codex.wordpress.org/Conditional_Tags
	 * EG: if ( is_page() || in_category('GitHub')){}
	 */
	wp_enqueue_style( 'gitpress-repo-style', plugins_url('/css/repo.css', __FILE__) );
	wp_enqueue_script('gitpress-repo-script', plugins_url('/js/repo.min.js', __FILE__), array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'gitpress_repo_script');

?>