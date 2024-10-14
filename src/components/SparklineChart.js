import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data, type }) => {
    const chartOptions = {
        chart: {
            type: 'line',
            sparkline: {
                enabled: true
            }
        },
        series: [{
            data: data.map(item => item[type])
        }],
        xaxis: {
            type: 'datetime',
            categories: data.map(item => item.arrivalDate)
        },
        yaxis: {
            title: {
                text: `Total ${type.charAt(0).toUpperCase() + type.slice(1)} Visitors`
            }
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4>Sparkline Chart - {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                <Chart options={chartOptions} series={chartOptions.series} type="line" />
            </div>
        </div>
    );
};

export default SparklineChart;