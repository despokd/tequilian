---
title: 'Dynamic textareas'
date: 2022-08-27
tags: ['JavaScript', 'HTML']
---

Works on multiple standard textareas

```HTML
<textarea rows="2">
  Some
  multiline
  text
</texarea>
```

```JavaScript
document.addEventListener('DOMContentLoaded', () => {
    adaptTextareaRowsToContent();
});

function adaptTextareaRowsToContent() {
    const textarea = document.querySelectorAll('textarea');
    textarea.forEach(el => {
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                setTextareaRows(el, 1);
            }
        });

        setTextareaRows(el);
    });
}


function setTextareaRows(el, additionalRows = 0) {
    el.rows = el.value.split('\n').length + additionalRows;
}
```
