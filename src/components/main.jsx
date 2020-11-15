import React from 'react';
import logo from '../images/share/logo.svg';
import headerBackground from '../images/home/bg-pattern-header.svg'
import mainPattern from '../images/home/illustration-charts.svg'
import '../scss/main.scss';
const Main = () => {
    return (
        <div className="main">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />

                </div>
            </div>

            <img src={headerBackground} className="headerBackgroundImg" alt="" />

            <div className="main-wrap">


                <div className="main-content" data-aos="fade-right" data-aos-delay="500">
                    <div >
                        <p className="main-title">A simple solution to complex tasks is coming soon</p>
                    </div>
                    <div >
                        <p className="main-text"> Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity. </p>
                    </div>
                    <button className="ui button getStarted">Get started</button>
                </div>
                <div className="main-img-wrap" data-aos="fade-left" data-aos-delay="500">
                    <img src={mainPattern} className="main-img" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;