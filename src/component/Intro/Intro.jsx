import React from 'react';
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import adams from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

import Floating from './FloatingDiv/Floating';


function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am </span>
                    <span>Salaudeen Adams </span>
                    <span>
                        Backend Developer with high level
                        of experience in web development, producing
                        Quality work
                    </span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className="i-icons">
                    <a href="">
                        <img src={Github} alt="Github" srcset="" />
                    </a>
                    <a href="">
                        <img src={Linkedin} alt="Github" srcset="" />
                    </a>
                    <a href="">
                        <img src={Instagram} alt="Github" srcset="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="vector1" />
                <img src={vector2} alt="vector2" />
                <img src={adams} alt="boy" />
                <img src={glassesimoji} alt="glassesimoji" />
                <div style={{top:'-4%', left: '68%'}}>
                    <Floating
                        image={crown}
                        txt1 = "Web"
                        txt2 = "Developer"
                    />
                </div>
                <div style={{top:'18rem', left: '0rem'}}>
                    <Floating
                        image={thumbup}
                        txt1 = "Best Design"
                        txt2 = "Award"
                    />
                </div>
                {/* this are the blur divs */}

                <div className="blur" style={{background: "rgb(238 210 255)"}}>

                </div>

                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: '17rem',
                        width: '21rem',
                        height: '11rem',
                        left: '-9rem',
                    }}>

                </div>
            </div>
        </div>
    );
}

export default Intro;
