---
title: 'Font face helper'
date: 2022-04-29
tags: ['SCSS', 'Fonts']
---

## Mixin and function

Working almost smoothly with Open Sans from Google Fonts, except `OpenSansItalic` it tries to get `OpenSansRegularItalic`.
Had to rename the file for consistency.

```SCSS
// @link https://gist.github.com/jonathantneal/d0460e5c2d5d7f9bc5e6
@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace +
      str-replace(
        str-slice($string, $index + str-length($search)),
        $search,
        $replace
      );
  }

  @return $string;
}

// @link https://gist.github.com/jonathantneal/d0460e5c2d5d7f9bc5e6
@mixin custom-font-face(
  $name,
  $path,
  $style: normal,
  $weight: normal,
  $stretch: normal,
  $exts: eot woff2 woff ttf svg
) {
  $src: null;

  $extmods: (
    eot: "?",
    svg: "#" + str-replace($name, " ", "_"),
  );

  $formats: (
    otf: "opentype",
    ttf: "truetype",
  );

  @each $ext in $exts {
    $extmod: if(
      map-has-key($extmods, $ext),
      $ext + map-get($extmods, $ext),
      $ext
    );
    $format: if(map-has-key($formats, $ext), map-get($formats, $ext), $ext);
    $src: append(
      $src,
      url(quote($path + "." + $extmod)) format(quote($format)),
      comma
    );
  }

  @font-face {
    src: $src;
    font-family: quote($name);
    font-style: $style;
    font-weight: $weight;
    font-stretch: $stretch;
    font-display: swap;
    src: $src;
  }
}
```

## Font mapping

```SCSS
//_____________________
// Fonts
//_____________________
$path-fonts: $theme-path + "/base/fonts";

//_____________________
// Open Sans

$path-open-sans: $path-fonts + "/Open_Sans";
$path-open-sans-normal: $path-open-sans + "/static/OpenSans";
$path-open-sans-variable: $path-open-sans;

$map-weights: (
  300: "-Light",
  400: "-Regular",
  600: "-SemiBold",
  700: "-Bold",
);

$map-styles: (
  normal: "",
  italic: "Italic",
);

$map-stretches: (
  normal: "",
  condensed: "_Condensed",
  semi-condensed: "_SemiCondensed",
);

@each $stretch, $stretch-name in $map-stretches {
  @each $weight, $weight-name in $map-weights {
    @each $style, $style-name in $map-styles {
      @include custom-font-face(
        "Open Sans",
        $path-open-sans-normal + $stretch-name + "/OpenSans" + $stretch-name +
        $weight-name + $style-name,
        $style,
        $weight,
        $stretch,
        ttf
      );
    }
  }
}
```
