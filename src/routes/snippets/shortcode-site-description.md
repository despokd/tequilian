---
title: 'Shortcode for site tagline / description'
date: 2022-08-25
tags: ['WordPress', 'Shortcode', 'PHP']
---

## Shortcode

```HTML
[site-tagline]
```
or
```HTML
[site-tagline before="<strong>" after="</strong>"]<br>Additional content[/site-tagline]
```

## Result

```HTML
<p class="site-tagline">Just another WordPress site</p>         
```
or
```HTML
<strong>Just another WordPress site<br>Additional content</strong>         
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
