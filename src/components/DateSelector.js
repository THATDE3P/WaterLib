import React, { useState } from 'react';

const DateSelector = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleChange = () => {
        onDateChange(new Date(startDate), new Date(endDate));
    };

    return (
        <div className="row mt-5">
            <div className="col-md-6">
                <label>Start Date:</label>
                <input type="date" className="form-control" onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="col-md-6">
                <label>End Date:</label>
                <input type="date" className="form-control" onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className="col-md-12 text-center mt-3">
                <button className="btn btn-primary" onClick={handleChange}>Filter</button>
            </div>
        </div>
    );
};

export default DateSelector;