import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Archive = () => {

    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedOption, setSelectedOption] = useState('online');

    const archiveQueary = (dateMonthYear) => {
        console.log(dateMonthYear);
        const jsonString = JSON.stringify(dateMonthYear)
        alert(jsonString)
    }


    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        archiveQueary({
            date: selectedDate,
            month: selectedMonth,
            year: selectedYear,
            option: selectedOption,
        })
    };

    const generateDate = (n) => {
        return Array.from({ length: n }, (_, index) => index + 1);
    };

    const generateYearOptions = (n) => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: n }, (_, index) => currentYear - index);
    };

    const monthOptions = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };


    const handleCalenderDateChange = (newValue) => {
        const formattedDate = {
            date: newValue.getDate().toString(),
            month: newValue.toLocaleString('default', { month: 'long' }),
            year: newValue.getFullYear().toString(),
            option: selectedOption
        };

        archiveQueary(formattedDate)

        onChange(newValue);
    };


    return (
        <div>
            <div className='d-flex justify-content-between mx-3 my-2'>
                <hr className='mt-4 mx-auto' style={{ width: '80%' }} />
                <div className='text-end' style={{ width: '20%' }}>
                    <a href="" className='bg-red p-1 p-2 rounded text-decoration-none'>পুরনো সাইট দেখতে ক্লিক করুন</a>
                </div>
            </div>

            <div className='row w-100 mx-auto'>
                <form onSubmit={handleSubmit} className='col-md-9 row'>
                    <div className="mb-3 col-md-2">

                        <Form.Select
                            required
                            id="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            <option value="">দিন</option>
                            {generateDate(daysInMonth(monthOptions.indexOf(selectedMonth) + 1, selectedYear)).map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="mb-3 col-md-3">

                        <Form.Select
                            required
                            id="month"
                            value={selectedMonth}
                            onChange={handleMonthChange}
                        >
                            <option value=""> মাস</option>
                            {monthOptions.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="mb-3 col-md-2">

                        <Form.Select
                            required
                            id="year"
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            <option  >বছর</option>
                            {generateYearOptions(5).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="mb-3 col-md-3">

                        <Form.Select
                            required
                            id="option"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="online">অনলাইন সংস্করণ</option>
                            <option value="print">প্রিন্ট সংস্করণ</option>
                        </Form.Select>
                    </div>

                    <div className="mb-3 col-md-2">
                        <button type="সাবমিট" className="btn btn-danger rounded-1 w-100">
                            Submit
                        </button>
                    </div>

                </form>


                <div className='col-md-3'>
                    <Calendar className="w-100" onChange={handleCalenderDateChange} value={value} />


                </div>

            </div>
        </div>
    );
};

export default Archive;
