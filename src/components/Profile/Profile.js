
import React from 'react';
import './profile.css'

const Profile = () => {
    return (
        <div className="profile row">
            <div className="profile-pic col-sm-6">
                {'<img src={profilePic} width="300px" height="380x" />'}
            </div>
            <div className="bio-data col-sm-6">
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