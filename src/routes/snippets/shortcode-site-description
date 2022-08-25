---
title: 'Shortcode for site taglinge / description'
date: 2022-08-25
tags: ['WordPress', 'Shortcode', 'PHP']
---

## Shortcode

```
[site-tagline]
```
or
```
[site-tagline before="<strong>" after="</strong>"]<br>Additional content[/site-tagline]
```

## Function

```PHP
/**
 * Shortcode for site tagline
 */
function site_tagline( $args, $content = null ) {
	$tagline = get_bloginfo( 'description' ) ?? '';

	$defaults = [
		'before' => '<p class="site-description">',
		'after'  => '</p>',
	];

	$args = wp_parse_args( $args, $defaults );

	if ( ! $tagline ) {
		return '';
	}

	if ( $content ) {
		$tagline .= " $content";
	}

	return $args['before'] . $tagline . $args['after'];
}

add_shortcode( 'site-tagline', 'site_tagline' );
```
