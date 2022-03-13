/*----------------------------
PAPER WORK
MARKOV EXEMPLE 2
Simplified Markov
----------------------------*/

var w = 25; //Size of the grid, and size of the shape
var variable = 1; //ID of the shape
var f = 0.8; //Shape size factor

function setup() {
  //CREATION OF THE CANVAS
  let canvas = createCanvas(400, 400);

  //ARRAY WITH THE MARKOV PROBABILITIES
  //probaShapes[0] = probability to have a square after a square
  //probaShapes[1] = probability to have a circle after a square
  //probaShapes[2] = probability to have a blank after a square
  //-----------------------------------------------------------------
  //probaShapes[3] = probability to have a square after a circle
  //probaShapes[4] = probability to have a circle after a circle
  //probaShapes[5] = probability to have a blank after a circle
  //-----------------------------------------------------------------
  //probaShapes[6] = probability to have a square after a blank
  //probaShapes[7] = probability to have a circle after a blank
  //probaShapes[8] = probability to have a blank after a blank

  var probaShapes =
                [0.6, 0.2, 0.2, // SUM = 1
                  0.2, 0.7, 0.1, // SUM = 1
                  0.2, 0.0, 0.8]; // SUM = 1

  //STYLES
  background(235);
  fill(0);
  stroke(0);
  ellipseMode(CORNER)


  //SHAPE DISTRIBUTION IN GRID
  for ( var i = 0; i < height; i+=w) {
    for (var j = 0; j < width ; j+=w){
      // SWAP i AND j TO CHANGE HORIZONTAL OR VERTICAL MODE
      markovFormes(variable, j, i, w, probaShapes);
    }
  }
}

// EMPTY but necessary
function draw() {}

//MARKOVIAN REPARTITION OF THE SHAPES
//k : id of the previous shape
//posi : vertical position
//posj : horizontal position
//tabProba : array with the markovian probabilities
function markovFormes(k, posi, posj, x, tabProba){

  //p is a random number between 0 and 1
	p = random();

  //PREVIOUS SHAPE WAS A RECTANGLE
  //----------------------------------------------------
	if(k == 1){
		if(p < tabProba[0]){
      //reset of the shape ID
			variable = 1;

      //drawing of the next shape
			return aSquare(posi, posj, w*f);
		}

		if(tabProba[0] <= p && p < 1 - tabProba[2]){
			variable = 2;
			return ellipse(posi, posj, w*f, w*f);
		}

		if(1 - tabProba[2] <= p){
			variable = 3;
			return null
		}
	}

  //PREVIOUS SHAPE WAS A CIRCLE
  //----------------------------------------------------
	if(k == 2){
		if(p < tabProba[3]){
      //reset of the shape ID
			variable = 1;

      //drawing of the next shape
			return aSquare(posi, posj, w*f);
		}

		if(tabProba[3] <= p && p < 1 - tabProba[5]){
			variable = 2;
			return ellipse(posi, posj, w*f, w*f);
		}

		if( 1 - tabProba[5] <= p){
			variable = 3;
			return null
		}
	}

  //PREVIOUS SHAPE WAS A BLANK
  //----------------------------------------------------
	if(k == 3){
		if(p < tabProba[6]){
      //reset of the shape ID
			variable = 1;

      //drawing of the next shape
			return aSquare(posi, posj, w*f);
		}

		if(tabProba[6] <= p && p < 1 - tabProba[8]){
			variable = 2;
			return ellipse(posi, posj, w*f, w*f);
		}

		if(1 - tabProba[8] <= p){
      variable = 3;
			return null
		}
	}
}

function aSquare (x,y,width){
  rect(x,y,width,width);
}
