import React, { useEffect, useState } from 'react';
import SideBar from '../components/navigation/SideBar';
import Navbar from '../components/navigation/Navbar';
import api from '../api';
import ProfileItem from '../components/users/ProfileItem';

export default function Profile() {

    return (
<div id="wrapper">
    <SideBar />
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <Navbar />
            <div className="row" style={{ marginLeft:10, marginRight:10 }}>
                <div className="col">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-my-primary">User Profile</h6>
                        </div>
                        <div className="card-body">
                            <ProfileItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
