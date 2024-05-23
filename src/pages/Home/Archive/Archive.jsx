import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { callApi } from './../../../utils/functions';
import { Link } from 'react-router-dom';
import EduSportsEconomy from '../../News/EduSportsEconomy';
import SkeletonLoader from '../../../components/Utilites/SkeletonLoader';

const Archive = () => {
    const [news, setNews] = useState([])
    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedOption, setSelectedOption] = useState('online');
    const [loader, setLoader] = useState(false)






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
    const query = `/api/articles/date/${selectedYear}-${selectedMonth}-${selectedDate}`
    const handleSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        const res = await callApi('get', query)
        setNews(res.data)
        setLoader(false)
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


    const handleCalenderDateChange = async (newValue) => {
        setLoader(true);
        const formattedDate = {
            date: newValue.getDate().toString(),
            month: (newValue.getMonth() + 1).toString(),
            year: newValue.getFullYear().toString(),
            option: selectedOption
        };
        onChange(newValue);
        const query = `/api/articles/date/${formattedDate.year}-${formattedDate.month}-${formattedDate.date}`;

        try {
            const res = await callApi('get', query);
            setNews(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoader(false);
        }
    };



    return (
        <div>
            <div className='d-flex justify-content-between mx-3 my-2 align-items-center gap-3'>
                <div className='border-1 border-bottom border-secondary-subtle w-100'>

                </div>
                <div>
                    <a href="/" className='text-nowrap bg-red p-1 p-2 rounded text-decoration-none text-white '>পুরনো সাইট দেখতে ক্লিক করুন</a>
                </div>
            </div>

            <div className='row w-100 mx-auto'>
                <div className='col-md-9 '>
                    <form onSubmit={handleSubmit} className='row mx-auto '>
                        <div className="mb-3 col-md-2">

                            <Form.Select
                                className='text-center text-md-start'
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
                                className='text-center text-md-start'
                                required
                                id="month"
                                value={selectedMonth}
                                onChange={handleMonthChange}
                            >
                                <option value=""> মাস</option>
                                {monthOptions.map((month, index) => (
                                    <option key={month} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>

                        <div className="mb-3 col-md-2">

                            <Form.Select
                                className='text-center text-md-start'
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
                                className='text-center text-md-start'
                                required
                                id="option"
                                value={selectedOption}
                                onChange={handleOptionChange}
                            >
                                <option value="online" selected>অনলাইন সংস্করণ</option>
                                <option value="print" disabled>প্রিন্ট সংস্করণ</option>
                            </Form.Select>
                        </div>

                        <div className="mb-3 col-md-2">
                            <button disabled={loader} type="সাবমিট" className="btn btn-danger rounded-1 w-100">
                                {loader ? 'Please wait' : "Search"}
                            </button>
                        </div>
                        {
                            loader ? <><SkeletonLoader /></> : news.length == 0 ? <>

                                <div><h5>No Data</h5></div>
                            </> : news.map((news) => (
                                <div key={news.id} className="col-md-6 m-auto my-1 ">

                                    <Link to={`/news/${news.slug}`} className="text-dark text-decoration-none ">
                                        <div className="d-flex rounded newscard m-0 gap-2 " >
                                            <div>
                                                <h5 className="mb-0">{news.title}</h5>
                                                <p style={{ color: '#0004f4', fontSize: '14px' }} className='mb-0'><i className="fas fa-clock me-1 opacity-75"></i>
                                                    {news.date}</p>
                                            </div>
                                            <div>
                                                <img
                                                    src={news.banner}
                                                    alt=""
                                                    className="common-image"
                                                />

                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }
                    </form>

                </div>
                <div className='col-md-3'>
                    <Calendar className="w-100" onChange={handleCalenderDateChange} value={value} />
                    <br />
                    <div className='text-center'>  <img src="https://backend.newsnow24.com/storage/photos/shares/Ads/kishwan.gif" alt="" className='img-fluid' /></div>


                </div>


                <EduSportsEconomy />

            </div>
        </div>
    );
};

export default Archive;
