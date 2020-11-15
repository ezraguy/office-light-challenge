import React, { useState, useEffect } from 'react';
import '../scss/coming-soon.scss';
import '../scss/pricing.scss';

const ComingSoon = () => {
    const [month, setMonth] = useState('');
    const [months] = useState(["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);

    useEffect(() => {
        const date = new Date();
        const futureDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDay());
        console.log(futureDate);
        const monthNumber = date.getMonth();
        let nextMonth = months[monthNumber + 1]
        setMonth(nextMonth)
        console.log(Math.floor((futureDate - date) / (1000 * 60 * 60 * 24)));


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



            <div className="count-down">
                <p className="coming-date">COMING <span>
                    4 {month} 2020</span></p>
                <div className="counter">
                    <div className="days" data-aos="fade-down" data-aos-delay="100">
                        <p>12   <span>Days</span></p>

                    </div>
                    <div className="hours" data-aos="fade-down" data-aos-delay="200" >
                        <p>12   <span>Hours</span></p>
                    </div>
                    <div className="minutes" data-aos="fade-down" data-aos-delay="300">                            <p>12   <span>Minutes</span></p>
                    </div>
                    <div className="seconds" data-aos="fade-down" data-aos-delay="400">                            <p>12   <span>Seconds</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ComingSoon;