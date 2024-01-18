const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  const agents = [];

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    const agentA = new Agent(800, 400);
    const agentB = new Agent(300, 700);

    // context.beginPath();
    // context.arc(pointA.x, pointA.y, pointA.radius, 0, Math.PI * 2);
    // context.fillStyle = 'black';
    // context.fill();

    // context.beginPath();
    // context.arc(pointB.x, pointB.y, pointB.radius, 0, Math.PI * 2);
    // context.fillStyle = 'red';
    // context.fill();
    agentA.draw(context);
    agentB.draw(context);
    
  };
};

canvasSketch(sketch, settings);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.radius = radius;
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Point(x, y);
    this.radius = 10;
  }

  draw(context) {
    context.fillStyle = 'black';
    
    context.beginPath();
    context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}