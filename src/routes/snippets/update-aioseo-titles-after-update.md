---
title: 'Update AIO Seo titles after Update from 3.x to 4.x'
date: 2022-04-1
tags: ['WordPress', 'SQL']
---

## SQL Query

Moves titles from `wp_postmeta` to new table `wp_aioseo_posts`

```SQL
UPDATE `wp_aioseo_posts` AIO, `wp_postmeta` WP
SET AIO.title = WP.meta_value
WHERE AIO.post_id = WP.post_id AND WP.meta_key = '_aioseop_title';
```
