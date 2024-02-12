# smthr

_smthr_ is a Sassy CSS (SCSS) library designed for a smoother Sass experience.
Smoother is filled with simple-to-use functions &amp; mixins
that aid your front-end development experience by serving up workflow
enhancing utilities along with production ready element styles and animations.

Along with the many utility-based functions &amp; mixins, this
library focuses heavily on aiding in the creation of CSS animations
and clip-path shapes - allowing you to create a wide range of effects without
having to mess with clip-path coordinates or complicated animation keyframe
creation.

## smthr is in active development

**This is *smthr* version 0.1.9 - Last update: 02/11/24*

**_smthr_ currently contains:**

* 130+ mixins
* 65+ functions
* A modern, opinionated normalize file written in Sass called _betterize.scss
* A modern, opinionated print style file written in Sass called _print.scss
* A small collection of @extend placeholders and !default variables

## Deployment

Copy the smthr folder into your project's directory with the rest of the scss
files, probably within the 'sass' or 'scss' folder, or within one of the
subdirectories of that folder (most commonly the 'vendor' subdirectory). From
there, just use a @forward directive for the '_smth.scss' file that is within
the 'smth' folder at the top of your 'main.scss' file (or 'style.scss', or
whatever you have named your main stylesheet) where the rest of your imports
are.

**Like this:**

> @forward 'smthr/smth' as smth;

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the @use would look like this:

> @forward 'vendor/smthr/smth' as smth;

Doing this namespaces the library to smth and you can call the functions, mixins, and variables in the library using that as a prefix, like this:

> @include smth.bounciness();
> color: smth.invert-color($color-brand)
> font-family: smth.font-stack('primary', smth.$font-stacks);


If you want to use the normalization file _betterize.scss or the print style
file _print.scss, simply keep them in the same directory as the _smth.scss file
and import them into your project's stylesheet using the @forward directive.
You could also use the @import directive but that is in the process of being
deprecated and will be removed in future versions of Sass.

**Like this:**

> @forward 'vendor/smthr/betterize;
> @forward 'vendor/smthr/print;

***

## Testing and Documentation

Because this project is currently in development, there is not a comprehensive
wiki, and the testing/example page has not yet been completed either. However,
there are detailed comments in the individual files that should give you an
idea of how to use the library.

## Authors

Created by Stephen M Irving

This library also contains work inspired by others, as well as some forked code.
This includes work by:

* [Hugo Giraudel](https://hugogiraudel.com/)
* [Harry Roberts](https://csswizardry.com/)
* [Eduardo Boucas](https://eduardoboucas.com/)
* [Chris Coyier](https://chriscoyier.net/)
* [Lucas Bonomi](http://lucasbonomi.com/)

## Thanks

Thank you to my father, Michael Graham Irving.

Thank you to the creators and writers at [css-tricks.com](https://css-tricks.com/),
[Smashing Magazine](https://www.smashingmagazine.com/) and the
[Mozilla Developer's Network](https://developer.mozilla.org/), from whom I have
learned so much from.
