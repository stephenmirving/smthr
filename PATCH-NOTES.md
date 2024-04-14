# Full Smoother Patch Notes Record

## Table of Contents

1. [Coming Soon](#coming-soon)
2. [Patch Notes History](#patch-notes-history)
   1. [Version 0.17.0 Patch Notes](#version-0170-patch-notes)
   2. [Version 0.16.0 Patch Notes](#version-0160-patch-notes)
   3. [Version 0.15.0 Patch Notes](#version-0150-patch-notes)
   4. [Version 0.14.0 - 0.14.1 Patch Notes](#version-0140---0141-patch-notes)
   5. [Version 0.13.0 - 0.13.1 Patch Notes](#version-0130---0131-patch-notes)
   6. [Version 0.12.0 - 0.12.2 Patch Notes](#version-0120---0122-patch-notes)
   7. [Version 0.11.0 Patch Notes](#version-0110-patch-notes)
   8. [Version 0.10.0 - 0.10.1 Patch Notes](#version-0100---0101-patch-notes)
   9. [Version 0.9.2 - 0.9.6 Patch Notes](#version-092---096-patch-notes)
   10. [Version 0.9.1 Patch Notes](#version-091-patch-notes)
   11. [Version 0.9.0 Patch Notes](#version-090-patch-notes)
   12. [Version 0.8.2 Patch Notes](#version-082-patch-notes)
   13. [Version 0.8.1 Patch Notes](#version-081-patch-notes)
   14. [Version 0.8.0 Patch Notes](#version-080-patch-notes)
   15. [Improvements in Older Versions](#improvements-in-older-versions)

## Coming Soon

Version 1.0.0 is _coming soon_ with **more** animations, **more** shapes, and
**more** utilities. There will be an easier method for installing and updating
new versions without having to copy folders every time, a Getting Started guide,
and a website with a demo for every mixin and function to help you start using
_Smoother_.

## Patch Notes History

### Version 0.17.0 Patch Notes

- Added the `list-insert-nth()` function that inserts an element in a List.
- Added the `list-flatten()` function which flattens multi-dimensional Lists
  into flat, one-dimensional Lists.
- Added the `list-merge()` function which flattens multi-dimensional Lists
  into flat, one-dimensional Lists.

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
- Added `list-chunk()` function that chunks a list into multiple lists of a given
  length.
- Added `hoctive()` mixin that applies the provided content to the `:hover`,
  `:focus`, and `:active` pseudo-classes in one selector group.
- Added `hocus-visible()` mixin that applies the provided content to the `:hover`,
  and `:focus-visible` pseudo-classes in one selector group.
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

### Version 0.9.2 - 0.9.6 Patch Notes

- Updated _Betterize_ to version 2.0.4.
- Updated `hide-visually()` mixin's `clip` and `clip-path` properties slightly.
- Fixed documentation for some of the animation mixins.

### Version 0.9.1 Patch Notes

- Fixed a change that was missing from the previous patch that updated
  `_betterize.scss` to version 1.3.0.

### Version 0.9.0 Patch Notes

- Updated `_betterize.scss` and `_smooth-print.scss` to version 1.3.0.
- Improved the `ratio-to-percentage()` function allowing it to return a "common"
  ratio even when passing a list, instead of just when passing a single Number.
- Improved the `responsive-ratio()` mixin with some more properties, making it
  work with a broader number of potential inputs (such as $x and $y values with
  units and passing a child class name with a leading '.' or not passing one
  at all). Also removed it's own ratio calculations in favor of using the
  calculations done in `ratio-to-percentage`. Added a new parameter allowing
  the user to pass values and then have the mixin return the closest "common"
  ratio to the values provided, if there is one close enough within the threshold.
- Added `str-remove()` function which just calls the `str-replace()` function
  without passing a replacement.
- Added `color-contrast()` function which finds a contrasting and complementary
  color for a given color and returns it in a chosen syntax.
- Fixed a bug in the `color-invert()` function where the string module was not
  being loaded, preventing the function from working correctly.
- Extended the `clearfix()` mixin to allow for supporting older versions of IE
  if a new parameter is passed as `true`.
- Extended the `flex-center()` mixin to provide full browser backwards
  compatibility with all the older flexbox syntax if a new parameter is passed
  as `true`.

### Version 0.8.2 Patch Notes

- Fixed a bug with the `only-phones()` mixin that was causing it not to work.
- Added new alias for the `update-list()` function called `list-replace()` to match
  the syntax of the `str-replace()` function.
- Added new aliases for the `str-replace()` function called `update-str()` and
  `update-string()` to match the syntax for the `update-list()` function.
- Added new aliases for the `is-number()` and `is-string()` functions: `is-num()`
  and `is-str()`.

### Version 0.8.1 Patch Notes

- Fixed a bug in the new `fibonacci()` function that was preventing the use
  of the function to return a range of numbers in the sequence rather than
  just a single number.
- Fixed a bug with `inner-side-shadow()` that prevented that mixin from
  working at all.
- Added ability to pass calc() function equations to the `text-shadow()` mixin.
- Improved error checking, error messages, and SassDoc annotations on some mixins.
- Added sections to this README.

### Version 0.8.0 Patch Notes

- Added `transition-color()` mixin. This is a mixin that will set up everything
  you need for a high performance background, color, and border-color transition.
  Since background and border-color are both considered low performance
  animations, this mixin emulates the effect using the `::after` pseudo-element
  and an `opacity` transition. Perfect for smooth button hover effects.
- Changed how the `ghost-button()` mixin handled background-color and
  border-color transitions for the hover effect. The `ghost-button()` mixin now
  uses `transition-color()` for this effect.
- Added more detail to SassDoc annotations.

### Improvements in Older Versions

- Improved functionality of `shape-shadow()` function and fixed a bug with some
  edge case parameters.
- Added `is-valid-hex()` function that tests input and determines if it is a
  valid hex color or string.
- Added `fibonacci()` function that returns an nth number in the sequence or a
  range in the sequence represented as a comma-separated list.
- Added library to NPM! You can now add _Smoother_ to your project using `npm i -D smoother`
- 6 new mixins added: `caret()`, `fluid-media()`, `nav-divider()`, `visible()`
  `resizable()`, and `reset-text()`
- 8 new animations added: `hinge()`, `flick()`, `ping()`, `poof()`, `power()`,
  `space()`, `swing()`, and `twister()`!
- New function that provides a dark or light text contrast color: `color-text-contrast()`
- New function added called `time-equation()` that returns custom CSS `calc()`
  equations based on trigonometric functions for use in animations or transitions.
- Improved `is-position()` function with the ability to allow alias values.
- Greatly improved the BEM mixins `elem()` and `mod()` such that they can now be
  passed a limitless Arglist of element or modifier names and be used on selector
  groups that have a limitless number of parent selectors.
- Fixed an issue with animation suffixes and `animation-direction` not always
  working correctly since the 0.3.3 update.
- New functions, `is-falsey()`, `equals-true()`, `equals-false()`
- Updated all mixins and functions that had a likelihood of being passed an
  argument with a 2 word keyword such as `top left` or `to right` so that they
  would accept a greater number of alias values when not wrapped in strings.
- Allowed for passing CSS global values on a greater number of mixin arguments,
  such as for the animation-direction property on animations.
- Refactored the `color-shifter()` mixin to allow values for the
  `animation-direction` and the `animation-iteration-count` properties to be
  passed as arguments.
