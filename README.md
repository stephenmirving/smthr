# Stipple

_Stipple_ is a Sassy CSS (SCSS) library of simple-to-use functions &amp; mixins
that aid your front-end UI/UX development experience by serving up workflow
enhancing utilities along with production ready element styles and animations.

Along with the many utility-based functions &amp; mixins, this
library focuses heavily on aiding in the creation of CSS animations
and clip-path shapes - allowing you to create a wide range of effects without
having to mess with clip-path coordinates or animation keyframe creation.

## Stipple is in active development

**This is *Stipple* version 0.0.5 - Last update: 02/17/2020 03:30PM EST**

**_Stipple_ currently contains:**

* 140+ mixins
* 51+ functions
* A modern, opinionated normalize file written in Sass called betterize
* A small collection of @extend placeholders and !default variables
* The choice between .scss and classic .sass syntax

## Browser-Vendor Prefixes

There are two versions of _Stipple_ available, one for those who use automatic
vendor prefixing tools such as Autoprefixer, Prefixless, etc., and one version
for those those who prefer to add their own vendor prefixed properties (-webkit-,
-moz-, and so forth).

The prefixed version is in the 'dist/.../prefixed' folder (or in the
'src/.../prefixed' folder folder if you prefer individual build files) and
contains many utilities that aid in the writing of stylesheets with vendor
prefixes that the unprefixed version does not have.

The unprefixed version for those who prefer to add their vendor prefixes
automatically is in the 'dist/unprefixed' folder (or in the 'src/prefixed'
folder folder if you prefer individual build files) and only contains vendor
prefixes for properties that do not have an adequate unprefixed version (such
as -webkit-scrollbar), or for the purpose of targeting certain browser engines
specifically (such as -webkit-appearance).

## Deployment

To use this library, simply download the repo and first choose whether you are
going to use the standard, and now more common, '.scss syntax' this library was
originally written in, or if you want to use the old '.sass' syntax. Then you
must choose between the browser prefixed or unprefixed version. Once you have gotten
all that settled, you can choose whether you want to download the entire repo and
get each individual feature in its own file (which can be helpful for
organizational purposes), or to download a single 'stipple.scss' file containing
all the code from the library.

***

**If you download the repo with individual build files...**

Choose your syntax type, sass or scss, and then your version, prefixed or
unprefixed, from the src folder, then copy the stipple folder that is inside your
chosen version's folder into your project's directory with the rest of the scss
files, probably within the 'sass' or 'scss' folder, or within one of the
subdirectories of that folder (most commonly the 'vendor' subdirectory). From
there, just use an @import directive for the '_stipple.scss' file that is within
the 'stipple' folder at the top of your 'main.scss' file (or 'style.scss', or
whatever you have named your main stylesheet) where the rest of your imports
are.

**Like this:**

> @import 'stipple/stipple';

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the import would look like this:

> @import 'vendor/stipple/stipple';

***

**If you download the single distributed file...**

Choose your syntax type, sass or scss, and then your version, prefixed or
unprefixed, from the 'dist' folder, then copy the '_stipple.scss' file and put it
in your scss folder in your project's directory, most usually within a 'vendor'
folder. From there, just use an @import directive for the '_stipple.scss' file at
the top of your 'main.scss' file (or 'style.scss', or whatever you have named
your main stylesheet) where the rest of your imports are.

**Like this:**

> @import 'stipple';

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the import would look like this:

> @import 'vendor/stipple';

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
