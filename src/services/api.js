import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get('hotel_bookings_1000.csv');
    const data = response.data;
    return data;
};

export { fetchData };