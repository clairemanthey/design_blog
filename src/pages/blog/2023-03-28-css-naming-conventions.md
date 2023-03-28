---
templateKey: blog-post
title: CSS Naming Conventions
date: 2023-03-28T18:40:15.032Z
description: How to Name CSS classes and id’s
tags:
  - CSS
---
The names of id’s and classes can only contain letters, numbers, underscores (_), or hyphens(-), and should be in lower case. An id or class name cannot begin with a digit, two hyphens or a hyphen followed by a digit. Even with those rules there is plenty of flexibility in creating a name for a class or id. 

Using a naming convention helps create a structure that is easily understood by others. As well as helping to organize the CSS so it will not become confusing and difficult to maintain. One naming convention is BEM. BEM stands for Block Element Modifier.

A Block is a standalone entity that has its own meaning. It can represent things like navigation, header, footer, or any other standalone entity. A name for a block would be nav. 

An Element is part of the block. It can be a list inside a nav block, or a heading inside a header or a footer. 2 underscores separate the element from the block when naming it. A name for an element inside a nav block would be nav__list.

A Modifier modifies an existing object. 2 dashes separate the modifier from the element or the block when naming it. An example could be nav__list--hidden or nav--hidden.

Using a naming convention can help organize CSS and give meaning to the class or id name. It creates a clear relationship between elements and is able to be easily understood by others. Since the blocks are independent and do not affect each other using a naming convention prevents issues with the cascade as well as creating reusable CSS reducing redundancy.

\
Next: What is the Cascade in CSS?