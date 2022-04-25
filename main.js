
//call P5 instance mode to set a sketch inside a div, so i can modify div in CSS
//resizing the window in browser doesnt work, but refr
let sketch = function(p) {
	let headerDiv = document.getElementById('header-container');
	let headerTxt = 'Ich suche ab sofort ein Prakikum, finanziert über das AMS - befristet bis 25.05\t\t\t'
	p.setup = function() {
	
		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;

		let render = p.createCanvas(width, height);
		render.parent('header-container');
	};

	p.draw = function() {
		
		p.background(0);

		for (let i = 0; i < 100; i ++) {
			//position offset because, the smiley's starts to shift (posX - n) * i < poX * i
			let posX = 780;
			let posOffset = 26;

			p.textSize(20)
			p.fill(255);
			p.textAlign(p.LEFT, p.TOP);
			p.text(headerTxt, -p.frameCount + i * posX, 10);
			p.noStroke();
			//unelegant but works.
			smiley(p, -p.frameCount + ((i * (posX - posOffset)) + (posOffset * i) - posOffset), 18, 20);
		}
	};


	/* I don't know why i wrote this, works without.
	 *
	function windowResized() {
		let width = headerDiv.offsetWidth;
		let height = headerDiv.offsetHeight;
		p.resizeCanvas(width, height);
	}
	*/

};


let myp5 = new p5(sketch, 'header-container');



function smiley(p, x, y, d) {
	// ° 
	p.fill(255, 255, 0);
	p.stroke(0);
	p.strokeWeight(1);
	p.ellipse(x,y, d, d);

	// )
	let startAng = .1*p.PI;
	let endAng = .9*p.PI;
	let smileD = .6*d;
	p.arc(x, y, smileD, smileD, startAng, endAng);

	// :
	let offset = .20*d;
	let eyeD = .15*d;
	p.fill(0);
	p.ellipse(x-offset, y-offset, eyeD, eyeD);
    p.ellipse(x+offset, y-offset, eyeD, eyeD);

}
