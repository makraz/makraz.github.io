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
After a certain period of learning a programming language, of course this period of time can vary from one person to another, it usually ends by asking ourselves few questions such as :

• What is the best way to write code ?

• How can I make my code look better?

and more questions concerning people who try to start contributing on an Open Source or those working in a project with senior developers.

In my search, I have found a number of approaches to improve my code one of which is the concept of **Defensive Programming**, so, today, I would like to share with you what I have learned about **Defensive Programming**.

For a considerable amount of time, I had been changing my coding style, making it more Defensive 🛡️ Now it has become quite a necessity when writing code.

This is the 1st part of **Defensive Programming: Rules and Techniques** series.

**_PS_**: We will be using PHP as our Programming Language for this series, so all examples here or at my repository are written using PHP version 7.x.

_Level: **intermediate**_

***

## Prerequisites

* Learn an OOP Language
* having idea about design patterns

## Introduction

This topic is subjective because it's depend on Programming Language, the context and Framework, so we can say this post will be an introduction the approach in the general case.

## What 🤔?

If we ask Wikipedia about Defensive programming, it provides us with following lines :

> **Defensive programming** is an approach to improve software and source code, in terms of:
>
> * General quality – reducing the number of[ software bugs](https://en.wikipedia.org/wiki/Software_bug) and problems.
> * Making the[ source code](https://en.wikipedia.org/wiki/Source_code) comprehensible – the source code should be readable and understandable so it is approved in a[ code audit](https://en.wikipedia.org/wiki/Code_audit).
> * Making the software behave in a predictable manner despite unexpected inputs or user actions.
>
> Defensive programming is when programming purposefully predict possible points of failure.

=> Therefore, **Defensive programming** is to make the safe from the unexpected issues which mean less bugs later and in the same time having a readable code.

## Why?

Accordingly, it's clear that not only does Defensive Programming improve our code, becoming soundly established, but it also helps people with whom we are teaming up understand the code, so it will not to be broken down / avoiding any unexpected turn down 😅. This happens pretty much often when we are teaming up with juniors, in this case the code review take much time and we could have many rounds of **_back and forth_**.

The solution is to make our code readable, understandable, extendable and help on debugging. In a nutshell, we have 3 points as an **objective** concerning **Defensive Programming**:

* Source code quality.
* Code will be Readable.
* Prevent bugs.

let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.let's try to go deep and see the cube from another side, from the point of view of a company, the cost of a project is one of the most important criteria and it can impact everything in the future of any project or event on the future of the company in some cases. we are agree that the technical choice it's depend on the context of each company or team if we talk about large structures.

Let's try to take a closer look at this issue from another angle, from a company prospective. The cost of a project is one of the most important criteria to be considered as it can have a tremendous impact on numerous aspects in the long run of any project or even on the future of a company in some cases. In parallel with the cost, we have the technical choice, which depends on the context of each company or team if we are talking about large structures.

Here’s a figure to illustrate the cost / development techniques:

![Comparing the feedback cycle of various development techniques.](/uploads/comparingtechniques.jpg "Comparing the feedback cycle of various development techniques.")

      **_Comparing the feedback cycle of various development techniques._**

If we make a simple comparison between TDD and code review or traditional system test, it is quite obvious that over time the cost of a bug increases exponentially depending on the development techniques.

This is the ideal case to have the following chart:

![Kent Beck's cost of change curve.](http://AgileModeling.com/images/costOfChangeBeck.gif "Kent Beck's cost of change curve.")

                                    **_Kent Beck's cost of change curve._**

and for that we can talk about 3 points:

![](/uploads/picture1.png)

* Safety => Predictable vs avoiding unexpected problems.
* Readable => the source code must be readable and understandable, we are talking about formatting, documentation and more things.
* High quality => reduction in the number of bugs and software problems with the tests.