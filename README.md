# smthr

_smthr_ is a Sassy CSS (SCSS) library of simple-to-use functions &amp; mixins
that aid your front-end development experience by serving up workflow
enhancing utilities along with production ready element styles and animations.

Along with the many utility-based functions &amp; mixins, this
library focuses heavily on aiding in the creation of CSS animations
and clip-path shapes - allowing you to create a wide range of effects without
having to mess with clip-path coordinates or animation keyframe creation.

This project is under active development to modernize the Sass syntax to comport with the new version, ver 16+.

## smthr is in active development

**This is *smthr* version 0.0.7 - Last update: 1/31/24*

**_smthr_ currently contains:**

* 140+ mixins
* 51+ functions
* A modern, opinionated normalize file written in Sass called betterize
* A small collection of @extend placeholders and !default variables
* The choice between .scss and classic .sass syntax

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

> @import 'smth/smth';

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the import would look like this:

> @import 'vendor/smth/smth';

***

**If you download the single distributed file...**

Choose your syntax type, sass or scss, and then your version, prefixed or
unprefixed, from the 'dist' folder, then copy the '_smth.scss' file and put it
in your scss folder in your project's directory, most usually within a 'vendor'
folder. From there, just use an @import directive for the '_smth.scss' file at
the top of your 'main.scss' file (or 'style.scss', or whatever you have named
your main stylesheet) where the rest of your imports are.

**Like this:**

> @import 'smth';

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the import would look like this:

> @import 'vendor/smth';

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

Thank you to the creators and writers at [css-tricks.com](https://css-tricks.com/)
and the [Mozilla Developer's Network](https://developer.mozilla.org/), whom
I have learned so much from.
