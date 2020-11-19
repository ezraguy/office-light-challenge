import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/coming-soon.scss';
import CountDown from './count-down';
import Aos from 'aos';
const ComingSoon = () => {

    const [cards] = useState([
        { id: 1, name: 'Basic', price: 'Free', subscription: 'Up to 5 users for free', desc: 'basic document collaboration', storage: '2 GB storage', support: 'Great security and support', background: ' card card-white ', delay: 100 },
        { id: 2, name: 'Pro', price: '$9.99', subscription: 'Per user, billed monthly', desc: 'All essential integrations', storage: '50 GB storage', support: 'More control and insights', background: ' card card-blue', delay: 200 },
        { id: 3, name: 'Ultimate', price: '$19.99', subscription: 'Per user, billed monthly', desc: 'Robust work management', storage: '100 GB storage', support: 'VIP support', background: ' card card-white', delay: 300 }
    ])
    return (


        <div className="coming-soon">
            <div className="pricing"  >

                {cards.map((card) => {
                    return (
                        <div className={card.background} key={card.id} data-aos="fade-down" data-aos-delay={card.delay}  >
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
                            <Link className="card-btn" to="/sign-up">Try for Free</Link>
                        </div>
                    )
                })}
            </div>
            <div className="count-down-main">

                <CountDown />
            </div>
            <div className="attribution">
                <div class="attribution">Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by <a href="https://github.com/ezraguy">Guy Ezra</a>.</div>
            </div>
        </div>
    );
}

export default ComingSoon;