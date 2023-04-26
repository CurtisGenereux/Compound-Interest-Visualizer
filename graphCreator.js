function createGraph() {

    Highcharts.chart('container', {
        chart: {
                type: 'line'
            },

        title: {
            text: "Growth of Investment Over " + yearsValue + " Years"
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
        valueDecimals: 2,
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
            data: balanceByYear,
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
}