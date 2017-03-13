---
layout: default
title: Writing Guide
date: 2017-02-19
---

This page provides a writing guide---things to review and improve as you publish and revise your essays. As we've seen: design matters!

## Questions to keep in mind
- Who is our audience?
- What do they know?
- What do we want them to know?
- How do we want them to think differently?
- What kind of interface will be most effective?
- How much of a narrative do we want or need?



## Things to check for:
- Meaningful headings
- Do not use **bold** in your headings; use an appropriate heading level (as shown below). Let me know if you need some other kind of heading!
- Informative first sentences that have a clear progression through the essay
- Consistent use of bold and italics, both throughout your essay and roughly compared to other essays. Don't use either too often, or it negates the effect of highlighting something. Do not use either for references; leave those as plain text.

You can insert images into your post by copying and pasting the below snippet into your Markdown code just before the paragraph in which you'd like the image to appear. The below code is exactly what's used to inlay the above image. Obviously, you'll need to change the filename to that of your image. We'll talk about uploading images next week.

<code>{% raw %}{% include figure.html class="img-right" src="Historiography.png" %}{% endraw %}</code>

<p class="has-pullquote" data-pullquote="This is a sample pull quote that shows off your research or insight."></p>

We can now add and stylize pull quotes, whether from one of your primary sources or yourself. They aren't quite as visually effective when they are super long, but hopefully they can help indicate to readers one of the main ideas you are trying to communicate. The way you can create these is shown below; you can copy and paste this snippet into your Markdown files, and change the quote. You don't need to have references in your quotes, but try to integrate these quotes into your essay as well and provide a reference there. That allows you to make clear why you are referencing the quote in the first place, rather than leaving it to the reader to guess.


```
<p class="has-pullquote" data-pullquote="This is a sample pullquote. Copy the code to make your quotes stand out like this."></p>
```

For your reference, all the headings styles are demonstrated below. Remember that you must have a space between the ### and the actual heading!

```
### Title 3
```

will produce:

### Title 3

and the other common styles render as follows:

#### Title 4

##### Title 5


### List
- item 1
- item 2
  - put two spaces in front of your dash to sub-indent
- item 3

If you can't find what you need on this page, please consult the Markdown [basic writing and formatting guide](https://help.github.com/articles/basic-writing-and-formatting-syntax/).
