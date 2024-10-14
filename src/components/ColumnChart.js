import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
    const chartOptions = {
        chart: {
            type: 'bar'
        },
        series: [{
            data: data.map(item => item.countryVisitors)
        }],
        xaxis: {
            categories: data.map(item => item.country)
        },
        yaxis: {
            title: {
                text: 'Visitors per Country'
            }
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <h4>Column Chart</h4>
                <Chart options={chartOptions} series={chartOptions.series} type="bar" />
            </div>
        </div>
    );
};

export default ColumnChart;