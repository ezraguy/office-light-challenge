import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/count-down.scss';
const CountDown = () => {
    const [month, setMonth] = useState('');
    const [nextDateDay, setNextDateDay] = useState('');
    const [nextDateYear, setNextDateYear] = useState('');

    const [months] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);
    const [days, setDays] = useState(29)
    const [hours, setHours] = useState(59)
    const [minutes, setMinutes] = useState(59)
    const [seconds, setSeconds] = useState(59)

    useEffect(() => {
        const date = new Date();
        const nextMonthDate = new Date();
        nextMonthDate.setMonth(date.getMonth() + 1)
        let monthNumber = nextMonthDate.getMonth();
        if (monthNumber > 12) {
            monthNumber = monthNumber - 12;
        }
        setMonth(months[monthNumber]);
        setNextDateYear(nextMonthDate.getFullYear());
        setNextDateDay(nextMonthDate.getDate());
        let day = 29;
        let hour = 23;
        let min = 59;
        let sec = 59
        let countInterval = setInterval(() => {
            sec = sec - 1;
            if (sec === 0) {
                sec = 59;
                min = min - 1;
                if (min === 0) {
                    min = 59
                    hour = hour - 1;
                    if (hours === 0) {
                        hour = 23
                        day = day - 1;

                    }
                }
            }
            setDays(day);
            setHours(hour);
            setMinutes(min);
            setSeconds(sec);
        }, 1200);
        return () => {
            clearInterval(countInterval);
        }
    }, [])


    return (
        <div className="countdown">
            <div className="date-wrap">

                <p className="coming-date">COMING <span>
                    {nextDateDay} {month} {nextDateYear}</span></p>
            </div>
            <div className="count-down">

                <div className="counter">
                    <div className="days" data-aos="fade-down" data-aos-delay="100">
                        <p>{days} </p>
                        <span>Days</span>
                    </div>
                    <div className="hours" data-aos="fade-down" data-aos-delay="200" >
                        <p>{hours}  </p>
                        <span>Hours</span>
                    </div>
                    <div className="minutes" data-aos="fade-down" data-aos-delay="300">                            <p>{minutes}</p>
                        <span>Minutes</span>
                    </div>
                    <div className="seconds" data-aos="fade-down" data-aos-delay="400">                            <p>{seconds}   </p>
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="get-started">
                    <Link className="get-started-btn" to='/sign-up'>Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default CountDown;