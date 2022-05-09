
//needs to wait until font is loaded
//


setTimeout(function(){	
createTightTextWithCanvas("about-cnv", { txt: "CV", fontface: "SolideMirage-Etroit" });
createTightTextWithCanvas("more-cnv", { txt: "PORTFOLIO", fontface: "SolideMirage-Etroit" });
//fitToContainer('about-cnv');
}, 2000);

// Ich küsse deine Augen https://codesandbox.io/s/create-a-canvas-tightly-holding-a-word-st2h1?file=/src/styles.css&resolutionWidth=320&resolutionHeight=675
function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  //canvas.style.width ='100%';
  //canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function refreshFont(cxt, w, s, f) {
  // e.g. `bold 100px Arial`
  cxt.font = `${w} ${s} '${f}'`; // unsure if multi-word fonts need this quotes but it doesn't hurt
}

function createTightTextWithCanvas(
  cid, // required
  {
    txt = "test", // some string
    size = "1200px", // big values = crisper text (you can optimize)
    color = "#0f0f0f", // color of text
    weight = "normal", // weight of text
    fontface = "arial" // font face of text
  }
) {
  const domCanvas = document.getElementById(cid);
  const domContext = domCanvas.getContext("2d");
  const tmpCanvas = document.createElement("canvas");
  const tmpContext = tmpCanvas.getContext("2d");
  refreshFont(tmpContext, weight, size, fontface);
  tmpCanvas.width = tmpContext.measureText(txt).width;

  // i don't know why this has to be redeclared for it to work
  // but it does
  refreshFont(tmpContext, weight, size, fontface);
  tmpCanvas.height =
    tmpContext.measureText(txt).actualBoundingBoxDescent +
    tmpContext.measureText(txt).actualBoundingBoxAscent;

  // i don't know why this has to be redeclared for it to work
  // but it does
  refreshFont(tmpContext, weight, size, fontface);
  tmpContext.fillStyle = color;
  tmpContext.textAlign = "start";
  tmpContext.fillText(
    txt,
    0, // x pos
    tmpContext.measureText(txt).actualBoundingBoxAscent // y pos
  );

  domCanvas.width = tmpCanvas.width;
  domCanvas.height = tmpCanvas.height;
  domContext.drawImage(tmpCanvas, 0, 0, tmpCanvas.width, tmpCanvas.height);
}
