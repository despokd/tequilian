---
title: 'How to prevent anchor links from scrolling behind a sticky header'
date: 2020-09-08
tags: ['CSS']
---

## Update 2022

```CSS
html {
  scroll-margin-top: 170px; /* fixed header height */

  /* optional improvements */
  overscroll-behavior: none;
  scroll-behavior: smooth;
}
```

## 2020

```CSS
:target::before {
  content: "";
  display: block;
  height: 170px; /* fixed header height */
  margin: -170px 0 0; /* negative fixed header height */
}
```

by [Adrian Garner + Rory O'Kane](https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors/28824157#28824157)
