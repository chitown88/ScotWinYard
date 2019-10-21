




function linechart() {
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [{
            fill: false,
			label: 'Fanatsy Points',
            backgroundColor: 'rgba(255, 182, 18)',
            borderColor: 'rgba(32, 55, 49)',
            data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});};



