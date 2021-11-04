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
<div class="container emp-profile">
                <div class="row">
                    {/* <div class="col">
                        <div class="profile-head">
                                    <h5>
                                        {profile.first_name + ' ' + profile.last_name}
                                    </h5>
                                    <h6>
                                        {profile.department.name} Department
                                    </h6>
                                    <p class="proile-rating">RANK : <span>{profile.rank}</span></p>
                                    <hr/>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="profile-edit-btn" name="btnAddMore">Edit Profile</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{profile.first_name + ' ' + profile.last_name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{profile.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{profile.phone_nb}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div class="col-md-6">
                                    <p>123 456 7890</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Profession</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Web Developer and Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>         
        </div>
    )
}

