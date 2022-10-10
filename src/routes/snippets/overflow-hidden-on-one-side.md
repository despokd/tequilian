---
title: 'Overflow hidden for only one side'
date: 2022-10-10
tags: ['CSS', 'overflow', 'clip-path']
---

```SCSS
// overflow hidden on last right side
& > *:last-child {
  clip-path: inset( -100vw 0 -100vw -100vw );
}

// overflow hidden on last left side
& > *:last-child {
  clip-path: inset( -100vw -100vw -100vw 0 );
}
```

by [Nathan Arthur](https://stackoverflow.com/a/47873463/10036524)
