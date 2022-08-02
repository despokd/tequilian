---
title: 'Get address fields from customer area user'
date: 2022-08-02
tags: ['WordPress', 'Customer Area', 'PHP']
---

Custom user data from the [WP Customer Area](https://de.wordpress.org/plugins/customer-area/) plugin from WordPress `options` table:

```PHP
get_option('cuar_owner_addresses|usr|' . get_current_user_id());
```

Returns an array if options is found:
```PHP
Array
(
    [home_address] => Array
        (
            [name] => 
            [company] => 
            [vat_number] => 
            [logo_url] => 
            [line1] => 
            [line2] => 
            [zip] => 
            [city] => 
            [country] => 
            [state] => 
        )

    [billing_address] => Array
        (
            [name] => 
            [company] => 
            [vat_number] => 
            [logo_url] => 
            [line1] => 
            [line2] => 
            [zip] => 
            [city] => 
            [country] => 
            [state] => 
        )

)
```
