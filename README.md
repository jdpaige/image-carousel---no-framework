# image-carousel---no-framework
Image carousel without the use of frameworks

There are two versions - 
  (1) using flexbox and changing the flex 'order' property to manipulate the positions. This method is easier but cannot be animated, since flexbox attritubes cannot be transitioned.
  (2) without flexbox and creating an array of images, which we then change the order of and re-set the value of the carousel container whenever the order is changed.  This will allow for animations...which I am still working on figuring out how to do. 
