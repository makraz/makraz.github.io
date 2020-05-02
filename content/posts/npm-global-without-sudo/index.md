---
draft: false
title: "The Static Site Generator Hugo"
slug: "the-static-site-generator-hugo"
description: "Introduction about the static website generator Hugo"
featured_image: "Logo_of_Hugo_the_static_website_generator.png"
date: 2020-04-11T18:54:08+01:00
categories: ["Development"]
tag: ["npm", "linux", "mac-os"]
---

# `npm`  -- Install packages globally without sudo on Linux / MacOS

By default `npm` installs packages locally in the folder nodes_modules within your projects.
But sometimes with need to install packages globally for command-line as example. 
For Linux / MacOS users npm will ask you to run it with elevated privileges,
which mean use the command `sudo` to be able to install globally (`sudo npm install -g <package>`) and this is may create permissions issue for many users.
However there is a way to install packages globally for a given user without `sudo`.

For that we will follow these steps:  

###### 1. Create a directory for global packages

```sh
mkdir "~/.npm/packages"
```

###### 2. Tell `npm` where to store globally installed packages

```sh
npm config set prefix "~/.npm/packages"
```

###### 3. Ensure `npm` will find installed binaries and man pages

Add the following to your `.bashrc` / `.zshrc`:

```sh
NPM_PACKAGES="~/.npm/packages"

export PATH="$PATH:$NPM_PACKAGES/bin"

# Preserve MANPATH if you already defined it somewhere in your config.
# Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
```

---

NOTE: If you are running macOS, the `.bashrc` file may not yet exist, and the terminal will be obtaining its environment parameters from another file, such as `.profile` or `.bash_profile`. These files also reside in the user's home folder. In this case, simply adding the following line to them will instruct Terminal to also load the `.bashrc` file:

```sh
source ~/.bashrc
```

---

See also: `npm`'s documentation on
["Fixing `npm` permissions"](https://docs.npmjs.com/getting-started/fixing-npm-permissions).
