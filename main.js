
let sketch = function(p) {
	let headerDiv = document.getElementById('header-div');
	
	p.setup = function() {
		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;

		let render = p.createCanvas(width, height);
		render.parent('header-div');
	};

	p.draw = function() {
		p.background(0);
		p.fill(255);
	};

	function windowResized() {

		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;

		p.resizeCanvas(width, height);
	}
  

};

let myp5 = new p5(sketch, 'header-div');
