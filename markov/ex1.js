/*----------------------------
PAPER WORK
MARKOV EXEMPLE 1
One dimensional chain
----------------------------*/

var w = 18; //Size of the grid, and size of the shape
var y = 200; //Chain position
var id = 1; //Shape id

function setup() {
  //CREATION OF THE CANVAS
  let canvas = createCanvas(400, 400);

  //STYLES
  background(235);
  fill(0);
  stroke(0);
  ellipseMode(CORNER);

  for ( var i = 0; i < height; i+=w) {
	serie(id, i, y, w*0.8)
   }
}

function serie(k, xpos, ypos, width) {

	//DRAWS A RECTANGLE
  	//--------------------------------
	if (k==1){
     rect(xpos, ypos, width, width);
     id = 2;
    }

  	//DRAWS A CIRCLE
  	//--------------------------------
	if (k==2){
     ellipse(xpos, ypos, width, width);
     id = 3;
    }

    //DRAWS A BLANK
  	//--------------------------------
	if (k==3){
     null;
     id = 1;
    }

}
