export class ClockController {
	interval = 0;
	host;
	date = new Date();
	constructor(host) {
		this.host = host;
		host.addController(this);
	}

	hostConnected() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.date = new Date();
		this.host.requestUpdate();
	}

	hostDisconnected() {
		clearInterval(this.interval);
	}
}
