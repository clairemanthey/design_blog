---
templateKey: blog-post
title: What is CSS?
date: 2023-03-06T21:37:37.079Z
description: What is CSS and what does it do?
tags:
  - HTML
  - CSS
---
CSS stands for Cascading Style Sheets and is used to style a webpage. CSS defines how elements are displayed on a web page or multiple web pages as well as other formats such as printed off on paper. Styles can be as specific to one element out of an entire website or apply to the whole site.

There are three types of css, inline CSS, internal CSS, and external CSS. Inline CSS adds styling for one specific element. It is written inside the element’s opening tag. The styling only applies to that specific element. 

```
<h1 style=”color:red; padding:2px”>Heading</h1>
```

Internal CSS can be used for one HTML page. It is defined inside the head section of an HTML file using a style tag(add code block here with head section of HTML file with style tag). The styling will only be applied to that HTML page.

```
<head>
  <style>
    body{background-color: #000;}
    h1{color: white}
    h2{font-size: 1.2rem}
  </style>
</head>
 
```

External CSS is an external file ending with .css file extension. An external style sheet can control multiple html files and an entire website. It is connected to the HTML file using the link element inside the head element.

Next: How to Use CSS?