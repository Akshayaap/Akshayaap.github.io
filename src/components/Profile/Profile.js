
import React from 'react';
import './profile.css'
import profilePic from './../../assets/profile.jpeg';

const Profile = () => {
    return (
        <div className="profile container-xs row">
            <div className="profile-pic col-xs-12 col-lg-6">
                <img src={profilePic} width="300px" height="300x" />
            </div>
            <div className="bio-data col-xs-12 col-lg-6">
                <div className="name">
                    Akshay Parmar
                </div>
                <div className="info" >                  
                    Master of Engineering
                    <br />
                    Software Engineer
                    <br />
                    Web Developer

                </div>
            </div>
        </div>
    )
}

export default Profile