import React from 'react';
import { Link } from 'react-router-dom';
import headerBackground from '../images/home/bg-pattern-header.svg'
import mainPattern from '../images/home/illustration-charts.svg'
import '../scss/main.scss';
import ComingSoon from './coming-soon';


const Main = () => {
    return (
        <React.Fragment>

            <div className="main">
                <img src={headerBackground} className="headerBackgroundImg" alt="" />

                <div className="main-wrap">
                    <div className="main-content" data-aos="fade-right" data-aos-delay="500">
                        <div>
                            <p className="main-title">A simple solution to complex tasks is coming soon</p>
                        </div>
                        <div >
                            <p className="main-text"> Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity. </p>
                        </div>
                        <Link to='/sign-up'>
                            <button className="getStarted">

                                Get started
                            </button>
                        </Link>
                    </div>
                    <div className="main-img-wrap" data-aos="fade-left" data-aos-delay="500">
                        <img src={mainPattern} className="main-img" alt="" />
                    </div>
                </div>
            </div>

            <ComingSoon />
        </React.Fragment>
    );
}

export default Main;