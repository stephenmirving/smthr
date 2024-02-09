# smthr

_smthr_ is a Sassy CSS (SCSS) library designed for a smoother Sass experience.
Smoother is filled with simple-to-use functions &amp; mixins
that aid your front-end development experience by serving up workflow
enhancing utilities along with production ready element styles and animations.

Along with the many utility-based functions &amp; mixins, this
library focuses heavily on aiding in the creation of CSS animations
and clip-path shapes - allowing you to create a wide range of effects without
having to mess with clip-path coordinates or animation keyframe creation.

This project is under active development to modernize the Sass syntax to comport
with Sass ver 1.6+.

## smthr is in active development

**This is *smthr* version 0.1.5 - Last update: 02/09/24*

**_smthr_ currently contains:**

* 100+ mixins
* 60+ functions
* A modern, opinionated normalize file written in Sass called betterize
* A modern, opinionated print style file written in Sass
* A small collection of @extend placeholders and !default variables
* The choice between .scss and classic .sass syntax (.sass not yet supported)

## Deployment

To use this library, simply download the repo and choose whether you are
going to download the entire repo and get each individual feature of smthr in
its own file (which can be helpful for organizational purposes), or to download
a single 'smthr.scss' file containing all the code from the library.

***

**If you download the repo with individual build files...**

Choose your syntax type, sass or scss, and then your version, prefixed or
unprefixed, from the src folder, then copy the smth folder that is inside your
chosen version's folder into your project's directory with the rest of the scss
files, probably within the 'sass' or 'scss' folder, or within one of the
subdirectories of that folder (most commonly the 'vendor' subdirectory). From
there, just use an @import directive for the '_smth.scss' file that is within
the 'smth' folder at the top of your 'main.scss' file (or 'style.scss', or
whatever you have named your main stylesheet) where the rest of your imports
are.

**Like this:**

> @use 'smth/smth';

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the @use would look like this:

> @use 'vendor/smth/smth' as smth;

***

## Testing and Documentation

Because this project is currently in development, there is not a comprehensive
wiki, and the testing/example page has not yet been completed either. However,
there are very detailed comments in the individual files that should give you an
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
