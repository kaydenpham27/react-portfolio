import './index.scss';
import LogoS from '../../../assets/images/LCS_6031.jpg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.timeline().to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })
        gsap.fromTo(
            solidLogoRef.current,{
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 2,
                duration: 2,
            }
        )
    }, [])

    return(
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="K" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
            <g
                className="svg-container"
                transform="translate(0 457) scale(.1 -.1)"
                fill="none"
            >
            </g>
            </svg>
        </div>
    )
}

export default Logo