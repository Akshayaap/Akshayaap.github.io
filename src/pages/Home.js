
import React from 'react';
import "./home.css"
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {

    return (

        <div className='home'>
            <div className='profile'>

                <img src={require('../assets/images/profile.jpg')} alt="profile" className='profile-pic' />

                <div className='bio'>
                    <div className='name'>AKSHAY PARMAR</div>
                    <div className='about'>A Different kind of Engineer</div>
                </div>
            </div>
            <div className='horizontal-line'>

            </div>
            <div className='long-desc'>
                <div className='my-name-is'>
                    MY NAME IS AKSHAY PARMAR
                </div>
                <p>
                    ...and I refused to build boring Apps.
                </p>
                <div className='long-desc'>
                    There are millions of people out there that are perfectly content with building
                    softwares for a variety of businesses and corporations. That's cool, but it's not
                    really for me. I didn't learn how to code to build boring things, I learned how to
                    code to build killer programs for interesting people.
                </div>
            </div>


        </div>

    );
}

export default Home;