---
title: 'Getting a URL Parameter'
date: 2019-06-12
tags: ['JavaScript', 'URL', 'GET']
---

## Update 2021

```JavaScript
const url = window.location.href;
const urlParams = new URLSearchParams(url.search)
urlParams.get('product'); // 'shirt'
```

## 2019 way

Let’s say you have the following URL:`http://example.com/?product=shirt&color=blue&newuser&size=m`

Here’s a function to give you all the URL parameters as a neat object:

```js
function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}
```

You’ll see how this works soon, but first, here are some usage examples:

```JavaScript
getAllUrlParams().product; // 'shirt'
getAllUrlParams().color; // 'blue'
getAllUrlParams().newuser; // true
getAllUrlParams().nonexistent; // undefined
getAllUrlParams('http://test.com/?a=abc').a; // 'abc'
```

by [sitepoint.com/get-url-parameters-with-javascript](https://www.sitepoint.com/get-url-parameters-with-javascript/)
