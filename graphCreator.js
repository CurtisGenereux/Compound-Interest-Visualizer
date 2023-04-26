function createGraph() {
    const startYear = 0;

    const yearDataArray = balanceByYear.map((value, index) => {
        const year = startYear + (index / 365);
        return [year, value];
    });

    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },

        title: {
            text: "Growth of Over " + yearsValue + " Years"
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
            
            type: 'linear',
            title: {
                text: 'Years'
            },
            labels: {
                formatter: function () {
                    return Math.round(this.value); 
                }
            },
            accessibility: {
                rangeDescription: 'Years'
            }
        },

        tooltip: {
            headerFormat: '<span style="color: #9e6a10;"><b>Investment:</b><br><span style="color: black;">',
            pointFormat: 'Years: <b>{point.x:.2f}</b><br>Value: <b>${point.y:,.2f}</b>',
            valueDecimals: 2,
            valuePrefix: '$'
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
                pointStart: startYear,
                pointIntervalUnit: 'year'
            }
        },

        series: [{
            name: "Investment",
            data: yearDataArray,
        }],

    });
}
