The testing area is not a demo, it is just a staging area to quickly test new
features and to demonstrate where you would put Smoother in the 7-1 Sass folder
architecture. To use the testing area, copy the smthr and betterize folders from
the src folder and place them here. From the bash command line, when in the
project root folder, you can run the following command to do this:

cp -r src/{betterize,smthr} test/sass/vendors/

Currently, all the testing is being done from:
  test/sass/pages/_home.scss
  test/sass/main.scss
