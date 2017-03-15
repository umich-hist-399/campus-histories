---
layout: default
title: Writing Guide
date: 2017-02-19
---

# Writing Guide

This page provides a writing guide for the content you're creating. In it you'll find things to review and improve as you publish and revise your essays. As we've seen: design matters!



## Questions to keep in mind
- Who is our audience?
- What do they know?
- What do we want them to know?
- How do we want them to think differently?
- What kinds of design will encourage curiosity and exploration?

## Make Sure You Have
- Citations. Your research will not be published without them, and you will not get credit for them.
- Meaningful headings.
- No **bold** in your headings; use an appropriate heading level (as shown below). We can create new styles if need be.
- Informative first sentences that, in themselves, provide a clear progression through the essay.
- Consistent use of bold and italics, both throughout your essay and roughly compared to other essays. Don't use either too often, or it negates the effect of highlighting something. Do not use either for references; leave those as plain text.
- Images. Choose carefully to achieve the greatest effect and synergy with your essay.
- Pull Quotes and Sidebars. These typographic features help call attention to certain ideas that you want to highlight and provide a way of fast reading.

## Citations
We will use author date notation (Smith 1975, 13). Avoid citing webpages whenever possible; rather, find the original historical source. If you need to respond to something on the webpage itself (as opposed some historical source it discusses), you won't have a page number, but you'll still have author and date. If you can't find a date, be annoyed and  use "n.d." (for no date).

## Section Headings
For your reference, all the headings styles are demonstrated below. Remember that you must have a space between the ### and the actual heading!

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
```
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5


## Images
You can insert images into the main body of your text by copying and pasting the below snippet into your Markdown code just before the paragraph in which you'd like the image to appear. The below code is exactly what's used to inlay the above image. Obviously, you'll need to change the filename to that of your image. You can use a class of `img-right` or `img-left`.

``` html
 {% raw %}{% include figure.html class="img-right" src="Historiography.png" %}{% endraw %}
````


## Pull quotes
Our essays should use pull quotes, whether from one of your primary sources or yourself. They aren't quite as visually effective when they are super long, but they help indicate to readers one of the main ideas you are trying to communicate. The way you can create these is shown below; you can copy and paste this snippet into your Markdown files, and change the quote. You don't need to have references in your quotes, but try to integrate these quotes into your essay as well and provide a reference there. That allows you to make clear why you are referencing the quote in the first place, rather than leaving it to the reader to guess.


``` html
<p class="has-pullquote" data-pullquote="This is a sample pullquote. Copy the code to make your quotes stand out like this."></p>
```

## Sidenotes and Side Images  
For snippets of text that go alongside the main column of text on your page, use a formula like for images. This looks quite goofy, and you have to be careful to match your quotation marks, but it's fairly straightforward once you get used to the syntax.

``` markdown
 {% raw %}
{% include marginrow.html
  left="here is some sidebar text, but not too much"
  right="/images/perry-building.jpg"
  middle="
  - First funded by the Depression-era WPA in 1934, it took its name from its original location: Perry Elementary School at Packard and Madison. The building was named for Walter S. Perry, a former Ann Arbor superintendent of schools.
  - Ann Arbor Perry School was known as an excellent school dedicated to serving one-parent families.
  - During World War II, it got funding under the Lanham Act, created to free mothers to work in the defense industry.
  "
%}
````

### Lists
``` md
- item 1
- item 2
  - put two spaces in front of your dash to sub-indent
- item 3
```

- item 1
- item 2
  - put two spaces in front of your dash to sub-indent
- item 3

## Further Reference
If you can't find what you need on this page, please consult the Markdown [basic writing and formatting guide](https://help.github.com/articles/basic-writing-and-formatting-syntax/). And bring questions to class, both technical and broader design questions.
