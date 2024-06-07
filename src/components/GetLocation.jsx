import React, { useEffect, useState } from 'react';
import { callApi } from './../utils/functions';

const GetLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          try {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const res = await callApi(
              'Get',
              `/api/weather?lon=${longitude}&lat=${latitude}`
            );
            setData(res);
          } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data.');
          }
        }, showError);
      } else {
        console.log('Geolocation is not supported by this browser.');
        // alert('Geolocation is not supported by this browser.');
      }
    };

    fetchData();
  }, []);

  const showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        console.log('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        console.log('An unknown error occurred.');
        break;
      default:
        console.log('An unknown error occurred.');
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <p className="mb-0 d-flex gap-2 justify-content-center ">
            <i className="fa-solid fa-cloud"></i>
            {data.main.temp_celsius}°C
          </p>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GetLocation;
