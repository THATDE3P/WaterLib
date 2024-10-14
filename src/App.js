import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import DateSelector from './components/DateSelector';
import TimeSeriesChart from './components/TimeSeriesChart';
import ColumnChart from './components/ColumnChart';
import SparklineChart from './components/SparklineChart';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    const handleDateChange = (startDate, endDate) => {
        const filtered = data.filter(item => {
            const arrivalDate = new Date(item.arrivalDate);
            return arrivalDate >= startDate && arrivalDate <= endDate;
        });
        setFilteredData(filtered);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-5">Hotel Booking Dashboard</h1>
            <DateSelector onDateChange={handleDateChange} />
            <TimeSeriesChart data={filteredData} />
            <ColumnChart data={filteredData} />
            <SparklineChart data={filteredData} type="totalVisitors" />
            <SparklineChart data={filteredData} type="countryVisitors" />
        </div>
    );
};

export default App;