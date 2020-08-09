---
title: Introduction to Defensive Programming
slug: Introduction-to-defensive-programming
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

---
This is the 1st part of **Defensive Programming: Rules and Techniques** series.

_Level: **intermediate**_

During the learning curve of a programming language, we eventually ask ourselves a few questions such as:

• What is the best way to write code?

• How can I write bug-less code?

and more questions coming. There are many ways to classify programming approaches. One of these approaches is **Defensive Programming**, so, today, I would like to share with you what I have learned about it.

**_PS_**: We will be using PHP as our Programming Language for this series, so all examples here or at my repository are written using PHP version 7.x.

***

## Introduction

This topic is subjective because it depends on Programming Language / Framework, the context and more the way of how you are thinking, so we can say this post will be an introduction the approach in the general case.

## What 🤔?

The definition of **Defensive programming** is inconsistent across different sources, but I’ll stick to this one because the more simple and the more general: **Defensive programming** represents the use of ensuring code base correctness, bug-less and readable codebase.

Let's detailed more this definition and start with the first point which is ensuring a code base correctness, that's the safely securing one’s code from any possible unexpected problem, bug-less reducing the number of bugs and readable mean making the source code comprehensible for any developer will work on this codebase.

## Why 🧐?

Accordingly, it’s clear that not only does **Defensive Programming** improve our code, becoming soundly established, but it also helps people with whom we are teaming up understand the code, so it will not be broken down / avoiding any unexpected turndown.

This happens pretty much often when we are numbers in the team, in this case, the code review takes much time and we could have many rounds of **_back and forth_**.

The solution is to make our code more d**efensive**. In a nutshell, we have 3 points as an **objective** concerning **Defensive Programming**:

* Quality.
* Readable.
* Prevent bugs.

These 3 points are major criteria of the cost of a project, and they depend on the technical choice, which depends on the context of each company, team or freelancer.

Here’s a figure to illustrate the cost/development techniques:

![/uploads/comparingtechniques.jpg](https://app.forestry.io/sites/xc9nnnenbpj9ka/body-media//uploads/comparingtechniques.jpg)

\**Comparing the feedback cycle of various development techniques.**

It is quite obvious that over time the cost of a bug increases exponentially depending on the development technique. At this spot shines the role of applying **Defensive Programming** as an approach, in the ideal case the cost of changes follow the below figure:

![/uploads/costofchangebeck.gif](https://app.forestry.io/sites/xc9nnnenbpj9ka/body-media//uploads/costofchangebeck.gif)

\**Kent Beck's cost of the change curve.**

So, our role is to try to avoid figure 1 and opt for figure 2, keeping always in mind the three main points:

* Prevent bugs => Predictable vs avoiding unexpected problems.
* Readable => the source code must be readable and understandable, we are talking about formatting, documentation and more things.
* Quality => reduction in the number of bugs and software problems with the tests.

Before ending this part, we are going to point out a very important law -in my opinion- which is Murphy’s Law:

> Anything that can possibly go wrong, does.
>
> \-John Sack

In other words, If there’s more than one way to do a job and one of those ways will end in disaster, then somebody will do it that way.

In the next part of this series, we’ll tackle some rules to follow. Thank you all for reading this article, and See you next time 😉.