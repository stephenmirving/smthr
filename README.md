# _smth.scss

_Smoother_ is a Sassy CSS (SCSS) library designed for a smoother Sass experience.
Smoother is filled with simple-to-use functions &amp; mixins
that aid your front-end development experience by serving up workflow
enhancing utilities along with production ready element styles and animations.

Along with the many utility functions that extend and improve on the
functionality of the built-in Sass modules, and mixins that allow for intuitive
and fast style development, this library focuses heavily on aiding in the
creation of CSS animations and clip-path shapes. Smoother allows you to create
a wide range of effects with a single @include reference, without having to deal
with messy clip-path coordinates or complicated animation keyframe creation.

## smthr is in active development

**This is *smthr* version 0.2.3 - Last update: 02/19/24*

**_smthr_ currently contains:**

* 130+ mixins
* 65+ functions
* A modern, opinionated normalize file written in Sass called _betterize.scss
* A print style file written in Sass called _print.scss
* A collection of helpful !default variables

Because _smth.scss is a library entirely of Sass functions, mixins and variables,
importing it into your project won't add any overhead or increased filesize to
your project's stylesheet except for the parts that you actually use by calling
a function or using a mixin with `@includes`.

## Deployment

Once it is finished it will be available more easily in NPM, but for now you
will need to download the repo manually from here.

Copy the smthr folder into your project's directory with the rest of the scss
files, probably within the 'sass' or 'scss' folder, or within one of the
subdirectories of that folder (most commonly the 'vendor' subdirectory). From
there, just use either the @use or @forward directive,
depending on your project structure, for the '_smth.scss' file that is within
the 'smth' folder at the top of your 'style.scss' file (or 'main.scss', or
whatever you have named your main stylesheet) where the rest of your imports
are.

**Like this:**

```scss
@use 'smthr/smth' as smth;
```

Of if you were to place the folder within your vendor sub-folder in your sass
directory, the @use would look like this:

```scss
@use 'vendor/smthr/smth' as smth;
```

Doing this namespaces the library to smth and you can call the functions,
mixins, and variables in the library using that as a prefix, like this:

```scss
.element {
  @include smth.bounciness();

  font-family: smth.font-stack('primary', smth.$font-stacks);
  color: smth.invert-color($color-brand)
}
```

If you prefer to namespace it to something shorter, you can choose anything you
want that is not used by another module, for example:

```scss
@use 'vendor/smthr/smth' as _;

.element {
  color: _.invert-color($color-brand)
}

```

If you aren't worried about potential namespace collisions between Smoother,
other third-party libraries, and your own code, then you can import it into the
global namespace by using `as *` and not have to worry about using a namespace
prefix when calling the functions, mixins, or variables in the library.
That looks like this:

```scss
@use 'vendor/smthr/smth' as *;

.element {
  color: invert-color($color-brand)
}

```

If you want to use the normalization file `_betterize.scss` or the print style
file `_print.scss`, simply keep them in the same directory as the `_smth.scss` file
and import them into your project's stylesheet using the `@forward` directive.
You could also use the `@import` directive but that is in the process of being
deprecated and will be removed in future versions of Sass
(see (here)[https://sass-lang.com/documentation/at-rules/import/]).

**Like this:**

```scss
@forward 'vendor/smthr/betterize';
@forward 'vendor/smthr/print;
```

If you choose to use _betterize.scss, you can remove any other CSS normalization
or reset files such as normalize.css or reset.css.

For more information about how to structure your project with 3rd party
libraries, please refer to the official
[Sass Documentation](https://sass-lang.com/documentation/)

## Testing and Documentation

Because this project is currently in development, there is not a comprehensive
wiki, and the testing/example page has not yet been completed either. However,
there are detailed [SassDoc](http://sassdoc.com/) comments in the individual
files that should give you an idea of how to use the library.

## Authors

Created by Stephen M Irving

This library also contains work inspired by others, as well as some forked code.
This includes work by:

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
