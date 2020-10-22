function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.vsego = 0;
	this.tail = [];

	this.grab = function (position) {
		let d = dist(this.x, this.y, position.x, position.y);
		if (d < 1) {
			this.vsego++;
			return true;
		} else {
			return false;
		}
	}

	this.dir = function (x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.deadend = function () {
		for (let i = 0; i < this.tail.length; i++) {
			let position = this.tail[i];
			let d = dist(this.x, this.y, position.x, position.y);
			if (d < 1) {
				this.vsego = 0;
				this.tail = [];
				gameState = 'end';
			}

		}
	}

	this.updateSpeed = function () {
		if (this.snakeLength % 2 === 0) {
			return stNowSpeed;
		}
	}

	this.update = function () {
		if (this.vsego === this.tail.length) {
			for (let i = 0; i < this.tail.length - 1; i++) {
				this.tail[i] = this.tail[i + 1];
			}
		}

		this.tail[this.vsego - 1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function () {
		fill(255);
		for (let i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}