---
title: Introduction to Defensive Programming
slug: Introduction-defensive-programming
description: Introduction to Defensive Programming
featured_image: defensive-programming.png
date: 2020-06-27T18:54:08.000+01:00
categories:
- PHP
- Development
- Programming
- Clean code
- Defensive Programming
tag:
- PHP
- programming
- development
- defensive programming
- Clean code
draft: true

---
After a duration from learning programming language of course this duration change from one to other but it's end by asking our self few questions like:

* What is the best way to write the code ?
* How I can make my code look better?

and more questions specially for people who try to start contribute on **Open Source**, or people working in project with seniors developers.

In my search I find lot of ways to do this so today I would like to share with you what I learned about **Defensive Programming**; for a good time I start change my coding style and make it more **Defensive** 🛡️, now it's  my effective way to write the code.

This is the **part 1** of the **Defensive Programming: Rules and Techniques** series.

_Level: **intermediate**_

***

## Prerequisites

* Learn an OOP Language
* having idea about design partterns

## Introduction

This topic is subjective because it's depend on Programming Language, the context and Framework, so we can say this post will be an introduction the approach in the general case.

## What, Why and How?

### What 🤔?

If we ask Wikipedia about [Defensive programming](Defensive programming) the first lines be:

> **Defensive programming** is an approach to improve software and source code, in terms of:
>
> * General quality – reducing the number of[ software bugs](https://en.wikipedia.org/wiki/Software_bug) and problems.
> * Making the[ source code](https://en.wikipedia.org/wiki/Source_code) comprehensible – the source code should be readable and understandable so it is approved in a[ code audit](https://en.wikipedia.org/wiki/Code_audit).
> * Making the software behave in a predictable manner despite unexpected inputs or user actions.
>
> Defensive programming is when programming purposefully predict possible points of failure.

### Why 🤔?

From this definition it's clear that is a way to make our code more better and not even that but helping our team to understand the code and specially to not break it 😅, and most time this happen if we are teaming with juniors, in this case the code review take more time and we could have lot of _back and forth._

the solution is to make our code readable, understandable, extendable and it can prevent bugs.