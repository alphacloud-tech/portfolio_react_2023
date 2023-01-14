import React from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from './Cards/Card';
import Resume from './resume.pdf'


const Services = () => {
    return (
       <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam sequi cupiditate <br />
                    quibusdam aperiam cupiditate molestias voluptatum beatae, impedit placeat tenetur?
                </span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>

                </div>
            </div>

            {/* right side */}
            <div className="cards">
                {/* first card */}
                <div style={{left: '14rem' }}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {'Figma, Photoshop, CorelDraw'}
                    />
                </div>

                {/* second card */}
                <div style={{left: '-4rem', top: '12rem' }}>
                    <Card
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {'HTML, CSS, JavaScript'}
                    />
                </div>

                {/* third card */}
                <div style={{left: '12rem', top: '19rem' }}>
                    <Card
                        emoji = {Humble}
                        heading = {'Backend'}
                        detail = {'PHP, NODE JS, PYTHON'}
                    />
                </div>

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
       </div>
    );
};

export default Services;
