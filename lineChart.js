window.onload = function () {

	let dps = []; // dataPoints
	let chart = new CanvasJS.Chart("chartContainer", {
		title: {
			text: "CHART TRADING SIMULATION"
		},
		data: [{
			type: "line",
			lineColor: 'red',
			dataPoints: dps
		}]
	});

	let xVal = 0;
	let yVal = 100;
	let updateInterval = 30;
	let dataLength = 200; // number of dataPoints visible at any point

	let updateChart = function (count) {

		count = count || 1;

		for (let j = 0; j < count; j++) {
			yVal = coin;
			dps.push({
				x: xVal,
				y: yVal
			});
			xVal++;

			if (xVal % 1000 == 0&&coin!=0) {
				date++;
				priceLastDay = coin;
				cheakDate();
			}
		}

		if (dps.length > dataLength) {
			dps.shift();
		}

		chart.render();
	};

	updateChart(dataLength);
	let chartInterval=setInterval(function () { updateChart() }, updateInterval);

}