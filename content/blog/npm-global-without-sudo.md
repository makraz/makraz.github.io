---
title: Install packages globally without sudo on Linux / MacOS
slug: npm-global-without-sudo
path: https://www.makraz.com/blog/npm-global-without-sudo
description: Install packages globally without sudo on Linux / MacOS

img: /logo_of_npm.png
alt: my first blog post

tags: ['tips', 'npm', 'linux', 'macOS']

author:
  name: Hamza Makraz
  bio: Software Engineer @ Coddict
  image: /Author-Hamza-Makraz.png

seo:
  title: Install packages globally without sudo on Linux / MacOS
  description: Install packages globally without sudo on Linux / MacOS

createdAt: '2021-04-11T10:58:51.640Z'
updatedAt: '2021-04-26T10:59:27.863Z'
---

By default `npm` installs packages locally in the folder nodes_modules within your projects.
But sometimes with need to install packages globally for command-line as example.
For Linux / MacOS users npm will ask you to run it with elevated privileges,
which mean use the command `sudo` to be able to install globally (`sudo npm install -g <package>`)
and this may create permission(s) issue(s) for many users.
However there is a way to install packages globally for a given user without `sudo`.

For that we will follow these steps:

## 1. Create a directory for global packages

```sh
mkdir "~/.npm_packages"
```

## 2. Tell `npm` where to store globally installed packages

```sh
npm config set prefix "~/.npm_packages"
```

## 3. Ensure `npm` will find installed binaries and man pages

Add the following to your `.bashrc` / `.zshrc`:

```sh
NPM_PACKAGES="~/.npm_packages"

export PATH="$PATH:$NPM_PACKAGES/bin"

# Preserve MANPATH if you already defined it somewhere in your config.
# Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
```

NOTE: If you are running macOS, the `.bashrc` file may not yet exist, and the terminal will be obtaining its environment parameters from another file, such as `.profile` or `.bash_profile`. These files also reside in the user's home folder. In this case, simply adding the following line to them will instruct Terminal to also load the `.bashrc` file:

```sh
source ~/.bashrc
```

See also: `npm`'s documentation on
["Fixing `npm` permissions"](https://docs.npmjs.com/getting-started/fixing-npm-permissions).
