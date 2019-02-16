function Game(htmlCanvasID) {
  // The game for drawing
  this.mShader = null;

  gEngine.Core.initializeWebGL(htmlCanvasID);

  this.mShader = new SimpleShader(
    "src/GLSLShaders/SimpleVS.glsl",
    "src/GLSLShaders/SimpleFS.glsl");

  // Step C1: Clear the canvas
  gEngine.Core.clearCanvas([0, 0.8, 0, 1]);
  // Step C2: Activate the proper shader
  this.mShader.activateShader([0, 0, 1, 1]);
  // Step C3: Draw with the currently activate geometry and the activated shader
  var gl = gEngine.Core.getGL();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
