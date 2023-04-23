

/*
console.log("test");

var startingBalance =  parseFloat(document.getElementById("balance").value);
var monthlycontribution = parseFloat(document.getElementById("contribution").value);
var interest = parseFloat(document.getElementById("interest").value);
var years =  parseFloat(document.getElementById("years").value);

var currentBalance = startingBalance;
var interestRate = 0.080 // 26% = 0.065, 20% = 0.050, 14% = 0.035, 10% = 0.025, 8% = 0.020, 4% = 0.010
var balanceByYear = [];
balanceByYear[0] = currentBalance;
var k = 1;

for (var i = 0; i < years; i++) {
    for (var j = 0; j < 365; j++) {
        currentBalance = currentBalance + currentBalance*(interestRate/100) + (monthlycontribution/30);
        balanceByYear[k] = currentBalance;
        k++;
    }

}

Highcharts.chart('container', {
    chart: {
            type: 'line'
        },

    title: {
        text: "Growth Of $"
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Years'
        }
    },

    tooltip: {
    valueDecimals: 0,
    valuePrefix: '$',

    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            color: '#f5bc0d',
            marker: {
                enabled: false
            },
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },
    

    series: [{
        name: "Investment",
        data: balanceByYear
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

*/