---
title: 'Add not supported CSS to SCSS/LESS'
date: 2022-12-06
tags: ['SCSS', 'LESS', 'CSS', 'support', 'dvh', 'dynamic viewport']
---

Not supported features from new CSS specs can mark your code linter (e.g. default PHPStorm) as error or destroy the CSS (converts `100dvh`to `100 dvh`).

Using a string `#{'100dvh'} instead prevents it.

## SCSS

```SCSS
.selector {
  min-height: 100vw;
  
  @supports (min-height: #{'100dvh'}) {
    min-height: #{'100dvh'}
  }
}
```

## LESS

Same for LESS with `~('100dvh')`

```LESS
.selector {
  min-height: 100vw;
  
  @supports (min-height: ~('100dvh')) {
    min-height: ~('100dvh')
  }
}
```
