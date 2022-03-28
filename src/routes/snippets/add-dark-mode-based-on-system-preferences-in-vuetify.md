---
title: 'Add dark mode based on system preferences in Vuetify'
date: 2021-01-24
tags: ['Vue', 'Vuetify', 'JavaScript', 'CSS']
---

## Within Vuetify instance

```JavaScript
theme: {
   dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
}
```

## or afterwards with CDN installations

```JavaScript
created: function () {
    // match system color
    this.$vuetify.theme.dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
},
```
