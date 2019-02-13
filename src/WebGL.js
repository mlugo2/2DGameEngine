"use strict";
var gGL = null;

// retrieve GLCanvas
function initializeGL() {
  var canvas = document.getElementById("GLCanvas");

  gGL = canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

  if (gGL !== null) {
    gGL.clearColor(1.0, 0.8, 0.0, 1.0); // set the color to be cleared

    // A. initialize the vertex buffer
    initSqaureBuffer(); // This function is defined VertexBuffer.js

    // B. now load and compile the vertex and fragment shader
    initSimpleShader("VertexShader", "FragmentShader");
  }
  else {
    document.write("<br><b>WebGL is not supported!</b>");
  }
}

function clearCanvas() {
  gGL.clear(gGL.COLOR_BUFFER_BIT);  // clear to the color prev set
}

function drawSquare() {
  gGL.clear(gGL.COLOR_BUFFER_BIT);

  // Step A: Activate the shader to use
  gGL.useProgram(gSimpleShader);

  // Step B: Enable the vertex position attribute
  gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);

  // Step C: Draw with the above settings
  gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);
}

function doGLDraw() {
  initializeGL();
  drawSquare();
}
