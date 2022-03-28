---
title: 'Customize WordPress Login'
date: 2019-03-28
tags: ['WordPress', 'PHP', 'CSS']
---

```PHP
<?php
/* changing default wordpress login logo */
function my_custom_login_logo() {
echo " <style type='text/css'>
    h1 a {
        background-image: url(/wp-content/uploads/path/to/picture.jpg) !important;
        -webkit-background-size: contain;
        background-size: contain;
        font-size: 14vh !important;
        width: auto !important;
        background-size: contain !important;
    }

    body {
        background-color: #fff;
    }

    .login form {
        box-shadow: 3px 4px 10px rgba(0, 0, 0, .13) !important;
        border-radius: 13px;
    }

    .button {
        box-shadow: 3px 4px 10px rgba(0, 0, 0, .13) !important;

        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
        line-height: 20.3em !important;

    }

    .message {
        box-shadow: 3px 4px 10px rgba(0, 0, 0, .13) !important;
        -webkit-border-radius: 25px !important;
        -moz-border-radius: 25px !important;
        border-radius: 25px !important;
        border-left: 4px solid darkviolet !important;
        text-shadow: none !important;
    }

    input {
        box-shadow: 3px 4px 3px rgba(0, 0, 0, .13) !important;
        padding: 5px 20px;
        text-align: center;
        -webkit-border-radius: 25px !important;
        -moz-border-radius: 25px !important;
        border-radius: 25px !important;

    }

    .privacy-policy-page-link a:hover {
        color: #d20000;
    }
</style>";
}
add_action(login_head, my_custom_login_logo);
```
