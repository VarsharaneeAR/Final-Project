
function drawCircle(canvasContext, x, y, shapeHeight) {
    const halfShapeHeight = shapeHeight / 2;
    canvasContext.beginPath();
    canvasContext.arc(x, y, halfShapeHeight, 0, 2 * Math.PI);
    canvasContext.lineWidth = 1;
    canvasContext.strokeStyle = "grey"
    canvasContext.stroke();
}

const canvas2 = document.getElementById("canvas-2");
const canvas2Context = canvas2.getContext("2d");
canvas2.width = window.innerWidth - 20;
canvas2.height = window.innerHeight - 600;
canvas2.addEventListener("mousemove", function (event) {
  const rect = canvas2.getBoundingClientRect();
  const mouseXPosition = event.clientX - rect.left;
  const mouseYPosition = event.clientY - rect.top;
  const shapeHeight = 50;
  console.log();
  drawCircle(canvas2Context, mouseXPosition, mouseYPosition, shapeHeight);
});


const colourChangeButton = document.getElementById("colour-change");

colourChangeButton.addEventListener("click", () => {
  const backgroundColor = document.body.style["background-color"];
  if (backgroundColor === "black") {
    document.body.style["background-color"] = "white";
  } else {
    document.body.style["background-color"] = "black";
  }
});
