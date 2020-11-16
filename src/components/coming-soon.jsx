import React, { useState, useEffect } from 'react';
import '../scss/coming-soon.scss';
import '../scss/pricing.scss';

const ComingSoon = () => {
    const [month, setMonth] = useState('');
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
        setMonth(months[monthNumber])
        let day = 29;
        let hour = 23;
        let min = 59;
        let sec = 59
        setInterval(() => {
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

    }, [])






    const [cards] = useState([
        { id: 1, name: 'Basic', price: 'Free', subscription: 'Up to 5 users for free', desc: 'basic document collaboration', storage: '2 GB storage', support: 'Great security and support', background: ' card card-white ', delay: 100 },
        { id: 2, name: 'Pro', price: '$9.99', subscription: 'Per user, billed monthly', desc: 'All essential integrations', storage: '50 GB storage', support: 'More control and insights', background: ' card card-blue', delay: 200 },
        { id: 3, name: 'Ultimate', price: '$19.99', subscription: 'Per user, billed monthly', desc: 'Robust work management', storage: '100 GB storage', support: 'VIP support', background: ' card card-white', delay: 300 }
    ])
    return (
        <div className="coming-soon">
            <div className="pricing">

                {cards.map((card) => {
                    return (
                        <div className={card.background} key={card.id} data-aos="fade-down" data-aos-delay={card.delay} >
                            <div className="">
                                <p className="name">{card.name}</p>
                                <p className="price">{card.price}</p>
                                <p className="subscription">{card.subscription}</p>
                            </div>
                            <div className="desc-wrap">
                                <p className="desc">{card.desc}</p>
                                <p className="storage">{card.storage}</p>
                                <p className="support">{card.support}</p>

                            </div>
                            <button className="card-btn">Try for Free</button>
                        </div>
                    )
                })}
            </div>

            <div className="date-wrap">

                <p className="coming-date">COMING <span>
                    4 {month} 2020</span></p>
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
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>

        </div>
    );
}

export default ComingSoon;