Default settings of display for:-
img is inline blk
span is inline
p, headings, div are block
input, buttons are inline-block

inline has no width and height. 
Inline-block formatted as inline but has width and height
block starts on a new line and takes up the whole width

For block if there is no settings of width and height, then
the sizing is based on the contents size.

1em is 16px
1vw relative to 1% of viewport width
1vh relative to 1% of viewport height
1rem relative to font size of root element

float will make a container float on top of the rest of the container
allowing it to align to left/right

fixed and absolute element is removed from the flow of the documents.
Other elements behave as if it's not even there. Hence these elements
appear like there are floating on top of the rest of the elements.
Think of it like there are at different layer.
For example container1 has layer 1 and layer 2. A single absolute or 
fixed element will be at different layer. Meaning if there are 2 absolute
elements in a container, both will be at different layer.

Diff between fixed and absolute is fixed is relative to document not 
any particular parent and unaffected by scrolling. Hence if you want the 
display to be fixed on the element when scroll, use absolute. 

top and left the positioning is based on top left corner of an element
Hence 50% top and 50% left will not appear that the element is centralized
on the container. to centralized it need to translate-x -50% and translate-y -50%



TIPS:
1) if content overflow out of container, use max-height or max-width of 100% of
content and see does it solve the issue

Selector .class <selector> div
> for all immediate children
<space> for all descendants 
+ for immediate sibling
~ for all siblings

Specificity rankings
1. Inline Styles
2. ID selectors
3. Class selectors, attribute selectors and pseudo-classes
4. Element selectors and pseudo-elements


