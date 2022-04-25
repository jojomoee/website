
//call P5 instance mode to set a sketch inside a div, so i can modify div in CSS
//resizing the window in browser doesnt work, but refr
let sketch = function(p) {
	let headerDiv = document.getElementById('header');
	let headerTxt = 'Johannes Möhrl'
	p.setup = function() {
	
		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;

		let render = p.createCanvas(width, height);
		render.parent('header');
	};

	p.draw = function() {
		
		p.background(0);

		let fontSize = 30;
		let lineHeight = fontSize * 0.9;
		let width = headerDiv.offsetWidth;
		
		for (let i = 0; i < 100; i ++) {

			p.textSize(20)
			p.fill(255);
			p.textAlign(p.LEFT, p.TOP);
			p.text(headerTxt, -p.frameCount + i * 200, 10);

		}
	};

	function windowResized() {

		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;

		p.resizeCanvas(width, height);
	}
  

};

let myp5 = new p5(sketch, 'header');
