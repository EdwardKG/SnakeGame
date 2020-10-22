let s;
let gameState;
let scl = 20;
let stStartSpeed = 10;
let stNowSpeed = stStartSpeed;
let point;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	frameRate(stStartSpeed);
	getLocation();
}

function getLocation() {
	let cols = floor(width / scl);
	let rows = floor(height / scl);
	point = createVector(floor(random(cols)), floor(random(rows)));
	point.mult(scl);
}


function changeBackground() {

	background(255, 0, 255);
};

function endGame() {
	window.setInterval(changeBackground, 600);
	textSize(32);
	let msg = 'Game Over';
	msgWidht = textWidth(msg);
	fill(255);
	text(msg, (width - msgWidht) / 2, height / 2 - 40);
	//noLoop();
}

function mousePressed() {
	s.vsego++;
}

function draw() {
	background(51);
	if (s.grab(point)) {
		getLocation();
	}
	s.deadend();
	if (gameState == 'end') {
		window.setInterval(changeBackground, 3000);
		endGame();
	}
	s.update();
	s.show();

	fill(255, 0, 0);
	rect(point.x, point.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	} else if (keyCode === SHIFT) {
		frameRate(30);
	}
}

function keyReleased() {
	if (keyCode === SHIFT) {
		frameRate(stNowSpeed);
	}
}