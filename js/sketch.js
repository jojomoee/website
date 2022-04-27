//call P5 instance mode to set a sketch inside a div, so i can modify div in CSS
//resizing the window in browser doesnt work, needs to be refreshed
let sketch = function (p) {
  let headerDiv = document.getElementById("smiley-container");

  p.setup = function () {
    let width = headerDiv.offsetWidth;
    let height = headerDiv.offsetHeight;

    let render = p.createCanvas(width, height);
    render.parent("smiley-container");
    p.pixelDensity(0.4);
  };

  p.draw = function () {
    p.clear();
    //when multiple items are used
    //position offset because, the smiley's starts to shift (posX - n) * i < poX * i
    //let posX = 100;
    //let posOffset = 26;
    //-p.frameCount + (i * (posX - posOffset) + posOffset * i - posOffset),

    //let value = p.map(p.sin(p.frameCount / 100), 0, 1, -100, 100);
    //let value2 = p.map(p.sin(p.frameCount / 200), 0, 1, -100, 100);
    //console.log(value);
    //smiley(p, value + (p.width - p.width / 2), 35, 50);
    //smiley(p, value2 + (p.width - p.width / 2), 35, 50);
    for (let i = 0; i < 100; i++) {
      smiley(p, (-p.frameCount / 10) * i + p.width + 100, 100 + i*2, 50 + i * 100 );
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

let myp5 = new p5(sketch, "smiley-container");

function smiley(p, x, y, d) {
  // °
  p.stroke(0);
  p.strokeWeight(2);
  p.ellipse(x, y, d, d);

  // )
  let startAng = 0.1 * p.PI;
  let endAng = 0.9 * p.PI;
  let smileD = 0.6 * d;
  p.arc(x, y, smileD, smileD, startAng, endAng);

  // :
  let offset = 0.15 * d;
  let eyeD = 0.15 * d;
  p.strokeWeight(2);
  p.noFill();
  p.ellipse(x - offset, y - offset, eyeD, eyeD * 2);
  p.ellipse(x + offset, y - offset, eyeD, eyeD * 2);
}
