import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import  './index.scss';
import React, { useEffect, useState } from "react";
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['T','r','u','n','g',' ','K','i','e','n'];
    const jobArray = ['S','o','f','t','w','a','r','e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br/> 
                <span className={`${letterClass} _13`}>I,</span>
                <span className={`${letterClass} _14`}>'m </span>
                &nbsp;
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={18} />
                </h1>
                <h2>Frontend Developer/ C++ and Python Expert/ QUT Undergraduate </h2>
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type= "pacman"/>
        </>
    );
}

export default Home