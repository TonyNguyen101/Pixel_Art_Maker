var paintBrush = "white";

function makeGrid (element){
	for (var i = 0; i < 675; i++) {
		var gridSquare = document.createElement("div");
		gridSquare.setAttribute('class', 'blank')
		gridSquare.style.width = "25px";
		gridSquare.style.height = "25px";
		gridSquare.style.backgroundColor = "white";
		gridSquare.style.float = "left";
		gridSquare.style.border = "solid 1px grey";
		gridSquare.addEventListener("click", function(){
			this.style.backgroundColor = paintBrush;
			this.style.border = "solid 1px " + paintBrush;
		})
		gridSquare.addEventListener("dragenter", function(){
			this.style.backgroundColor = paintBrush;
			this.style.border = "solid 1px " + paintBrush;
		})
		element.appendChild(gridSquare);
	}
};
makeGrid(document.body);

var allButtons = document.querySelectorAll("div")

function makePallet (element){
	for (var i = 0; i < 28; i++) {
		var paintSquare = document.createElement("div");
			var red = Math.floor(Math.random()*255);
			var green = Math.floor(Math.random()*255);
			var blue = Math.floor(Math.random()*255);
			var randoColor = "rgb("+red+","+green+","+blue+")"
			paintSquare.style.width = "25px";
			paintSquare.style.height = "25px";
			paintSquare.style.backgroundColor = randoColor;
			paintSquare.style.float = "left";
			paintSquare.style.border = randoColor;
			paintSquare.style.border = "solid 1px";
			paintSquare.addEventListener("click", function(){
				paintBrush = this.style.backgroundColor;
				})
		document.body.appendChild(paintSquare);
	}	
};
makePallet(document.body);