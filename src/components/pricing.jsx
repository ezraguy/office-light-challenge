import React, { useState } from 'react';
import '../scss/pricing.scss';
import pricingBG from '../images/home/bg-pattern-pricing.svg'
const Pricing = () => {
    const [cards] = useState([
        { id: 1, name: 'Basic', price: 'Free', subscription: 'Up to 5 users for free', desc: 'basic document collaboration', storage: '2 GB storage', support: 'Great security and support', background: ' card card-white' },
        { id: 2, name: 'Pro', price: '$9.99', subscription: 'Per user, billed monthly', desc: 'All essential integrations', storage: '50 GB storage', support: 'More control and insights', background: ' card card-blue' },
        { id: 3, name: 'Ultimate', price: '$19.99', subscription: 'Per user, billed monthly', desc: 'Robust work management', storage: '100 GB storage', support: 'VIP support', background: ' card card-white' }
    ])
    return (
        <div className="pricing">
            {cards.map((card) => {
                return (
                    <div className={card.background} key={card.id}>
                        <p className="name">{card.name}</p>
                        <p className="price">{card.price}</p>
                        <span className="subscription">{card.subscription}</span>
                        <span className="desc">{card.desc}</span>
                        <span className="storage">{card.storage}</span>
                        <span className="support">{card.support}</span>
                        {card.id === 2 &&
                            <img src={pricingBG} alt="" className="pricingBg" />}
                    </div>
                )
            })}
        </div>
    );
}

export default Pricing;