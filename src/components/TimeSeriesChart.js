import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
    const chartOptions = {
        chart: {
            type: 'line',
            zoom: {
                enabled: true
            }
        },
        series: [{
            data: data.map(item => item.totalVisitors)
        }],
        xaxis: {
            type: 'datetime',
            categories: data.map(item => item.arrivalDate)
        },
        yaxis: {
            title: {
                text: 'Total Visitors'
            }
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4>Time Series Chart</h4>
                <Chart options={chartOptions} series={chartOptions.series} type="line" />
            </div>
        </div>
    );
};

export default TimeSeriesChart;