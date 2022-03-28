---
title: 'CSS only for Internet Explorer'
date: 2020-05-05
tags: ['CSS', 'HTML', 'IE']
---

## MS Edge Legacy

```CSS
/* Microsoft Edge Browser 12+ (All) - @supports method */

@supports (-ms-ime-align:auto) {
  .selector { property:value; } 
}
```

by [jeffclayton.wordpress.com/2015/04/07/css-hacks-for-windows-10-and-spartan-browser-preview](https://jeffclayton.wordpress.com/2015/04/07/css-hacks-for-windows-10-and-spartan-browser-preview/)

## IE10+

```CSS
@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
   /* IE10+ specific styles go here */  
}
```

by [paper-leaf.com/blog/2014/09/targeting-ie-10-11-browsers-css](https://paper-leaf.com/blog/2014/09/targeting-ie-10-11-browsers-css/)

## IE9-

```HTML
<head>
    <!--[if IE ]>
    <link href="ie.css" rel="stylesheet" type="text/css">
    <![endif]-->
</head>
```

by [mediaevent.de/css/conditional-comments](https://www.mediaevent.de/css/conditional-comments.html)
