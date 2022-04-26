//call P5 instance mode to set a sketch inside a div, so i can modify div in CSS
//resizing the window in browser doesnt work, needs to be refreshed
let sketch = function (p) {
  let headerDiv = document.getElementById("header-container");
  p.setup = function () {
    let width = headerDiv.offsetWidth;
    let height = headerDiv.offsetHeight;

    let render = p.createCanvas(width, height);
    render.parent("header-container");
  };

  p.draw = function () {
    p.background(255);

    for (let i = 0; i < 100; i++) {
      //when multiple items are used
      //position offset because, the smiley's starts to shift (posX - n) * i < poX * i
      let posX = 100;
      let posOffset = 26;

      smiley(
        p,
		//overcomplicated
        -p.frameCount * i + 700 , 
        30,
        50
      );
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

let myp5 = new p5(sketch, "header-container");

function smiley(p, x, y, d) {
  // °
  p.fill(255, 255, 255);
  p.stroke(0);
  p.strokeWeight(1);
  p.ellipse(x, y, d, d);

  // )
  let startAng = 0.1 * p.PI;
  let endAng = 0.9 * p.PI;
  let smileD = 0.6 * d;
  p.arc(x, y, smileD, smileD, startAng, endAng);

  // :
  let offset = 0.15 * d;
  let eyeD = 0.15 * d;
  p.strokeWeight(1);
  p.noFill();
  p.ellipse(x - offset, y - offset, eyeD, eyeD * 2);
  p.ellipse(x + offset, y - offset, eyeD, eyeD * 2);
}
