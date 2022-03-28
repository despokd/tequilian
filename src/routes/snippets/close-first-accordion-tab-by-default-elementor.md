---
title: 'Close First Accordion Tab By Default Elementor'
date: 2019-06-16
tags: ['Elementor', 'JavaScript']
---

```HTML
<script>
    // Close first accordion tab by default
    jQuery(document).ready(function($) {
        var delay = 100;
        setTimeout(function() {
          jQuery('.elementor-tab-title').removeClass('elementor-active');
          jQuery('.elementor-tab-content').css('display', 'none');
        }, delay);
    });
</script>
```
