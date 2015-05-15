var paintBrush = "white";

function makeGrid (element){
	for (var i = 0; i < 1012; i++) {
		var gridSquare = document.createElement("div");
		gridSquare.setAttribute('class', 'blank')
		gridSquare.style.width = "25px";
		gridSquare.style.height = "25px";
		gridSquare.style.backgroundColor = "white";
		gridSquare.style.float = "left";
		gridSquare.style.border = "1px dashed grey";
		gridSquare.addEventListener("click", function(){
			this.style.backgroundColor = paintBrush;
			this.style.border = "1px solid" + paintBrush;
		})
		gridSquare.addEventListener("dragenter", function(){
			this.style.backgroundColor = paintBrush;
			this.style.border = "1px solid " + paintBrush;
		})
		element.appendChild(gridSquare);
	}
};
makeGrid(document.body);

var allButtons = document.querySelectorAll("div")

function makePallet (element){
	for (var i = 0; i < 20; i++) {
		var paintSquare = document.createElement("div");
			var red = Math.floor(Math.random()*255);
			var green = Math.floor(Math.random()*255);
			var blue = Math.floor(Math.random()*255);
			var randoColor = "rgb("+red+","+green+","+blue+")"
			paintSquare.style.width = "4.755%";			

			//paintSquare.style.width = "60.1px";
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