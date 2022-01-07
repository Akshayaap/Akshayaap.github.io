import React from 'react';
import ProfilePic from './../../../assets/images/profile.jpeg';
import './profile.css';

const Profile = () => {
    return (
        <div>
            
        <div className='profile-pic'>
            <img src={ProfilePic} alt="profile" className="profile-pic" />
        </div>
        <div className='profile-details'>
            <h3>Akshay Parmar</h3>
            <h4>M.Tech Student</h4>
            <h4>Software Engineer</h4>

        </div>
        </div>

    );
}

export default Profile;