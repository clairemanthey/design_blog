---
templateKey: blog-post
title: How to Use CSS
date: 2023-03-13T20:15:14.678Z
description: Selectors and Property-Values
tags:
  - CSS
  - HTML
---
CSS uses selectors and property-value pairs to add styling to HTML pages. A selector selects which HTML element will have which styles. The property-value defines the property and the value of that style. In CSS when p is the selector, color is the property, and white is the value, it will look like this

﻿

```
p{
  color: white;
}
```

There can be property-value pairs for 1 selectors, with each pair separated by a semi-colon. In CSS it looks like

```
 p{
   color: white; 
   background-color: darkblue; 
   font-size: 32px;
 }
```

Simple selectors are ids, classes, and tags. An id is the most specific selector, and can only be used once, it selects just one element. A class is a less specific selector than an id and can be used to style multiple elements. Unlike an id a class can select many elements. A tag selector is the least specific and will apply styles to all elements with that tag such as a p or a tag. When creating names for ids and classes the name can only contain letters, numbers, underscores (_), or hyphens(-). An id or class name cannot begin with a digit, two hyphens or a hyphen followed by a digit. 

To declare a class in css the selector begins with a period(.)

```
.myparagrph{
  color: red;
}
```

T﻿o declare an id the selector begins with a hashtag(#)

```
#myparagraph{
  color:red;
}
```

Selectors can be grouped and/or combined. Grouped selectors are used to apply the same style to multiple elements and look like this 

```
h1, h2, p{
  color: hotpink
}
```

Combinator selectors combine selectors to apply styles to specific elements. This CSS will select all h2 elements inside a div.

```
div h2{
  font-size: 2rem;
}
```

Pseudo classes are used to define a state of an element such as hover, focus, or being the first element of that type. ().

```
p:hover{
  color: pink;
}
div:first child{
  color: blue;
}
```

Attribute selectors are used to select elements with a specific attribute and require the use of attribute=”value” 

```
p[target=”blank”]{
  font-weight: bold;
}
```

Any attribute can be used to apply styles to an element with the name of the attribute and the value of that attribute.

Properties are the styling added to an element. There are a variety of properties and even more values. CSS properties are used for adding styles such as font size, color, and font weight as well altering the position of an element. Certain properties can only apply to certain elements such a font-size and font-weight will only apply to elements that have text. 



[M﻿DN Selector Reference](<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>) [](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

[CSS Property Reference ](<https://www.tutorialrepublic.com/css-reference/css3-properties.php>)

[M﻿DN CSS Property Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index)[](https://www.tutorialrepublic.com/css-reference/css3-properties.php)