import { faAndroid, faApple, faFacebook, faGithub, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <>
         <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    Hi! I'm Trung Kien Pham, a very talented programmer.
                </p>

                <p> 
                    I'm a very ambitious software engineer looking for a role in
                    established IT company with the opportunity to work with
                    the latest technologies on challenging and diverse projects.
                </p>

                <p>
                    I'm quite confident, naturally curious, and perpetually working on
                    improving my chops problem solving skills.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a 
                    both introverted and extroverted person at the same time,
                    a good son, an E-sports lovers, and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faFacebook} color="#3b5998" />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faApple} color="#ffffff" />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faAndroid} color="#a4c639" />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#c0c0c0" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>

    )
}

export default About;