---
title: 'Add a custom title separator for Yoast SEO'
date: 2025-03-25
tags: ['WordPress', 'SEO', 'Yoast SEO', 'title', 'meta']
---

Yoast has defautl seperators that should work well for Google and other search engines. 
As said in [Yoast Blog post](https://yoast.com/help/title-separator/) it is possible to add more:

```PHP
function yoast_add_separator(): array {
	return array( '⚡', '✅' );
}

add_filter( 'wpseo_separator_options', 'yoast_add_separator' );
```
