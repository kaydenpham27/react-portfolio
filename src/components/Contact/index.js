import { useRef } from 'react';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_nnzrkgy','template_toes3b8',refForm.current,'QGZECpisK3IMqFDh3')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ', 'm', 'e']} 
                        idx={15} />
                    </h1>
                    <p>
                        I am interested in freelancer opportunities - especially
                        ambitious or large projects. However, if you have other
                        request or question, don't hesitate to contact me using 
                        form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                    type="text"
                                    name="name"
                                    placeholder="Name" required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="Email" required
                                    />
                                </li>
                                <li>
                                    <input placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                    />
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message'
                                    name='message'
                                    required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit"
                                    className='flat-button'
                                    value ="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Trung Kien Pham,
                    <br/>
                    60 Blamey Street, Kelvin Grove
                    <br/>
                    QLD 4059, Australia
                    <br/>
                    <span>
                        kienpt5kkd@gmail.com
                    </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-27.452815976153868, 153.0154844112005]} zoom={13}>
                    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-27.452815976153868, 153.0154844112005]}>
                        <Popup>Kien is here, come over for a cup of coffee :D</Popup>
                    </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact