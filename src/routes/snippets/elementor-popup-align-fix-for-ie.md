---
title: Elementor Popup Align Fix for IE
date: 2020-09-17
tags: ['elementor', 'popup', 'IE']
---

```CSS
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS */
    .dialog-widget-content{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
```

by [connorwebdev](https://github.com/elementor/elementor/issues/7303#issuecomment-661559302)