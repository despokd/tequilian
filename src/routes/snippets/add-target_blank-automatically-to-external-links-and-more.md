---
title: 'Add target=_blank automatically to external links and more'
date: 2020-08-13
tags: ['HTML', 'JavaScript', 'jQuery']
---

```JavaScript
jQuery(document).ready(function () {
  jQuery.expr[':'].external = function (obj) {
    var isBlank = false;

    if (!obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname) && !obj.href.match(/^javascript\:/) && !obj.href.match(/^javascript\:/) && !obj.href.match(/^$/)) {
      isBlank = true;
    }

    if (obj.href.match(/\.[pP][dD][fF]$/)) {
      //PDFs
      isBlank = true;
    }

    return isBlank;
  };


  jQuery('a:external').attr('target', '_blank');
});
```

by [Chris Pratt](https://stackoverflow.com/questions/12041935/how-to-automatically-add-target-blank-to-external-links-only/12042162#12042162)
