---
title: Fix - SVG not shown in Firefox
date: "2021-12-14"
---

SVG-Image not visible only in Mozilla Firefox? Try to add a (minimum) pixel width on the `<img>`.

```CSS
img {
    min-width: 130px;
}
```

![Set min-width in Elementor with selector img](/thumbnails/snippets/elementor-svg-width.png "width: 100% alone doesn’t help")
