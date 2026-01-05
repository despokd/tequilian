---
title: 'Colorable icons via css mask like icon fonts'
date: 2026-01-05
tags: ['CSS', 'Icon']
---

The icon should change depending on the text colour, as with font icons, without being embedded in the HTML as SVG code.

## Solution

- Element is cropped using a mask.
- Mask corresponds to icon
- Element is coloured like text colour with currentColour as background

```CSS
.icon {
    mask-image: url('data:image/svg+xml;utf8,<svg ...>...</svg>');
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: currentColor;
  }
```

## Example

```SCSS
/*
 * Add a icon to buttons that don't have an icon
 * Mask used for color changes without inline SVG or fonts
 */
$fa-chevron-right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';

@supports (mask-image: url('data:image/svg+xml;utf8')) {
  .btn::after {
    content: '';
    mask-image: url('data:image/svg+xml;utf8,#{$fa-chevron-right}');
    mask-size: contain;
    mask-repeat: no-repeat;
    background-color: currentColor;
    display: inline-block;
    width: .75em;
    height: .75em;
    margin-left: .5em;
  }

  .btn:has(.icon) {
    &::after {
      content: none;
    }
  }
}
```
