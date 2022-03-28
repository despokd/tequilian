---
title: 'PrestaShop: More characters for article names'
date: 2020-10-01
tags: ['PrestaShop', 'MySQL', 'PHP']
---

1. Open your database admin tool like PhpMyAdmin
2. Go to your PrestaShop database and edit the table `ps_product_lang`
3. Edit the maximum field length of `name`<br>
  ![default value is int(10)](../thumbnails/snippets/prestashop-longer-name-db.jpg)
4. Go to your PrestaShop root directory `/classes/Product.php`
5. Edit at the line 403 the size of the name
  ```PHP
  'name' => array('type' => self::TYPE_STRING, 'lang' => true, 'validate' => 'isCatalogName', 'required' => false, 'size' => 512),
  ```
  ![find param size](../thumbnails/snippets/prestashop-longer-name-php1.jpg)
6. Go to your PrestaShop root directory > src > PrestaShopBundle > Admin > Product > ProductInformation.php
7. Edit at the line 168 the size of the name
  ```PHP
  new Assert\Length(['min' => 3, 'max' => 512]),
  ```
   ![find param max](../thumbnails/snippets/prestashop-longer-name-php2.jpg)

And you’re done. Don’t forget to clean your cache.

An alternative (better) way is [overwriting classes](https://devdocs.prestashop.com/1.7/modules/concepts/overrides/)
