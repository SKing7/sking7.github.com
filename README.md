# TextMate

This repository contains the source code for TextMate 2, a text editor for OS X 10.7+.

# Building

To bootstrap the build you need to run `./configure` (in the root of the source tree). You can set a few (environment) variables read by this script that change the generated build file:

* `builddir` — location of built files. Defaults to `~/build/TextMate`.
* `identity` — for Apple’s `codesign`. Defaults to ad-hoc signing, which does not use an identity at all.

In the simplest case you would run:

git clone https://github.com/textmate/textmate.git
cd textmate
git submodule update --init
./configure && ninja

Please note that if you downloaded the source code (rather than cloned via git) you likely miss the submodules and the build will therefor fail.

## Prerequisites

To build the source the following must first be installed on your system:

* [ninja][]         — build system similar to `make`
* [ragel][]         — state machine compiler
* [boost][]         — portable C++ source libraries
* [multimarkdown][] — marked-up plain text compiler
* [mercurial][]     — distributed SCM system

