# _smth.scss

_Smoother_ is a Sassy CSS (SCSS) library designed for a smoother front-end
development experience. Smoother is filled with simple-to-use functions &amp;
mixins that aid in UI creation by serving up workflow enhancing utilities
along with production ready element styles and animations.

In addition to the many utility functions that extend and improve on the
functionality of the built-in Sass modules, and the mixins that allow for
intuitive and fast style development without repetition, this library focuses
heavily on aiding in the creation of CSS animations, transition, and clip-path
shapes.

_Smoother_ allows you to create a wide range of smooth and customizable visual
effects, without having to deal with messy clip-path coordinates, complicated
animation keyframe creation, or other verbose and complex code blocks.

## Table of Contents

1. [Version](#version)
2. [Content](#content)
3. [Deployment](#deployment)
4. [Documentation](#documentation)
5. [Parameter Aliases](#parameter-aliases)
6. [Recently Improved](#recently-improved)
7. [Betterize](#betterize)
8. [More Info](#more-info)
9. [Authors](#authors)
10. [Thanks](#thanks)

## Version

_Smoother_ is **currently in active development**. Almost every day there are
updates to the functionality or documentation of this library. If you download
_Smoother_ for use in a project, I recommend updating it frequently to get the
best functionality possible from it.

This is **smthr** version 0.6.0 - _Last update:_ 03/16/24

## Content

**_Smoother_ currently contains:**

* **150+** Mixins, _including..._
  * More than 35 easily configurable animation types, allowing for more than 100 unique animations.
  * More than 20 element shapes created with a combination of `clip-path`, pseudo-elements, and `border-radius`
  * More than 80 utility mixins for things like creating responsive ratios,
    box-shadow effects that adhere to Material Design, clamping text to a given number of lines, creating corner ribbons, centering elements, browser-targeted styling, making "hamburger" menu buttons and much more!
* **80+** Functions, _including functions that...
  * Extend Sass' existing module's method functionality (ex: `update-list` function)
  * Convert and manipulate colors
  * Enhanced data type checking
  * Data type conversion
  * Calculate unit conversions (such as px to rem)
  * Fix floats to a given number of decimal places
  * Return custum cubic-bezier curves for timing functions based on Penner equations
  * Return custom calc() equations based on trigonometry and linear algebra
  * Calculate the "least square fit" or trend-line of a mapped set of points (useful for setting responsive font sizes)
  * Functions that aid in the creation of mixins and placeholders.
  * Much more!
* A modern, opinionated CSS normalization file written in Sass called _betterize.scss
* A print style file written in Sass called _smooth-print.scss
* A collection of helpful and configurable `!default` variables.

Because `_smth.scss` is a Sass library comprised entirely of functions, mixins
and variables, importing it into your project won't add any overhead or increased
filesize to your project's stylesheet except for the parts that you actually use
by calling a function, variable, or by using a mixin with `@includes`.

## Deployment

To download _Smoother_ for your project using NPM, use the following from
the command line in you'r project's root directory.

```bash
npm install smoother
```

You can also download the repo manually from here and copy/paste the
contents of the `./src` folder (the folders `/smthr` and `/betterize`), into
your own project. If you are taking that route, download a zipped copy of the
code by going to the top of this README page and looking for the green colored
"<> Code" button. Click that and choose "Download ZIP". Once it is downloaded,
unzipping the project folder.

Whether you downloaded from NPM or grabbed the entire repo manually, find the
package folder (If you downloaded from NPM that would be `/node_modules/smthr`)
and go into the `src` folder. Copy the `smthr` and `betterize`
_(betterize is optional)_ folders into your own project's styling directory,
in the folder where you keep the rest of your `.scss` files. This is probably in
a `/sass` or `/scss` folder, or within one of the subdirectories of that folder.

If you are breaking your Sass code down into partials with
[the 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern) or
something similar for organizing your `.scss` files, you would likely put the
`smthr` folder inside of the `vendors` subdirectory.

From there you currently have two choices with Sass for how to load the library
into your project.

If you are still using the old, and
[soon to be deprecated](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline),
`@import` directives in your project's main `.scss` file, then
you can simply `@import` the library at the top of the other partials you
`@import`.

```scss
// FILE: sass/main.scss

@import 'vendors/smthr/smth';
@import 'vendors/betterize/betterize';

@import 'base/typography';

@import 'layout/grid';
@import 'layout/navigation';
@import 'layout/header';
@import 'layout/footer';

@import 'components/buttons';
// ... The rest of your @import directives for all your partials...
```

Inside of your partials, you would be free to call any of the functions, mixins,
or variables that are available in the smthr library, because `@import` loads
everything globally.

The downsides of this method are twofold:

* None of these members will be namespaced and could increase
the potential for naming collisions between the smthr library, your own
project's members, and any other third-party libraries or frameworks you use.
* This method will [soon be deprecated](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline) by Sass, which lists many [reasons for discouraging and deprecating the feature](https://sass-lang.com/documentation/at-rules/import/) in their documentation.

The better choice would be to follow the specification for the newer versions of
Sass (At time of writing, DartSass version 1.71.1). Doing it this way will ensure
your project will continue to compile if you update your Sass version past the
point that `@import` is deprecated (most likely sometime this year in 2024).

To follow the new specification what you need to do is to put `_index.scss`
files inside each of your sass folder's main subdirectories, and these files
should have `@forward` directives for every other partial in the folder. So you
may have a `layout` folder containing your layout partials, create a file in
that folder called `_index.scss` and that file should look like this:

```scss
// FILE: sass/layout/_index.scss

@forward 'grid';
@forward 'navigation';
@forward 'header';
@forward 'footer';
// all other partials in the sass/layout/ folder should have an @forward here
```

Then in your `main.scss` file where formerly you woud use `@import` to load all
your partials, now you would instead write something like this:

```scss
// If you want to use betterize, load it first
@use 'vendors/betterize/betterize';

// Then load all your project's partials by loading in the folders
// Sass will automatically look for the _index.scss file in each folder
// and then forward all the files that the _index.scss @forward'd
@use 'utilities';
@use 'base';
@use 'layout';
@use 'components';
@use 'pages';
@use 'themes';

// If you want to use the print styles, load them at the end
@use 'vendors/betterize/smooth-print';
```

Then, inside each of your partial files, if you want to use a variable, function,
or mixin from the _Smoother_ library, you would need to write an `@use`
directive for it at the top of that partial file.

You can do this while namespacing the library to `smth` and then you can call the
functions, mixins, and variables in the library using that as a prefix, like
this:

```scss
// FILE: sass/pages/_home.scss

@use '../vendors/smthr/smth' as smth;

.element {
  @include smth.bounciness('down', 0.6s);

  font-family: smth.font-stack('primary', smth.$font-stacks);
  color: smth.invert-color($color-brand)
}
```

Alternately, you can choose to not explicitly declare the namespace, and since
Sass will then namespace it to the last part of the file path, which is `smth`.

```scss
// FILE: sass/pages/_home.scss

@use '../vendors/smthr/smth';

.element {
  @include smth.bounciness('down', 0.6s);
}
```

If you prefer to namespace the module to something shorter, you can choose almost
anything you want that is not used by another module. While there is no explicit
warning against it in the documentation, I recommend not choosing a `$`, `#`,
`@`, `e`, `_` or `-` character as your namespace, as this could potentially cause
conflicts due to `$` being used for variables, `#` being used for interpolation,
`@` being used for at-rules, `e` being reserved for the mathematical constant
_[e](https://en.wikipedia.org/wiki/E_(mathematical_constant))_,
and `_` or `-` being used at the start of member names to
[make those members private](https://sass-lang.com/documentation/at-rules/use/#private-members).
At the very least, it could screw up your syntax highlighting,
so choose something unique.

```scss
@use '../vendors/smthr/smth' as ~;

.element {
  color: ~.invert-color($color-brand);
}
```

If you aren't worried about potential namespace collisions between _Smoother_,
other third-party libraries, and your own code, then you can import it without
a namespace by using `as *` after the file URL, and not have to worry about
using a namespace prefix when calling the functions, mixins, or variables in the
library. That might look like this:

```scss
// FILE: components/_buttons.scss

@use '../vendors/smthr/smth' as *;

.button {
  color: invert-color($color-brand)
}
```

You can see a small-scale example of this newer structure for loading Sass
modules by looking through the `test` folder in
[this repository](https://github.com/stephenmirving/smthr/tree/master/test).

For more information about migrating away from the soon-to-be-deprecated
`@import` and using the newer `@forward` and `@use` directives, see the offical
[Sass documentation](https://sass-lang.com/documentation/) for:

* [@forward](https://sass-lang.com/documentation/at-rules/forward/)
* [@use](https://sass-lang.com/documentation/at-rules/use/)
* [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator/)

## Documentation

In the future, there will be a more comprehensive wiki with example
code snippets that show their CSS output and picture or video examples of the
code's effect on the page. For now though, you can get started with the
[documentation page](https://stephenmirving.github.io/smthr/), generated for
the library using the [SassDoc](http://sassdoc.com/) annotations in the code.

## Parameter Aliases

Most of the documentation and SassDoc annotations will describe the valid
parameters that you can pass to the various functions and mixins, and the forms
those parameters can take. In an attempt to make the library more easy to pick
up and use, many alias values were created for most of the commonly used keyword
strings that you could pass as parameters to the library members. So if an
animation mixin's `$axis` parameter accepts a value of `'horizontal'`, to
indicate that it should animate over the horizontal axis, you should expect that
the mixin would also accept alias values of `'horizontally'`, `'horiz'`, `horz`,
`'left-to-right'` and more as correct and useable alias values for the
`horizontal` value of the `$axis` parameter.

To get an idea of the full list of aliases for these keyword values, see the
`$map-alias-resolutions` variable inside this
[documentation](https://stephenmirving.github.io/smthr/#utilities-variable-map-alias-resolutions)
link, or by looking for it in the `src/smthr/variables/_maps.scss` file.

## Recently Improved

* Added library to NPM!

* 6 new mixins added: `caret()`, `fluid-media()`, `nav-divider()`, `visible()`
`resizable()`, and `reset-text()`

* 8 new animations added: `hinge()`, `flick()`, `ping()`, `poof()`, `power()`,
`space()`, `swing()`, and `twister()`!

* Updated _Betterize_ to v.1.2.2

* New function that provides a dark or light text contrast color: `color-text-contrast()`

* New function added called `resolve-equation()` that returns custom CSS `calc()`
equations based on trigonometry and linear algebra.

* Improved `is-position()` function with the ability to allow alias values.

* Greatly improved the BEM mixins `elem()` and `mod()` such that they can now be
passed a limitless Arglist of element or modifier names and be used on selector
groups that have a limitless number of parent selectors.

* Fixed an issue with animation suffixes and `animation-direction` not always
working correctly since the 0.3.3 update.

* New functions, `is-falsey()`, `equals-true()`, `equals-false()`

* Updated all mixins and functions that had a likelihood of being passed an
argument with a 2 word keyword such as `top left`  or `to right` so that they
would accept a greater number of alias values when not wrapped in strings.

* Allowed for passing CSS global values on a greater number of mixin arguments,
such as for the animation-direction property on animations.

* Refactored the `color-shifter()` mixin to allow for the `animation-direction`
and the `animation-iteration-count` properties to be passed as arguments.

* Improved the annotations and error reporting for all the mixins and functions
so that parameters with many possible keyword values have those keywords listed
in the documentation.

* Got the SassDoc annotation documentation online

## Betterize

If you want to use the modern normalization replacement file `_betterize.scss`,
or the print style file `_smooth-print.scss`, simply follow the same instructions
above by copying the `betterize` folder into the `vendors` folder in your
project, or in any folder that works for the way you have organized your project.
Just make sure that the `betterize` folder exists in the same directory in your
project as the `smthr` folder. Code snippets showing how to import it are
above, included within the same snippets showing how to load _Smoother_.

This version of _Betterize_ was refactored to be configured for use along with
the _Smoother_ library. If you choose to use _betterize.scss, you can most
likely remove any other CSS normalization or reset files such as normalize.css
or reset.css. You may also be able to avoid many styles you would have put
inside a `_base.scss` partial.

You can check out the
[Betterize repo](https://github.com/stephenmirving/betterize) for more
information, or to download versions of Betterize written in `.css`, `.sass`,
`.less`, and `.scss` formats, all of which are free from any _Smoother_
dependencies when downloaded from its own repository.

## More Info

For more information about how to structure your project with 3rd party
libraries, please refer to the official
[Sass Documentation](https://sass-lang.com/documentation/).

For more information about how to update your project's Sass files to replace
the soon-to-be-deprecated `@import` feature with the newer `@use` and `@forward`
features, refer to the
[documentation for the sass-migrator tool](https://sass-lang.com/documentation/cli/migrator/).

## Authors

Created by Stephen M Irving

This library contains work inspired by others, as well as some forked code.
This includes code by:

* [Lucas Bonomi](http://lucasbonomi.com/)
* [Eduardo Boucas](https://eduardoboucas.com/)
* [Chris Coyier](https://chriscoyier.net/)
* [Harry Roberts](https://csswizardry.com/)

## Thanks

Thank you to the contributors and maintainers of [Sass](https://sass-lang.com/).

Thank you to the creators and writers at [css-tricks.com](https://css-tricks.com/),
[Smashing Magazine](https://www.smashingmagazine.com/) and the
[Mozilla Developer's Network](https://developer.mozilla.org/), from whom I have
learned so much.

Thank you to my father, Michael Graham Irving.
