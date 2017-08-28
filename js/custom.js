


Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Yoga Classes'
    },
    subtitle: {
        text: 'Sales by Month'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Sales by Month'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Current Month',
        data: [30001,28889,39000,29084,29084,19080,24854]

    }, {
        name: 'Last Month',
        data: [29015,26188,40100,27055,21055,24055,26055]

    }]
});



Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Yoga Privates'
    },
    subtitle: {
        text: 'Sales by Month'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Sales by Month'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Current Month',
        data: [19080,24854,29445,24453,15834,23898,32010]

    }, {
        name: 'Last Month',
        data: [24055,26055,28455,24000,12005,22511,28515]

    }]
});







Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Yoga Duets'
    },
    subtitle: {
        text: 'Sales by Month'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Sales by Month'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} $</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Current Month',
        data: [28889,39000,29445,24453,15834,23898,32010]

    }, {
        name: 'Last Month',
        data: [29015,26188,40100,24000,12005,22511,28515]

    }]
});
