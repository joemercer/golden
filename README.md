# Golden
[LESS](http://lesscss.org/) framework with [divine](http://en.wikipedia.org/wiki/Sacred_geometry) proportions. Optionally, use as an extension to make [Bootstrap 3](http://getbootstrap.com/getting-started/) more... [golden](http://en.wikipedia.org/wiki/Golden_ratio).

## Getting started

Include `golden.css` or `golden.min.css` in your project.
```
<link href="golden.css" rel="stylesheet" type="text/css">
```
or minified
```
<link href="golden.min.css" rel="stylesheet" type="text/css">
```
That's it : )

## Customizing
Golden is built based on defaults defined in `golden-variables.less`. In particular, the variable `@font-size-base` is important for all the golden typography provided by the `.golden-typography` class. To customize Golden, simply edit these variables and recompile.
```
// in golden-variables.less
@font-size-base:          16px;
```
```
# in terminal
lessc golden.less golden.css
lessc --yui-compress golden.less golden.min.css
```
## Golden + Bootstrap = Golden Bootstrap
Golden was designed to integrate seamlessly with Bootstrap 3 and not override any pre-existing functionality. If you're using a custom version of Bootstrap 3 in your project, it's easy to add Golden.

1. Find the file `bootstrap.less` normally located in `bootstrap/less/bootstrap.less`
2. Import `golden-bootstrap.less` at the bottom
3. Compile

```
// other Bootstrap modules...

// Golden
@import "path/to/golden-bootstrap.less";
```
```
# in terminal
lessc bootstrap.less custom-bootstrap.css
lessc --yui-compress custom-bootstrap.less custom-bootstrap.min.css
```

Your `custom-bootstrap.css` will have a custom version of Golden baked into it based on the variable defaults you've defined, most likely in `bootstrap/less/variables.less`.



Note: If you're using a version of Bootstrap that hasn't been custom compiled, for example if you downloaded a pre-compiled `bootstrap.css` or `bootstrap.min.css`, then just include and customize Golden according to the Getting Started and Customizing sections above.

## How it works
Read [this](http://www.hongkiat.com/blog/golden-ratio-in-moden-designs/) to learn more about the golden ratio in modern design.

Under the hood it looks like this:

```
@golden-ratio:    1.6180339887498948482;
@golden-large:    1/@golden-ratio;
@golden-small:    1-@golden-large;
```

### Grid System
Like the Bootstrap grid system? Good, cuz Golden is built in the same style.

#### Containers
A Bootstrap style container with the width and left/right margins related by the golden-ratio. 
```
<div class="golden-container"></div>
```
Is it responsive? You bet! It resizes according to normal Bootstrap media queries.

#### Rows
Two rows with heights related by the golden-ratio. These are percent-based, so the parent element has to have a fixed height.
```
<div class="row-golden-large></div>
<div class="row-golden-small></div>
```

#### Columns
Two columns with widths related by the golden-ratio.
```
<div class="col-md-golden-large></div>
<div class="col-md-golden-small></div>
```
All that Bootstrap column goodness? Of course!
Offsets:
```
<div class="col-md-golden-large col-md-offset-golden-small></div>
```
Pulling and pushing:
```
<div class="col-md-golden-large col-md-push-golden-small></div>
<div class="col-md-golden-small col-md-pull-golden-large></div>
```
Are they responsive? You bet! This is two columns that will have widths related by the golden ratio on md sized devices, and will have equally sized widths on sm sized devices.
```
<div class="col-md-golden-large col-sm-6></div>
<div class="col-md-golden-small col-sm-6></div>
```

### Typography
Based on [this](http://www.pearsonified.com/2011/12/golden-ratio-typography.php), the Golden typography system relates font-size, line-height, and line-width with the golden ratio.

#### Golden Typography
Anything within a root element with the `.golden-typography` class will have line-height related to the font-size by the golden ratio. It will also have headings, subheadings, paragraphs, lists, quotes, addresses, and more related by the golden ratio. Most of this is built on the `@font-size-base` variable found in `golden-variables.less`.
```
<div class="golden-typography>
    <h1>
        Golden Heading
        <small>Golden Subheading</small>
    </h1>
    <p>
        Golden text
    </p>
</div>
```

#### Golden Content
An element with a `.golden-content` class will have a line width that is related to the base line height by the golden ratio squared.
```
<div class="golden-typography>
    <h1>
        Golden Heading
        <small>Golden Subheading</small>
    </h1>
    <p class="golden-content">
        Golden text
    </p>
</div>
```
Columns? Yes sir! Just add a `.columns-n` for n columns.
```
<div class="golden-typography>
    <h1>
        Golden Heading
        <small>Golden Subheading</small>
    </h1>
    <p class="golden-content two-columns">
        Golden text
    </p>
</div>
```
Horizontal centering? Of course! Just add a `.pull-center` class.
```
<div class="golden-typography>
    <h1>
        Golden Heading
        <small>Golden Subheading</small>
    </h1>
    <p class="golden-content pull-center">
        Golden text
    </p>
</div>
```

### Helpful mixins
If you're building your own CSS, I've provided some helpful mixins for utilizing the golden ratio in other areas.

#### Golden Rectangle
Use the `.make-golden-rectangle(@base; @size)` where `@base` is either `width` or `height` and is the long side of the golden rectangle and `@size` is the size of that side. The the sides of the rectangle will be related by the golden ratio.
```
// golden rectangle based on a width of 25px
.golden-rectangle-ex1 {
  .make-golden-rectangle(25px);
}
```
```
// golden rectangle based on a height of 25px
.golden-rectangle-ex2 {
  .make-golden-rectangle(height; 25px);
}
```
```
// golden rectangle based on a width of 25vh with a fallback of 200px
.golden-rectangle-ex3 {
  .make-golden-rectangle(width; 25vh; 200px);
}
```

#### Golden Image
Use the `.make-golden-image(@base; @size; @top; @bottom)` mixin where `@base` is either `width` or `height` and is the long side of the image, `@size` is the size of that side, `@top` is the offset cropping for the vertical image space, and `@bottom` is the offset cropping for the horizontal image space. The the sides of the image will be related by the golden ratio.
```
// golden image based on a width of 200px and the image centered with a 
// left alignment of -68px and top alignment of -11px
.golden-image-ex1 {
  .make-golden-image(width; 200px; -68px; -11px);
}
```
```
// golden image based on a height of 200px and the image centered with a 
// left alignment of -68px and top alignment of -11px
.golden-image-ex2 {
  .make-golden-image(height; 200px; -68px; -11px);
}
```
```
// golden image based on a width of 200px and the image centered with a 
// left alignment of -68px and top alignment of -11px
.golden-image-ex3 {
  .make-golden-image(200px; -68px; -11px);
}
```

#### Golden Colors
Use the `.golden-lighten-large(@color)`, `.golden-lighten-small(@color)`, `.golden-darken-large(@color)`, `.golden-darken-small(@color)`, `.golden-fadeout-large(@color)`, `.golden-fadeout-small(@color)`, `.golden-fadin-large(@color)` and `.golden-fadein-small(@color)` mixins where `@color` is the color you want to change. The resulting color will be related by the golden ratio.
```
// a lighter shade of purple that has golden proportions to the
// original shade of purple 
@color: .golden-lighten-large(purple);
```
```
// two new shades of purple with golden proportions
@color1: .golden-lighten-small(purple);
@color2: .golden-darken-large(purple);
```

______

# Author
[Joe Mercer](https://github.com/joemercer)

# Copyright and license

Copyright 2014 Joe Mercer

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
