import React, { useEffect, useState } from 'react';
import api from '../../api'

export default function ProfileItem() {
    const [profile, setProfile] = useState({});
    function getProfileInfo(){
        api.getProfile()
        .then((response) => {
            console.log(response.data);
            setProfile(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getProfileInfo();
    },[])
return (
<div className="container emp-profile">
                <div className="row">
                    <div className="col">
                        <div className="profile-head">
                                    <h5>
                                        {profile.first_name + ' ' + profile.last_name}
                                    </h5>
                                    <h6>
                                        {profile.department.name} Department
                                    </h6>
                                    <p className="proile-rating">RANK : <span>{profile.rank}</span></p>
                                    <hr/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="profile-edit-btn" name="btnAddMore">Edit Profile</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.first_name + ' ' + profile.last_name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.phone_nb}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Birthday</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.date_of_birth}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Manager</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{profile.manager?profile.manager.first_name+" "+profile.manager.last_name:""}</p>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    )
}

