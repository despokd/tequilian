---
title: 'Ultimate Member Correct Secondary Button Link in Registration Login Form'
date: 2020-05-13
tags: ['Ultimate Member', 'WordPress', 'PHP', 'JavaScript', 'jQuery']
---

```HTML
<script>
    jQuery().ready(function() {
        //correct um login link
        var link = document.getElementsByClassName("um-button um-alt")[0];
        if (link !== undefined) {
            link.setAttribute('href', "../login");
        }
    });
</script>
```
