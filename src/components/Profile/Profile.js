
import React from 'react';
import './profile.css'
import profilePic from './../../assets/Akshay.png'

const  Profile=()=> {
    return (
        <div className="profile row">
            <div className="profile-pic col-sm-6">
                <img src={profilePic} width="300px" height="380x" />
            </div>
            <div className="bio-data col-sm-6">
                Akshay Parmar
            </div>
        </div>
    )
}

export default Profile