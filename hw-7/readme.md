Elijah Garcia
# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

Lines 3 through 10 are defining the data within the object 'ball'.

The setup function creates a canvas that's the width of the original window, but
only 400 pixels high.

 Lines 21 and 22 define the location of the ball based on delta and scale variables


 Lines 25 through 27 keep ball bouncing off of left-right surfaces
 Lines 28 through 30 keep ball bouncing off top-bottom surfaces

 The ball changes direction based on the scale and delta variables which are based on mouse location when the click happens.



## How did you alter the sketch?

I added an If statement that ensures the ball always expands, but resets if it hits a width of 80. I also added random colors that will always have a low alpha channel, giving a stained-glass look.

<!--
Please describe how and why you changed the sketch?
-->
