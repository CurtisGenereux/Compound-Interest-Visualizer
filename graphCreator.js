function createGraph() {

    var balanceAndYearData = balanceByYear.map((balance, day) => {
        var year = day/365;
        return [year, balance];
    });

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },

        title: {
            text: "Growth of $" + balanceValue + " Over " + yearsValue + " Years"
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            },
        },

        xAxis: {
            
            type: 'linear',
            title: {
                text: 'Years'
            },
            accessibility: {
                rangeDescription: 'Years'
            }
        },

        tooltip: {
            headerFormat: '<span style="color: #9e6a10;"><b>Investment:</b><br><span style="color: #000000;">',
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
                pointStart: 0,
                pointIntervalUnit: 'year'
            }
        },

        series: [{
            name: "Investment",
            data: balanceAndYearData,
        }],

    });
}
