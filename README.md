# _smth.scss

_Smoother_ is a Sass library designed for a smoother front-end
development experience. Smoother is filled with easy-to-use functions and
mixins that aid in UI creation, serving up workflow enhancing utilities
and generating production ready animations and element styles.

In addition to the many utility functions that extend and improve on the
functionality of the built-in Sass modules, and the mixins that allow for
intuitive and fast style development without repetition, this library focuses
heavily on aiding in the creation of CSS animations.

_Smoother_ allows you to create a wide range of smooth and customizable visual
effects, without having to deal with messy clip-path coordinates, complicated
animation keyframe creation, or other verbose and complex code blocks.

## Table of Contents

1. [Version](#version)
2. [Content](#content)
3. [Sass Version Requirement](#sass-version-requirement)
4. [Deployment](#deployment)
5. [Documentation](#documentation)
6. [Parameter Aliases](#parameter-aliases)
7. [Recently Improved](#recently-improved)
   1. [Version 0.17.0 Patch Notes](#version-0170-patch-notes)
   2. [Version 0.16.0 Patch Notes](#version-0160-patch-notes)
   3. [Version 0.15.0 Patch Notes](#version-0150-patch-notes)
   4. [Version 0.14.0 - 0.14.1 Patch Notes](#version-0140---0141-patch-notes)
   5. [Version 0.13.0 - 0.13.1 Patch Notes](#version-0130---0131-patch-notes)
   6. [Version 0.12.0 - 0.12.2 Patch Notes](#version-0120---0122-patch-notes)
   7. [Version 0.11.0 Patch Notes](#version-0110-patch-notes)
   8. [Version 0.10.0 - 0.10.1 Patch Notes](#version-0100---0101-patch-notes)
   9. [Full Patch History](#full-patch-history)
8. [Betterize](#betterize)
9. [More Info](#more-info)
10. [Questions](#questions)
11. [Contributions](#contributions)
12. [License](#license)
13. [Authors](#authors)
14. [Thanks](#thanks)

## Version

_Smoother_ is **currently in active development**. Almost every day there are
updates to the functionality or documentation of this library. If you download
_Smoother_ for use in a project, I recommend updating it frequently to get
optimal functionality from it.

This is **smoother** version 0.17.0 - _Last updated:_ 04/14/24

## Content

Because `_smth.scss` is a Sass library comprised of functions, mixins and
variables, importing it into your project won't add any overhead or increased
file size to your project's stylesheet except for the parts that you actually use
by calling a function, variable, or by using a mixin with `@include`. The current
unpacked size of the package itself is 1.11MB.

**_Smoother_ currently contains:**

- **180+** Mixins, _including..._
  - Over 40 easily configurable animation types, allowing for more than
    250 unique animations
  - 115+ utility mixins for things like creating responsive ratios,
    box-shadow effects that adhere to Material Design, clamping text to a given
    number of lines, creating corner ribbons, centering elements,
    browser-targeted styling, media queries, making "hamburger" menu buttons and
    much more!
  - More than 20 element shapes created with a combination of `clip-path`,
    pseudo-elements, and `border-radius`
- **100+** Functions, _including functions that...
  - Extend Sass' existing module's method functionality (ex: `list-update()` function)
  - Manipulate colors and convert between syntax types
  - Enhanced data type checking
  - Data type conversion/casting
  - Calculate unit conversions (such as px to rem)
  - Fix floats to a given number of decimal places
  - Return custom cubic-bezier curves for timing functions based on Penner equations.
  - Return custom calc() equations based on trigonometric functions for use in
    animations and transitions
  - Calculate the "least square fit" or trend-line of a mapped set of points
    (very useful for setting responsive font sizes)
  - Functions that aid in the creation of mixins and placeholders
  - Much more!
- A modern, opinionated CSS normalization file written in Sass called _betterize.scss
- A print style file written in Sass called _smooth-print.scss
- A collection of helpful and configurable `!default` variables
- Useful [documentation](https://stephenmirving.github.io/smthr/) generated from
  the SassDoc annotations, written for every function, mixin, and variable.

## Sass Version Requirement

Not every mixin and function in _Smoother_ will compile unless you are using
DartSass version 1.57.0 or higher.

_Smoother_ uses many of the more recent Sass features that are not available in
the now deprecated Ruby and C/C++ versions of Sass (RubySass and LibSass).

It is strongly recommended that you use the most recent version of DartSass
available. At time of writing, that is version 1.72.0. _Smoother_ will work
with DartSass >= 1.57.0 (the version `string.split()` was added), but it is
preferable that you use a version >= 1.69.1, as features are coming soon
that will take advantage of the new ability to have first-class mixins.

There are some breaking changes coming in the new versions of Sass, so if you
need to get an older project ready with the new syntax, check out the
[Sass Migrator](https://sass-lang.com/documentation/cli/migrator/) tool.

## Deployment

To download _Smoother_ for your project using NPM, use the following from
the command line in your project's root directory.

```bash
npm i -D smoother
```

```bash
npm i smoother
```

Then you can copy the files from the `node_modules` folder to your project's
sass directory with the following CLI directive (changing the path
to your own project's desired directory):

```bash
cp -r node_modules/smoother/src/{betterize,smthr} www/sass/vendors/
```

The link to _Smoother on the NPM website here:
[https://www.npmjs.com/package/smoother](https://www.npmjs.com/package/smoother)

You can also download the repo manually [from Github]() and copy/paste the
contents of the `./src` folder (the folders `/smthr` and `/betterize`), into
your own project. If you are taking that route, download a zipped copy of the
code by going to the top of this README page and looking for the green colored
"<> Code" button. Click that and choose "Download ZIP". Once it is downloaded,
unzip the project folder.

Another way is to clone the repo using one of the below methods:

**HTTPS** method:

```bash
git clone https://github.com/stephenmirving/smthr.git
```

**GitHub CLI** method:

```bash
gh repo clone stephenmirving/smthr
```

Whether you downloaded from NPM, cloned the repo, or just grabbed it manually,
find the package folder (If you downloaded from NPM that would be
`/node_modules/smoother`) and go into the `src` folder. Copy the `smthr` and
`betterize` _(betterize is optional)_ folders into your own project's styling
directory, in the folder where you keep the rest of your `.scss` files. This is
probably in a `/sass` or `/scss` folder, or within one of the subdirectories of
that folder.

You can do this from the command line like this:

```bash
cp -r node_modules/smoother/src/{betterize,smthr} your/path/sass/vendors
```

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
// ** METHOD NOT RECOMMENDED **
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
or variables that are available in the _Smoother_ library, because `@import`
loads everything globally.

The downsides of this method are twofold:

- None of these members will be namespaced and could increase the potential for
  naming collisions between the _Smoother_ library, your own project's members,
  and any other third-party libraries or frameworks you use.
- This method will [soon be deprecated](https://github.com/sass/sass/blob/main/accepted/module-system.md#timeline)
  by Sass, which lists many
  [reasons for discouraging and deprecating the feature](https://sass-lang.com/documentation/at-rules/import/)
  in their documentation.

The better choice would be to follow the specification for the newer versions of
Sass (At time of writing, DartSass version 1.72.0). Doing it this way will ensure
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
// all other partials in the sass/layout/ folder should have a @forward directive here
```

Then in your `main.scss` file where formerly you woud use `@import` to load all
your partials, now you would instead write something like this:

```scss
// If you want to use betterize, load it first
@use 'vendors/betterize/betterize';

// Then load all your project's partials by loading in the folders.
// Sass will automatically look for the _index.scss file in each folder
// and then forward all the files that the _index.scss has an @forward for.
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

- [@forward](https://sass-lang.com/documentation/at-rules/forward/)
- [@use](https://sass-lang.com/documentation/at-rules/use/)
- [Sass Migrator Tool](https://sass-lang.com/documentation/cli/migrator/)

## Documentation

_Smoother_ documentation:
[https://stephenmirving.github.io/smthr/](https://stephenmirving.github.io/smthr/)

In the future, there will be a Getting Started section and a comprehensive
wiki with example code snippets that show their CSS output, with pictures and
video examples of the code's effect on the page. For now though, you can get
started with the [documentation page](https://stephenmirving.github.io/smthr/),
generated for the library using the [SassDoc](http://sassdoc.com/) annotations
in the code.

## Parameter Aliases

Most of the documentation and SassDoc annotations will describe the valid
parameters that you can pass to the various functions and mixins, and the forms
those parameters can take. In an attempt to make the library more easy to pick
up and use, many alias values were created for most of the commonly used keyword
strings that you could pass as parameters to the library members. So, if an
animation mixin's `$direction` parameter accepts a value of `top right`, to
indicate that it should animate in from the top right, you should expect that
the mixin would also accept alias values of `'top right'` (in a quoted string
or without quotes), `top-right`, `topright`, `right top`, `right-top`, or
just `tr` or `t-r`, along with several more potential valid values that will
resolve as `top right`.

To get an idea of the full list of aliases for these keyword values, see the
`$map-alias-resolutions` variable by checking the
[documentation](https://stephenmirving.github.io/smthr/#utilities-variable-map-alias-resolutions),
or by looking for it in the `src/smthr/variables/_maps.scss` file.

## Recently Improved

Version 1.0.0 is _coming soon_ with **more** animations, **more** shapes, and
**more** utilities. There will be an easier method for installing and updating
new versions without having to copy folders every time, a Getting Started guide,
and a website with a demo for every mixin and function to help you start using
_Smoother_.

### Version 0.17.0 Patch Notes

- Refactored the `responsive-ratio()` mixin in mulitple ways. It fixes an bug
  with passing a class name to the function. It also no longer takes the `$x`
  and `$y` components of the size ratio separately. Instead, the parameter
  `$ratio` will take a two value list. This means the mixin user to not have to
  type a comma, like `responsive-ratio(16, 9)` and instead would use
  `responsive-ratio(16 9)`. This will allow for using this mixin together with
  the ratio function `num-to-ratio()`. The function `ratio-to-percentage()` will
  also be used to expand the number of potential inputs for `$ratio` it is
  possible for `responsive-ratio()` to have. THIS IS A BREAKING CHANGE. If you
  are using `responsive-ratio()` you may get a warning when you compile your
  code that your parameters must change. Check the documentation for this mixin
  for more information.
- Added the `is-bool()` function which takes a value and determines if the value
  is strictly equal to either `true` or `false`.
- Added the `list-insert-nth()` function that inserts an element in a List.
- Added the `list-flatten()` function which flattens multi-dimensional Lists
  into flat, one-dimensional Lists.
- Added the `list-merge()` function which merges multiple Lists into a single
  List after removing all duplicate values.
- Started working on the the `parse-int()` function which will parse a string
- or number into an integer if possible, with an attempt to mimic the behavior
  of the JavaScript method parseInt() (NOT YET IMPLEMENTED).
- Aded the `expand-action-area()` mixin. Occasionaly you may find that an icon
  or button needs a slightly larger click/touch area. This mixin adds a
  pseudo-element that increases the interaction area by a given amount
  (10px by default) in every direction.
- Added `:focus-within` to the `on-event()` mixin.
- Added the `when-inside()` context-based selector mixin.
- Added `$is-logical` parameter to the `container()` mixin, which if `true` is
  passed, will cause the mixin to use logical properties like `max-inline-size`
  over physical properties like `max-width`.
- Renamed `$color-names-map` back to `$map-color-names` and moved it back to
  `src/smthr/variables/_maps.scss` from `variables/_colors.scss`
- Added the `transparent` color keyword to `$map-color-names` with the
  associated value of the 4-digit hex-notation color: `#0000`
- Added `$map-color-name-strings`, which is just `$map-color-names` but with the
  Map keys in type "string" instead of "color".
- Added `$map-duplicate-color-names` which has all the CSS color names not
  included in $map-color-names due to them having duplicate values, such as
  `grey` being a duplicate of `gray` or `cyan` being a duplicate of `aqua`.
- Added $list-color-names which is a sorted list of every color name, including
  ones with duplicated values. This is created from the keys of
  `$map-color-names` and `$map-duplicate-color-names`.
- Added `$list-named-hex-colors` which is a list containing all hex values which
  have a corresponding CSS color name keyword.
- Fixed `conv-color` so that when `transparent`, or an equivalent color such as
  `rgba(0, 0, 0, 0)` is passed to it with a `$syntax` value of `name`, it
  correctly returns `transparent`.
- Added the `stringify-map-keys()` function, which converts map keys into
  strings and returns the new map.
- Modified `list-to-string()` to correctly convert single value Lists and
  convert Maps by calling `map-to-string()` rather than returning an error
  message.
- Added the `char-at()` function that takes a string and an index and
  returns the character at the given index.
- Added the `to-bool()` function that casts a value to a Bool
  according to the falsey values found in the `is-falsey()` function.
- Added the `to-map()` function that casts a value to a Map.
- Renamed the `variables/_maps.scss` file to `variables/_lists.scss` to reflect
  that it now also contains most lists. Since maps in Sass are also all de-facto
  lists, but lists are not maps, this name is a better fit. THIS IS A BREAKING
  CHANGE. Any `@use 'variables/maps'` directives must be changed to
  `@use variables/lists`

### Version 0.16.0 Patch Notes

- Added the `some()` function that tests whether some items (at least one) from a
  List pass the test implemented by a given function.
- Added the `list-sort()` function that sorts a List based on alphabetical order or
  a custom provided order.
- Added the `str-compare()` function that helps `list-sort()` compare two string
  based on the order provided.

### Version 0.15.0 Patch Notes

- Added `first-of()` function that returns the first item in a List or Map.
- Added `last-of()` function that returns the last item in a List or Map.
- Added `is-empty()` function that returns true if a List or Map has a
  length of 0.
- Added `last-index()` function that returns the last index of `$value` in a
  List, as opposed to the built in method `list.index()` which returns the first
  index of `$value` in a List.
- Added the `list-loop()` function which will shift the elements in a List
  forwards on a loop by a given number of positions.
- Added the `list-prepend()` function will a value to the first index of a List,
  shifting all the other elements on the list down by 1 index.
- Added the `list-remove-nth()` function that will remove a value from a List
  at the given index.
- Added the `list-replace-nth()` function that will replace a value from a List
  at the given index.
- Added the `list-remove-duplicate()` function that will remove all duplicates
  from a List.
- Added the `list-reverse()` function that will reverse the order of a List.
- Added the `list-slice()` function that will slice a list between a start and
  end point.
- Added the `list-range()` function that creates a List of numbered values from
  1 to a provided value.
- Added the `list-to-map()` function that casts a List into a Map.
- Added the `every()` function that tests whether all items from a List
  pass the test implemented by a given function.
- Renamed the `src/smthr/functions/_purge-list.scss` partial to `_list-purge().scss`
  to match the naming convention of the new list functions. `purge-list()` will
  live on as an alias of `list-purge()`.
- Renamed the `src/smthr/functions/_update-list.scss` partial to `_list-update().scss`
  to match the naming convention of the new list functions. `update-list()` will
  live on as an alias of `list-update()`.
- Improved documentation.

### Version 0.14.0 - 0.14.1 Patch Notes

- Added `font-face()` utility mixin.
- Modified the `scrollbar()` mixin so that you can pass a $size of 0 and hide
  the scrollbar entirely.
- Added the `map-is-deep()` and `map-is-flat()` functions that return a Boolean
  indicating if a given map has any nested maps, and is either deep or
  flat/shallow.
- Added `map-get-key-chain()` function that returns the "chains" of nested keys.
- Renamed the `_in-list.scss` partial to `_list-contains.scss`. The `in-list()`
  mixin is still an alias value for `list-contains()` but any `@use` directives
  pointing to `_in-list.scss` will have to change to `_list-contains.scss`
- Added `list-chunk()` function that chunks a list into multiple lists of a
  given length.
- Added `hoctive()` mixin that applies the provided content to the `:hover`,
  `:focus`, and `:active` pseudo-classes in one selector group.
- Added `hocus-visible()` mixin that applies the provided content to the
  `:hover`, and `:focus-visible` pseudo-classes in one selector group.
- Added the `smart-underline()` mixin that applies an underline that gets bigger
  on hover and is removed on selection/highlighting. This is an effect similar
  to the default link effect in Safari.
- Improved the `to-list()` function by having it first detect if the $value
  is a Map and then calling the `map-to-list()` function for those values.
- Improved the `map-to-list()` function adding a $separator parameter so you
  can choose how the new list is separated just like the `to-list()` function.
- Added all the new functions to the `@use` directives in `functions-walk()`
  and `walk()` functions.

### Version 0.13.0 - 0.13.1 Patch Notes

- Made the `caret()` mixin more robust by adding size and color customization to
  the available parameters and enabling pointing the caret in diagonal
  directions. You can also now place the caret in a new positioning context and
  choose whether the caret will be in a `::before` or `::after` pseudo-element
  with the optional $placement parameter.
- Added new utility mixins: `debug()`, which gives visual indicators for
  debugging layouts and `bg-cover()`, which is a shortcut for setting a
  background image to cover.
- Added `gradient-stripes()` mixin (with alias of `stripes()`), which generates
  a stripe gradient with a direction and a list of colors.
- Added more than 15 new semantic relational mixins to the collection in
  `_family.scss`. These new mixins take advantage of the new selector list
  arguments feature for `nth-child` and `:nth-last-child`, as well as the
  relational pseudo-class selector `:has`.
- Added $intensity parameter for the `depth-level()` mixin that works as a
  modifier for the shadow effect's opacity.
- Updated _Betterize_ to version 2.07
- For broader browser support, changed all instances of `overflow-wrap` in
  mixins to the alias property `word-wrap`
- Improved some of the documentation

### Version 0.12.0 - 0.12.2 Patch Notes

- Renamed the `zoom-in()` animation mixin to `bg-zoom()`. It still has the same
  alias of `ken-burns()`, along with the new alias of `bg-zoom-in()` and
  `img-zoom()`.
- Created new animation mixin called `zoom()`.
- Renamed the `wobbliness()` animation mixin to just `wobble()`. `wobbliness()`
  has been left as an alias for `wobble()`
- Added new animation mixins: `speed()`, and `wiggle()`.
- Added `prefix()` utility mixin that takes a map of property:value declarations
  and adds a list of vendor prefixes to the properties. Though most people are
  now using Autoprefixer, this may still be useful to some.
- Fixed error in README.md
- Removed unnecessary dependencies

### Version 0.11.0 Patch Notes

- Greatly improved the robustness of the `gradient()` mixin.
  - The mixin now allows you to apply a gradient effect to text, not just
    backgrounds.
  - You can now pass `true` to the new `$is-repeating` parameter to make the
    mixin use the `repeating-linear-gradient()` and
    `repeating-radial-gradient()` CSS functions rather than the non-repeating
    `linear-gradient()` and `radial-gradient` functions.
  - Making a radial gradient with this mixin now allows you far more control for
    different types of radial gradients with different parameters. Previously
    the only type of radial-gradient the mixin could produce was the `ellipse at
    center` parameter. Now you can enter virtually any valid starting value for
    a `radial-gradient()` with the `$orientation` parameter.
  - You can now pass two value percentage position parameters for
    $start-position and $end-position, instead of just one value syntax
    available previously.
  - You can also now pass `true` to the new $supports-legacy parameter and have
    all the vendor prefixes and the old IE filter gradient syntax applied at
    same time as fallbacks for the modern gradient syntax.

### Version 0.10.0 - 0.10.1 Patch Notes

- Renamed the `poof()` animation mixin to `vanish()`
- Added new animation mixin that is now named `poof()`
- Added new animation mixin `poof-puff()` that is a combination of the `puff()`
  animation and the **new** `poof()` animation which creates a more exaggerated
  effect.
- Updated _Betterize_ to version 2.0.5
- Greatly reduced the size of the _Smoother_ NPM package by removing several
  large image assets from the `test` directory when publishing the package. They
  were causing the package to take up around 27MB instead of being slightly less
  than 1MB, which is what the package takes up now.

### Full Patch History

To view the view the full record of all the patch notes for _Smoother_, go to
[https://github.com/stephenmirving/smthr/blob/master/PATCH-NOTES.md](https://github.com/stephenmirving/smthr/blob/master/PATCH-NOTES.md)

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

You can also install the _Smoother_ dependency-free version of _Betterize_ with NPM:

```bash
npm i -D betterize
```

```bash
npm i smoother
```

Then you can copy the files from the `node_modules` folder to your project's
sass directory with:

```bash
cp -r node_modules/smoother/src/{betterize,smthr} www/sass/vendors/
```

## More Info

For more information about how to structure your project with 3rd party
libraries, please refer to the official
[Sass Documentation](https://sass-lang.com/documentation/).

For more information about how to update your project's Sass files to use
the module system and replace the soon-to-be-deprecated `@import` feature with
the newer `@use` and `@forward` features, refer to the
[documentation for the sass-migrator tool](https://sass-lang.com/documentation/cli/migrator/).

## Questions

If you have any questions about how to use _Smoother_ that cannot be answered
by the [Smoother documentation](https://stephenmirving.github.io/smthr/), or if
you have any issues, suggestions or comments, I would be happy to help anyone
who reaches out. You can find me on X/Twitter at [@metric_dev](https://twitter.com/metric_dev).

Feel free to ask me anything you like in a tweet, or shoot me a DM (though if
you are not verified on X/Twitter I may not see the DM).

## Contributions

If you would like to contribute to _Smoother_, whether it is to add something
new or fix a bug you have found, check out the
[Contributions](https://github.com/stephenmirving/smthr/blob/master/CONTRIBUTIONS.md)
document.

## License

_Smoother_ is distributed under an
[MIT License](https://github.com/stephenmirving/smthr/blob/master/LICENSE).

**TL;DR:** Anyone can use this code however they want but it would sure be nice
if they also included a copy of the above license.

## Authors

Created by Stephen M Irving

This library contains work inspired by others, as well as some forked code.
This includes code by:

- [Lucas Bonomi](http://lucasbonomi.com/)
- [Eduardo Boucas](https://eduardoboucas.com/)
- [Chris Coyier](https://chriscoyier.net/)
- [Harry Roberts](https://csswizardry.com/)

## Thanks

Thank you to the contributors and maintainers of [Sass](https://sass-lang.com/).

Thank you to the creators and writers at [css-tricks.com](https://css-tricks.com/),
[Smashing Magazine](https://www.smashingmagazine.com/) and the
[Mozilla Developer's Network](https://developer.mozilla.org/), who are often
my first source for keeping up with the changes in CSS and Sass.

Thank you to my father, Michael Graham Irving.
